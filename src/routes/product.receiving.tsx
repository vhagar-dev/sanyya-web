import { createFileRoute } from "@tanstack/react-router";
import {
  ListChecks,
  Hash,
  Snowflake,
  FlaskConical,
  AlertTriangle,
  CalendarClock,
  Truck,
  FileBadge,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge, GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { PhonePackingSlipMockup } from "@/components/mockups/PhonePackingSlipMockup";
import { VendorFormatsMockup } from "@/components/mockups/VendorFormatsMockup";

export const Route = createFileRoute("/product/receiving")({
  head: () => ({
    meta: [
      { title: "Warehouse & Lab Receiving | Sanyya" },
      {
        name: "description",
        content:
          "A mobile app with vendor-trained OCR. Capture deliveries in seconds, extract critical data automatically, and close the loop on every PO.",
      },
      { property: "og:title", content: "Warehouse & Lab Receiving | Sanyya" },
      {
        property: "og:description",
        content:
          "Mobile receiving with AI-powered OCR trained per vendor. Lot numbers, ship temps, and storage conditions, captured at the dock.",
      },
    ],
  }),
  component: ReceivingPage,
});

const steps = [
  {
    title: "Snap the packing slip",
    body: "Open the mobile app at the loading dock or lab bench. Take a photo of the packing slip.",
  },
  {
    title: "AI extracts everything",
    body: "Sanyya's vendor-trained OCR extracts line items, quantities, lot numbers, shipping temperature, storage conditions, and more, formatted exactly right for each vendor.",
  },
  {
    title: "Matched & verified",
    body: "The GRN is auto-matched to the corresponding PO. Discrepancies are flagged. The delivery record feeds invoicing, inventory, and vendor scoring.",
  },
];

const extractedFields = [
  { icon: ListChecks, title: "Line items & quantities", body: "Catch shortages and overbilling before they hit your budget." },
  { icon: Hash, title: "Lot / batch numbers", body: "Full traceability from supplier to experiment. Critical for FDA audits and GLP compliance." },
  { icon: Snowflake, title: "Shipping temperature", body: "Prove cold chain integrity. One temperature excursion can invalidate months of research." },
  { icon: FlaskConical, title: "Storage conditions", body: "Ensure reagent efficacy from dock to bench. Wrong storage ruins expensive materials silently." },
  { icon: AlertTriangle, title: "Hazmat indicators", body: "Protect your team. EHS compliance starts at the point of delivery, not after." },
  { icon: CalendarClock, title: "Expiration dates", body: "Prevent wasted spend on expired inventory and ensure experimental reproducibility." },
  { icon: Truck, title: "Carrier & tracking info", body: "Resolve delivery disputes and vendor accountability with documented proof." },
  { icon: FileBadge, title: "Certificate of Analysis refs", body: "Connect every batch to its quality documentation. Required for regulated research and manufacturing." },
];

const industries = [
  {
    title: "Biotech",
    body: "Temperature-sensitive reagents, lot traceability, sterility requirements.",
  },
  {
    title: "Hardware",
    body: "Component specs, compliance certifications, country-of-origin data.",
  },
  {
    title: "Robotics",
    body: "Part tolerances, material specifications, vendor certifications.",
  },
];

function ReceivingPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Receiving" },
        ]}
        badge="Warehouse & Lab Receiving"
        title={
          <>
            Your team receives shipments at the dock.{" "}
            <span className="text-brand-gradient">Not at a desk.</span>
          </>
        }
        subtitle="A mobile app with AI-powered OCR trained on vendor-specific packing slip formats. Capture deliveries in seconds, extract critical data automatically, and close the loop on every PO."
        visual={<PhonePackingSlipMockup />}
      />

      <Section id="problem" size="tight">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/40 p-6 sm:p-8 md:p-10">
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The person receiving your shipment is holding a box, not sitting at a computer. They
              need to confirm what arrived, log it, and move on. But most procurement tools assume
              you're at a desktop. And most OCR tools can't tell the difference between a Fisher
              Scientific packing slip and a VWR one.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="how-it-works">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Snap, extract, <span className="text-brand-gradient">match</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <HowItWorks steps={steps} visual={<PhonePackingSlipMockup />} />
        </div>
      </Section>

      <Section id="vendors">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Vendor-trained AI</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Every vendor formats differently. Our AI knows each one.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              The OCR models are trained per vendor, Fisher Scientific, VWR, Thermo Fisher each
              have different layouts. Sanyya learns where to find the critical data. The more you
              use it, the smarter it gets. Manual corrections train the model. Accuracy compounds
              over time.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          <VendorFormatsMockup />
        </Reveal>
      </Section>

      <Section id="extracted">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>What gets extracted</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The data you actually need
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={extractedFields} />
        </div>
      </Section>

      <Section id="industries">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Cross-industry value</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for physical goods, period
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <GlassCard key={i.title}>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {i.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

    </>
  );
}
