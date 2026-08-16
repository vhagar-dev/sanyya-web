import { createFileRoute, Link } from "@tanstack/react-router";
import { SignupButton } from "@/components/site/SignupDialog";
import { ArrowRight, Check, Plug, Settings, Zap } from "lucide-react";
import { Section, SectionBadge, GradientGlow, GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import slackLogo from "@/assets/logos/slack.png";
import netsuiteLogo from "@/assets/logos/netsuite.png";
import quickbooksLogo from "@/assets/logos/quickbooks.png";
import billLogo from "@/assets/logos/bill.png";
import rampLogo from "@/assets/logos/ramp.png";
import quartzyLogo from "@/assets/logos/quartzy.png";
import claudeLogo from "@/assets/logos/claude.png";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations | Sanyya, spend control that scales with you" },
      {
        name: "description",
        content:
          "Sanyya plugs into your stack. Connect Slack, NetSuite, QuickBooks, Bill.com, Ramp, and Quartzy in minutes, not months.",
      },
      { property: "og:title", content: "Integrations | Sanyya" },
      {
        property: "og:description",
        content: "Plugs into your stack, no migration required.",
      },
    ],
  }),
  component: IntegrationsPage,
});

const integrationLogos = [
  { name: "Quartzy", logo: quartzyLogo },
  { name: "Slack", logo: slackLogo },
  { name: "NetSuite", logo: netsuiteLogo },
  { name: "Ramp", logo: rampLogo },
  { name: "Bill.com", logo: billLogo },
  { name: "QuickBooks", logo: quickbooksLogo },
];

