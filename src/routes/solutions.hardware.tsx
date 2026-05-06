import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Clock,
  Layers,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ShoppingCart,
  Truck,
  PackageCheck,
  Receipt,
  GitBranch,
  Search,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GhostButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";

export const Route = createFileRoute("/solutions/hardware")({
  head: () => ({
    meta: [
      { title: "Hardware & Robotics Procurement | Sanyya" },
      {
        name: "description",
        content:
          "Procurement built for hardware teams. BOM-linked sourcing, multi-distributor quoting, lead time monitoring, and component-level receiving.",
      },
      { property: "og:title", content: "Hardware & Robotics | Sanyya" },
      {
        property: "og:description",
        content: "Procurement built for what you build.",
      },
    ],
  }),
  component: HardwarePage,
});

const pains = [
  {
    title: "BOM Sourcing Complexity",
    icon: Cpu,
    accent: "bg-sky-500",
    iconCls: "text-sky-600 bg-sky-50",
    text: "A single product can have 200+ components from 15 different vendors. Tracking what's been ordered, what's in transit, and what's on the shelf across all of them is a nightmare without a system that ties POs to BOMs.",
  },
  {
    title: "Long & Unpredictable Lead Times",
    icon: Clock,
    accent: "bg-amber-500",
    iconCls: "text-amber-600 bg-amber-50",
    text: "A critical MCU has a 12-week lead time that just jumped to 18 weeks. Your build schedule just slipped, but nobody told procurement until the parts didn't show up. You need visibility into lead times before they become surprises.",
  },
  {
    title: "MOQs & Vendor Fragmentation",
    icon: Layers,
    accent: "bg-violet-500",
    iconCls: "text-violet-600 bg-violet-50",
    text: "You need 50 units but the MOQ is 500. Digi-Key has it at one price, Mouser at another, and Arrow can only ship next quarter. Comparing across vendors shouldn't require three browser tabs and a spreadsheet.",
  },
  {
    title: "Compliance & Certification Tracking",
    icon: ShieldCheck,
    accent: "bg-blue-500",
    iconCls: "text-blue-600 bg-blue-50",
    text: "RoHS, REACH, UL, CE, every component needs compliance documentation that stays with it from sourcing through production. Losing track of a certification can delay a product launch by months.",
  },
];

const flow = [
  { icon: MessageSquare, title: "Engineer Requests", desc: "Component request linked to BOM or project" },
  { icon: Search, title: "Lead Reviews", desc: "Budget + vendor + lead time context in one view" },
  { icon: GitBranch, title: "Quote & Source", desc: "Compare across Digi-Key, Mouser, Arrow, and others" },
  { icon: ShoppingCart, title: "PO Dispatched", desc: "Auto-generated or staged for procurement review" },
  { icon: Truck, title: "Delivery Tracked", desc: "Lead time monitoring with alerts for delays" },
  { icon: PackageCheck, title: "Parts Received", desc: "Mobile capture: verify part numbers, quantities, condition" },
  { icon: Receipt, title: "Invoice Matched", desc: "3-way match: PO ↔ GRN ↔ Invoice" },
];

const capabilities: [string, string][] = [
  ["Multi-Vendor Quoting", "Compare pricing, availability, and lead times across distributors in one view."],
  ["Lead Time Monitoring", "Track expected delivery dates and get alerts when lead times change or shipments are delayed."],
  ["Component-Level Receiving", "Verify part numbers, quantities, and condition at the dock with the mobile app."],
  ["MOQ & Packaging Awareness", "See minimum order quantities, price breaks, and packaging units alongside your actual need."],
  ["Compliance Documentation", "Attach RoHS, REACH, UL, and other certifications to vendor and component records."],
  ["BOM-Linked Requisitions", "Tie purchase requests to specific BOMs or engineering projects for full traceability."],
  ["Vendor Scorecards", "Track on-time delivery rates, quality issues, and pricing trends across your component suppliers."],
  ["Blanket POs for Recurring Parts", "Set up standing orders for frequently used components with automatic drawdown tracking."],
];

const vendors = [
  "Digi-Key",
  "Mouser Electronics",
  "Arrow Electronics",
  "McMaster-Carr",
  "Newark / element14",
  "RS Components",
  "JLCPCB",
  "Misumi",
];

const subVerticals: [string, string][] = [
  ["Robotics & Automation", "Manage mechatronics sourcing, actuator procurement, and electronics assembly supply chains."],
  ["Consumer Electronics", "Track component sourcing from prototype through production runs with full BOM traceability."],
  ["Industrial & IoT Devices", "Handle sensor procurement, enclosure sourcing, and multi-site inventory for connected devices."],
];

