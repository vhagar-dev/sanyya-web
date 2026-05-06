import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PlatformBento } from "@/components/home/PlatformBento";
import { Differentiators } from "@/components/home/Differentiators";
import { IntegrationBar } from "@/components/home/IntegrationBar";

import { ClosingCTA } from "@/components/home/ClosingCTA";
import { SectionDivider } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanyya, Procurement that actually works" },
      {
        name: "description",
        content:
          "From quote to payment, one platform, zero chaos. Built for biotech, hardware, and deep-tech teams.",
      },
      { property: "og:title", content: "Sanyya, Procurement that actually works" },
      {
        property: "og:description",
        content:
          "From quote to payment, one platform, zero chaos. Built for biotech, hardware, and deep-tech teams.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <PlatformBento />
      <SectionDivider />
      <Differentiators />
      <SectionDivider />
      <IntegrationBar />
      <ClosingCTA />
    </>
  );
}
