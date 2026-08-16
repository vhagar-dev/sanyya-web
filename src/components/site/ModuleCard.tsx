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
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-[0_1px_2px_hsl(220_43%_11%/0.04)] transition-all duration-300 md:hover:border-[hsl(269_80%_57%/0.35)]"
    >
      <div className="tabular-nums text-[10px] text-muted-foreground/70">{category}</div>
      <div className="mt-3 flex items-center gap-3">
        <div className={`grid size-10 shrink-0 place-items-center rounded-lg ${iconCls}`}>
          <Icon className="size-5" />
        </div>
        <h3 className="text-[15px] font-semibold leading-tight text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <span className="mt-auto inline-flex min-h-[44px] items-center gap-0.5 pt-4 tabular-nums text-[10px] text-violet-700 opacity-70 transition-opacity group-hover:opacity-100">
        View <ChevronRight className="size-3" />
      </span>
    </Link>
  );
}
