import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  "Read every request tagged to the lead program",
  "Matched 41 POs to 63 invoices and 58 receipts",
  "Excluded 4 invoices already counted under CMC",
  "Grouped the remainder by vendor and category",
];

const STEP_WIDTHS = ["88%", "76%", "82%", "70%"];

const BREAKDOWN: { label: string; amount: string; note?: number; muted?: boolean; w: string }[] = [
  { label: "Contract research, Charles River", amount: "$846,000", note: 2, w: "58%" },
  {
    label: "Reagents and consumables, Thermo Fisher and Bio-Rad",
    amount: "$391,400",
    note: 3,
    w: "72%",
  },
  { label: "Outside consulting", amount: "$142,500", w: "38%" },
  { label: "Everything else", amount: "$82,900", muted: true, w: "30%" },
];

const SOURCES = [
  "41 POs, 63 invoices, 12 contracts, Jun 2025 to Aug 2026",
  "PO-1042 through PO-1181, MSA signed 14 Jun 2025",
  "29 receipts matched three ways, 2 exceptions open",
  "Jun to Aug invoices, 3 vendors, excludes capital equipment",
];

// stage index -> delay in ms
const TIMINGS = [240, 560, 880, 1200, 1620, 1900, 2050, 2200, 2350, 2650];
const DONE = TIMINGS.length;

function Shimmer({ width, className }: { width?: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("shimmer-bar block h-[1em] rounded-sm", className)}
      style={width ? { width } : undefined}
    />
  );
}

function Slot({
  on,
  width,
  className,
  children,
}: {
  on: boolean;
  width?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (on) return <>{children}</>;
  return <Shimmer width={width} className={className} />;
}

export function Payoff() {
  const [stage, setStage] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const started = useRef(false);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const run = () => {
    clear();
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage(DONE);
      return;
    }
    setStage(0);
    TIMINGS.forEach((ms, i) => {
      timers.current.push(setTimeout(() => setStage(i + 1), ms));
    });
  };

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            run();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  const revealing = stage < DONE;

  return (
    <Section id="payoff" size="loose" className="overflow-hidden">
      <div className="max-w-3xl">
        <Reveal>
          <h2
            className="text-balance text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.15] tracking-normal text-muted-foreground"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            You already know the questions.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            What you don't have is a way to answer them without someone spending a day in a
            spreadsheet.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12} y={32}>
        <div
          ref={panelRef}
          aria-busy={revealing}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-md border border-border bg-card md:mt-20"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
            <span className="text-sm text-muted-foreground">Spend answers</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                {revealing ? (
                  <>
                    <span className="h-2 w-2 animate-pulse bg-brand" aria-hidden />
                    Sanyya is working
                  </>
                ) : (
                  "Sanyya · cited"
                )}
              </span>
              <button
                type="button"
                onClick={run}
                className="rounded-sm border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors md:hover:bg-secondary"
              >
                Replay
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-[55fr_45fr]">
            {/* Left */}
            <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              <p className="text-sm text-muted-foreground">
                What has our lead program cost us so far?
              </p>

              <div className="mt-4 text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">
                <Slot on={stage >= 5} width="62%" className="h-[0.8em]">
                  <span>
                    $1,462,800
                    <sup className="ml-1 align-super text-[0.35em] font-medium text-brand">1</sup>
                  </span>
                </Slot>
              </div>
              <div className="mt-2 text-xs text-brand">
                <Slot on={stage >= 5} width="42%">
                  Program to date, 14 months
                </Slot>
              </div>

              <div className="mt-6 border-t border-border">
                {BREAKDOWN.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-border py-2.5"
                  >
                    <span
                      className={cn(
                        "min-w-0 flex-1 text-sm",
                        row.muted ? "text-muted-foreground" : "text-foreground",
                      )}
                    >
                      <Slot on={stage >= 6 + i} width={row.w}>
                        {row.label}
                      </Slot>
                    </span>
                    <span
                      className={cn(
                        "shrink-0 whitespace-nowrap text-sm tabular-nums",
                        row.muted ? "text-muted-foreground" : "text-foreground",
                      )}
                    >
                      <Slot on={stage >= 6 + i} width="74px">
                        <span>
                          {row.amount}
                          {row.note ? (
                            <sup className="ml-0.5 align-super text-[0.7em] text-brand">
                              {row.note}
                            </sup>
                          ) : null}
                        </span>
                      </Slot>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right, recessed */}
            <div className="bg-background p-6 md:p-8 dark:bg-secondary">
              <p className="text-sm text-muted-foreground">How Sanyya got there</p>
              <ol className="mt-4 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed">
                    <span className="shrink-0 tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <Slot on={stage >= i + 1} width={STEP_WIDTHS[i]}>
                        {s}
                      </Slot>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Every step opens the record behind it. Nothing here was estimated.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-6 py-5 md:px-8">
            <p className="text-sm text-muted-foreground">Sources Sanyya used</p>
            <ol className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {SOURCES.map((s, i) => (
                <li key={s} className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="shrink-0 tabular-nums text-brand">{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <Slot on={stage >= DONE} width={["82%", "76%", "70%", "88%"][i]}>
                      {s}
                    </Slot>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
