'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Image as ImageIcon, Info } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: ImageIcon,
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
    },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {routes.map((route) => {
        const Icon = route.icon;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
} 