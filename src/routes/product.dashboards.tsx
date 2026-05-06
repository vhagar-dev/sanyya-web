import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  CalendarClock,
  LayoutDashboard,
  BarChart3,
  Users,
  FileText,
  Receipt,
  PieChart,
  Calculator,
  Filter,
  Download,
  Wallet,
  Plus,
  GripVertical,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/dashboards")({
  head: () => ({
    meta: [
      { title: "Dashboards & Reporting | Sanyya" },
      {
        name: "description",
        content:
          "Line-item search, custom dashboards, and automatic accrual reporting for procurement and finance.",
      },
      { property: "og:title", content: "Dashboards & Reporting | Sanyya" },
      {
        property: "og:description",
        content:
          "Search anything. Dashboard everything. Procurement data your CFO can actually use.",
      },
    ],
  }),
  component: DashboardsPage,
});

function DashboardHero() {
  // Donut math
  const segments = [
    { val: 35, color: "#3C83F5" },
    { val: 25, color: "#895AF6" },
    { val: 18, color: "#67E7F8" },
    { val: 12, color: "#10b981" },
    { val: 10, color: "#f59e0b" },
  ];
  const C = 2 * Math.PI * 30;
  let offset = 0;
  return (
    <div className="relative rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Procurement dashboard · Q3
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="text-[11px] font-medium text-foreground">Spend by Department</div>
          <div className="mt-2 flex items-center gap-3">
            <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#EEF1F6" strokeWidth="14" />
              {segments.map((s, i) => {
                const len = (s.val / 100) * C;
                const dash = `${len} ${C - len}`;
                const off = -offset;
                offset += len;
                return (
                  <circle
                    key={i}
                    cx="40"
                    cy="40"
                    r="30"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="14"
                    strokeDasharray={dash}
                    strokeDashoffset={off}
                  />
                );
              })}
            </svg>
            <div className="space-y-0.5 text-[10px]">
              {["R&D", "Lab Ops", "Eng", "QA", "Other"].map((l, i) => (
                <div key={l} className="flex items-center gap-1.5">
                  <span className="size-2 rounded-sm" style={{ background: segments[i].color }} />
                  <span className="text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="text-[11px] font-medium text-foreground">Monthly Spend Trend</div>
          <svg viewBox="0 0 200 70" className="mt-2 h-16 w-full">
            <polyline
              fill="none"
              stroke="#3C83F5"
              strokeWidth="2"
              points="5,55 35,42 65,48 95,30 125,35 160,18 195,22"
            />
            <polyline
              fill="rgba(60,131,245,0.1)"
              stroke="none"
              points="5,55 35,42 65,48 95,30 125,35 160,18 195,22 195,70 5,70"
            />
          </svg>
        </div>
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="text-[11px] font-medium text-foreground">Top Vendors</div>
          <div className="mt-2 space-y-1.5">
            {[
              { name: "Fisher", w: 90 },
              { name: "VWR", w: 70 },
              { name: "Sigma", w: 55 },
              { name: "Thermo", w: 35 },
            ].map((v) => (
              <div key={v.name} className="flex items-center gap-2 text-[10px]">
                <span className="w-12 text-muted-foreground">{v.name}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[hsl(210_40%_94%)]">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" style={{ width: `${v.w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="text-[11px] font-medium text-foreground">PO Status</div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="rounded-lg bg-blue-50 p-1.5 text-center">
              <div className="text-sm font-bold text-blue-600">34</div>
              <div className="text-[9px] text-blue-700">Active</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-1.5 text-center">
              <div className="text-sm font-bold text-amber-600">12</div>
              <div className="text-[9px] text-amber-700">Partial</div>
            </div>
            <div className="rounded-lg bg-emerald-50 p-1.5 text-center">
              <div className="text-sm font-bold text-emerald-600">89</div>
              <div className="text-[9px] text-emerald-700">Closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchMockup() {
  const results = [
    { type: "PO", id: "PO-2024-0423", color: "blue", vendor: "Fisher Scientific", desc: "Pipette Tips 200μL x1000", price: "$89.00", date: "Jan 2024" },
    { type: "INV", id: "INV-2024-0891", color: "amber", vendor: "VWR", desc: "Universal Pipette Tips, 200μL", price: "$94.50", date: "Mar 2024" },
    { type: "PO", id: "PO-2025-0112", color: "blue", vendor: "Fisher Scientific", desc: "Pipette Tips 200μL x1000", price: "$87.00", date: "Jul 2024" },
    { type: "GRN", id: "GRN-2025-0298", color: "cyan", vendor: "Sigma", desc: "Pipette Tips, Filtered, 200μL", price: "received", date: "Dec 2024" },
  ];
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  };
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-2 rounded-lg border-2 border-blue-300 bg-white px-3 py-2 ring-2 ring-blue-100">
        <Search className="size-4 text-blue-600" />
        <span className="flex-1 text-sm font-medium text-foreground">pipette tips</span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">4 results · 3 vendors</div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["All Types ▾", "Date Range ▾", "Vendor ▾"].map((c) => (
          <span key={c} className="rounded-full border border-border bg-[hsl(210_40%_98%)] px-2 py-0.5 text-[10px] text-muted-foreground">{c}</span>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {results.map((r) => (
          <div key={r.id} className="rounded-xl border border-border bg-white p-2.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase ${colors[r.color]}`}>{r.type}</span>
                  <span className="truncate text-[11px] font-medium text-foreground">{r.id}</span>
                  <span className="hidden truncate text-[11px] text-muted-foreground sm:inline">· {r.vendor}</span>
                </div>
                <div className="mt-1 truncate text-xs text-foreground">{r.desc}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs font-semibold text-foreground">{r.price}</div>
                <div className="text-[10px] text-muted-foreground">{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardBuilderMockup() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
      <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">My dashboard</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-white p-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Spend</span>
              <GripVertical className="size-3 text-muted-foreground" />
            </div>
            <svg viewBox="0 0 100 30" className="mt-1 h-8 w-full">
              <polyline fill="none" stroke="#3C83F5" strokeWidth="2" points="0,22 20,15 40,18 60,8 80,12 100,5" />
            </svg>
          </div>
          <div className="rounded-lg border border-border bg-white p-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Open POs</span>
              <GripVertical className="size-3 text-muted-foreground" />
            </div>
            <div className="mt-1 text-xl font-bold text-brand-gradient">$184k</div>
          </div>
          <div className="rounded-lg border border-border bg-white p-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Top Vendors</span>
              <GripVertical className="size-3 text-muted-foreground" />
            </div>
            <div className="mt-1 space-y-1">
              {[80, 60, 40].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          <div className="grid place-items-center rounded-lg border-2 border-dashed border-border bg-[hsl(210_40%_98%)] p-2">
            <div className="text-center">
              <Plus className="mx-auto size-5 text-muted-foreground" />
              <div className="text-[10px] text-muted-foreground">Add Widget</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-white p-3 shadow-sm">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Widget library</div>
        <div className="mt-2 space-y-1.5">
          {[
            { name: "Spend by Department", active: true },
            { name: "PO Aging" },
            { name: "Vendor Scorecard" },
            { name: "Invoice Pipeline" },
            { name: "Budget vs Actual" },
            { name: "Inventory Alerts" },
          ].map((w) => (
            <div
              key={w.name}
              className={`rounded-lg border px-2 py-1.5 text-[11px] ${w.active ? "border-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 text-white" : "border-border bg-white text-foreground"}`}
            >
              {w.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccrualMockup() {
  const rows = [
    { po: "PO-0847", vendor: "Fisher", amt: "$12,400", inv: "$8,200", uninv: "$4,200", status: "Partial", tone: "amber" },
    { po: "PO-0912", vendor: "VWR", amt: "$5,600", inv: "$5,600", uninv: "$0", status: "Invoiced", tone: "emerald" },
    { po: "PO-0956", vendor: "Sigma", amt: "$23,000", inv: "$0", uninv: "$23,000", status: "Not Invoiced", tone: "blue" },
    { po: "PO-1004", vendor: "Thermo", amt: "$7,800", inv: "$3,900", uninv: "$3,900", status: "Partial", tone: "amber" },
  ];
  const tones: Record<string, string> = {
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 border-b border-border bg-[hsl(210_40%_98%)] text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {["PO #", "Vendor", "Amount", "Invoiced", "Uninvoiced", "Status"].map((h) => (
            <div key={h} className="px-3 py-2">{h}</div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={r.po} className={`grid grid-cols-6 border-b border-border text-xs ${i % 2 ? "bg-[hsl(210_40%_98%)]" : "bg-white"}`}>
            <div className="px-3 py-2 font-medium text-foreground">{r.po}</div>
            <div className="px-3 py-2 text-foreground">{r.vendor}</div>
            <div className="px-3 py-2 text-foreground">{r.amt}</div>
            <div className="px-3 py-2 text-foreground">{r.inv}</div>
            <div className="px-3 py-2 font-semibold text-foreground">{r.uninv}</div>
            <div className="px-3 py-2">
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[r.tone]}`}>{r.status}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between bg-white px-3 py-3 text-sm">
          <span className="font-mono uppercase tracking-widest text-[10px] text-muted-foreground">Total Uninvoiced</span>
          <span className="font-bold text-foreground">$31,100</span>
        </div>
      </div>
      {/* Mobile cards */}
      <div className="space-y-2 p-3 md:hidden">
        {rows.map((r) => (
          <div key={r.po} className="rounded-xl border border-border bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{r.po}</span>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[r.tone]}`}>{r.status}</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
              <div className="text-muted-foreground">Vendor</div><div className="text-foreground">{r.vendor}</div>
              <div className="text-muted-foreground">Amount</div><div className="text-foreground">{r.amt}</div>
              <div className="text-muted-foreground">Invoiced</div><div className="text-foreground">{r.inv}</div>
              <div className="text-muted-foreground">Uninvoiced</div><div className="font-semibold text-foreground">{r.uninv}</div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-[hsl(210_40%_98%)] px-3 py-2 text-sm">
          <span className="text-muted-foreground">Total Uninvoiced</span>
          <span className="font-bold text-foreground">$31,100</span>
        </div>
      </div>
      <div className="border-t border-border bg-white px-3 py-2 text-[11px] text-muted-foreground">
        Auto-updated as invoices are received and matched.
      </div>
    </div>
  );
}

const pains = [
  { icon: Search, title: "Can't Answer Simple Questions", body: "'How many types of test tubes have we purchased this year, and from which vendors?' This question takes hours with spreadsheets. It should take seconds.", border: "border-l-blue-400", iconColor: "text-blue-500" },
  { icon: CalendarClock, title: "Month-End Scramble", body: "Accrual reporting means chasing down uninvoiced POs, pending deliveries, and open commitments. Every month. Manually.", border: "border-l-violet-400", iconColor: "text-violet-500" },
  { icon: LayoutDashboard, title: "One-Size-Fits-All Reports", body: "Your CFO wants spend by department. Your lab ops lead wants vendor performance. Your procurement team wants open PO aging. Generic reports serve none of them.", border: "border-l-amber-400", iconColor: "text-amber-500" },
];

const reportTypes = [
  { icon: BarChart3, title: "Spend Analytics", body: "Spend by department, project, vendor, category, or time period. Slice it however you need.", bar: "bg-blue-500" },
  { icon: Users, title: "Vendor Performance", body: "Scorecards, delivery trends, pricing variance, and reliability metrics across all suppliers.", bar: "bg-emerald-500" },
  { icon: FileText, title: "PO & Commitment Tracking", body: "Open POs, aging analysis, blanket drawdowns, and commitment exposure.", bar: "bg-violet-500" },
  { icon: Receipt, title: "Invoice Pipeline", body: "Invoice status, matching rates, dispute tracking, and payment readiness.", bar: "bg-amber-500" },
  { icon: PieChart, title: "Budget vs. Actual", body: "Real-time budget tracking with variance analysis by department, project, or cost center.", bar: "bg-cyan-500" },
  { icon: Calculator, title: "Accrual & Financial", body: "Uninvoiced commitments, pending liabilities, and month-end accrual summaries.", bar: "bg-indigo-500" },
];

const features = [
  { icon: Search, title: "Line-Item Search", body: "Search across all documents, POs, invoices, GRNs, quotes, at the individual line-item level." },
  { icon: LayoutDashboard, title: "Custom Dashboards", body: "Drag-and-drop widgets to build views tailored to each stakeholder." },
  { icon: Calculator, title: "Accrual Reporting", body: "Automatic tracking of uninvoiced POs and pending commitments for accurate financials." },
  { icon: BarChart3, title: "Real-Time Data", body: "Dashboards update live as new documents, matches, and approvals flow through the system." },
  { icon: Download, title: "Export & Share", body: "Export any report to CSV or PDF. Schedule automated report delivery via email." },
  { icon: Wallet, title: "Budget Tracking", body: "Set budgets by department, project, or cost center. Track actual spend against plan in real time." },
  { icon: Filter, title: "Filters & Drill-Down", body: "Filter by date, vendor, department, document type, status, then drill into any data point." },
  { icon: Users, title: "Role-Based Views", body: "Each user sees dashboards relevant to their role. Finance, procurement, and ops all get tailored views." },
];

function DashboardsPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Dashboards & Reporting" },
        ]}
        badge="Dashboards & Reporting"
        title={
          <>
            Search anything. <span className="text-brand-gradient">Dashboard everything.</span>
          </>
        }
        subtitle="Line-item search across every document in the system. Custom dashboards that answer the questions your CFO is actually asking. Accrual reporting that doesn't require a month-end scramble."
        visual={<DashboardHero />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge tone="danger">The problem this solves</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your procurement data is more powerful than you think
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              You've been buying things for years. Every purchase order, every invoice, every vendor interaction is data. But it's trapped in silos, your ERP has some, your email has some, your spreadsheets have the rest. Sanyya connects it all and makes it searchable, dashboardable, and actually useful.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {pains.map((p) => (
            <div key={p.title} className={`rounded-2xl border border-border border-l-4 ${p.border} bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg`}>
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
          <Reveal><SectionBadge>How it works</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Search, build, <span className="text-brand-gradient">accrue</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks
            steps={[{ title: "Search at the line-item level", body: "Type any search term and Sanyya finds it across every document in the system, POs, invoices, packing slips, quotes, vendor records. Not just document-level search, but down to individual line items. Want to know every time you purchased 'pipette tips' from any vendor, at any price, in the last 2 years? Done." }]}
            visual={<SearchMockup />}
          />
          <HowItWorks
            steps={[{ title: "Build custom dashboards", body: "Drag-and-drop widgets to build dashboards tailored to each stakeholder. Your CFO gets spend analytics. Your procurement lead gets vendor performance and PO aging. Your lab ops manager gets inventory alerts and delivery tracking. Dashboards update in real time as new data flows in." }]}
            visual={<DashboardBuilderMockup />}
          />
          <HowItWorks
            steps={[{ title: "Accrual reporting, automated", body: "Sanyya automatically tracks the gap between POs issued and invoices received, giving your finance team accurate accrual data without the month-end scramble. See uninvoiced commitments, pending deliveries, and open liabilities in real time." }]}
            visual={<AccrualMockup />}
          />
        </div>
      </Section>

      <Section id="report-types" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge>Report library</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Reports for every stakeholder
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reportTypes.map((r) => (
            <div key={r.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
              <div className={`h-1 w-full ${r.bar}`} />
              <div className="p-6">
                <div className="grid size-10 place-items-center rounded-lg border border-border bg-[hsl(210_40%_98%)]">
                  <r.icon className="size-4 text-foreground" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge>Capabilities</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything your data should already do
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
              Finally, procurement data <span className="text-brand-gradient">you can actually use.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <a href="#book-demo" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-base font-medium text-white shadow-lg shadow-amber-500/30 transition-all duration-300 sm:w-auto md:hover:-translate-y-0.5 md:hover:from-amber-400">
                Book a Demo
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

    </>
  );
}