function HardwareHeroVisual() {
  const items = [
    { name: "MCU, STM32F4", vendor: "Digi-Key", status: "Ordered", tone: "blue" as const },
    { name: "Linear Actuator, Actuonix L16", vendor: "McMaster-Carr", status: "In Transit · 6 wks", tone: "amber" as const },
    { name: "PCB Fab, 4-layer", vendor: "JLCPCB", status: "Received", tone: "emerald" as const },
    { name: "FPGA, Xilinx Spartan-7", vendor: "Mouser", status: "Lead Time Alert · +4 wks", tone: "red" as const },
    { name: "Stepper Driver, A4988", vendor: "Arrow", status: "Ordered", tone: "blue" as const },
  ];
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    red: "border-red-200 bg-red-50 text-red-700",
  };
  return (
    <div className="relative rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)]">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          BOM · Robotics Build R-201
        </div>
        <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
          Live
        </span>
      </div>
      <div className="space-y-2">
        {items.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-medium text-foreground">{r.name}</div>
              <div className="truncate text-[11px] text-muted-foreground">{r.vendor}</div>
            </div>
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[r.tone]}`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-700">
        <span>1 component flagged · review lead time impact</span>
        <Clock className="size-3.5" />
      </div>
    </div>
  );
}

function HardwarePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions" },
                { label: "Hardware & Robotics" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-sky-700">
                  Hardware & Robotics
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Procurement Built for{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    What You Build
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  From electronic components to machined parts, hardware teams buy differently.
                  Long lead times, strict BOMs, MOQs, and multi-vendor sourcing make generic
                  procurement tools useless. Sanyya was designed for the complexity of
                  physical-product companies.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                    Book a Demo <ArrowRight className="size-4" />
                  </GradientButton>
                  <GhostButton href="/" size="lg" className="w-full sm:w-auto">
                    See the Platform <ArrowRight className="size-4" />
                  </GhostButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <HardwareHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-base text-foreground/80 md:text-lg">
            Hardware and robotics companies don't buy like SaaS companies. You're sourcing from
            component distributors like Digi-Key, Mouser, and Arrow. You're ordering machined
            parts from McMaster-Carr. You're managing PCB fab runs, MOQs, and lead times measured
            in weeks, not days. Sanyya understands this because it was built for physical-spend
            companies from day one.
          </p>
        </Reveal>
      </Section>

      {/* PAIN POINTS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Pain Points</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              The Problems Every Scaling Hardware Team Faces
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <div className={`h-1.5 w-full ${p.accent}`} />
                <div className="p-6">
                  <div className={`grid size-11 place-items-center rounded-xl ${p.iconCls}`}>
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Workflow</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              End-to-End Procurement for Hardware Teams
            </h2>
          </div>
        </Reveal>
        <div className="mt-12">
          {/* Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 opacity-40" />
              <div className="relative grid grid-cols-7 gap-3">
                {flow.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.04}>
                    <div className="flex flex-col items-center text-center">
                      <div className="grid size-14 place-items-center rounded-full border border-border bg-white shadow-sm">
                        <s.icon className="size-5 text-blue-500" />
                      </div>
                      <div className="mt-3 text-sm font-semibold text-foreground">{s.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile vertical */}
          <div className="space-y-3 lg:hidden">
            {flow.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.03}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50">
                    <s.icon className="size-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {i + 1}. {s.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Capabilities</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Key Capabilities for Hardware
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.03}>
              <div className="flex h-full gap-4 rounded-xl border border-border bg-secondary p-6">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-500" />
                <div>
                  <div className="font-semibold text-foreground">{title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* VENDORS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Distributors</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Works With the Distributors You Already Use
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {vendors.map((v, i) => (
            <Reveal key={v} delay={i * 0.03}>
              <div className="flex h-16 items-center justify-center rounded-xl border border-border bg-white text-center text-sm font-medium text-foreground shadow-sm">
                {v}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Sanyya works with any vendor. These are the ones hardware teams use most.
        </p>
      </Section>

      {/* SUB-VERTICALS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Sub-Verticals</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Industries Within Hardware
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {subVerticals.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <span className="inline-block size-2 rounded-full bg-sky-500" />
                <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section size="tight">
        <Reveal>
          <div className="rounded-3xl border border-border bg-secondary p-8 text-center sm:p-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Stop Managing Hardware Procurement{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                in Spreadsheets.
              </span>
            </h2>
            <div className="mt-8">
              <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                Book a Demo <ArrowRight className="size-4" />
              </GradientButton>
            </div>
          </div>
        </Reveal>
      </Section>

    </>
  );
}
