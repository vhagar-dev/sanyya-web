import { ArrowDown } from "lucide-react";
import { GradientButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ChaosThread } from "./ChaosThread";

export function Hero() {
  const scrollToRoles = () => {
    document
      .getElementById("where-you-sit")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-background pb-4 pt-28 md:pt-40 lg:pt-48">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="font-display text-balance text-[clamp(2.25rem,5vw,3.75rem)] leading-[0.98] tracking-[-0.03em] text-foreground">
              &ldquo;What has our lead program cost us so far?&rdquo;
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mx-auto mt-8 max-w-[64ch] text-pretty text-lg font-normal leading-[1.7] text-muted-foreground md:text-xl">
              Most teams cannot answer that without digging through invoices, inboxes, and someone's
              memory.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-md flex-col items-stretch sm:max-w-none sm:flex-row sm:justify-center">
              <GradientButton
                as="button"
                onClick={scrollToRoles}
                size="lg"
                className="w-full sm:w-auto"
              >
                This sounds familiar <ArrowDown className="size-4" />
              </GradientButton>
            </div>
          </Reveal>
        </div>

        {/* The artifact */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-20 max-w-5xl md:mt-28 lg:ml-auto lg:mr-0 lg:pl-12">
            <div className="max-h-[760px] overflow-hidden">
              <ChaosThread />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-background/70 to-background"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
