import type { ReactNode } from "react";
import { GlassCard } from "@/components/site/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export function HowItWorks({
  steps,
  visual,
}: {
  steps: { title: string; body: string }[];
  visual?: ReactNode;
}) {
  return (
    <div className="grid gap-10 md:gap-12 md:grid-cols-2 md:items-center">
      <Stagger className="space-y-4 md:space-y-5">
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <GlassCard className="flex gap-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-gradient font-mono text-sm font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.body}
                </p>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
      {visual && (
        <Reveal delay={0.15} className="relative order-first md:order-last">
          {visual}
        </Reveal>
      )}
    </div>
  );
}
