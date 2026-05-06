import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/site/ui";
import { Stagger, StaggerItem } from "@/components/site/Reveal";

export function FeatureGrid({
  features,
}: {
  features: { icon: LucideIcon; title: string; body?: string; comingSoon?: boolean }[];
}) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <StaggerItem key={f.title}>
          <GlassCard className="h-full">
            <div className="flex items-start justify-between gap-2">
              <div className="grid size-10 place-items-center rounded-lg border border-border bg-background/50">
                <f.icon className="size-4 text-[hsl(217_91%_38%)]" />
              </div>
              {f.comingSoon && (
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-700">
                  Coming soon
                </span>
              )}
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{f.title}</h3>
            {f.body && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            )}
          </GlassCard>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
