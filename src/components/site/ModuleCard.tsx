import { Link } from "@tanstack/react-router";
import { ChevronRight, type LucideIcon } from "lucide-react";

export function ModuleCard({
  title,
  category,
  icon: Icon,
  iconCls,
  text,
  href,
}: {
  title: string;
  category: string;
  icon: LucideIcon;
  iconCls: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
        {category}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className={`grid size-10 shrink-0 place-items-center rounded-lg ${iconCls}`}>
          <Icon className="size-5" />
        </div>
        <h3 className="text-[15px] font-semibold leading-tight text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <span className="mt-auto inline-flex min-h-[44px] items-center gap-0.5 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-600 opacity-70 transition-opacity group-hover:opacity-100">
        View <ChevronRight className="size-3" />
      </span>
    </Link>
  );
}
