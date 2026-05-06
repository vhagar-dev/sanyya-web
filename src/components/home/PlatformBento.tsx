import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Sparkles,
  Plug,
  Layers,
  CheckCircle2,
  Mail,
  Search,
  AlertTriangle,
  Smartphone,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionBadge, GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { modules, type Module } from "@/data/site";
import { cn } from "@/lib/utils";

type TileContent = {
  category: string;
  description: string;
  visual: React.ReactNode;
};

const tileContent: Record<string, TileContent> = {
  requisitions: {
    category: "Intake",
    description:
      "Create purchase requests from Slack, from a vendor quote, or from the web form. The AI agent handles natural-language requests, extracts details from uploaded quotes, and routes completed PRs for approval.",
    visual: (
      <div className="flex flex-wrap gap-1.5">
        <MiniBadge tone="violet">Slack</MiniBadge>
        <MiniBadge tone="blue">Quote Upload</MiniBadge>
        <MiniBadge tone="emerald">Web Form</MiniBadge>
      </div>
    ),
  },
  approvals: {
    category: "Controls",
    description:
      "Route approvals by dollar amount, department, project, or any custom dimension. Change workflows on the fly with full version control. Approvers can dynamically re-route to anyone who needs to weigh in.",
    visual: (
      <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[160px]" fill="none">
        <defs>
          <linearGradient id="aurora-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(217 91% 57%)" />
            <stop offset="100%" stopColor="hsl(258 90% 66%)" />
          </linearGradient>
        </defs>
        <path d="M14 18 L60 18 L80 6 M60 18 L80 30" stroke="url(#aurora-flow)" strokeWidth="1.25" />
        <circle cx="14" cy="18" r="4" fill="hsl(258 90% 60%)" />
        <circle cx="60" cy="18" r="4" fill="hsl(258 90% 60%)" />
        <circle cx="86" cy="6" r="4" fill="hsl(258 90% 60%)" />
        <circle cx="86" cy="30" r="4" fill="hsl(258 90% 60%)" />
      </svg>
    ),
  },
  quotes: {
    category: "Sourcing",
    description:
      "Centralize vendor quotes in one place. Send quote requests to multiple suppliers, compare pricing and terms side-by-side, and let AI recommend the best option based on historical data.",
    visual: (
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span className="inline-flex items-center gap-1 text-foreground">
          <CheckCircle2 className="size-3 text-[hsl(160_84%_45%)]" />
          3 quotes received
        </span>
        <span className="text-brand-gradient font-medium">AI Recommended</span>
      </div>
    ),
  },
  "purchase-orders": {
    category: "Commitments",
    description:
      "Auto-generated from approved requisitions. Track open POs, blanket drawdowns, and service agreements in real time. Every dollar committed is visible before it hits the P&L.",
    visual: (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">Blanket PO</span>
          <span className="font-medium text-foreground">$34K / $50K</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[hsl(214_90%_60%/0.15)]">
          <div className="h-full rounded-full bg-[hsl(214_90%_50%)]" style={{ width: "68%" }} />
        </div>
      </div>
    ),
  },
  vendors: {
    category: "Intelligence",
    description:
      "Automatic vendor scorecards built from real data. Track on-time delivery, pricing accuracy, and quote-to-invoice consistency across every supplier. Know who deserves more business.",
    visual: (
      <div className="flex items-center gap-2 text-[11px]">
        <span className="font-semibold text-foreground">4.2 / 5.0</span>
        <MiniBadge tone="emerald">Reliable</MiniBadge>
      </div>
    ),
  },
  receiving: {
    category: "Receiving",
    description:
      "Scan packing slips at the dock with the mobile app. AI trained on vendor-specific formats extracts line items, lot numbers, shipping temperature, and storage conditions automatically. Gets smarter with every delivery.",
    visual: (
      <div className="flex flex-wrap gap-1.5">
        <MiniBadge tone="blue">
          <Smartphone className="size-3" /> Mobile
        </MiniBadge>
        <MiniBadge tone="cyan">
          <Thermometer className="size-3" /> -20°C
        </MiniBadge>
      </div>
    ),
  },
  inventory: {
    category: "Stock",
    description:
      "Real-time stock levels driven by actual deliveries, not manual counts. Set reorder thresholds and get alerts when supplies run low. The only procurement platform with native Quartzy integration.",
    visual: (
      <div className="flex items-center gap-2 text-[11px]">
        <span className="inline-flex items-center gap-1 text-[hsl(38_92%_45%)]">
          <AlertTriangle className="size-3" /> 47 remaining
        </span>
        <span className="text-muted-foreground">Reorder at 50</span>
      </div>
    ),
  },
  invoices: {
    category: "Accounts Payable",
    description:
      "Forward invoices by email, drag-and-drop upload, or let vendors submit directly. AI parses every line item. Matched invoices route through approval and push to any bill pay platform when ready to pay.",
    visual: (
      <div className="flex items-center gap-1.5 text-[11px] text-foreground">
        <Mail className="size-3 text-[hsl(38_92%_50%)]" />
        <span className="h-px w-3 bg-[hsl(38_92%_50%)]" />
        <CheckCircle2 className="size-3 text-[hsl(38_92%_50%)]" />
        <span className="h-px w-3 bg-[hsl(38_92%_50%)]" />
        <span className="font-medium">Bill Pay</span>
      </div>
    ),
  },
  dashboards: {
    category: "Visibility",
    description:
      "Search across every document at the line-item level. Build custom dashboards for each stakeholder. Accrual reporting updates in real time as invoices and deliveries flow through the system.",
    visual: (
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1 text-[11px] text-muted-foreground">
          <Search className="size-3" />
          pipette tips
        </div>
        <MiniBadge tone="blue">4 results</MiniBadge>
      </div>
    ),
  },
};

