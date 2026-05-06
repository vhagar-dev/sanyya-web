import { Sparkles } from "lucide-react";

export function MatchEngineDiagram() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-5 sm:p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-xl border border-[hsl(214_90%_60%/0.4)] bg-[hsl(214_90%_60%/0.06)] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[hsl(214_90%_38%)]">
            PO line · vendor
          </div>
          <div className="mt-1 text-base font-semibold text-foreground">Fetal Bovine Serum</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">qty: 12 · 500mL</div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hidden md:block h-px w-20 bg-gradient-to-r from-[hsl(214_90%_60%)] via-[hsl(217_91%_60%)] to-[hsl(25_90%_60%)]" />
          <div className="md:absolute flex items-center gap-1.5 rounded-full border border-[hsl(217_91%_57%/0.4)] bg-[hsl(217_91%_57%/0.12)] px-3 py-1.5">
            <Sparkles className="size-3.5 text-[hsl(217_91%_38%)]" />
            <span className="font-mono text-[11px] text-[hsl(217_91%_40%)]">99.2% match</span>
          </div>
        </div>

        <div className="rounded-xl border border-[hsl(25_90%_60%/0.4)] bg-[hsl(25_90%_60%/0.06)] p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[hsl(25_90%_40%)]">
            GRN line · slip
          </div>
          <div className="mt-1 text-base font-semibold text-foreground">FBS, 500mL</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">recv: 12 · -20°C</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Token label="cosine" value="0.992" />
        <Token label="lot match" value="✓ A881" />
        <Token label="qty delta" value="0" />
      </div>
    </div>
  );
}

function Token({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="font-mono text-xs text-foreground">{value}</span>
    </div>
  );
}
