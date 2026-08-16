import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { stages } from "@/data/stages";

// Keep in sync with the marker geometry below: the track sits on the centre of
// the numbered circles, so its offset is (circle width - track width) / 2.
const TRACK_LEFT = "left-[1.0625rem]";

export function StageRail() {
  const [active, setActive] = useState(stages[0]!.id);
  const [marker, setMarker] = useState<{ top: number; height: number } | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

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

  // Position the sliding marker over whichever item is active. Measured rather
  // than derived from an index so it stays correct when titles wrap to two lines.
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
      <ol className="pointer-events-auto relative space-y-8">
        <div
          aria-hidden
          className={cn("absolute top-3 bottom-3 w-0.5 rounded-full bg-border", TRACK_LEFT)}
        />
        {marker && (
          <div
            aria-hidden
            className={cn(
              "absolute w-0.5 rounded-full bg-brand transition-all duration-300 ease-out motion-reduce:transition-none",
              TRACK_LEFT,
            )}
            style={{ top: marker.top, height: marker.height }}
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
                    "z-10 grid size-9 shrink-0 place-items-center rounded-full border tabular-nums text-[13px] transition-all",
                    isActive
                      ? "border-brand bg-brand/[0.08] font-semibold text-brand"
                      : "border-border bg-background text-muted-foreground group-hover:border-foreground/30",
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "max-w-[12.5rem] text-sm leading-snug transition-colors",
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
