import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { stages } from "@/data/stages";

export function StageRail() {
  const [active, setActive] = useState(stages[0]!.id);
  const [marker, setMarker] = useState<{ top: number; height: number } | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const reduceMotion = useReducedMotion();

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

  // Measured from the active item rather than derived from its index, so the
  // marker stays aligned when a title wraps to two lines.
  useEffect(() => {
    const measure = () => {
      const index = stages.findIndex((s) => s.id === active);
      const el = itemRefs.current[index];
      if (!el) return;
      setMarker({ top: el.offsetTop, height: el.offsetHeight });
    };

    measure();
    window.addEventListener("resize", measure);
    // Titles can reflow once the webfont swaps in, which shifts item heights.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <nav
      aria-label="Product flow"
      className="pointer-events-none fixed left-8 top-1/2 z-40 hidden w-64 -translate-y-1/2 lg:block"
    >
      {/* The track sits in its own column left of the numbers. It used to run
          through their centres, which showed through the translucent active
          circle as a line across the digit. */}
      <ol className="pointer-events-auto relative space-y-8 pl-7">
        <div aria-hidden className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-border" />
        {marker && (
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 w-0.5 rounded-full bg-brand"
            initial={false}
            animate={{ y: marker.top, height: marker.height }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 420, damping: 38, mass: 0.9 }
            }
          />
        )}
        {stages.map((s, i) => {
          const isActive = active === s.id;
          return (
            <li
              key={s.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative"
            >
              <a href={`#${s.id}`} className="group flex items-center gap-4">
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border tabular-nums text-[13px]",
                    "transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out",
                    "motion-reduce:transition-none",
                    isActive
                      ? "scale-110 border-brand bg-brand font-semibold text-primary-foreground shadow-[0_0_0_5px_var(--brand-halo)]"
                      : "border-border bg-background text-muted-foreground group-hover:border-foreground/30 group-hover:text-foreground",
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "max-w-[10.5rem] text-sm leading-snug transition-colors duration-300",
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
