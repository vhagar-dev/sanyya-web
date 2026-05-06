import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Receipt,
  Sparkles,
  BarChart3,
  CheckCircle,
  FileText,
  Plug,
  FileQuestion,
  GitCompare,
  EyeOff,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GhostButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { ModuleCard } from "@/components/site/ModuleCard";

export const Route = createFileRoute("/solutions/finance")({
  head: () => ({
    meta: [
      { title: "Sanyya for Finance, Accruals & 3-Way Match, Automated" },
      {
        name: "description",
        content:
          "Real-time accrual data, automated 3-way matching, and spend dashboards built for finance teams at scaling companies.",
      },
      { property: "og:title", content: "Sanyya for Finance" },
      {
        property: "og:description",
        content: "Month-end in minutes, not days.",
      },
    ],
  }),
  component: FinancePage,
});

const pains = [
  {
    title: "Uninvoiced POs",
    icon: FileQuestion,
    iconCls: "text-amber-500",
    border: "border-l-amber-400",
    text: "You issued 47 POs this month. 18 have been invoiced. The rest? You're emailing vendors and ops to find out what's been delivered and what hasn't.",
  },
  {
    title: "Manual Matching",
    icon: GitCompare,
    iconCls: "text-blue-500",
    border: "border-l-blue-400",
    text: "Comparing every invoice line item to the PO and delivery receipt by hand. One mismatch and you're chasing down the discrepancy across 3 documents.",
  },
  {
    title: "No Spend Visibility Until Month-End",
    icon: EyeOff,
    iconCls: "text-violet-500",
    border: "border-l-violet-400",
    text: "You don't know what departments have spent until the invoices come in, weeks after the money was committed. By then, budgets are already blown.",
  },
];

const modules = [
  { title: "Invoice Processing", category: "ACCOUNTS PAYABLE", icon: Receipt, iconCls: "text-amber-600 bg-amber-50", text: "Automated invoice capture, 3-way matching, and approval routing, with full audit trail.", href: "/product/invoices" },
  { title: "AI Match Engine", category: "RECONCILIATION", icon: Sparkles, iconCls: "text-blue-600 bg-blue-50", text: "Semantic matching at the line-item level. Price, quantity, and description discrepancies caught automatically.", href: "/product/match-engine" },
  { title: "Dashboards & Reporting", category: "VISIBILITY", icon: BarChart3, iconCls: "text-violet-600 bg-violet-50", text: "Spend analytics, accrual reports, budget vs. actual, and invoice aging, all in real-time dashboards.", href: "/product/dashboards" },
  { title: "Approvals & Workflows", category: "CONTROLS", icon: CheckCircle, iconCls: "text-emerald-600 bg-emerald-50", text: "Multi-level approval chains with budget controls, delegation rules, and audit logs.", href: "/product/approvals" },
  { title: "Purchase Orders", category: "COMMITMENTS", icon: FileText, iconCls: "text-cyan-600 bg-cyan-50", text: "PO lifecycle management with budget impact visibility and commitment tracking.", href: "/product/purchase-orders" },
  { title: "Integrations", category: "ECOSYSTEM", icon: Plug, iconCls: "text-slate-600 bg-slate-100", text: "Push matched invoices to your bill pay platform. Sync with NetSuite or QuickBooks. Keep your GL accurate.", href: "/integrations" },
];

function FinanceHeroVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)]">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Month-End Summary · October
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-border bg-secondary p-3">
          <div className="text-[11px] text-muted-foreground">Total Committed</div>
          <div className="mt-1 text-lg font-bold text-foreground">$487K</div>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <div className="text-[11px] text-emerald-700">Invoiced</div>
          <div className="mt-1 text-lg font-bold text-emerald-800">$312K</div>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <div className="text-[11px] text-amber-700">Uninvoiced Liability</div>
          <div className="mt-1 text-lg font-bold text-amber-800">$175K</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-2 text-[11px] font-medium text-foreground">Spend by Department</div>
        <Donut />
      </div>
    </div>
  );
}

