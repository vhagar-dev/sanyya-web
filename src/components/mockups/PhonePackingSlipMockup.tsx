import { Sparkles, Snowflake, Hash, FlaskConical, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhonePackingSlipMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[280px] sm:max-w-xs md:max-w-sm", className)}>
      {/* Phone frame */}
      <div className="relative aspect-[9/19] rounded-[2.5rem] border border-border bg-[hsl(220_15%_18%)] p-2 shadow-[0_40px_100px_-30px_hsl(217_91%_57%/0.5)]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[hsl(220_15%_18%)]" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 font-mono text-[10px] text-muted-foreground">
            <span>9:41</span>
            <span>•••</span>
          </div>

          {/* Header */}
          <div className="px-4 pt-2 pb-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[hsl(217_91%_38%)]">
              Receiving · GRN draft
            </div>
            <div className="text-base font-semibold text-foreground">PO-4821 · Fisher</div>
          </div>

          {/* Camera view of packing slip */}
          <div className="relative mx-3 overflow-hidden rounded-xl border border-border bg-[hsl(0_0%_98%)] p-3">
            <div className="space-y-1 text-[8px] text-[hsl(0_0%_30%)]">
              <div className="flex justify-between">
                <span className="font-bold">FISHER SCIENTIFIC</span>
                <span>SLIP #88231</span>
              </div>
              <div className="h-px bg-[hsl(0_0%_80%)]" />
              <div>Ship to: BioLabs SF</div>
              <div className="h-1" />
              <div className="rounded ring-2 ring-[hsl(217_91%_57%)]/80 px-1 py-0.5 bg-[hsl(217_91%_57%/0.15)]">
                Lot # FBS-2024-A881
              </div>
              <div>Item: Fetal Bovine Serum, 500mL</div>
              <div>Qty: 12 bottles</div>
              <div className="rounded ring-2 ring-[hsl(214_90%_60%)]/80 px-1 py-0.5 bg-[hsl(214_90%_60%/0.15)]">
                Ship Temp: -20°C
              </div>
              <div className="rounded ring-2 ring-[hsl(25_90%_60%)]/80 px-1 py-0.5 bg-[hsl(25_90%_60%/0.15)]">
                Storage: -20°C, dark
              </div>
              <div>CoA: COA-A881.pdf</div>
            </div>
            {/* AI scan corners */}
            <Corner className="left-1 top-1 border-l-2 border-t-2" />
            <Corner className="right-1 top-1 border-r-2 border-t-2" />
            <Corner className="left-1 bottom-1 border-l-2 border-b-2" />
            <Corner className="right-1 bottom-1 border-r-2 border-b-2" />
          </div>

          {/* Extracted fields */}
          <div className="mt-3 space-y-1.5 px-3">
            <Field icon={<Snowflake className="size-3" />} color="text-[hsl(214_90%_38%)]" label="Ship Temp" value="-20°C" />
            <Field icon={<Hash className="size-3" />} color="text-[hsl(217_91%_38%)]" label="Lot #" value="FBS-2024-A881" />
            <Field icon={<FlaskConical className="size-3" />} color="text-[hsl(25_90%_40%)]" label="Storage" value="-20°C, dark" />
          </div>

          {/* Vendor accuracy */}
          <div className="mx-3 mt-3 flex items-center gap-2 rounded-lg border border-[hsl(160_84%_50%/0.3)] bg-[hsl(160_84%_50%/0.08)] px-2.5 py-1.5">
            <ShieldCheck className="size-3 text-[hsl(160_84%_40%)]" />
            <span className="text-[10px] text-foreground">Fisher Scientific</span>
            <span className="ml-auto font-mono text-[10px] text-[hsl(160_84%_40%)]">99.2%</span>
          </div>

          <div className="mx-3 mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient py-2 text-[11px] font-medium text-white">
            <Sparkles className="size-3" />
            Confirm GRN · Match PO
          </div>
        </div>
      </div>
    </div>
  );
}

function Corner({ className }: { className?: string }) {
  return <div className={cn("absolute h-3 w-3 border-[hsl(217_91%_60%)]", className)} />;
}

function Field({
  icon,
  color,
  label,
  value,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-2.5 py-1.5">
      <div className={cn("flex items-center gap-1.5 text-[10px]", color)}>
        {icon}
        <span className="font-mono uppercase tracking-widest">{label}</span>
      </div>
      <span className="font-mono text-[10px] text-foreground">{value}</span>
    </div>
  );
}
