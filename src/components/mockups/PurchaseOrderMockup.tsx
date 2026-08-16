import { CheckCircle2, History, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const lines = [
  { item: "In vivo PK study, 28 day", qty: "1", unit: "$164,000", total: "$164,000" },
  { item: "Animal housing, per diem", qty: "420", unit: "$18.50", total: "$7,770" },
  { item: "Terminal bleed and necropsy", qty: "24", unit: "$310", total: "$7,440" },
  { item: "Sample shipping, cold chain", qty: "6", unit: "$465", total: "$2,790" },
];

export function PurchaseOrderMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="glass relative overflow-hidden rounded-2xl p-4 sm:p-6 md:p-7 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="tabular-nums text-[10px] text-muted-foreground">purchase order</div>
            <div className="mt-1 text-lg font-semibold text-foreground">PO 2291</div>
            <div className="mt-0.5 text-sm text-muted-foreground">Charles River</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[hsl(160_84%_50%/0.35)] bg-[hsl(160_84%_50%/0.08)] px-2.5 py-1">
            <Send className="size-3 text-[hsl(160_84%_35%)]" />
            <span className="tabular-nums text-[10px] text-[hsl(160_84%_30%)]">sent to vendor</span>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/50">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 border-b border-border px-3 py-2 tabular-nums text-[9px] text-muted-foreground">
            <span>Item</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Unit</span>
            <span className="text-right">Total</span>
          </div>
          {lines.map((l) => (
            <div
              key={l.item}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-3 border-b border-border/70 px-3 py-2 text-[11px] last:border-b-0"
            >
              <span className="text-foreground">{l.item}</span>
              <span className="text-right tabular-nums text-muted-foreground">{l.qty}</span>
              <span className="text-right tabular-nums text-muted-foreground">{l.unit}</span>
              <span className="text-right tabular-nums text-foreground">{l.total}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-border bg-secondary/60 px-3 py-2">
            <span className="tabular-nums text-[9px] text-muted-foreground">order total</span>
            <span className="tabular-nums text-sm font-semibold text-foreground">$182,000</span>
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-background/40 px-3 py-2">
            <div className="tabular-nums text-[9px] text-muted-foreground">payment terms</div>
            <div className="mt-0.5 text-xs text-foreground">Net 45, milestone billing</div>
          </div>
          <div className="rounded-lg border border-border bg-background/40 px-3 py-2">
            <div className="tabular-nums text-[9px] text-muted-foreground">delivery</div>
            <div className="mt-0.5 text-xs text-foreground">Study start 12 May, on site</div>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-border bg-background/40 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <History className="size-3.5 text-[hsl(190_85%_35%)]" />
            <span className="rounded-full bg-secondary px-2 py-0.5 tabular-nums text-[9px] text-foreground">
              v2
            </span>
            <span className="tabular-nums text-[10px] text-muted-foreground">
              sent 09:14, 4 Apr
            </span>
          </div>
          <div className="mt-1.5 flex items-start gap-1.5 text-[11px] text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-[hsl(160_84%_40%)]" />
            <span>Cohort raised from 18 to 24 animals. Approved by Dana Whitfield.</span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between tabular-nums text-[10px] text-muted-foreground">
            <span>standing order drawdown</span>
            <span>$624,000 left of $1.8M</span>
          </div>
          <div className="mt-1 tabular-nums text-[9px] text-muted-foreground/70">
            release against master agreement
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-brand-gradient" style={{ width: "65%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
