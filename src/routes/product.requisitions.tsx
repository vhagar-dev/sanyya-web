import { createFileRoute } from "@tanstack/react-router";
import {
  MessageSquare,
  Wand2,
  CheckCheck,
  ArrowRightLeft,
  Upload,
  History,
  FileUp,
  PenLine,
  UploadCloud,
  FileText,
  Sparkles,
  Check,
  ArrowRight,
  ArrowDown,
  Files,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge, GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { SlackMockup } from "@/components/mockups/SlackMockup";

export const Route = createFileRoute("/product/requisitions")({
  head: () => ({
    meta: [
      { title: "Requisitions | Sanyya" },
      {
        name: "description",
        content:
          "Create purchase requests from Slack, from a vendor quote, or from scratch. Sanyya fits however your team works.",
      },
      { property: "og:title", content: "Requisitions | Sanyya" },
      {
        property: "og:description",
        content:
          "Create purchase requests from Slack, from a vendor quote, or from scratch.",
      },
    ],
  }),
  component: RequisitionsPage,
});

const steps = [
  {
    title: "Just ask",
    body: "A team member types a natural-language request in Slack: \"I need 5 lab benches for the new clean room.\" The agent picks it up.",
  },
  {
    title: "Fill the gaps",
    body: "The agent identifies missing data (budget code, vendor preference, delivery date) and asks for it right in the thread.",
  },
  {
    title: "Route for approval",
    body: "The completed requisition is auto-routed to the right approver based on your workflow rules. They see full context and approve via Slack buttons.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "In-Chat PR Creation",
    body: "Type a natural-language request in Slack. The AI agent creates a structured purchase request from the conversation.",
  },
  {
    icon: FileUp,
    title: "Quote-to-PR Upload",
    body: "Drag and drop a vendor quote, PDF, image, or email attachment. AI extracts line items, pricing, and vendor details automatically.",
  },
  {
    icon: Wand2,
    title: "Smart Gap Detection",
    body: "Whether from Slack or a quote upload, Sanyya identifies missing fields (budget code, delivery date, approver) and prompts for them.",
  },
  {
    icon: CheckCheck,
    title: "Contextual Approvals",
    body: "Approvers see full context: line items, spend impact, budget remaining, and requestor notes. Approve via Sanyya or Slack.",
  },
  {
    icon: ArrowRightLeft,
    title: "Auto-Convert to PO",
    body: "Approved requisitions convert to purchase orders automatically, same line items, same pricing, same vendor. No re-entry.",
  },
  {
    icon: Upload,
    title: "Manual Entry via Web UI",
    body: "For teams that prefer forms, the full web interface supports manual PR creation with vendor lookup and item catalogs.",
  },
  {
    icon: History,
    title: "Full Audit Trail",
    body: "Every PR tracks its origin, Slack conversation, uploaded quote, or manual entry, with timestamps, approvals, and change history.",
  },
  {
    icon: Files,
    title: "Multi-Format Support",
    body: "Upload PDFs, images, screenshots, or forwarded email attachments. Sanyya's AI handles the format differences across vendors.",
  },
];

function QuoteUploadVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm sm:p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
        {/* Panel 1, Upload */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            01 · Upload
          </div>
          <div className="rounded-lg border-2 border-dashed border-[hsl(217_91%_57%/0.4)] bg-[hsl(217_91%_57%/0.05)] p-5 text-center">
            <UploadCloud className="mx-auto size-8 text-[hsl(217_91%_45%)]" />
            <div className="mt-2 text-xs font-medium text-foreground sm:text-sm">
              <span className="hidden sm:inline">Drop a quote here or click to upload</span>
              <span className="sm:hidden">Tap to upload</span>
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">PDF, image, or email attachment</div>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-card px-2.5 py-1.5 text-[11px] font-medium text-foreground">
            <FileText className="size-3.5 text-[hsl(217_91%_45%)]" />
            Fisher_Quote_2024-0847.pdf
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center md:px-1">
          <ArrowRight className="hidden size-5 text-[hsl(258_90%_55%)] md:block" />
          <ArrowDown className="size-5 text-[hsl(258_90%_55%)] md:hidden" />
        </div>

        {/* Panel 2, AI Extracts */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              02 · AI Extracts
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-bold text-white">
              <Sparkles className="size-3" />
              AI
            </span>
          </div>
          <div className="space-y-2 rounded-lg border border-border bg-card/60 p-3 text-[11px]">
            <div className="rounded bg-[hsl(217_91%_57%/0.1)] px-2 py-1">
              <span className="text-muted-foreground">Vendor:</span>{" "}
              <span className="font-medium text-foreground">Fisher Scientific</span>
            </div>
            <div className="rounded bg-[hsl(258_90%_66%/0.1)] px-2 py-1">
              <span className="text-muted-foreground">Item 1:</span>{" "}
              <span className="font-medium text-foreground">DMEM, high glucose, 500mL × 6, $284.00</span>
            </div>
            <div className="rounded bg-[hsl(190_85%_60%/0.12)] px-2 py-1">
              <span className="text-muted-foreground">Item 2:</span>{" "}
              <span className="font-medium text-foreground">FBS, qualified, 500mL × 2, $812.00</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground">Extracted by AI</div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center md:px-1">
          <ArrowRight className="hidden size-5 text-[hsl(258_90%_55%)] md:block" />
          <ArrowDown className="size-5 text-[hsl(258_90%_55%)] md:hidden" />
        </div>

        {/* Panel 3, Review & Submit */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              03 · Review & Submit
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[hsl(160_84%_50%/0.4)] bg-[hsl(160_84%_50%/0.1)] px-2 py-0.5 text-[10px] font-medium text-[hsl(160_84%_30%)]">
              <Check className="size-3" />
              Ready for Approval
            </span>
          </div>
          <div className="space-y-1.5 rounded-lg border border-border bg-card/60 p-3 text-[11px]">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Vendor</span>
              <span className="font-medium text-foreground">Fisher Scientific</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Items</span>
              <span className="font-medium text-foreground">2 line items</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium text-foreground">$1,096.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Budget code</span>
              <span className="font-medium text-foreground">Select…</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery date</span>
              <span className="font-medium text-foreground">,</span>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button className="inline-flex h-8 flex-1 items-center justify-center rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-3 text-[11px] font-semibold text-white shadow-sm">
              Submit for Approval
            </button>
            <button className="inline-flex h-8 flex-1 items-center justify-center rounded-md border border-border bg-card px-3 text-[11px] font-medium text-foreground">
              Edit Details
            </button>
          </div>
        </div>
      </div>

      {/* Benefit badges */}
      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {[
          "Works with PDFs, images, and email attachments",
          "Extracts vendor, items, quantities, and pricing",
          "Edit anything before submitting, AI assists, you decide",
        ].map((b) => (
          <div
            key={b}
            className="flex items-start gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-[hsl(160_84%_40%)]" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const threeWays = [
  {
    accent: "bg-[hsl(258_90%_66%)]",
    icon: MessageSquare,
    iconColor: "text-[hsl(258_90%_55%)]",
    title: "From Slack",
    body: "Type a request in natural language. The AI agent handles the rest.",
  },
  {
    accent: "bg-[hsl(217_91%_57%)]",
    icon: FileUp,
    iconColor: "text-[hsl(217_91%_45%)]",
    title: "From a Quote",
    body: "Drop a vendor quote. AI extracts the details into a structured PR.",
  },
  {
    accent: "bg-[hsl(160_84%_45%)]",
    icon: PenLine,
    iconColor: "text-[hsl(160_84%_35%)]",
    title: "From Scratch",
    body: "Open the web form and fill it in manually. Full control when you need it.",
  },
];

function RequisitionsPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Requisitions" },
        ]}
        badge="Requisitions"
        title={
          <>
            Your team lives in Slack. Now their{" "}
            <span className="text-brand-gradient">procurement does too.</span>
          </>
        }
        subtitle="Create purchase requests from Slack, from a vendor quote, or from scratch. The Sanyya Slack Agent handles natural-language requests. Drag-and-drop a quote and AI extracts the details. Or fill in a form manually. However your team works | Sanyya fits."
        visual={<SlackMockup variant="compact" />}
      />

      <Section id="how-it-works">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Three steps from message to <span className="text-brand-gradient">matched PO</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <HowItWorks steps={steps} visual={<SlackMockup />} />
        </div>
      </Section>

      <Section id="quote-upload">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Quote-to-PR</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Have a Quote? <span className="text-brand-gradient">Just Drop It In.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Not every purchase starts in Slack. Sometimes you already have a vendor quote, as a PDF, email
              attachment, or screenshot. Drag it into Sanyya and AI reads the document, extracts line items,
              pricing, vendor details, and quantities, then populates a purchase request ready for review and
              approval.
            </p>
          </Reveal>
        </div>
        <div className="mt-12">
          <Reveal delay={0.15}>
            <QuoteUploadVisual />
          </Reveal>
        </div>
      </Section>

      <Section id="three-ways" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Flexible intake</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              One System, <span className="text-brand-gradient">Three Ways In</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {threeWays.map((w) => (
            <Reveal key={w.title}>
              <GlassCard className="relative overflow-hidden h-full pt-6">
                <div className={`absolute inset-x-0 top-0 h-1 ${w.accent}`} />
                <div className="grid size-10 place-items-center rounded-lg border border-border bg-background/50">
                  <w.icon className={`size-5 ${w.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for the way your team actually requests things
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={features} />
        </div>
      </Section>
    </>
  );
}
