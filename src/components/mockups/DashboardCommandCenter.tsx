import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardCommandCenter({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="glass relative overflow-hidden rounded-2xl p-3 sm:p-5 md:p-6 shadow-[0_30px_80px_-30px_hsl(217_91%_57%/0.4)]">
        {/* Window chrome */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-[hsl(0_70%_60%)]/70" />
            <div className="size-2.5 rounded-full bg-[hsl(38_92%_60%)]/70" />
            <div className="size-2.5 rounded-full bg-[hsl(160_84%_55%)]/70" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            sanyya / dashboard
          </div>
        </div>

        {/* 2x2 quadrant grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-xl bg-white/10 overflow-hidden">
          <ActivityPanel />
          <StatsPanel />
          <SpendPanel />
          <AIInsightPanel />
        </div>
      </div>
    </div>
  );
}

function QuadrantLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
      {children}
    </div>
  );
}

function ActivityPanel() {
  const items = [
    { color: "bg-[hsl(160_84%_55%)]", text: "Invoice #8231 matched to PO #4821", time: "2m" },
    { color: "bg-[hsl(217_91%_60%)]", text: "PO #4856 dispatched to Fisher Scientific", time: "18m" },
    { color: "bg-[hsl(258_90%_66%)]", text: "Requisition approved by Sarah M.", time: "1h" },
    { color: "bg-[hsl(38_92%_60%)]", text: "Low stock alert: Pipette Tips 200μL", time: "2h" },
    { color: "bg-[hsl(190_90%_60%)]", text: "GRN created from delivery scan", time: "3h" },
  ];
  return (
    <div className="bg-background/60 p-4">
      <QuadrantLabel>Activity</QuadrantLabel>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2.5 text-[11px] sm:text-xs">
            <span className={cn("size-1.5 rounded-full shrink-0", it.color)} />
            <span className="flex-1 truncate text-foreground/90">{it.text}</span>
            <span className="font-mono text-[10px] text-muted-foreground shrink-0">{it.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatsPanel() {
  const stats = [
    { label: "Open POs", value: "142", tone: "text-foreground" },
    { label: "Pending Approvals", value: "7", tone: "text-[hsl(38_92%_50%)]" },
    { label: "Matched This Week", value: "96%", tone: "text-[hsl(160_84%_40%)]" },
    { label: "Active Vendors", value: "34", tone: "text-foreground" },
  ];
  return (
    <div className="bg-background/60 p-4">
      <QuadrantLabel>Overview</QuadrantLabel>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-background/40 px-3 py-2.5">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
            <div className={cn("mt-1 text-xl sm:text-2xl font-bold tabular-nums", s.tone)}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpendPanel() {
  const segments = [
    { label: "R&D", value: 35, color: "#3C83F5" },
    { label: "Manufacturing", value: 25, color: "#895AF6" },
    { label: "Facilities", value: 20, color: "#67E7F8" },
    { label: "QA/QC", value: 12, color: "#10B981" },
    { label: "Admin", value: 8, color: "#F49E0A" },
  ];
  const total = segments.reduce((a, b) => a + b.value, 0);
  const radius = 32;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="bg-background/60 p-4">
      <QuadrantLabel>Spend</QuadrantLabel>
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <svg width="88" height="88" viewBox="0 0 88 88" className="-rotate-90">
            <circle cx="44" cy="44" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="10" opacity="0.3" />
            {segments.map((s, i) => {
              const len = (s.value / total) * circ;
              const dash = `${len} ${circ - len}`;
              const el = (
                <circle
                  key={i}
                  cx="44"
                  cy="44"
                  r={radius}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="10"
                  strokeDasharray={dash}
                  strokeDashoffset={-offset}
                />
              );
              offset += len;
              return el;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-sm font-bold text-foreground">$487K</div>
            <div className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
              This Month
            </div>
          </div>
        </div>
        <ul className="flex-1 space-y-1 text-[10px] sm:text-[11px]">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-foreground/80 flex-1 truncate">{s.label}</span>
              <span className="font-mono text-muted-foreground">{s.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AIInsightPanel() {
  return (
    <div className="relative bg-background/60 p-4">
      {/* Aurora gradient border accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(60,131,245,0.12), rgba(137,90,246,0.12), rgba(103,231,248,0.12))",
        }}
      />
      <div className="relative">
        <div className="mb-3 flex items-center gap-1.5">
          <Sparkles className="size-3 text-[hsl(258_90%_60%)]" />
          <span className="font-mono text-[10px] uppercase tracking-widest bg-gradient-to-r from-[#3C83F5] via-[#895AF6] to-[#67E7F8] bg-clip-text text-transparent font-semibold">
            Sanyya AI
          </span>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-foreground/90">
          3 departments ordering from Fisher this week. Bundle to save ~$340 on shipping.
        </p>
        <button className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[hsl(217_91%_57%)] hover:underline">
          View Bundle <ArrowRight className="size-3" />
        </button>
        <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed border-t border-border/60 pt-2">
          FBS price from Sigma up 8% vs. 6-month avg.
        </p>
      </div>
    </div>
  );
}
