"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@semicolon/ui/avatar";
import { Button, ButtonProps } from "@semicolon/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@semicolon/ui/dropdown-menu";
import { cn } from "@semicolon/ui/utils";
import { Ellipsis, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function ProfileIndicator({
  className,
  username,
  name,
  image,
  ...props
}: ButtonProps & {
  username: string;
  name: string;
  image?: string | null;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "flex aspect-square h-auto min-h-0 min-w-full flex-row justify-center rounded-full p-0 lg:aspect-auto lg:min-h-20 lg:justify-between lg:px-3",
            className,
          )}
          {...props}
        >
          <div className="flex flex-row gap-3">
            <Avatar className="size-11">
              {image && <AvatarImage src={image} />}
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="hidden flex-col items-start lg:flex">
              <p className="text-base font-extrabold">{name}</p>
              <p className="text-muted-foreground text-base">@{username}</p>
            </div>
          </div>
          <Ellipsis className="hidden lg:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 rounded-3xl px-0 py-4 [&>*]:min-w-40 [&>*]:text-base [&>*]:font-bold">
        <Button
          variant="ghost"
          className="justify-start rounded-none p-6"
          asChild
        >
          <Link href={`/${username}`}>Go to profile</Link>
        </Button>
        <Button
          variant="ghost"
          className="justify-start rounded-none p-6"
          onClick={() => signOut()}
        >
          Log out {`@${username}`}
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