function HubSpokeVisual() {
  // Desktop: circular hub-and-spoke. Mobile: vertical list.
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
      {/* Desktop diagram */}
      <div className="relative hidden h-[380px] sm:block">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 380" aria-hidden>
          <defs>
            <linearGradient id="aurora" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3C83F5" />
              <stop offset="50%" stopColor="#895AF6" />
              <stop offset="100%" stopColor="#67E7F8" />
            </linearGradient>
          </defs>
          {[
            [200, 60],
            [340, 130],
            [340, 250],
            [200, 320],
            [60, 250],
            [60, 130],
          ].map(([x, y], i) => (
            <line
              key={i}
              x1="200"
              y1="190"
              x2={x}
              y2={y}
              stroke="url(#aurora)"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 -z-10 rounded-full bg-transparent" />
          <div className="grid h-24 w-24 place-items-center rounded-full border border-border bg-card shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
            <div className="text-center">
              <div className="text-base font-bold text-violet-700">Sanyya</div>
              <div className="tabular-nums text-[9px] text-muted-foreground">Hub</div>
            </div>
          </div>
        </div>

        {/* Spokes */}
        {[
          { x: "50%", y: "60px", t: "-50%, -50%" },
          { x: "calc(50% + 140px)", y: "130px", t: "-50%, -50%" },
          { x: "calc(50% + 140px)", y: "250px", t: "-50%, -50%" },
          { x: "50%", y: "320px", t: "-50%, -50%" },
          { x: "calc(50% - 140px)", y: "250px", t: "-50%, -50%" },
          { x: "calc(50% - 140px)", y: "130px", t: "-50%, -50%" },
        ].map((p, i) => {
          const logo = integrationLogos[i];
          return (
            <div
              key={i}
              className="absolute"
              style={{ left: p.x, top: p.y, transform: `translate(${p.t})` }}
            >
              <div className="grid h-16 w-16 place-items-center rounded-xl border border-border bg-card p-2 shadow-sm">
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className="max-h-10 max-w-12 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile list */}
      <div className="grid gap-2 sm:hidden">
        <div className="mb-2 flex items-center justify-center gap-2">
          <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card shadow">
            <span className="text-xs font-bold text-violet-700">Sanyya</span>
          </div>
          <span className="tabular-nums text-[10px] text-muted-foreground">connects with</span>
        </div>
        {integrationLogos.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
          >
            <img
              src={l.logo}
              alt={`${l.name} logo`}
              className="h-8 w-auto object-contain"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-foreground">{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const claudeQueries = [
  "How much did we spend on cell culture media last quarter?",
  "Which vendors have the longest lead times?",
  "Show me all open POs over $5,000",
  "What's our Thermo Fisher spend trending month over month?",
];

function FeaturedClaude() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)] sm:p-10">
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
        <div className="grid size-24 shrink-0 place-items-center rounded-2xl border border-border bg-card p-4 shadow-sm sm:size-28">
          <img
            src={claudeLogo}
            alt="Claude AI logo"
            width={816}
            height={816}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-balance font-display text-3xl sm:text-4xl md:text-5xl">
            Talk to Your Procurement Data Through <span className="text-violet-700">Claude</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Sanyya ships with a Claude connector powered by Anthropic's Model Context Protocol
            (MCP). Connect your Sanyya account to Claude and ask questions about your spend,
            purchase orders, invoices, vendor history, and inventory in plain English. No dashboards
            to build. No reports to pull. Just ask.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {claudeQueries.map((q) => (
              <div
                key={q}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm"
              >
                <span className="mr-2 tabular-nums text-[11px] text-muted-foreground">Ask</span>
                {q}
              </div>
            ))}
          </div>
          <div className="mt-7">
            <SignupButton size="lg" className="w-full sm:w-auto">
              Get early access <ArrowRight className="size-4" />
            </SignupButton>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Sanyya is the first biotech procurement platform with a Claude connector. Ask your data
            anything, right from the tools you already use.
          </p>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    name: "Claude AI (MCP)",
    logo: claudeLogo,
    desc: "Query your procurement data in natural language through Claude.",
    bullets: [
      "Model Context Protocol connector",
      "Natural-language spend questions",
      "Open PO and invoice lookups",
      "Vendor and inventory history",
    ],
  },
  {
    name: "Slack",
    logo: slackLogo,
    desc: "Create purchase requests, approve spend, and get real-time notifications, all without leaving Slack. Our AI agent lives in your workspace.",
    bullets: [
      "Requisition creation via AI agent",
      "Approval notifications with action buttons",
      "Low-stock and delivery alerts",
      "Budget impact notifications",
    ],
  },
  {
    name: "NetSuite",
    logo: netsuiteLogo,
    desc: "Sync purchase orders, invoices, and vendor records with NetSuite. Keep your ERP as the financial system of record while Sanyya handles procurement workflows.",
    bullets: [
      "PO sync (bi-directional)",
      "Invoice data push",
      "Vendor record sync",
      "GL coding and cost center mapping",
    ],
  },
  {
    name: "QuickBooks Online",
    logo: quickbooksLogo,
    desc: "For teams on QBO, Sanyya pushes approved invoices and PO data directly, keeping your books accurate without manual journal entries.",
    bullets: ["Invoice sync", "PO data push", "Vendor sync", "Expense categorization"],
  },
  {
    name: "Bill.com",
    logo: billLogo,
    desc: "Once an invoice is matched and approved in Sanyya, it's pushed to Bill.com in a 'Ready to Pay' state with the full approval audit trail attached.",
    bullets: [
      "Approved invoice push",
      "Payment status sync",
      "Audit trail attachment",
      "Vendor payment tracking",
    ],
  },
  {
    name: "Ramp",
    logo: rampLogo,
    desc: "Connect corporate card spend with procurement workflows. Reconcile Ramp transactions against POs and track all spend, card and invoice, in one place.",
    bullets: [
      "Transaction reconciliation",
      "Card spend visibility",
      "Budget tracking across payment methods",
      "Receipt matching",
    ],
  },
  {
    name: "Quartzy",
    logo: quartzyLogo,
    desc: "The only procurement platform with native Quartzy integration. Sync lab inventory, supply requests, and ordering data between both systems.",
    bullets: [
      "Inventory level sync",
      "Supply request flow",
      "Order history sharing",
      "Catalog connectivity",
    ],
  },
];

const steps = [
  {
    title: "Connect",
    icon: Plug,
    color: "text-violet-700 bg-violet-50",
    desc: "Authenticate your account with a few clicks. No IT support required.",
  },
  {
    title: "Configure",
    icon: Settings,
    color: "text-violet-500 bg-violet-50",
    desc: "Map fields, choose sync frequency, and set up data flow rules to match your process.",
  },
  {
    title: "Go Live",
    icon: Zap,
    color: "text-amber-500 bg-amber-50",
    desc: "Data starts flowing immediately. Historical data backfill available for most integrations.",
  },
];

function IntegrationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Integrations" }]} />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-md border border-violet-200 bg-violet-50 px-4 py-1.5 tabular-nums text-[11px] text-violet-700">
                  Integrations
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                  Plugs Into Your Stack,{" "}
                  <span className="text-violet-700">No Migration Required</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  Sanyya works alongside the tools you already use. Connect your accounting,
                  payment, lab management, and communication systems in minutes, not months.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <SignupButton size="lg" className="w-full sm:w-auto">
                    Get early access <ArrowRight className="size-4" />
                  </SignupButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <HubSpokeVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED, CLAUDE MCP */}
      <Section size="tight">
        <Reveal>
          <FeaturedClaude />
        </Reveal>
      </Section>

      {/* FEATURED, QUARTZY */}

      <Section size="tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border bg-secondary p-6 sm:p-10">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-violet-500" />
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="inline-flex items-center rounded-md border border-violet-200 bg-violet-50 px-4 py-1.5 tabular-nums text-[11px] text-violet-600">
                  Exclusive
                </span>
                <h2 className="mt-4 text-balance font-display text-3xl sm:text-4xl md:text-5xl">
                  The Only Procurement Platform That Integrates with Quartzy
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  If your lab already manages supplies in Quartzy, Sanyya connects directly, syncing
                  inventory, requests, and ordering data between both systems. No duplication. No
                  switching tools. Your lab team keeps using what they know, while procurement gets
                  the visibility it needs.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Inventory Levels", "Supply Requests", "Order History"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid h-32 w-32 place-items-center rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <img
                    src={quartzyLogo}
                    alt="Quartzy logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* INTEGRATION GRID */}
      <Section id="integration-grid" size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Ecosystem</SectionBadge>
            <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl">
              Connect Your Entire Procurement Ecosystem
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
                <div className="flex items-center">
                  <div className="grid size-11 place-items-center rounded-xl border border-border bg-card p-1.5">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <ul className="mt-4 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-violet-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOW INTEGRATIONS WORK */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Setup</SectionBadge>
            <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl">
              Set Up in Minutes, Not Months
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className={`mx-auto grid size-14 place-items-center rounded-2xl ${s.color}`}>
                  <s.icon className="size-6" />
                </div>
                <div className="mt-4 tabular-nums text-xs font-semibold text-violet-700">
                  Step {i + 1}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* API & CUSTOM */}
      <Section size="tight">
        <Reveal>
          <div className="rounded-xl border border-border bg-secondary p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <SectionBadge tone="neutral">API</SectionBadge>
                <h2 className="mt-4 text-balance text-2xl font-display sm:text-3xl">
                  Need Something Custom?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Sanyya offers a REST API for teams that need custom integrations with internal
                  tools, data warehouses, or specialized systems. Our team can help you design the
                  integration architecture.
                </p>
                <SignupButton
                  variant="link"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:text-violet-700"
                >
                  Contact Us <ArrowRight className="size-4" />
                </SignupButton>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-[#0E1629] p-4 tabular-nums text-[12px] leading-relaxed text-slate-200 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
                <div>
                  <span className="text-violet-300">GET</span>{" "}
                  <span className="text-violet-300">/api/v1/purchase-orders?status=active</span>
                </div>
                <div className="mt-2 text-muted-foreground">{"{"}</div>
                <div className="pl-4">
                  <span className="text-violet-300">"id"</span>:{" "}
                  <span className="text-violet-300">"po_8421"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-violet-300">"vendor"</span>:{" "}
                  <span className="text-violet-300">"Fisher Scientific"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-violet-300">"total"</span>:{" "}
                  <span className="text-amber-300">12480.00</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
