import { router, publicProcedure, userProcedure } from "../trpc";
import {
  PostResolvedSchema,
  ShortToUUID,
  UsernameSchema,
} from "@semicolon/api/schema";
import { db } from "@semicolon/db";
import { TRPCError } from "@trpc/server";
import { BlobNotFoundError, head } from "@vercel/blob";
import { Expression, NotNull, SqlBool } from "kysely";
import { sql } from "kysely";
import _ from "lodash";
import { z } from "zod";

export const post = router({
  new: userProcedure
    .meta({ openapi: { method: "POST", path: "/posts/new" } })
    .input(
      z
        .object({
          content: z.string().optional(),
          to: ShortToUUID.optional(),
          media: z.array(z.string().url()).max(4),
        })
        .refine(
          ({ content, media }) => media.length > 0 || content !== undefined,
          { message: "Post must either contain content or media" },
        ),
    )
    .output(PostResolvedSchema)
    .mutation(async ({ ctx: { user }, input: { content, to, media } }) => {
      try {
        await Promise.all(media.map(async (blobUrl) => await head(blobUrl)));
      } catch (error) {
        if (error instanceof BlobNotFoundError) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "External media URLs are forbidden",
          });
        } else {
          throw error;
        }
      }

      const post = await db.post.create({
        data: {
          userId: user.id,
          parentId: to,
          media,
          content,
        },
        include: {
          user: true,
          parent: {
            include: {
              user: true,
            },
          },
          _count: {
            select: {
              likes: true,
              children: true,
            },
          },
        },
      });

      return {
        ...post,
        name: user.name,
        to: post.parent?.user.username ?? null,
        username: user.username,
        verified: user.verified,
        avatar: user.image,
        likeCount: post._count.likes,
        replyCount: post._count.children,
      };
    }),
  search: publicProcedure
    .meta({ openapi: { method: "GET", path: "/posts/search" } })
    .input(
      z
        .object({
          query: z.string().optional(),
          since: z.date().optional(),
          until: z.date().optional(),
          from: UsernameSchema.optional(),
          to: UsernameSchema.optional(),
          reply: z.boolean().optional(),
          minLikes: z.number().optional(),
          minReplies: z.number().optional(),
          sortBy: z
            .union([z.literal("recency"), z.literal("relevancy")])
            .default("recency"),
          cursor: z.string().uuid().optional(),
          maxResults: z.number().min(1).max(100).default(50),
        })
        .transform((obj) => ({
          ...obj,
          ...(obj.query && { query: obj.query.split(/\s+/).join(" & ") }),
        })),
    )
    .output(
      z.object({
        results: z.array(PostResolvedSchema),
        nextCursor: z.string().uuid().optional(),
      }),
    )
    .query(
      async ({
        input: {
          query,
          since,
          until,
          reply,
          from,
          to,
          minLikes,
          minReplies,
          sortBy,
          cursor,
          maxResults,
        },
      }) => {
        // We need to do raw queries here, because Prisma can't filter on aggregrate counts
        // https://github.com/prisma/prisma/issues/6570

        let dbQuery = db.$kysely
          .selectFrom("Post")
          .leftJoin(
            (eb) =>
              eb
                .selectFrom("User")
                .select([
                  "User.id",
                  "User.name",
                  "User.username",
                  "User.image",
                  "User.verified",
                ])
                .as("Author"),
            (join) => join.onRef("Post.userId", "=", "Author.id"),
          )
          .leftJoin(
            (eb) =>
              eb
                .selectFrom("_Like")
                .select((eb) => [
                  "_Like.A",
                  eb.cast<number>(eb.fn.countAll(), "integer").as("count"),
                ])
                .groupBy("_Like.A")
                .as("AggrLike"),
            (join) => join.onRef("Post.id", "=", "AggrLike.A"),
          )
          .leftJoin(
            (eb) =>
              eb
                .selectFrom("Post")
                .select((eb) => [
                  "Post.parentId",
                  eb.cast<number>(eb.fn.countAll(), "integer").as("count"),
                ])
                .groupBy("Post.parentId")
                .as("AggrReply"),
            (join) => join.onRef("Post.id", "=", "AggrReply.parentId"),
          )
          .leftJoin("Post as ParentPost", (join) =>
            join.onRef("ParentPost.id", "=", "Post.parentId"),
          )
          .leftJoin("User as ParentAuthor", (join) =>
            join.onRef("ParentAuthor.id", "=", "ParentPost.userId"),
          )
          .select([
            "Post.id",
            "Post.createdAt",
            "Post.userId",
            "Post.content",
            "Post.parentId",
            "Post.media",
            "Post.views",
            "ParentAuthor.username as to",
            "Author.name",
            "Author.username",
            "Author.verified",
            "Author.image as avatar",
            (eb) =>
              eb.fn.coalesce("AggrLike.count", sql<number>`0`).as("likeCount"),
            (eb) =>
              eb.fn
                .coalesce("AggrReply.count", sql<number>`0`)
                .as("replyCount"),
          ])
          .$narrowType<{
            name: NotNull;
            username: NotNull;
            verified: NotNull;
          }>()
          .limit(maxResults + 1);

        const toTsvector = sql`to_tsvector(concat_ws(' ', "Post"."content"))`;
        const toTsquery = sql`to_tsquery(${query})`;
        const tsRank = sql<number>`ts_rank(${toTsvector}, ${toTsquery})`;

        if (query) {
          dbQuery = dbQuery.where(({ eb }) => eb(toTsvector, "@@", toTsquery));
        }

        if (since ?? until) {
          dbQuery = dbQuery.where(({ eb, and }) => {
            const ors: Expression<SqlBool>[] = [];
            if (since) {
              ors.push(eb("Post.createdAt", ">=", since));
            }
            if (until) {
              ors.push(eb("Post.createdAt", "<=", until));
            }
            return and(ors);
          });
        }

        if (reply !== undefined) {
          dbQuery = dbQuery.where(({ eb }) =>
            eb("Post.parentId", reply ? "is not" : "is", null),
          );
        }

        if (from) {
          dbQuery = dbQuery.where(({ eb, and }) =>
            and([
              eb("Author.username", "=", from),
              eb("Author.id", "is not", null),
            ]),
          );
        }

        if (to) {
          dbQuery = dbQuery.where(({ eb, and }) =>
            and([
              eb("ParentAuthor.username", "=", to),
              eb("ParentAuthor.id", "is not", null),
              eb("ParentPost.id", "is not", null),
            ]),
          );
        }

        if (minLikes) {
          dbQuery = dbQuery.where(({ eb }) =>
            eb("AggrLike.count", ">=", minLikes),
          );
        }

        if (minReplies) {
          dbQuery = dbQuery.where(({ eb }) =>
            eb("AggrReply.count", ">=", minReplies),
          );
        }

        switch (sortBy) {
          case "recency":
            dbQuery = dbQuery.orderBy(["Post.createdAt desc", "Post.id asc"]);
            break;
          case "relevancy":
            if (query) {
              dbQuery = dbQuery.orderBy([sql`${tsRank} DESC`, "Post.id asc"]);
            }
            break;
        }

        if (cursor) {
          dbQuery = dbQuery.where(({ eb, and, or }) => {
            const tieBreaker = eb(
              "Post.id",
              ">=",
              eb
                .selectFrom("Post")
                .select("Post.id")
                .where("Post.id", "=", cursor),
            );

            switch (sortBy) {
              case "recency": {
                const cursorQuery = eb
                  .selectFrom("Post")
                  .select("Post.createdAt")
                  .where("Post.id", "=", cursor);

                return or([
                  and([eb("Post.createdAt", "=", cursorQuery), tieBreaker]),
                  eb("Post.createdAt", "<", cursorQuery),
                ]);
              }
              case "relevancy": {
                const cursorQuery = eb
                  .selectFrom("Post")
                  .select(tsRank.as("rank"))
                  .where("Post.id", "=", cursor);

                return or([
                  and([eb(tsRank, "=", cursorQuery), tieBreaker]),
                  eb(tsRank, "<", cursorQuery),
                ]);
              }
            }
          });
        }

        const results = await dbQuery.execute();

        if (results.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "No results matched",
          });
        }

        let nextCursor: typeof cursor | undefined;

        if (results.length > maxResults) {
          const nextItem = results.pop();
          nextCursor = nextItem!.id; // eslint-disable-line @typescript-eslint/no-non-null-assertion
        }

        return {
          results,
          nextCursor,
        };
      },
    ),
  id: publicProcedure
    .meta({ openapi: { method: "GET", path: "/posts/{id}" } })
    .input(z.object({ id: ShortToUUID }))
    .output(PostResolvedSchema)
    .query(async ({ input: { id } }) => {
      const post = await db.post.findUnique({
        where: { id },
        include: {
          parent: {
            include: {
              user: true,
            },
          },
          user: true,
          _count: {
            select: {
              likes: true,
              children: true,
            },
          },
        },
      });

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "The requested post does not exist",
        });
      }

      return {
        ...post,
        name: post.user.name!,
        to: post.parent?.user.username ?? null,
        username: post.user.username!,
        verified: post.user.verified,
        avatar: post.user.image,
        likeCount: post._count.likes,
        replyCount: post._count.children,
      };
    }),
  update: userProcedure
    .meta({ openapi: { method: "POST", path: "/posts/{id}" } })
    .input(
      z.object({
        id: z.string(),
        content: z.string(),
      }),
    )
    .output(PostResolvedSchema)
    .mutation(async ({ ctx: { user }, input: { id, content } }) => {
      const post = await db.post.findUnique({
        select: { userId: true },
        where: {
          id,
        },
      });

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Requested post not found",
        });
      }

      if (post.userId !== user.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not permitted to modify requested post",
        });
      }

      const updated = await db.post.update({
        where: { id: id },
        data: {
          content,
        },
        include: {
          user: true,
          parent: {
            include: {
              user: true,
            },
          },
          _count: {
            select: {
              likes: true,
              children: true,
            },
          },
        },
      });

      return {
        ...updated,
        name: updated.user.name!,
        to: updated.parent?.user.username ?? null,
        username: updated.user.username!,
        verified: updated.user.verified,
        avatar: updated.user.image,
        likeCount: updated._count.likes,
        replyCount: updated._count.children,
      };
    }),
  delete: userProcedure
    .meta({ openapi: { method: "DELETE", path: "/posts/{id}" } })
    .input(
      z.object({
        id: ShortToUUID,
      }),
    )
    .output(PostResolvedSchema)
    .mutation(async ({ ctx: { user }, input: { id } }) => {
      const post = await db.post.findUnique({
        select: { userId: true },
        where: {
          id,
        },
      });

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Requested post not found",
        });
      }

      if (post.userId !== user.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not permitted to modify requested post",
        });
      }

      const deleted = await db.post.delete({
        where: { id },
        include: {
          user: true,
          parent: {
            include: {
              user: true,
            },
          },
          _count: {
            select: {
              likes: true,
              children: true,
            },
          },
        },
      });

      return {
        ...deleted,
        name: deleted.user.name!,
        to: deleted.parent?.user.username ?? null,
        username: deleted.user.username!,
        verified: deleted.user.verified,
        avatar: deleted.user.image,
        likeCount: deleted._count.likes,
        replyCount: deleted._count.children,
      };
    }),
  replies: publicProcedure
    .meta({ openapi: { method: "GET", path: "/posts/{id}/replies" } })
    .input(
      z.object({
        id: ShortToUUID,
        cursor: z.string().uuid().optional(),
        maxResults: z.number().min(1).max(100).default(50),
      }),
    )
    .output(
      z.object({
        replies: z.array(PostResolvedSchema),
        nextCursor: z.string().uuid().optional(),
      }),
    )
    .query(async ({ input: { id, maxResults, cursor } }) => {
      const post = await db.post.findUnique({
        where: { id },
        include: {
          children: {
            ...(cursor && { cursor: { id: cursor } }),
            take: maxResults + 1,
            include: {
              user: true,
              parent: {
                include: {
                  user: true,
                },
              },
              _count: {
                select: {
                  likes: true,
                  children: true,
                },
              },
            },
            orderBy: {
              likes: {
                _count: "desc",
              },
            },
          },
        },
      });

      if (!post) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "The requested post does not exist",
        });
      }

      let nextCursor: typeof cursor | undefined;

      if (post.children.length > maxResults) {
        const nextItem = post.children.pop();
        nextCursor = nextItem!.id;
      }

      return {
        replies: post.children.map((child) => ({
          ...child,
          name: child.user.name!,
          username: child.user.username!,
          to: null,
          verified: child.user.verified,
          avatar: child.user.image,
          likeCount: child._count.likes,
          replyCount: child._count.children,
        })),
        nextCursor,
      };
    }),
});
