import { cn } from "@/lib/utils";

const vendors = [
  {
    name: "Fisher Scientific",
    fields: [
      { label: "LOT #", value: "FBS-2024-A881", color: "ring-[hsl(217_91%_60%)]/70 bg-[hsl(217_91%_60%/0.12)]" },
      { label: "TEMP", value: "-20°C", color: "ring-[hsl(214_90%_60%)]/70 bg-[hsl(214_90%_60%/0.12)]" },
    ],
  },
  {
    name: "VWR",
    fields: [
      { label: "BATCH", value: "VWR-9921", color: "ring-[hsl(25_90%_60%)]/70 bg-[hsl(25_90%_60%/0.12)]" },
      { label: "STORAGE", value: "2-8°C", color: "ring-[hsl(258_90%_65%)]/70 bg-[hsl(258_90%_65%/0.12)]" },
    ],
  },
  {
    name: "Thermo Fisher",
    fields: [
      { label: "LOT", value: "TF-A22-9981", color: "ring-[hsl(38_92%_60%)]/70 bg-[hsl(38_92%_60%/0.12)]" },
      { label: "EXP", value: "06/2026", color: "ring-[hsl(160_84%_55%)]/70 bg-[hsl(160_84%_55%/0.12)]" },
    ],
  },
];

export function VendorFormatsMockup({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {vendors.map((v) => (
        <div key={v.name} className="rounded-xl border border-border bg-[hsl(0_0%_98%)] p-3 shadow-xl">
          <div className="mb-2 flex items-center justify-between text-[9px] text-[hsl(0_0%_25%)]">
            <span className="font-bold uppercase tracking-wider">{v.name}</span>
            <span>SLIP</span>
          </div>
          <div className="h-px bg-[hsl(0_0%_85%)]" />
          <div className="mt-2 space-y-1 text-[9px] text-[hsl(0_0%_30%)]">
            <div>Item: Reagent A · Qty 24</div>
            <div>Ship: 11/04/2026</div>
            {v.fields.map((f) => (
              <div key={f.label} className={cn("rounded px-1.5 py-0.5 ring-2", f.color)}>
                <span className="font-bold">{f.label}:</span> {f.value}
              </div>
            ))}
            <div>CoA: attached</div>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-md border border-[hsl(0_0%_85%)] bg-[hsl(0_0%_96%)] px-2 py-1 text-[9px] text-[hsl(0_0%_30%)]">
            <span>AI accuracy</span>
            <span className="font-mono text-[hsl(160_84%_25%)]">99.{Math.floor(Math.random() * 9)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
