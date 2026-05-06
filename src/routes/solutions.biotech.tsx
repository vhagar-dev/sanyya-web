import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Thermometer,
  QrCode,
  FlaskConical,
  ShieldCheck,
  
  MessageSquare,
  CheckCircle2,
  ShoppingCart,
  Truck,
  Boxes,
  Receipt,
  Wallet,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GhostButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";

export const Route = createFileRoute("/solutions/biotech")({
  head: () => ({
    meta: [
      { title: "Biotech & Life Sciences Procurement | Sanyya" },
      {
        name: "description",
        content:
          "Procurement built for the lab. Reagent ordering, lot traceability, vendor-trained OCR, and Quartzy integration for biotech teams.",
      },
      { property: "og:title", content: "Biotech & Life Sciences | Sanyya" },
      {
        property: "og:description",
        content: "Procurement built for the lab, not the back office.",
      },
    ],
  }),
  component: BiotechPage,
});

const pains = [
  {
    title: "Temperature-Sensitive Receiving",
    icon: Thermometer,
    accent: "bg-cyan-400",
    iconCls: "text-cyan-500 bg-cyan-50",
    text: "A reagent shipped at -20°C arrives at the dock. Was it stored correctly in transit? Our mobile app captures shipping conditions directly from the packing slip, data most procurement tools don't even look for.",
  },
  {
    title: "Lot Traceability",
    icon: QrCode,
    accent: "bg-violet-500",
    iconCls: "text-violet-500 bg-violet-50",
    text: "When the FDA asks for lot numbers on every reagent used in a study, you need an audit trail that goes from PO to packing slip to lab shelf. Sanyya's AI extracts lot numbers automatically during receiving.",
  },
  {
    title: "Quartzy-Dependent Workflows",
    icon: FlaskConical,
    accent: "bg-emerald-500",
    iconCls: "text-emerald-600 bg-emerald-50",
    text: "Your lab runs on Quartzy. Your finance team has never heard of it. Sanyya bridges the gap, connecting lab supply management with procurement, approvals, and accounting.",
  },
  {
    title: "Compliance & Audit Readiness",
    icon: ShieldCheck,
    accent: "bg-blue-500",
    iconCls: "text-blue-500 bg-blue-50",
    text: "SOC 2 auditors want proof of delivery. FDA auditors want lot traceability. Your board wants spend visibility. Sanyya's connected document trail gives all of them what they need, without a month-long scramble.",
  },
];

const flow = [
  { icon: MessageSquare, title: "Scientist Requests", desc: "Reagent request via Slack or quote" },
  { icon: CheckCircle2, title: "PI Approves", desc: "Budget-aware approval with project context" },
  { icon: ShoppingCart, title: "PO to Vendor", desc: "Auto-dispatched or staged for procurement review" },
  { icon: Truck, title: "Delivery at Dock", desc: "Mobile capture: temp, lot #, conditions" },
  { icon: Boxes, title: "Inventory Updated", desc: "Real-time stock in Sanyya + Quartzy sync" },
  { icon: Receipt, title: "Invoice Matched", desc: "3-way match: PO ↔ GRN ↔ Invoice" },
  { icon: Wallet, title: "Ready to Pay", desc: "Pushed to your bill pay platform with full audit trail" },
];

const capabilities = [
  ["Vendor-Trained OCR", "AI models trained on Fisher, VWR, Sigma, Thermo, and other life science vendor packing slip formats."],
  ["Temperature & Condition Capture", "Automatically extracts shipping temperature, storage conditions, and hazmat indicators."],
  ["Lot & Batch Tracking", "Lot numbers extracted at receiving and linked to POs for full traceability."],
  ["Quartzy Integration", "Native connectivity with the lab management tool your scientists already use."],
  ["PI & Department Routing", "Approval workflows designed for academic and biotech org structures, PI sign-off, department budgets, project-level controls."],
  ["CoA & Documentation", "Attach Certificates of Analysis and vendor documentation to delivery records automatically."],
  ["Slack Agent for Scientists", "Scientists request supplies in Slack. No procurement portal. No training. Just natural language."],
  ["Audit-Ready Records", "Connected document trail from quote to payment, with every match, approval, and delivery logged."],
];

function BiotechHeroVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)]">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Lab receiving · Today
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          Live
        </span>
      </div>
      <div className="space-y-2">
        {[
          { name: "DMEM media · 500mL", vendor: "Thermo Fisher", lot: "L-22841", temp: "4°C", ok: true },
          { name: "Anti-CD3 antibody", vendor: "BioLegend", lot: "B-99102", temp: "-20°C", ok: true },
          { name: "Trypsin-EDTA · 100mL", vendor: "Sigma-Aldrich", lot: "S-77410", temp: "-80°C", ok: true },
          { name: "Pipette tips · 1000ct", vendor: "VWR", lot: "V-11023", temp: "Ambient", ok: true },
        ].map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-lg border border-border bg-secondary px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-medium text-foreground">{r.name}</div>
              <div className="truncate text-[11px] text-muted-foreground">
                {r.vendor} · Lot {r.lot}
              </div>
            </div>
            <div className="ml-3 flex items-center gap-2 shrink-0">
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700">
                {r.temp}
              </span>
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                <CheckCircle2 className="size-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700">
        <span>3-way match complete · synced to Quartzy</span>
        <CheckCircle2 className="size-3.5" />
      </div>
    </div>
  );
}

function BiotechPage() {
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
                { label: "Biotech & Life Sciences" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-emerald-700">
                  Biotech & Life Sciences
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Procurement Built for the Lab, <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    Not the Back Office
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  From reagent ordering to equipment receiving, Sanyya was designed by someone
                  who's sat in the lab ops seat. Every workflow is built for how biotech teams
                  actually buy things, with the speed, compliance, and scientific awareness your
                  team needs.
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
              <BiotechHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>


      {/* PAIN POINTS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Pain Points</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              The Problems Every Scaling Biotech Faces
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

      {/* WORKFLOW PIPELINE */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Workflow</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              End-to-End Procurement for the Lab
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
              Key Capabilities for Biotech
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

      {/* SUB-VERTICALS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Sub-Verticals</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Industries Within Biotech
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Therapeutics & Drug Discovery", "Manage reagent ordering, CRO spend, and lab equipment procurement with compliance built in."],
            ["Diagnostics & Medical Devices", "Track component sourcing, lot traceability, and vendor qualification across your supply chain."],
            ["Synthetic Biology & AgBio", "Handle custom reagent ordering, strain library management supplies, and specialized equipment procurement."],
          ].map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <span className="inline-block size-2 rounded-full bg-emerald-500" />
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
              Built for Biotech.{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                By Someone Who's Been There.
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
