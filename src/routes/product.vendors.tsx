import { createFileRoute } from "@tanstack/react-router";
import {
  HelpCircle,
  AlertTriangle,
  FileText,
  ShoppingCart,
  PackageCheck,
  Receipt,
  TrendingUp,
  Trophy,
  Activity,
  GitCompareArrows,
  Layers,
  BellRing,
  ArrowRight,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Management | Sanyya" },
      {
        name: "description",
        content:
          "Automatic supplier scorecards built from pricing accuracy, delivery reliability, and quote-to-invoice consistency. No spreadsheets, just data.",
      },
      { property: "og:title", content: "Vendor Management | Sanyya" },
      {
        property: "og:description",
        content:
          "Know your vendors. Automatic scorecards, pricing variance tracking, and trend analysis from real transactions.",
      },
    ],
  }),
  component: VendorsPage,
});

function VendorScorecardHero() {
  const metrics = [
    { label: "Pricing Accuracy", value: 92, color: "bg-blue-500" },
    { label: "Delivery On-Time", value: 97, color: "bg-emerald-500" },
    { label: "Quote Consistency", value: 89, color: "bg-amber-500" },
    { label: "Response Time", value: 96, color: "bg-blue-500" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Vendor scorecard
          </div>
          <div className="mt-1 text-base font-semibold text-foreground">Fisher Scientific</div>
        </div>
        <ScoreRing value={94} />
      </div>
      <div className="mt-5 space-y-3">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">{m.label}</span>
              <span className="font-medium text-foreground">{m.value}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[hsl(210_40%_94%)]">
              <div className={`h-full ${m.color}`} style={{ width: `${m.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
        <TrendingUp className="size-3" /> ↑ 3pts vs. last quarter
      </div>
    </div>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative size-20">
      <svg className="size-full -rotate-90" viewBox="0 0 70 70">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="50%" stopColor="hsl(258 90% 66%)" />
            <stop offset="100%" stopColor="hsl(187 92% 69%)" />
          </linearGradient>
        </defs>
        <circle cx="35" cy="35" r={r} fill="none" stroke="hsl(210 40% 94%)" strokeWidth="6" />
        <circle
          cx="35"
          cy="35"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="6"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">{value}</div>
          <div className="-mt-0.5 text-[9px] text-muted-foreground">/ 100</div>
        </div>
      </div>
    </div>
  );
}

function DataFlowMockup() {
  const sources = [
    { icon: FileText, label: "Quotes", color: "text-blue-600 bg-blue-50" },
    { icon: ShoppingCart, label: "POs", color: "text-violet-600 bg-violet-50" },
    { icon: PackageCheck, label: "GRNs", color: "text-cyan-600 bg-cyan-50" },
    { icon: Receipt, label: "Invoices", color: "text-amber-600 bg-amber-50" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Data sources → Vendor profile
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {sources.map((s) => (
          <div key={s.label} className={`rounded-lg border border-border p-2 text-center ${s.color}`}>
            <s.icon className="mx-auto size-5" />
            <div className="mt-1 text-[11px] font-medium">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="my-3 mx-auto h-6 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />
      <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3 text-center">
        <div className="text-xs font-semibold text-foreground">Fisher Scientific</div>
        <div className="text-[11px] text-muted-foreground">238 transactions · 18 months</div>
      </div>
    </div>
  );
}

function VendorComparisonMockup() {
  const vendors = [
    { name: "Fisher Scientific", score: 94, badge: "Preferred", tone: "emerald" },
    { name: "VWR International", score: 86, badge: null, tone: "neutral" },
    { name: "Acme Supply Co.", score: 71, badge: "Review Needed", tone: "amber", alert: "Invoice variance +12% over last 3 months" },
  ] as const;
  const tones = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    neutral: "border-border bg-white text-muted-foreground",
  } as const;
  return (
    <div className="space-y-3">
      {vendors.map((v) => (
        <div key={v.name} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-foreground">{v.name}</div>
              <div className="text-[11px] text-muted-foreground">Overall score</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-foreground">{v.score}</div>
              {v.badge && (
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${tones[v.tone]}`}>
                  {v.badge}
                </span>
              )}
            </div>
          </div>
          {"alert" in v && v.alert && (
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[11px] text-amber-700">
              <AlertTriangle className="size-3.5" /> {v.alert}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const features = [
  { icon: Trophy, title: "Automatic Scorecards", body: "Performance scores built automatically from quote, PO, delivery, and invoice data." },
  { icon: TrendingUp, title: "Pricing Variance Tracking", body: "Detect when vendors quietly raise prices. Compare quoted vs. invoiced amounts over time." },
  { icon: PackageCheck, title: "Delivery Reliability", body: "Track on-time delivery rates and flag vendors with declining performance." },
  { icon: GitCompareArrows, title: "Quote-to-Invoice Consistency", body: "Are final invoices matching the original quotes? Surface discrepancies automatically." },
  { icon: Activity, title: "Trend Analysis", body: "See vendor performance over time, improving, declining, or stable." },
  { icon: Layers, title: "Vendor Comparison", body: "Compare suppliers head-to-head across all performance dimensions." },
  { icon: ArrowRight, title: "360° Vendor Profile", body: "Every quote, PO, delivery, and invoice associated with a vendor in one view." },
  { icon: BellRing, title: "Actionable Alerts", body: "Get notified when a vendor's score drops below your threshold." },
];

const pains = [
  { icon: HelpCircle, title: "No Data, Just Opinions", body: "When someone asks 'is this vendor reliable?' the answer is usually a shrug. Past performance data is scattered across emails, invoices, and people's memories.", border: "border-l-violet-400", iconColor: "text-violet-500" },
  { icon: AlertTriangle, title: "Problems Found Too Late", body: "A vendor has been quietly raising prices 5% per quarter. Nobody noticed because nobody was tracking quote-to-invoice variance systematically.", border: "border-l-amber-400", iconColor: "text-amber-500" },
];

function VendorsPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Vendor Management" },
        ]}
        badge="Vendor Management"
        title={
          <>
            Know your vendors, <span className="text-brand-gradient">really know them.</span>
          </>
        }
        subtitle="Sanyya automatically scores supplier performance based on pricing accuracy, delivery reliability, and quote-to-invoice consistency. No spreadsheets. No guesswork. Just data from every transaction you've ever run through the system."
        visual={<VendorScorecardHero />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Vendor performance is a gut feeling, until it isn't
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Most companies track vendor performance in spreadsheets, if at all. You only find out a
              vendor is unreliable after they've already caused problems, late deliveries, overbilling,
              quality issues. By then, the damage is done and the relationship is strained.
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
              Ingest, score, <span className="text-brand-gradient">act</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks
            steps={[{ title: "Data flows in automatically", body: "Every quote, PO, delivery, and invoice that touches a vendor feeds into their profile automatically. No manual data entry. No surveys. Just real transaction data from your actual procurement activity." }]}
            visual={<DataFlowMockup />}
          />
          <HowItWorks
            steps={[{ title: "Automatic scoring", body: "Sanyya aggregates the data into clear performance metrics. Are they billing more than they quoted? Delivering late? Raising prices over time? The system surfaces patterns that would take hours to find manually." }]}
            visual={<VendorScorecardHero />}
          />
          <HowItWorks
            steps={[{ title: "Act on insights", body: "Use vendor scores to make better purchasing decisions. Negotiate from a position of data. Flag underperformers before they become problems. Reward your best suppliers with more business." }]}
            visual={<VendorComparisonMockup />}
          />
        </div>
      </Section>

      <Section id="features" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to manage suppliers
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section id="cta-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Turn vendor data into{" "}
              <span className="text-brand-gradient">vendor intelligence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <a
                href="#book-demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-base font-medium text-white shadow-lg shadow-amber-500/30 transition-all duration-300 sm:w-auto md:hover:-translate-y-0.5 md:hover:from-amber-400"
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
