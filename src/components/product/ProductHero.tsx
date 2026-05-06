import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { GradientButton, GradientGlow, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "./Breadcrumb";

export function ProductHero({
  badge,
  title,
  subtitle,
  visual,
  breadcrumb,
}: {
  badge: string;
  title: ReactNode;
  subtitle: string;
  visual: ReactNode;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 mesh-drift opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <Breadcrumb items={breadcrumb} />
        </Reveal>
        <div className="mt-8 grid gap-10 md:gap-14 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <SectionBadge>{badge}</SectionBadge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                  Book a Demo <ArrowRight className="size-4" />
                </GradientButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <GradientGlow size="md" className="-z-10 -right-10 top-10 opacity-40" />
            {visual}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
