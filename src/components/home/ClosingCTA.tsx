import { ArrowRight } from "lucide-react";
import { Section, GradientButton, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export function ClosingCTA() {
  return (
    <Section id="book-demo" size="loose" className="overflow-hidden">
      <Reveal>
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-border bg-card/40 p-8 text-center sm:p-12 md:p-16">
          <GradientGlow size="xl" className="-z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to fix your <span className="text-brand-gradient">procurement?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Join the biotech and hardware teams already using Sanyya.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
              Book a Demo <ArrowRight className="size-4" />
            </GradientButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
