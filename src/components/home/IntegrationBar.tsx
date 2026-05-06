import { Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { integrations } from "@/data/site";
import { cn } from "@/lib/utils";

export function IntegrationBar() {
  return (
    <Section id="integrations" size="tight">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Plugs into your stack, <span className="text-brand-gradient">no migration required</span>
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {integrations.map((i) => (
            <div
              key={i}
              className={cn(
                "glass flex h-16 items-center justify-center rounded-xl text-sm font-medium text-foreground/90",
                i === "Quartzy" && "ring-1 ring-[hsl(217_91%_57%/0.4)]",
              )}
            >
              {i}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(217_91%_57%/0.4)] bg-[hsl(217_91%_57%/0.1)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[hsl(217_91%_38%)]">
            <span className="size-1.5 rounded-full bg-[hsl(217_91%_60%)]" />
            Only procurement platform that integrates with Quartzy
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
