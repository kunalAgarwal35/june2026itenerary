"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Calendar, Plane, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/plan/${slug}`;
  const items = [
    { href: `${base}`, label: "Days", icon: LayoutGrid, exact: true },
    { href: `${base}/calendar`, label: "Calendar", icon: Calendar },
    { href: `${base}/overview`, label: "Overview", icon: Plane },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pointer-events-none pb-safe">
      <div className="max-w-md mx-auto px-3 pointer-events-auto">
        <div className="card-soft !rounded-2xl !p-1.5 flex items-center gap-1 backdrop-blur-lg bg-white/85">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-zinc-100 text-zinc-700"
            aria-label="Back to plans"
          >
            <ArrowLeft size={18} />
          </Link>
          <div className="h-6 w-px bg-border mx-0.5" />
          {items.map((item) => {
            const Icon = item.icon;
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 h-10 rounded-xl transition-colors text-xs font-medium",
                  active
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                )}
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
