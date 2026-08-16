import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export function ClosingCTA() {
  return (
    <section id="next" className="relative bg-background py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-3xl text-left">
            <h2
              className="text-balance text-[clamp(3rem,6.5vw,5rem)] leading-[1.1] tracking-normal text-muted-foreground"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              So what does that look like?
            </h2>
            <div className="mt-12 flex">
              <GradientButton
                as="link"
                to="/product"
                size="lg"
                className="h-14 px-10 text-base md:h-16 md:px-12 md:text-lg"
              >
                Check out Sanyya <ArrowRight className="size-5" />
              </GradientButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