function Donut() {
  // Simple SVG donut with aurora-tinted segments
  const segs = [
    { v: 38, c: "#3C83F5", label: "R&D" },
    { v: 27, c: "#895AF6", label: "Lab Ops" },
    { v: 18, c: "#67E7F8", label: "Engineering" },
    { v: 12, c: "#F59E0B", label: "Facilities" },
    { v: 5, c: "#10B981", label: "Other" },
  ];
  const C = 2 * Math.PI * 40;
  let offset = 0;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="size-28 -rotate-90">
        {segs.map((s) => {
          const len = (s.v / 100) * C;
          const el = (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={s.c}
              strokeWidth="14"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <ul className="flex-1 space-y-1.5">
        {segs.map((s) => (
          <li key={s.label} className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-2 text-foreground">
              <span className="size-2 rounded-sm" style={{ background: s.c }} />
              {s.label}
            </span>
            <span className="font-mono text-muted-foreground">{s.v}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MatchVisual() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-2">
          <Doc label="PO-0912" sub="$4,800 · 12 lines" tone="blue" />
          <Doc label="GRN-1847" sub="12 lines received" tone="cyan" />
          <Doc label="INV-3291" sub="$5,240 · 12 lines" tone="amber" />
        </div>
        <div className="hidden md:block">
          <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-700">
              Match Result
            </div>
            <div className="mt-1 text-sm font-semibold text-emerald-900">PO-0912 ↔ GRN-1840</div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-medium text-white">
              <CheckCircle className="size-3" /> Matched · Ready to Pay
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-amber-700">
              Variance Detected
            </div>
            <div className="mt-1 text-sm font-semibold text-amber-900">INV-3291 vs PO-0912</div>
            <div className="mt-1 text-[11px] text-amber-800">
              Invoice $5,240 vs PO $4,800, $440 over (8.3%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Doc({ label, sub, tone }: { label: string; sub: string; tone: "blue" | "cyan" | "amber" }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };
  return (
    <div className={`rounded-lg border p-3 ${tones[tone]}`}>
      <div className="text-sm font-semibold">{label}</div>
      <div className="text-[11px] opacity-80">{sub}</div>
    </div>
  );
}

const accrualRows = [
  { status: "Fully Invoiced", count: 34, amount: "$312,400", tone: "emerald" as const },
  { status: "Partially Invoiced", count: 12, amount: "$98,700", tone: "amber" as const },
  { status: "Delivered, Not Invoiced", count: 8, amount: "$54,200", tone: "blue" as const },
  { status: "Ordered, Not Delivered", count: 6, amount: "$22,100", tone: "slate" as const },
];

const toneCls = {
  emerald: "text-emerald-700",
  amber: "text-amber-700",
  blue: "text-blue-700",
  slate: "text-slate-600",
};

function AccrualVisual() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>Status</div>
          <div>Count</div>
          <div>Amount</div>
        </div>
        <div className="divide-y divide-border">
          {accrualRows.map((r) => (
            <div key={r.status} className="grid grid-cols-[1fr_auto_auto] gap-4 py-3 text-sm">
              <div className={`font-medium ${toneCls[r.tone]}`}>{r.status}</div>
              <div className="font-mono text-foreground">{r.count}</div>
              <div className="font-mono text-foreground">{r.amount}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
          <div className="text-sm font-semibold text-foreground">Total Open Liability</div>
          <div className="text-base font-bold text-foreground">$175,000</div>
        </div>
      </div>
      {/* Mobile cards */}
      <div className="space-y-2 md:hidden">
        {accrualRows.map((r) => (
          <div key={r.status} className="rounded-lg border border-border bg-secondary p-3">
            <div className={`text-sm font-medium ${toneCls[r.tone]}`}>{r.status}</div>
            <div className="mt-1 flex justify-between text-xs">
              <span className="text-muted-foreground">Count</span>
              <span className="font-mono text-foreground">{r.count}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-mono text-foreground">{r.amount}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg bg-foreground/5 p-3">
          <div className="text-sm font-semibold text-foreground">Total Open</div>
          <div className="text-base font-bold text-foreground">$175,000</div>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Updated in real time. Last sync: 2 minutes ago.
      </p>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Budget vs Actual */}
        <div className="rounded-xl border border-border bg-secondary p-4">
          <div className="mb-3 text-[11px] font-medium text-foreground">Budget vs. Actual</div>
          <div className="space-y-2">
            {[
              { d: "R&D", b: 80, a: 72 },
              { d: "Ops", b: 60, a: 55 },
              { d: "Eng", b: 40, a: 48 },
            ].map((r) => (
              <div key={r.d}>
                <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>{r.d}</span>
                  <span>{r.a}/{r.b}K</span>
                </div>
                <div className="relative h-2 rounded-full bg-foreground/10">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-foreground/20" style={{ width: `${r.b}%` }} />
                  <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${r.a}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Invoice aging */}
        <div className="rounded-xl border border-border bg-secondary p-4">
          <div className="mb-3 text-[11px] font-medium text-foreground">Invoice Aging</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2 text-center">
              <div className="text-base font-bold text-emerald-700">24</div>
              <div className="text-[9px] text-emerald-700">{"< 30d"}</div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-center">
              <div className="text-base font-bold text-amber-700">7</div>
              <div className="text-[9px] text-amber-700">30-60d</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-2 text-center">
              <div className="text-base font-bold text-red-700">2</div>
              <div className="text-[9px] text-red-700">{"> 60d"}</div>
            </div>
          </div>
        </div>
        {/* Top vendors */}
        <div className="rounded-xl border border-border bg-secondary p-4">
          <div className="mb-3 text-[11px] font-medium text-foreground">Top Vendors by Spend</div>
          <div className="space-y-1.5">
            {["Fisher", "VWR", "Sigma", "Thermo", "BioLegend"].map((v, i) => (
              <div key={v} className="flex items-center gap-2 text-[10px]">
                <span className="w-14 text-foreground">{v}</span>
                <div className="h-1.5 flex-1 rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
                    style={{ width: `${100 - i * 17}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Trend */}
        <div className="rounded-xl border border-border bg-secondary p-4">
          <div className="mb-3 text-[11px] font-medium text-foreground">Monthly Spend Trend</div>
          <svg viewBox="0 0 120 50" className="h-16 w-full">
            <polyline
              fill="none"
              stroke="#3C83F5"
              strokeWidth="2"
              points="0,38 24,30 48,32 72,18 96,22 120,10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FinancePage() {
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
                { label: "Finance" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-amber-700">
                  For Finance
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Accruals and 3-Way Match,{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    Automated
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  You shouldn't need to chase down uninvoiced POs at month-end. Or manually
                  compare every invoice to every delivery receipt. Sanyya gives your finance team
                  accurate accrual data, automated matching, and real-time spend visibility,
                  without the scramble.
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
              <FinanceHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MONTH-END PROBLEM */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge tone="neutral">Month-End</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Every Month, the Same Scramble
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              It's the 28th. Your controller needs accrual numbers. That means tracking down every
              open PO, figuring out what's been delivered but not invoiced, reconciling invoice
              amounts against POs, and praying the spreadsheet is up to date. This takes 2-3 days
              every month. It should take 2 minutes.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className={`h-full rounded-2xl border border-l-4 border-border bg-white p-6 shadow-sm ${p.border}`}>
                <p.icon className={`size-6 ${p.iconCls}`} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* STEP 1 */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Automatic 3-Way Matching
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-base text-muted-foreground md:text-lg">
              Sanyya's AI match engine compares purchase orders, goods received notes, and
              invoices automatically, at the line-item level. Price variances, quantity
              discrepancies, and missing deliveries are flagged before an invoice reaches your
              desk. You review exceptions, not every transaction.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <MatchVisual />
          </Reveal>
        </div>
      </Section>

      {/* STEP 2 */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Real-Time Accrual Data
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-base text-muted-foreground md:text-lg">
              Every open PO is tracked against what's been delivered and what's been invoiced, in
              real time. Your accrual report updates automatically as GRNs and invoices flow
              through the system. No month-end scramble. No spreadsheet reconciliation. Just
              accurate numbers, always available.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <AccrualVisual />
          </Reveal>
        </div>
      </Section>

      {/* STEP 3 */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Spend Dashboards for Finance
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-base text-muted-foreground md:text-lg">
              Custom dashboards that answer the questions your CFO is actually asking. Spend by
              department. Budget vs. actual. Vendor concentration. Invoice aging. Everything
              updates in real time, no exports, no pivot tables, no waiting for month-end.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <DashboardVisual />
          </Reveal>
        </div>
      </Section>

      {/* MODULES */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Modules</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Finance-Grade Procurement Controls
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

      {/* CTA */}
      <Section size="tight">
        <Reveal>
          <div className="rounded-3xl border border-border bg-secondary p-8 text-center sm:p-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Month-End in Minutes,{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Not Days.
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
