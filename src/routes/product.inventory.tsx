import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  PackageX,
  TrendingDown,
  Package,
  Calendar,
  TrendingUp,
  Boxes,
  Bell,
  Sparkles,
  RefreshCw,
  MapPin,
  CalendarClock,
  Users,
  AlertTriangle,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import sanyyaLogo from "@/assets/sanyya-logo.png";
import quartzyLogo from "@/assets/logos/quartzy.png";

export const Route = createFileRoute("/product/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory Management | Sanyya" },
      {
        name: "description",
        content:
          "Real-time inventory driven by actual deliveries. Smart reorder alerts, consumption tracking, and AI-powered insights.",
      },
      { property: "og:title", content: "Inventory Management | Sanyya" },
      {
        property: "og:description",
        content:
          "Know what's on the shelf, always. GRN-driven stock levels, low-stock alerts, and Quartzy integration.",
      },
    ],
  }),
  component: InventoryPage,
});

function Sparkline({ color = "#3C83F5" }: { color?: string }) {
  return (
    <svg viewBox="0 0 100 24" className="h-6 w-full">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        points="0,18 12,14 24,16 36,10 48,12 60,7 72,9 84,5 100,8"
      />
    </svg>
  );
}

function InventoryHero() {
  const items = [
    { name: "Pipette Tips 200μL", stock: "847 / 1000", badge: "In Stock", tone: "emerald", spark: "#10b981" },
    { name: "DMEM Media 500mL", stock: "47 units", badge: "Low Stock", tone: "amber", spark: "#f59e0b", alert: true, ai: "Bundle with next Fisher order?" },
    { name: "FBS, Heat-Inactivated", stock: "0 units", badge: "Out of Stock", tone: "red", spark: "#ef4444" },
    { name: "Sterile Pipettes 10mL", stock: "234 / 500", badge: "In Stock", tone: "emerald", spark: "#10b981" },
  ];
  const tones: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <div className="relative rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Inventory · Cell Culture Lab
        </div>
        <span className="rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-teal-700">
          Live
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl border border-border bg-white p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="truncate text-xs font-semibold text-foreground">{it.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{it.stock}</div>
              </div>
              <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[it.tone]}`}>
                {it.alert && <AlertTriangle className="mr-1 inline size-2.5" />}
                {it.badge}
              </span>
            </div>
            <div className="mt-2">
              <Sparkline color={it.spark} />
            </div>
            {it.ai && (
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-2 py-0.5 text-[10px] font-medium text-white">
                <Sparkles className="size-2.5" /> {it.ai}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GRNFlowMockup() {
  const lines = [
    { name: "Pipette Tips 200μL", qty: "+500" },
    { name: "FBS 500mL", qty: "+3" },
    { name: "DMEM Media", qty: "+12" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            GRN · Fisher Sci
          </div>
          <div className="mt-2 space-y-1.5">
            {lines.map((l) => (
              <div key={l.name} className="flex items-center justify-between text-xs">
                <span className="truncate text-foreground">{l.name}</span>
                <span className="font-mono font-medium text-emerald-600">{l.qty}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-px w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 md:block md:h-0.5" />
        <div className="md:hidden h-0.5 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
        <div className="rounded-xl border border-border bg-white p-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Inventory ledger
          </div>
          <div className="mt-2 space-y-1.5">
            {lines.map((l) => (
              <div key={l.name} className="flex items-center justify-between text-xs">
                <span className="truncate text-foreground">{l.name}</span>
                <span className="font-mono font-medium text-emerald-600">{l.qty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertMockup() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-amber-50">
            <Bell className="size-4 text-amber-600" />
          </div>
          <div className="font-semibold text-foreground">Low Stock Alert</div>
        </div>
        <div className="mt-3 space-y-2 text-xs">
          <div className="flex justify-between"><span className="text-muted-foreground">Item</span><span className="font-medium text-foreground">Pipette Tips 200μL</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Current Stock</span><span className="font-bold text-amber-600">47 remaining</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Reorder Threshold</span><span className="font-medium text-foreground">50 units</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Avg Weekly Usage</span><span className="font-medium text-foreground">~35 units</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Days Until Stockout</span><span className="font-bold text-red-600">~9 days</span></div>
        </div>
        <button className="mt-4 w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-medium text-white shadow-sm">
          Create Requisition
        </button>
      </div>
      <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
        <div className="flex items-start gap-2">
          <div className="grid size-7 shrink-0 place-items-center rounded bg-[#4A154B] text-[10px] font-bold text-white">#</div>
          <div className="min-w-0 text-xs">
            <div className="font-semibold text-foreground">#lab-ops</div>
            <div className="mt-0.5 text-muted-foreground">⚠️ Pipette Tips 200μL low, 47 left (~9 days). Reorder?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIInsightsMockup() {
  const insights = [
    { icon: Package, color: "text-violet-600", bg: "bg-violet-50", title: "Bundle Opportunity", body: "3 departments ordering from Fisher this week. Bundle to save ~$340 on shipping.", action: "View Bundle" },
    { icon: Calendar, color: "text-blue-600", bg: "bg-blue-50", title: "Reorder Timing", body: "Based on 6 months of data, optimal reorder for DMEM is every 3 weeks. You're currently ordering every 4.", action: "Adjust Schedule" },
    { icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50", title: "Price Alert", body: "FBS price from Sigma up 8% vs. 6-month avg. Fisher is 12% cheaper right now.", action: "Compare Vendors" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        AI insights
      </div>
      <div className="mt-3 space-y-3">
        {insights.map((i) => (
          <div key={i.title} className="rounded-xl border border-border bg-white p-3">
            <div className="flex items-start gap-3">
              <div className={`grid size-9 shrink-0 place-items-center rounded-lg ${i.bg}`}>
                <i.icon className={`size-4 ${i.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-foreground">{i.title}</div>
                  <span className="rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">AI</span>
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{i.body}</div>
                <button className="mt-1.5 text-[11px] font-medium text-blue-600 hover:underline">{i.action} →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-[11px] text-muted-foreground">
        Insights improve as your usage data grows.
      </div>
    </div>
  );
}

