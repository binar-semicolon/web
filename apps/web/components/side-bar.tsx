import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { ProfileIndicator } from "./profile-indicator";
import { Button } from "@semicolon/ui/button";
import { cn } from "@semicolon/ui/utils";
import {
  Bell,
  CalendarPlus,
  CircleUser,
  Crown,
  Home,
  Mail,
  OctagonX,
  Search,
  SquarePen,
} from "lucide-react";
import React from "react";

export function SideBar({
  className,
  username,
  name,
  image,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  username: string;
  name: string;
  image?: string | null;
}) {
  return (
    <div
      className={cn(
        "sticky top-0 hidden h-screen max-w-[300px] flex-col justify-between p-2 py-3 min-[500px]:flex lg:w-full lg:py-7 lg:pr-3",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <NavItem href="/home" className="">
          <h2 className="hidden text-[28px] font-bold lg:block">semicolon</h2>
          <h2 className="text-[28px] font-bold text-sky-400">;</h2>
        </NavItem>
        <div className="flex flex-col xl:gap-2">
          <NavItem href="/home" icon={Home} label="Home" />
          <NavItem href="#" icon={Search} label="Explore" />
          <NavItem href="#" icon={Bell} label="Notifications" />
          <NavItem href="#" icon={Mail} label="Messages" />
          <NavItem href="#" icon={CalendarPlus} label="Bookmarks" />
          <NavItem href="#" icon={Crown} label="Communities" />
          <NavItem href="#" icon={CircleUser} label="Profile" />
          <NavItem href="#" icon={OctagonX} label="Sign Out" />
        </div>
        <div className="mt-4 lg:pr-4">
          <Button className="aspect-square h-auto w-full rounded-full lg:aspect-auto lg:min-h-14">
            <span className="hidden text-base font-bold lg:block">Post</span>
            <SquarePen className="lg:hidden" />
          </Button>
        </div>
      </div>
      <ProfileIndicator {...{ username, name, image }} />
    </div>
  );
}
