"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function NavLink({
  href,
  children,
  name,
}: {
  href: string;
  children: React.ReactNode;
  name: string;
}) {
  const path = usePathname();
  return (
    <li className="">
      <Link
        href={href}
        className={cn(
          "flex h-10 w-full flex-row items-center justify-center space-x-2 rounded-lg px-2 text-foreground",
          path === href && "bg-primary",
        )}
      >
        <div className="flex w-16 justify-center">{children}</div>
        <div className="w-full flex-1 overflow-hidden break-words text-start font-bold">
          {name}
        </div>
      </Link>
    </li>
  );
}
