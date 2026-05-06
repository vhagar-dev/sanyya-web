import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Unplug,
  Sparkles,
  Gauge,
  Repeat,
  Layers,
  CheckCheck,
  Send,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/purchase-orders")({
  head: () => ({
    meta: [
      { title: "Purchase Orders | Sanyya" },
      {
        name: "description",
        content:
          "The single source of truth for all authorized spend. Real-time visibility into open POs, blanket drawdowns, and spend against budget, with full audit history.",
      },
      { property: "og:title", content: "Purchase Orders | Sanyya" },
      {
        property: "og:description",
        content:
          "Track every commitment in real time. Auto-generated POs, blanket drawdown tracking, 2- and 3-way matching, full audit trail.",
      },
    ],
  }),
  component: PurchaseOrdersPage,
});

function PODashboardMockup() {
  const rows = [
    {
      id: "PO-2024-0847",
      vendor: "Fisher Scientific",
      total: "$12,400",
      status: "Partially Received",
      tone: "amber",
      pct: 60,
    },
    {
      id: "PO-2024-0851",
      vendor: "VWR, Blanket",
      total: "$34,200 / $50,000",
      status: "Active",
      tone: "blue",
      pct: 68,
    },
    {
      id: "PO-2024-0852",
      vendor: "Lab Cleaning Co.",
      total: "$2,400 / mo",
      status: "8/12 billed",
      tone: "emerald",
      pct: 67,
    },
  ] as const;
  const toneBadge = {
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  } as const;
  const toneFill = {
    amber: "from-amber-400 to-amber-500",
    blue: "from-blue-500 to-violet-500",
    emerald: "from-emerald-400 to-emerald-500",
  } as const;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Open Purchase Orders
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-blue-600">
          Real-time
        </span>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.id} className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {r.id}
                </div>
                <div className="text-sm font-semibold text-foreground">{r.vendor}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{r.total}</div>
                <span
                  className={`mt-1 inline-flex rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${toneBadge[r.tone]}`}
                >
                  {r.status}
                </span>
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[hsl(210_40%_94%)]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${toneFill[r.tone]}`}
                style={{ width: `${r.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReqToPOMockup() {
  return (
    <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-700">
          Approved Requisition
        </span>
        <div className="mt-3 text-sm font-semibold text-foreground">REQ-2026-0418</div>
        <div className="text-xs text-muted-foreground">Reagent kit, Fisher Scientific</div>
        <div className="mt-3 text-base font-semibold text-foreground">$8,420</div>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
      </div>
      <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm ring-1 ring-blue-100">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-blue-700">
          Auto-generated PO
        </span>
        <div className="mt-3 text-sm font-semibold text-foreground">PO-2026-0204</div>
        <div className="text-xs text-muted-foreground">Vendor, terms, line items pre-filled</div>
        <div className="mt-3 text-base font-semibold text-foreground">$8,420</div>
      </div>
    </div>
  );
}

function MatchLoopMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "PO", value: "PO-2026-0204", tone: "border-blue-200 bg-blue-50 text-blue-700" },
          { label: "GRN", value: "Received 5/5", tone: "border-orange-200 bg-orange-50 text-orange-700" },
          { label: "Invoice", value: "INV-77821", tone: "border-amber-200 bg-amber-50 text-amber-700" },
        ].map((d) => (
          <div key={d.label} className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3 text-center">
            <span
              className={`inline-flex rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${d.tone}`}
            >
              {d.label}
            </span>
            <div className="mt-2 text-sm font-semibold text-foreground">{d.value}</div>
            <CheckCheck className="mx-auto mt-2 size-4 text-emerald-500" />
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center font-mono text-[11px] uppercase tracking-widest text-emerald-700">
        Fully Matched, Ready to Pay
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Auto-generated from approvals",
    body: "Once a requisition is approved, Sanyya generates a Purchase Order with all the details pre-filled, vendor, line items, pricing, delivery terms. No re-keying. No copy-paste errors.",
  },
  {
    title: "Track every dollar in real time",
    body: "See all open POs at a glance. Track spend against Blanket POs and Standing Orders with drawdown progress bars. Know remaining commitment before it's a P&L surprise.",
  },
  {
    title: "Match & close the loop",
    body: "As invoices come in and goods are received, Sanyya links everything back to the PO. 2-way matching (PO + Invoice) or full 3-way matching (PO + GRN + Invoice). Discrepancies flagged before payment.",
  },
];

const features = [
  { icon: Sparkles, title: "Auto-generation", body: "POs created automatically from approved requisitions. Zero re-keying." },
  { icon: Gauge, title: "Blanket PO drawdown", body: "Track remaining balance on standing agreements. Alert when approaching limits." },
  { icon: Repeat, title: "Service PO tracking", body: "Monitor milestone-based and recurring service commitments alongside goods POs." },
  { icon: Layers, title: "2-way matching", body: "Match invoices against POs without requiring physical receipt, for services or at your discretion." },
  { icon: ShieldCheck, title: "3-way matching", body: "Full PO + GRN + Invoice verification for physical goods. The gold standard of procurement control." },
  { icon: Eye, title: "Spend visibility dashboard", body: "Real-time aggregate view of all open commitments by vendor, department, or project." },
  { icon: Send, title: "PO dispatch options", body: "Auto-email to vendor, stage for review, or manual download, configurable post-approval." },
  { icon: ScrollText, title: "Full audit trail", body: "Every change, amendment, and match event logged with timestamp and user." },
];

const pains = [
  { icon: Eye, title: "No spend visibility", body: "Open POs represent real financial commitments, but most teams can't see aggregate exposure or remaining balances in real time.", border: "border-l-amber-500", iconColor: "text-amber-500" },
  { icon: Unplug, title: "Disconnected from reality", body: "Your PO says you ordered 100 units. But without linking to receiving and invoicing, you can't verify what arrived or what you're being billed.", border: "border-l-red-400", iconColor: "text-red-500" },
];

function PurchaseOrdersPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Purchase Orders" },
        ]}
        badge="Purchase Orders"
        title={
          <>
            Every commitment. Tracked.{" "}
            <span className="text-brand-gradient">Every dollar. Visible.</span>
          </>
        }
        subtitle="The single source of truth for all authorized spend. Real-time visibility into open POs, blanket drawdowns, and spend against budget, with full audit history."
        visual={<PODashboardMockup />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Purchase orders shouldn't be a black hole
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              You issued a PO six weeks ago. How much has been spent against it? Is the vendor billing
              correctly? Has everything been received? With spreadsheets and basic ERPs, you're flying
              blind between issuance and invoice.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {pains.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-border border-l-4 ${p.border} bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg`}
            >
              <div className="grid size-10 place-items-center rounded-lg border border-border bg-[hsl(210_40%_98%)]">
                <p.icon className={`size-4 ${p.iconColor}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              From approval to <span className="text-brand-gradient">closed loop</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks steps={[steps[0]]} visual={<ReqToPOMockup />} />
          <HowItWorks steps={[steps[1]]} visual={<PODashboardMockup />} />
          <HowItWorks steps={[steps[2]]} visual={<MatchLoopMockup />} />
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for full commitment control
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section id="cta-secondary" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See your spend clearly. <span className="text-brand-gradient">Finally.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-base font-medium text-white shadow-lg shadow-amber-500/30 transition-all duration-300 md:hover:-translate-y-0.5 md:hover:from-amber-400"
              >
                Book a Demo
              </a>
            </div>
          </Reveal>
        </div>
      </Section>


      
    </>
  );
}