function QuartzyDiagram() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6 shadow-sm">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="h-20 rounded-xl border border-border bg-white px-4 flex items-center justify-center gap-2">
          <img src={sanyyaLogo} alt="Sanyya" className="h-10 w-auto" />
          <span className="text-base font-bold text-foreground">Sanyya</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 sm:w-20" />
          <RefreshCw className="size-5 text-violet-600" />
          <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 sm:w-20" />
        </div>
        <div className="h-20 rounded-xl border border-border bg-white px-4 flex items-center justify-center">
          <img src={quartzyLogo} alt="Quartzy" className="h-10 w-auto" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {["Stock Levels", "Requests", "Order History"].map((b) => (
          <span key={b} className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-700">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

const pains = [
  { icon: ClipboardList, title: "Manual Counts", body: "Someone walks through the lab once a month with a clipboard. By the time the spreadsheet is updated, it's already wrong.", border: "border-l-blue-400", iconColor: "text-blue-500" },
  { icon: PackageX, title: "Surprise Stockouts", body: "You discover you're out of a critical reagent when someone needs it for an experiment. The next shipment is 2 weeks out.", border: "border-l-red-400", iconColor: "text-red-500" },
  { icon: TrendingDown, title: "No Consumption Insight", body: "You buy the same supplies every quarter but have no idea if you're over-ordering, under-ordering, or paying more than you should.", border: "border-l-amber-400", iconColor: "text-amber-500" },
];

const features = [
  { icon: Boxes, title: "GRN-Driven Stock Levels", body: "Inventory updates automatically from receiving data. No manual counts needed." },
  { icon: Bell, title: "Reorder Alerts", body: "Set thresholds per item. Get notified via platform or Slack when stock runs low." },
  { icon: TrendingUp, title: "Consumption Tracking", body: "See usage trends over time with sparkline charts for every item.", comingSoon: true },
  { icon: Sparkles, title: "AI-Powered Insights", body: "Bundle recommendations, optimal reorder timing, and pricing alerts that improve over time." },
  { icon: RefreshCw, title: "Quartzy Integration", body: "The only procurement platform with native Quartzy connectivity." },
  { icon: MapPin, title: "Multi-Location Support", body: "Track inventory across multiple labs, warehouses, or sites." },
  { icon: CalendarClock, title: "Expiration Tracking", body: "Flag items approaching expiration date. Critical for temperature-sensitive reagents." },
  { icon: Users, title: "Department-Level Views", body: "Each team sees their own inventory. Finance sees the aggregate." },
];

function InventoryPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Inventory Management" },
        ]}
        badge="Inventory Management"
        title={
          <>
            Know what's on the shelf, <span className="text-brand-gradient">always.</span>
          </>
        }
        subtitle="Real-time inventory driven by actual deliveries, not manual counts. Sanyya tracks stock levels from GRN data, alerts you when supplies run low, and learns your consumption patterns to help you buy smarter over time."
        visual={<InventoryHero />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge tone="danger">The problem this solves</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Inventory shouldn't be a guessing game
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              How many pipette tips are left? When did we last order culture media? Is that reagent expired? In most biotech and hardware companies, the answer is "let me go check the shelf", or worse, "let me check the spreadsheet someone last updated three months ago." Real-time visibility into what's actually on-site shouldn't require a manual count.
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
              From dock to <span className="text-brand-gradient">smart shelf</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks
            steps={[{ title: "Inventory builds itself", body: "Every time a delivery is received through the Warehouse & Lab Receiving module, the inventory updates automatically. GRN data flows directly into stock levels, no manual entry, no reconciliation. What arrived at the dock is what shows on the shelf." }]}
            visual={<GRNFlowMockup />}
          />
          <HowItWorks
            steps={[{ title: "Smart alerts", body: "Set reorder thresholds for any item. When stock drops below your minimum, Sanyya alerts the right person, via the platform or Slack. No more surprise stockouts in the middle of an experiment." }]}
            visual={<AlertMockup />}
          />
          <HowItWorks
            steps={[{ title: "AI learns your patterns", body: "Over time, Sanyya's AI learns your ordering and consumption patterns. It identifies opportunities to bundle orders across departments, suggests optimal reorder timing, and flags when you're overpaying compared to historical pricing. The real value compounds after a few months of usage." }]}
            visual={<AIInsightsMockup />}
          />
        </div>
      </Section>

      <Section id="quartzy" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Reveal><SectionBadge>Integration</SectionBadge></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                The only procurement platform that integrates with <span className="text-brand-gradient">Quartzy</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base text-muted-foreground">
                Already managing your lab inventory in Quartzy? Sanyya connects directly, syncing stock levels, requests, and ordering data between both systems. No duplication, no switching tools.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <QuartzyDiagram />
          </Reveal>
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge>Capabilities</SectionBadge></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Inventory that works for you
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
              From reactive to proactive, <span className="text-brand-gradient">inventory that works for you.</span>
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
