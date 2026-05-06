import { Section, SectionBadge, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { MatchEngineDiagram } from "@/components/mockups/MatchEngineDiagram";

export function MatchEngineSection() {
  return (
    <Section id="match-engine">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionBadge>Match Engine</SectionBadge>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From <span className="text-foreground/50">messy</span> to{" "}
            <span className="text-brand-gradient">matched</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Our semantic matching engine uses vector embeddings to connect POs, packing slips, and
            invoices, even when vendors use different names for the same thing.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="relative mx-auto mt-12 max-w-4xl">
          <GradientGlow size="lg" className="-z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
          <MatchEngineDiagram />
        </div>
      </Reveal>
    </Section>
  );
}
