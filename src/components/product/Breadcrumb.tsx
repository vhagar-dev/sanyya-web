import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto flex max-w-6xl items-center gap-1.5 overflow-hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5 truncate">
          {item.href ? (
            <Link to={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span className="truncate text-foreground">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="size-3 shrink-0" />}
        </span>
      ))}
    </nav>
  );
}
