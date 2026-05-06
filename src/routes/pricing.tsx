import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionBadge, GradientButton } from "@/components/site/ui";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Sanyya" },
      { name: "description", content: "Pricing for Sanyya. Talk to us about a plan that fits your team." },
      { property: "og:title", content: "Pricing | Sanyya" },
      { property: "og:description", content: "Pricing tailored to biotech, hardware, and deep-tech teams." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <Section size="loose" className="pt-32 md:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <SectionBadge>Pricing</SectionBadge>
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Pricing built around <span className="text-brand-gradient">your spend</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground md:text-lg">
          We tailor plans to your team size, document volume, and integrations. Talk to us for a
          quote that actually fits.
        </p>
        <div className="mt-8">
          <GradientButton href="#book-demo" size="lg">
            Talk to sales <ArrowRight className="size-4" />
          </GradientButton>
        </div>
      </div>
    </Section>
  );
}
