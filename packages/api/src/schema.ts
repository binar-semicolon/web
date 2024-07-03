import { PostSchema } from "@semicolon/db/zod";
import isAlphanumeric from "validator/es/lib/isAlphanumeric";
import { z } from "zod";

export const UsernameSchema = z
  .string({ required_error: "Username is required" })
  .refine((arg) => isAlphanumeric(arg, undefined, { ignore: "-_." }), {
    message:
      "Username must only contain letters, numbers, periods, hyphens or dashes",
  });

export const PostResolvedSchema = PostSchema.merge(
  z.object({
    name: z.string(),
    username: z.string(),
    avatar: z.string().nullable(),
    likeCount: z.number(),
    replyCount: z.number(),
  }),
);

export type PostResolved = z.infer<typeof PostResolvedSchema>;
