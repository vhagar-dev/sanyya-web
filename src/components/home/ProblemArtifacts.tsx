import { cn } from "@/lib/utils";

const frame =
  "rounded-xl border border-border bg-secondary/60 p-4 text-left shadow-[0_1px_2px_hsl(220_43%_11%/0.06)] grayscale-[0.35]";

export function BoardSlideArtifact({ className }: { className?: string }) {
  return (
    <div className={cn(frame, "relative", className)}>
      <div className="tabular-nums text-[10px] text-muted-foreground">Board deck / slide 7</div>
      <div className="mt-4 space-y-3">
        <Row label="Headcount" value="24" />
        <Row label="Cash burn" value="$418K / mo" />
        <div className="flex items-baseline justify-between border-t border-dashed border-border pt-3">
          <span className="text-sm text-muted-foreground">Animal study, spend to date</span>
          <span className="text-3xl font-display text-foreground/70">?</span>
        </div>
      </div>
      <div className="mt-4 h-1.5 w-2/3 rounded-full bg-border" />
      <div className="mt-2 h-1.5 w-1/2 rounded-full bg-border" />
    </div>
  );
}

export function QuotesArtifact({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-full min-h-[300px] w-full", className)}>
      {[
        { rot: "-rotate-6", off: "left-0 top-0", name: "Quote_ThermoFisher.pdf", amt: "$4,8••" },
        {
          rot: "rotate-1",
          off: "left-6 top-14 sm:left-10",
          name: "Quote_Qiagen.pdf",
          amt: "$5,1••",
        },
        {
          rot: "rotate-6",
          off: "left-12 top-28 sm:left-20",
          name: "Quote_BioRad-final(2).pdf",
          amt: "$4,9••",
        },
      ].map((q, i) => (
        <div
          key={i}
          className={cn(frame, "absolute w-48 sm:w-56", q.off, q.rot)}
          style={{ zIndex: i }}
        >
          <div className="tabular-nums text-[10px] text-muted-foreground">{q.name}</div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-border" />
            <div className="h-1.5 w-3/5 rounded-full bg-border" />
          </div>
          <div className="mt-3 text-base font-semibold tracking-tight text-foreground/70">
            {q.amt}
          </div>
        </div>
      ))}
    </div>
  );
}

export function InvoiceArtifact({ className }: { className?: string }) {
  return (
    <div className={cn(frame, "relative -rotate-1", className)}>
      <div className="flex items-start justify-between">
        <div>
          <div className="tabular-nums text-[10px] text-muted-foreground">Invoice · Cytiva</div>
          <div className="mt-1 text-sm font-semibold text-foreground/80">INV-8231</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-display text-foreground/70">$12,480</div>
          <div className="tabular-nums text-[10px] text-muted-foreground">due in 4 days</div>
        </div>
      </div>
      <div className="mt-4 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-border" />
        <div className="h-1.5 w-5/6 rounded-full bg-border" />
        <div className="h-1.5 w-2/3 rounded-full bg-border" />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-3">
        <span className="tabular-nums text-[10px] text-muted-foreground">Matching PO</span>
        <span className="tabular-nums text-[10px] text-muted-foreground">none found</span>
      </div>
      <span className="absolute -right-2 -top-3 -rotate-6 rounded-md border border-dashed border-foreground/30 bg-background px-2 py-1 tabular-nums text-[11px] text-foreground/60">
        received?
      </span>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground/70">{value}</span>
    </div>
  );
}
