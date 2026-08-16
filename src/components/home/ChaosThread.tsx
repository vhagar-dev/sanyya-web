import { Hash } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { author: string; initials: string; time: string; text: string; muted?: boolean };

const messages: Msg[] = [
  {
    author: "Dana R.",
    initials: "DR",
    time: "9:14 AM",
    text: "coffee machine is broken again",
    muted: true,
  },
  {
    author: "Priya N.",
    initials: "PN",
    time: "9:31 AM",
    text: "can I order 3 boxes of tips from Thermo?",
  },
  {
    author: "Marcus L.",
    initials: "ML",
    time: "9:33 AM",
    text: "who has the freezer key",
    muted: true,
  },
  {
    author: "Dana R.",
    initials: "DR",
    time: "10:02 AM",
    text: "moving standup to 2pm",
    muted: true,
  },
  {
    author: "Sam K.",
    initials: "SK",
    time: "10:47 AM",
    text: "+1 on the tips, we're almost out",
    muted: true,
  },
  {
    author: "Marcus L.",
    initials: "ML",
    time: "11:20 AM",
    text: "anyone seen the shipment from last week",
    muted: true,
  },
  { author: "Priya N.", initials: "PN", time: "Tue 4:08 PM", text: "did this ever get ordered?" },
  {
    author: "Dana R.",
    initials: "DR",
    time: "Wed 8:55 AM",
    text: "i think ops has it? not sure",
    muted: true,
  },
  { author: "Finance", initials: "FN", time: "Fri 3:12 PM", text: "who approved this?" },
];

export function ChaosThread({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="border-y border-border bg-transparent">
        <div className="relative flex items-center justify-between border-b border-border px-1 py-3">
          <div className="flex items-center gap-2 text-foreground">
            <Hash className="size-4 text-brand" />
            <span className="text-sm font-medium">lab-ops</span>
          </div>
          <div className="tabular-nums text-[11px] text-muted-foreground">47 replies</div>
        </div>

        <div className="space-y-3 py-6 text-left sm:py-8">
          {messages.map((m, i) => {
            const tone = m.muted
              ? null
              : i % 2 === 0
                ? {
                    avatar: "border-border bg-card text-foreground",
                    row: "border-foreground/40",
                  }
                : {
                    avatar: "border-border bg-card text-foreground",
                    row: "border-foreground/40",
                  };
            return (
              <div
                key={i}
                className={cn(
                  "flex gap-3 rounded-lg py-1.5 transition-colors",
                  m.muted ? "opacity-70" : cn("-mx-2 border-l-2 px-2 sm:-mx-3 sm:px-3", tone?.row),
                )}
              >
                <div
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-md border tabular-nums text-[10px]",
                    m.muted ? "border-border bg-secondary text-muted-foreground" : tone?.avatar,
                  )}
                >
                  {m.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "text-xs font-semibold sm:text-sm",
                        m.muted ? "text-foreground/75" : "text-foreground",
                      )}
                    >
                      {m.author}
                    </span>
                    <span className="tabular-nums text-[10px] text-muted-foreground">{m.time}</span>
                  </div>
                  <p
                    className={cn(
                      "mt-0.5 text-sm sm:text-base",
                      m.muted ? "text-muted-foreground" : "font-medium text-foreground",
                    )}
                  >
                    {m.text}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex items-center gap-3 pt-2">
            <span aria-hidden className="h-px flex-1 bg-border" />
            <span className="tabular-nums text-[10px] text-muted-foreground/70">
              Showing 12 of 47
            </span>
          </div>
        </div>
      </div>

      {/* fade the artifact into the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
      />
    </div>
  );
}
