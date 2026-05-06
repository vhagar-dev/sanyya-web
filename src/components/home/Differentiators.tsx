import { ArrowRight } from "lucide-react";
import { Section, SectionBadge, GradientGlow, GradientButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { SlackMockup } from "@/components/mockups/SlackMockup";
import { PhonePackingSlipMockup } from "@/components/mockups/PhonePackingSlipMockup";

export function Differentiators() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionBadge>Why Sanyya</SectionBadge>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why teams choose Sanyya
          </h2>
        </Reveal>
      </div>

      {/* Block 1, Slack */}
      <div className="mt-16 md:mt-24 grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionBadge>Slack-native</SectionBadge>
          <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Works where your team works.
          </h3>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            No new tool to learn. No portal to log into. Just type what you need and our agent
            handles the requisition, gap-fills missing details, and routes for approval, all in
            Slack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GradientButton as="link" to="/product/requisitions">
              Learn more <ArrowRight className="size-4" />
            </GradientButton>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative order-last md:order-none">
          <GradientGlow size="md" className="-z-10 -right-10 top-10 opacity-40" />
          <SlackMockup variant="compact" className="md:hidden" />
          <SlackMockup className="hidden md:block" />
        </Reveal>
      </div>

      {/* Block 2, OCR (reverse layout on desktop) */}
      <div className="mt-20 md:mt-28 grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal className="md:order-2">
          <SectionBadge>Vendor-trained AI</SectionBadge>
          <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            AI that reads every vendor's language.
          </h3>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Our OCR models are trained per vendor. They extract shipping temperatures, lot numbers,
            and conditions that generic tools miss. And they get smarter with every delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GradientButton as="link" to="/product/receiving">
              Explore receiving <ArrowRight className="size-4" />
            </GradientButton>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative md:order-1">
          <GradientGlow size="md" className="-z-10 -left-10 top-10 opacity-40" />
          <PhonePackingSlipMockup />
        </Reveal>
      </div>

    </Section>
  );
}
