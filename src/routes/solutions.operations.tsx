import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  PackageCheck,
  BarChart3,
  Users,
  LayoutDashboard,
  FileText,
  Sparkles,
  AlertCircle,
  Truck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GhostButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { ModuleCard } from "@/components/site/ModuleCard";

export const Route = createFileRoute("/solutions/operations")({
  head: () => ({
    meta: [
      { title: "Sanyya for Operations, Close the Loop on Every Delivery" },
      {
        name: "description",
        content:
          "One system to track requisitions, receiving, inventory, and matching, built for operations leads who keep procurement on track.",
      },
      { property: "og:title", content: "Sanyya for Operations" },
      {
        property: "og:description",
        content: "From reactive to proactive. The operations workflow, finally connected.",
      },
    ],
  }),
  component: OperationsPage,
});

const before = [
  { time: "8:30 AM", text: "Check email for shipping confirmations from 4 different vendors. Copy tracking numbers into a spreadsheet." },
  { time: "9:15 AM", text: "Walk to the dock. A delivery arrived yesterday but nobody logged it. Photograph the packing slip with your phone." },
  { time: "10:00 AM", text: "Researcher asks 'Did our antibodies arrive?' You don't know, check the spreadsheet, then walk back to the dock." },
  { time: "1:30 PM", text: "Finance pings you: 'Can you confirm this invoice matches what we received?' Pull up the PO, find the packing slip photo in your camera roll, compare line by line." },
  { time: "3:00 PM", text: "Realize you're out of pipette tips. The reorder was supposed to happen last week. Nobody flagged it." },
];

const after = [
  { time: "8:30 AM", text: "Open Sanyya. See today's expected deliveries, what arrived yesterday, and any items flagged for follow-up, all in one view." },
  { time: "9:15 AM", text: "Delivery arrives. Scan the packing slip with the mobile app. GRN auto-populates. Stock levels update. Done in 90 seconds." },
  { time: "10:00 AM", text: "Researcher asks about antibodies. Search 'antibodies' in Sanyya, PO, GRN, and current stock show up instantly." },
  { time: "1:30 PM", text: "Finance asks about an invoice. The 3-way match already ran. PO ↔ GRN ↔ Invoice: matched. You click 'confirm.'" },
  { time: "3:00 PM", text: "Sanyya flagged low pipette tip stock 3 days ago. The requisition was auto-created. It's already with the approver." },
];

const modules = [
  {
    title: "Receiving",
    category: "RECEIVING",
    icon: PackageCheck,
    iconCls: "text-cyan-600 bg-cyan-50",
    text: "Scan packing slips, verify deliveries, and create GRNs from the dock, with the mobile app or desktop.",
    href: "/product/receiving",
  },
  {
    title: "Inventory Management",
    category: "STOCK",
    icon: BarChart3,
    iconCls: "text-teal-600 bg-teal-50",
    text: "Real-time stock levels driven by receiving data. Reorder alerts. Consumption tracking. No more manual counts.",
    href: "/product/inventory",
  },
  {
    title: "Vendor Management",
    category: "INTELLIGENCE",
    icon: Users,
    iconCls: "text-violet-600 bg-violet-50",
    text: "Scorecards, delivery trends, and pricing history for every supplier. Know who's reliable and who isn't.",
    href: "/product/vendors",
  },
  {
    title: "Dashboards & Reporting",
    category: "VISIBILITY",
    icon: LayoutDashboard,
    iconCls: "text-blue-600 bg-blue-50",
    text: "Search across every document in the system. Build custom dashboards. See what's in stock, what's arriving, and what's missing.",
    href: "/product/dashboards",
  },
  {
    title: "Requisitions",
    category: "INTAKE",
    icon: FileText,
    iconCls: "text-emerald-600 bg-emerald-50",
    text: "See every request, who submitted it, and where it is in the approval process. No more chasing.",
    href: "/product/requisitions",
  },
  {
    title: "AI Match Engine",
    category: "RECONCILIATION",
    icon: Sparkles,
    iconCls: "text-amber-600 bg-amber-50",
    text: "Sanyya automatically matches POs, GRNs, and invoices, flagging discrepancies before they become problems.",
    href: "/product/match-engine",
  },
];

