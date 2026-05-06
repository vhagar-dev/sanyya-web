import { ArrowRight } from "lucide-react";
import { GradientButton, GhostButton, GradientGlow, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { DashboardCommandCenter } from "@/components/mockups/DashboardCommandCenter";
import { integrations } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24">
      {/* Mesh gradient bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <GradientGlow size="xl" className="-top-40 left-1/2 -translate-x-1/2 mesh-drift opacity-20" />
        <GradientGlow size="lg" className="bottom-0 right-0 opacity-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionBadge tone="success" className="inline-flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(160_84%_55%)] opacity-60 pulse-dot" />
                <span className="relative inline-flex size-2 rounded-full bg-[hsl(160_84%_55%)]" />
              </span>
              Now Live · Trusted by Biotech Teams
            </SectionBadge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Procurement that{" "}
              <span className="text-brand-gradient">actually works</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
              The procurement platform built by operators, for biotech, hardware, and deep-tech teams.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-8 flex max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                Book a Demo <ArrowRight className="size-4" />
              </GradientButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                Works with
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground/80">
                {integrations.map((i) => (
                  <span key={i} className="font-medium tracking-tight">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-12 md:mt-16">
          <div className="relative mx-auto max-w-5xl">
            <GradientGlow size="lg" className="-z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <DashboardCommandCenter />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
