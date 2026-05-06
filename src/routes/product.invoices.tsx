import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Upload,
  Keyboard,
  ShieldOff,
  Clock,
  Sparkles,
  ShieldCheck,
  Layers,
  MessagesSquare,
  Workflow,
  Banknote,
  BarChart3,
  CheckCheck,
  AlertTriangle,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/invoices")({
  head: () => ({
    meta: [
      { title: "Invoice Processing | Sanyya" },
      {
        name: "description",
        content:
          "Forward invoices via email or upload with drag-and-drop. AI extracts every line item automatically. Sanyya parses, matches, routes for approval, and pushes to your bill pay platform when ready.",
      },
      { property: "og:title", content: "Invoice Processing | Sanyya" },
      {
        property: "og:description",
        content:
          "AI-powered invoice ingestion with 2- and 3-way matching, approval routing, and handoff to any bill pay platform. Every step logged.",
      },
    ],
  }),
  component: InvoicesPage,
});

function InvoicePipelineHero() {
  const stages = [
    { label: "Email", icon: Mail, tone: "blue" },
    { label: "Parsed", icon: Sparkles, tone: "violet" },
    { label: "Matched", icon: CheckCheck, tone: "emerald" },
    { label: "Approved", icon: ShieldCheck, tone: "violet" },
    { label: "Ready to Pay", icon: Banknote, tone: "amber" },
  ] as const;
  const toneBg = {
    blue: "border-blue-200 bg-blue-50 text-blue-600",
    violet: "border-violet-200 bg-violet-50 text-violet-600",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-600",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  } as const;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Invoice pipeline
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 md:flex-col md:gap-2">
            <div
              className={`grid size-10 place-items-center rounded-full border ${toneBg[s.tone]}`}
            >
              <s.icon className="size-4" />
            </div>
            <div className="text-xs font-medium text-foreground md:text-center">{s.label}</div>
            {i < stages.length - 1 && (
              <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function IngestMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { icon: Mail, label: "Email forward" },
          { icon: Upload, label: "Drag & drop" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3 text-center">
            <m.icon className="mx-auto size-4 text-blue-500" />
            <div className="mt-2 text-xs font-medium text-foreground">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="my-3 mx-auto h-6 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />

      <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Parsed invoice
        </div>
        <dl className="grid grid-cols-2 gap-2 text-xs">
          <dt className="text-muted-foreground">Invoice #</dt>
          <dd className="text-right font-mono text-blue-600">INV-77821</dd>
          <dt className="text-muted-foreground">Vendor</dt>
          <dd className="text-right font-medium text-violet-600">Fisher Scientific</dd>
          <dt className="text-muted-foreground">Line items</dt>
          <dd className="text-right text-cyan-600">12 lines</dd>
          <dt className="text-muted-foreground">Total</dt>
          <dd className="text-right font-bold text-foreground">$8,420.00</dd>
        </dl>
      </div>
    </div>
  );
}

function MatchMockup() {
  const docs = [
    { label: "Invoice", value: "INV-77821, 50 units", status: "ok" },
    { label: "PO", value: "PO-2026-0204, 50 units", status: "ok" },
    { label: "GRN", value: "Received, 45 units", status: "warn" },
  ] as const;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-3">
        {docs.map((d) => (
          <div
            key={d.label}
            className={`rounded-xl border p-3 ${
              d.status === "ok"
                ? "border-emerald-200 bg-emerald-50/40"
                : "border-amber-200 bg-amber-50/40"
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {d.label}
            </div>
            <div className="mt-1 text-sm font-medium text-foreground">{d.value}</div>
            {d.status === "ok" ? (
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <CheckCheck className="size-3.5" /> Verified
              </div>
            ) : (
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                <AlertTriangle className="size-3.5" /> Qty mismatch
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApprovePayMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] px-3 py-2 text-sm font-medium text-foreground">
          INV-77821
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 md:mx-2 md:block" />
        <div className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
          Approval
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 md:mx-2 md:block" />
        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
          Approved
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 md:mx-2 md:block" />
        <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
          Bill pay platform · Ready to Pay
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-2 font-mono text-[11px] text-muted-foreground">
        Matched by AI → Approved by Sarah → Pushed to bill pay platform, May 2, 2026
      </div>
    </div>
  );
}

function FullLifecycle() {
  const stages = [
    { label: "Received", tone: "done" },
    { label: "Parsed", tone: "done" },
    { label: "Matched", tone: "done" },
    { label: "Flagged", tone: "warn" },
    { label: "Approved", tone: "active" },
    { label: "Ready to Pay", tone: "future" },
    { label: "Paid", tone: "future" },
  ] as const;
  const toneCircle = {
    done: "bg-gradient-to-r from-blue-500 to-violet-500 text-white border-transparent",
    warn: "bg-amber-50 text-amber-700 border-amber-300",
    active: "bg-white text-violet-600 border-violet-400 ring-4 ring-violet-100",
    future: "bg-white text-muted-foreground border-border",
  } as const;
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Full invoice lifecycle
      </div>
      <ol className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {stages.map((s, i) => (
          <li key={s.label} className="flex items-center gap-3 md:flex-1 md:flex-col md:gap-2">
            <div
              className={`grid size-9 place-items-center rounded-full border text-xs font-semibold ${toneCircle[s.tone]}`}
            >
              {i + 1}
            </div>
            <div className="text-xs font-medium text-foreground md:text-center">{s.label}</div>
            {i < stages.length - 1 && (
              <div className="hidden h-px flex-1 bg-border md:block" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

const steps = [
  {
    title: "Ingest from anywhere",
    body: "Forward invoices to your dedicated Sanyya email or drag-and-drop upload. Sanyya's AI extracts line items, amounts, vendor info, and payment terms automatically.",
  },
  {
    title: "Match with confidence",
    body: "Sanyya matches each invoice against the corresponding PO. For physical goods, full 3-way matching (Invoice + PO + GRN). Discrepancies flagged instantly, overbilling, quantity mismatches, price variances, before a dollar moves.",
  },
  {
    title: "Approve & pay",
    body: "Verified invoices route through your approval workflows. Once approved, Sanyya pushes the invoice to your bill pay platform in a 'Ready to Pay' state with the full approval record attached.",
  },
];

const features = [
  { icon: Mail, title: "Email forwarding ingestion", body: "Dedicated email address auto-captures invoices. No manual upload needed." },
  { icon: Sparkles, title: "AI-powered parsing", body: "Extracts line items, amounts, tax, payment terms, and vendor info from any format." },
  { icon: Layers, title: "2-way matching", body: "Invoice vs. PO matching for services and non-physical purchases." },
  { icon: ShieldCheck, title: "3-way matching", body: "Invoice + PO + GRN verification for physical goods. Catches overbilling and quantity issues." },
  { icon: MessagesSquare, title: "Dispute workflow", body: "Flag discrepancies, annotate issues, and communicate with vendors directly." },
  { icon: Workflow, title: "Approval routing", body: "Run invoices through the same configurable workflow engine as requisitions." },
  { icon: Banknote, title: "Bill pay integration", body: "Push approved invoices to any bill pay platform in 'Ready to Pay' state with full audit record." },
  { icon: BarChart3, title: "Accrual reporting", body: "Track uninvoiced POs and pending payments for accurate accrual accounting." },
];

const pains = [
  { icon: Keyboard, title: "Manual data entry", body: "Someone has to open every invoice PDF, read the amounts, type them in, and hope they don't make a typo on a $50k bill.", border: "border-l-blue-400", iconColor: "text-blue-500" },
  { icon: ShieldOff, title: "No verification", body: "Paying an invoice without checking it against the PO and delivery record is writing a blank check. Manual checking takes hours.", border: "border-l-red-400", iconColor: "text-red-500" },
  { icon: Clock, title: "Payment limbo", body: "Invoices sit in someone's inbox for weeks. Vendors follow up. Early-payment discounts expire. Late fees accrue.", border: "border-l-amber-400", iconColor: "text-amber-500" },
];

function InvoicesPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Invoice Processing" },
        ]}
        badge="Invoice Processing"
        title={
          <>
            From inbox to audit trail, <span className="text-brand-gradient">automatically.</span>
          </>
        }
        subtitle="Forward invoices via email or upload with drag-and-drop. AI extracts every line item automatically. Sanyya parses, matches, routes for approval, and pushes to your bill pay platform when ready. Every step logged."
        visual={<InvoicePipelineHero />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Invoice processing is where money leaks
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Duplicate invoices, overbilling, payments without verified delivery, these aren't edge
              cases, they're everyday problems when invoices are processed manually or in disconnected
              systems.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
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
              Ingest, match, <span className="text-brand-gradient">pay</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks steps={[steps[0]]} visual={<IngestMockup />} />
          <HowItWorks steps={[steps[1]]} visual={<MatchMockup />} />
          <HowItWorks steps={[steps[2]]} visual={<ApprovePayMockup />} />
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything AP needs in one workflow
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section id="lifecycle">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>End to end</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The full invoice <span className="text-brand-gradient">lifecycle</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10">
          <FullLifecycle />
        </div>
      </Section>

      <Section id="cta-secondary" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Stop leaking money. <span className="text-brand-gradient">Start matching invoices.</span>
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