const stats: [string, string][] = [
  ["One System", "Requisitions, receiving, inventory, vendors, and invoicing, all connected."],
  ["Real-Time Visibility", "Know what's on the shelf, what's in transit, and what's been ordered, at any time."],
  ["No More Spreadsheets", "Stop copy-pasting between email, spreadsheets, and shared drives."],
  ["Proactive Alerts", "Low stock, delayed shipments, and matching discrepancies, flagged before they become fires."],
];

function OperationsHeroVisual() {
  const deliveries = [
    { vendor: "Fisher Scientific", item: "Pipette tips · 2 cases", status: "Arrived", tone: "emerald" as const },
    { vendor: "VWR", item: "Cell media · 4 bottles", status: "In Transit", tone: "blue" as const },
    { vendor: "Sigma-Aldrich", item: "Reagent kit", status: "Delayed", tone: "amber" as const },
  ];
  const tones = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };
  return (
    <div className="relative grid gap-3 rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)] md:grid-cols-2">
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Deliveries Today
        </div>
        <div className="space-y-2">
          {deliveries.map((d) => (
            <div key={d.vendor} className="rounded-lg border border-border bg-secondary p-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[12px] font-medium text-foreground">{d.vendor}</div>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[d.tone]}`}>
                  {d.status}
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground">{d.item}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Action Items
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <div>
              <div className="text-[12px] font-medium text-amber-900">Low stock: Pipette tips</div>
              <div className="text-[11px] text-amber-800/80">Auto-requisition pending approval</div>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
            <AlertCircle className="size-4 shrink-0 text-amber-600" />
            <div>
              <div className="text-[12px] font-medium text-amber-900">Low stock: Falcon tubes</div>
              <div className="text-[11px] text-amber-800/80">Auto-requisition pending approval</div>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 p-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-blue-600" />
            <div>
              <div className="text-[12px] font-medium text-blue-900">Reconcile INV-3291</div>
              <div className="text-[11px] text-blue-800/80">3-way match ready · 1 click</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline({ items, tone }: { items: { time: string; text: string }[]; tone: "muted" | "aurora" }) {
  return (
    <div className="relative">
      <div
        className={`absolute left-[19px] top-2 bottom-2 w-0.5 ${
          tone === "aurora"
            ? "bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 opacity-60"
            : "bg-border"
        }`}
      />
      <ol className="space-y-4">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <li className="relative pl-12">
              <div
                className={`absolute left-2 top-3 grid size-7 place-items-center rounded-full border border-border bg-white shadow-sm`}
              >
                {tone === "aurora" ? (
                  <CheckCircle2 className="size-3.5 text-emerald-500" />
                ) : (
                  <Clock className="size-3.5 text-muted-foreground" />
                )}
              </div>
              <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {item.time}
                </div>
                <p className="mt-1.5 text-sm text-foreground/90">{item.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function OperationsPage() {
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
                { label: "Operations" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-blue-600">
                  For Operations
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Close the Loop on{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    Every Delivery
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  You're the person who knows when something doesn't show up. When a packing slip
                  doesn't match the PO. When a vendor ships the wrong item. Sanyya gives you one
                  system to track it all, from requisition to invoice, so nothing falls through
                  the cracks.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                    Book a Demo <ArrowRight className="size-4" />
                  </GradientButton>
                  <GhostButton href="/" size="lg" className="w-full sm:w-auto">
                    See How It Works <ArrowRight className="size-4" />
                  </GhostButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <OperationsHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEFORE TIMELINE */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge tone="neutral">Your Day, Before Sanyya</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Sound Familiar?
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <Timeline items={before} tone="muted" />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            This is what procurement looks like without a system. Sanyya replaces all of this.
          </p>
        </div>
      </Section>

      {/* AFTER TIMELINE */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Your Day, With Sanyya</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Now Imagine This Instead
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          <Timeline items={after} tone="aurora" />
          <p className="mt-6 text-center text-base text-foreground">
            From reactive to proactive.{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text font-semibold text-transparent">
              That's the difference.
            </span>
          </p>
        </div>
      </Section>

      {/* MODULES */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Modules</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Built for How Operations Actually Works
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.04}>
              <ModuleCard
                title={m.title}
                category={m.category}
                icon={m.icon}
                iconCls={m.iconCls}
                text={m.text}
                href={m.href}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>What You Get</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              What Operations Gets With Sanyya
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                <Truck className="size-5 text-blue-500" />
                <div className="mt-3 text-base font-semibold text-foreground">{t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
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
              Your Operations Workflow,{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Finally in One Place.
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
