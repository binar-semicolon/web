"use client";

import { Button } from "@semicolon/ui/button";
import { Separator } from "@semicolon/ui/separator";
import { cn } from "@semicolon/ui/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ResizeObserver from "rc-resize-observer";
import React, { useCallback, useEffect, useRef, useState } from "react";

export function TabsLink({
  children,
  className,
  href,
  ...props
}: Parameters<typeof Link>[0]) {
  const validateHref = useCallback(() => {
    if (typeof href === "string") {
      if (!href.startsWith("/")) {
        throw Error("Tabs must link to an absolute URL");
      }
      return href;
    }

    if (!href.pathname) {
      throw Error("UrlObject did not return a valid pathname");
    }

    return href.pathname;
  }, [href]);

  const pathname = usePathname();
  const [resolvedHref, setResolvedHref] = useState(() => validateHref());

  useEffect(() => {
    setResolvedHref(validateHref());
  }, [validateHref]);

  return (
    <Link
      className={cn(
        "hover:bg-accent hover:text-accent-foreground group flex h-14 flex-auto snap-start justify-center px-8 text-base font-bold transition-colors",
        className,
      )}
      href={href}
      {...props}
    >
      <div className="relative flex h-full w-fit flex-col items-center justify-center">
        <p>{children}</p>
        <div
          className={`absolute bottom-0 h-1 w-full min-w-14 rounded-full bg-sky-400 ${resolvedHref === pathname ? "block" : "hidden"}`}
        />
      </div>
    </Link>
  );
}

export function TabsList({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  return (
    <div
      className={cn(
        "bg-background/65 sticky top-0 z-50 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <ResizeObserver
        onResize={(info, elem) => {
          setCanScrollLeft(elem.scrollLeft > 0);
          setCanScrollRight(
            elem.scrollWidth - info.offsetWidth !== elem.scrollLeft,
          );
        }}
      >
        <div
          className={cn(
            "no-scrollbar flex snap-x justify-stretch overflow-x-auto",
            className,
          )}
          onScroll={(e) => {
            setCanScrollLeft(e.currentTarget.scrollLeft > 0);
            setCanScrollRight(
              e.currentTarget.scrollWidth - e.currentTarget.offsetWidth !==
                e.currentTarget.scrollLeft,
            );
          }}
          ref={tabListRef}
          {...props}
        >
          {children}
        </div>
      </ResizeObserver>
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full opacity-50 hover:opacity-90",
          canScrollLeft ? "flex" : "hidden",
        )}
        onClick={() =>
          tabListRef.current?.scrollBy({
            left: -tabListRef.current.offsetWidth / 2,
            behavior: "smooth",
          })
        }
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full opacity-50 hover:opacity-90",
          canScrollRight ? "flex" : "hidden",
        )}
        onClick={() =>
          tabListRef.current?.scrollBy({
            left: tabListRef.current.offsetWidth / 2,
            behavior: "smooth",
          })
        }
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
      <Separator />
    </div>
  );
}