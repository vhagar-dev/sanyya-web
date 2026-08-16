import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { stages } from "@/data/stages";

export function StageRail() {
  const [active, setActive] = useState(stages[0]!.id);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = stages[0]!.id;

      for (const s of stages) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = s.id;
      }

      // Snap to the last stage when the page bottom is reached.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = stages[stages.length - 1]!.id;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Product flow"
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden w-52 -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto relative space-y-6">
        <div aria-hidden className="absolute left-[0.6875rem] top-2 bottom-2 w-px bg-border" />
        {stages.map((s, i) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="relative">
              <a href={`#${s.id}`} className="group flex items-center gap-3">
                <span
                  className={cn(
                    "z-10 grid size-6 shrink-0 place-items-center rounded-full border tabular-nums text-[10px] transition-all",
                    isActive
                      ? "border-brand bg-brand/[0.08] text-brand"
                      : "border-border bg-background text-muted-foreground group-hover:border-foreground/30",
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "max-w-[11rem] text-xs leading-tight transition-colors",
                    isActive ? "font-medium text-brand" : "text-muted-foreground",
                  )}
                >
                  {s.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
