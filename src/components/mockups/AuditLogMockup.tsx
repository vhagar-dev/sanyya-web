import { CalendarRange, ChevronDown, Download, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Everything", "Team", "Approvals", "PO config", "Vendors", "Projects"];

type Row = {
  when: string;
  initial: string;
  who: string;
  what: string;
  before: string;
  after: string;
  area: string;
  tone: "brand" | "violet" | "amber" | "green" | "neutral";
};

const rows: Row[] = [
  {
    when: "Today, 09:41",
    initial: "D",
    who: "Dana Whitfield",
    what: "Turned off approve permission for Marcus Reyes",
    before: "Can approve",
    after: "Request only",
    area: "Team",
    tone: "brand",
  },
  {
    when: "Today, 08:26",
    initial: "P",
    who: "Priya Nair",
    what: "Added a threshold to the default approval ladder",
    before: "Single approver",
    after: "Second approver over $10,000",
    area: "Approvals",
    tone: "violet",
  },
  {
    when: "Yesterday, 17:03",
    initial: "S",
    who: "Sam Okafor",
    what: "Changed the footer text on every purchase order",
    before: "Net 30, FOB origin",
    after: "Net 45, FOB destination",
    area: "PO config",
    tone: "amber",
  },
  {
    when: "Yesterday, 14:38",
    initial: "L",
    who: "Lena Fischer",
    what: "Added a vendor to the vendor list",
    before: "Not listed",
    after: "Cytiva, approved",
    area: "Vendors",
    tone: "green",
  },
  {
    when: "12 Apr, 11:20",
    initial: "D",
    who: "Dana Whitfield",
    what: "Set a budget on the lead program",
    before: "No budget",
    after: "$1,800,000",
    area: "Projects",
    tone: "neutral",
  },
  {
    when: "11 Apr, 16:57",
    initial: "P",
    who: "Priya Nair",
    what: "Invited Alex Duran as an admin",
    before: "No account",
    after: "Admin",
    area: "Team",
    tone: "brand",
  },
  {
    when: "11 Apr, 09:12",
    initial: "S",
    who: "Sam Okafor",
    what: "Raised the auto approve limit for lab consumables",
    before: "$250",
    after: "$750",
    area: "Approvals",
    tone: "violet",
  },
];

const tones: Record<Row["tone"], string> = {
  brand: "border-brand/35 bg-brand/10 text-brand",
  violet: "border-doc-ai/35 bg-doc-ai/10 text-doc-ai",
  amber: "border-doc-invoice/35 bg-doc-invoice/10 text-doc-invoice",
  green: "border-success/40 bg-success/10 text-success",
  neutral: "border-border bg-secondary text-muted-foreground",
};

function Control({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-[11px] text-muted-foreground">
      {children}
    </div>
  );
}

export function AuditLogMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="glass relative overflow-hidden rounded-2xl p-3 sm:p-5 md:p-6 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
        <div className="flex flex-wrap items-center gap-1.5">
          {tabs.map((t, i) => (
            <span
              key={t}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] transition-colors",
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background/50 text-muted-foreground",
              )}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Control>
            <User className="size-3" /> Anyone <ChevronDown className="size-3" />
          </Control>
          <Control>
            <CalendarRange className="size-3" /> Last 30 days <ChevronDown className="size-3" />
          </Control>
          <div className="inline-flex min-w-[9rem] flex-1 items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-[11px] text-muted-foreground/70">
            <Search className="size-3" /> Search changes
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/80 px-2.5 py-1.5 text-[11px] font-medium text-foreground">
            <Download className="size-3" /> Export CSV
          </div>
        </div>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-background/50">
          <div className="min-w-[46rem]">
            <div className="grid grid-cols-[8rem_11rem_1fr_15rem_7rem] gap-3 border-b border-border px-3 py-2 tabular-nums text-[9px] text-muted-foreground">
              <span>When</span>
              <span>Who</span>
              <span>What changed</span>
              <span>Before and after</span>
              <span>Area</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.when + r.what}
                className="grid grid-cols-[8rem_11rem_1fr_15rem_7rem] items-center gap-3 border-b border-border/70 px-3 py-2.5 text-[11px] last:border-b-0"
              >
                <span className="tabular-nums text-muted-foreground">{r.when}</span>
                <span className="flex items-center gap-2">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand/15 text-[9px] font-medium text-brand">
                    {r.initial}
                  </span>
                  <span className="truncate text-foreground">{r.who}</span>
                </span>
                <span className="text-foreground">{r.what}</span>
                <span className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded border border-border bg-secondary/70 px-1.5 py-0.5 tabular-nums text-[10px] text-muted-foreground line-through">
                    {r.before}
                  </span>
                  <span className="text-muted-foreground/60">→</span>
                  <span className="rounded border border-success/35 bg-success/10 px-1.5 py-0.5 tabular-nums text-[10px] text-success">
                    {r.after}
                  </span>
                </span>
                <span>
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2 py-0.5 tabular-nums text-[9px]",
                      tones[r.tone],
                    )}
                  >
                    {r.area}
                  </span>
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-border bg-secondary/60 px-3 py-2">
              <span className="tabular-nums text-[10px] text-muted-foreground">
                7 of 214 changes
              </span>
              <span className="text-[11px] font-medium text-foreground">Load more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
