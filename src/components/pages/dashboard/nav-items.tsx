"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { constants } from "fs/promises";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    {
      label: "Currículos",
      icons: Newspaper,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações da conta",
      icons: SquareUser,
      path: "/dashboard/account",
    },
  ];
  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path);
        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icons size={16} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
