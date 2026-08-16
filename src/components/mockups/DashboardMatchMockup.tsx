import { CheckCircle2, FileText, PackageCheck, Receipt, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardMatchMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <div />
          <div className="tabular-nums text-[10px] text-muted-foreground">Match</div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <DocCard
            icon={<FileText className="size-4" />}
            color="text-[hsl(168_78%_38%)]"
            ring="ring-[hsl(168_78%_60%/0.4)]"
            label="PO #4821"
            title="Fetal Bovine Serum"
            meta="Qty 12 · $2,840"
          />
          <DocCard
            icon={<PackageCheck className="size-4" />}
            color="text-[hsl(25_90%_40%)]"
            ring="ring-[hsl(25_90%_60%/0.4)]"
            label="GRN #1198"
            title="FBS, 500mL"
            meta="Recv 12 · -20°C"
          />
          <DocCard
            icon={<Receipt className="size-4" />}
            color="text-[hsl(38_92%_40%)]"
            ring="ring-[hsl(38_92%_60%/0.4)]"
            label="INV #88231"
            title="Fetal Bovine Serum"
            meta="Bill 12 · $2,840"
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[hsl(160_84%_50%/0.3)] bg-[hsl(160_84%_50%/0.07)] p-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-[hsl(160_84%_40%)]" />
            <span className="text-sm font-medium text-foreground">3-way matched</span>
            <span className="tabular-nums text-xs text-[hsl(160_84%_40%)]">99.2%</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3 text-[hsl(190_85%_32%)]" />
            <span className="tabular-nums">vector · semantic</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] sm:text-xs">
          <Stat label="Open POs" value="142" />
          <Stat label="Receiving" value="38" />
          <Stat label="Matched" value="96%" highlight />
        </div>
      </div>
    </div>
  );
}

function DocCard({
  icon,
  color,
  ring,
  label,
  title,
  meta,
}: {
  icon: React.ReactNode;
  color: string;
  ring: string;
  label: string;
  title: string;
  meta: string;
}) {
  return (
    <div className={cn("rounded-xl border border-border bg-background/50 p-3 ring-1", ring)}>
      <div className={cn("mb-2 flex items-center gap-2 tabular-nums text-[10px]", color)}>
        {icon}
        {label}
      </div>
      <div className="text-sm font-medium text-foreground">{title}</div>
      <div className="mt-1 tabular-nums text-[11px] text-muted-foreground">{meta}</div>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-background/40 px-3 py-2">
      <div className="tabular-nums text-muted-foreground">{label}</div>
      <div
        className={cn(
          "mt-0.5 text-sm font-semibold",
          highlight ? "text-[hsl(160_84%_40%)]" : "text-foreground",
        )}
      >
        {value}
      </div>
    </div>
  );
}