function MiniBadge({
  tone,
  children,
}: {
  tone: "violet" | "blue" | "emerald" | "cyan" | "amber";
  children: React.ReactNode;
}) {
  const tones = {
    violet: "bg-[hsl(258_90%_96%)] text-[hsl(258_70%_45%)] border-[hsl(258_90%_88%)]",
    blue: "bg-[hsl(214_90%_96%)] text-[hsl(214_90%_40%)] border-[hsl(214_90%_88%)]",
    emerald: "bg-[hsl(160_84%_94%)] text-[hsl(160_84%_30%)] border-[hsl(160_84%_85%)]",
    cyan: "bg-[hsl(190_90%_94%)] text-[hsl(190_90%_30%)] border-[hsl(190_90%_85%)]",
    amber: "bg-[hsl(38_92%_94%)] text-[hsl(38_92%_35%)] border-[hsl(38_92%_85%)]",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

const m = (slug: string) => modules.find((x) => x.slug === slug)!;

// Display order for the bento grid. AI Match Engine is the featured tile and
// occupies 2 columns on md+ screens; the others are single-cell tiles.
const tileOrder: { slug: string; featured?: boolean }[] = [
  { slug: "match-engine", featured: true },
  { slug: "requisitions" },
  { slug: "approvals" },
  { slug: "quotes" },
  { slug: "purchase-orders" },
  { slug: "vendors" },
  { slug: "receiving" },
  { slug: "inventory" },
  { slug: "invoices" },
  { slug: "dashboards" },
];

export function PlatformBento() {
  return (
    <Section id="platform">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionBadge>The Platform</SectionBadge>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Modular by design.{" "}
            <span className="text-brand-gradient">Run one. Run all ten.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Every module works standalone, or together. Configure Sanyya to match how your
            company actually operates, not the other way around.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:text-[13px]">
            <Chip icon={Layers}>Use any module standalone</Chip>
            <Chip icon={Plug}>Slots into NetSuite, Ramp, QuickBooks, Quartzy</Chip>
            <Chip icon={Sparkles}>Start with one team, scale to all of procurement</Chip>
          </ul>
        </Reveal>
      </div>

      {/* Bento grid */}
      <div className="mt-12 md:mt-16">
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {tileOrder.map((t, i) => {
            const mod = m(t.slug);
            return (
              <Reveal key={t.slug} delay={Math.min(i * 0.04, 0.32)}>
                {t.featured ? <FeaturedTile module={mod} /> : <BentoTile module={mod} />}
              </Reveal>
            );
          })}
        </div>
      </div>

    </Section>
  );
}

/* -------------------------------- Tiles -------------------------------- */

function BentoTile({ module: mod }: { module: Module }) {
  const content = tileContent[mod.slug];
  return (
    <Link to={mod.href} className="group block h-full">
      <GlassCard className="relative flex h-full flex-col p-5 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_20px_50px_-20px_hsl(217_91%_57%/0.35)]">
        {content && (
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
            {content.category}
          </div>
        )}
        <div className={cn("flex items-center gap-3", content && "mt-3")}>
          <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background/60">
            <mod.icon className={cn("size-4.5", mod.iconColor)} />
          </div>
          <div className="text-[14px] font-semibold leading-tight text-foreground">
            {mod.name}
          </div>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
          {content?.description ?? mod.short}
        </p>
        {content?.visual && <div className="mt-4">{content.visual}</div>}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[hsl(217_91%_38%)] opacity-60 transition-opacity group-hover:opacity-100">
            View <ChevronRight className="size-3" />
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}

function FeaturedTile({ module: mod }: { module: Module }) {
  return (
    <Link
      to={mod.href}
      className="group relative block h-full sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2"
    >
      <div
        className={cn(
          "glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6",
          "border-[hsl(217_91%_57%/0.45)]",
          "bg-[linear-gradient(120deg,hsl(217_91%_57%/0.16),hsl(258_90%_55%/0.12)_60%,hsl(217_91%_57%/0.16))]",
          "shadow-[0_24px_70px_-20px_hsl(217_91%_57%/0.45)]",
          "transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_30px_80px_-20px_hsl(217_91%_57%/0.6)]",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 30% 20%, hsl(217 91% 57% / 0.22), transparent 70%)",
          }}
        />
        <div className="relative flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl border border-[hsl(217_91%_57%/0.45)] bg-background/40">
            <mod.icon className="size-5 text-[hsl(217_91%_38%)]" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[hsl(217_91%_38%)]">
              The Reconcile Layer
            </div>
            <div className="text-base font-semibold text-foreground sm:text-lg">
              {mod.name}
            </div>
          </div>
        </div>

        <p className="relative mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Semantic 3-way match across PO, GRN, and invoice, even when vendors call the same
          part three different names. The connective tissue that makes every other module
          smarter.
        </p>

        <div className="relative mt-5 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <Tag color="po">PO</Tag>
          <ChevronRight className="size-3 text-[hsl(217_91%_38%)]" />
          <Tag color="grn">GRN</Tag>
          <ChevronRight className="size-3 text-[hsl(217_91%_38%)]" />
          <Tag color="invoice">Invoice</Tag>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[hsl(160_84%_40%)]">
            <span className="size-1.5 rounded-full bg-[hsl(160_84%_55%)] pulse-dot" />
            line-item match
          </span>
        </div>

        <div className="relative mt-auto pt-6">
          <span className="inline-flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[hsl(217_91%_38%)] opacity-70 transition-opacity group-hover:opacity-100">
            Explore the engine <ChevronRight className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "po" | "grn" | "invoice";
}) {
  const map = {
    po: "border-[hsl(214_90%_60%/0.4)] text-[hsl(214_90%_38%)] bg-[hsl(214_90%_60%/0.1)]",
    grn: "border-[hsl(25_90%_60%/0.4)] text-[hsl(25_90%_38%)] bg-[hsl(25_90%_60%/0.1)]",
    invoice: "border-[hsl(38_92%_58%/0.4)] text-[hsl(38_92%_38%)] bg-[hsl(38_92%_58%/0.1)]",
  } as const;
  return <span className={cn("rounded-md border px-1.5 py-0.5", map[color])}>{children}</span>;
}

function Chip({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 backdrop-blur-md">
      <Icon className="size-3.5 text-[hsl(217_91%_38%)]" />
      <span>{children}</span>
    </li>
  );
}
