import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plug, Settings, Zap } from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import slackLogo from "@/assets/logos/slack.png";
import netsuiteLogo from "@/assets/logos/netsuite.png";
import quickbooksLogo from "@/assets/logos/quickbooks.png";
import billLogo from "@/assets/logos/bill.png";
import rampLogo from "@/assets/logos/ramp.png";
import quartzyLogo from "@/assets/logos/quartzy.png";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations | Sanyya" },
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
    <div className="relative rounded-2xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)]">
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
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-400/40 via-violet-400/30 to-cyan-300/30 blur-2xl" />
          <div className="grid h-24 w-24 place-items-center rounded-full border border-border bg-white shadow-lg">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-base font-bold text-transparent">
                Sanyya
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Hub
              </div>
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
              <div className="grid h-16 w-16 place-items-center rounded-xl border border-border bg-white p-2 shadow-sm">
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
          <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-white shadow">
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-xs font-bold text-transparent">
              Sanyya
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            connects with
          </span>
        </div>
        {integrationLogos.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-white p-3"
          >
            <img src={l.logo} alt={`${l.name} logo`} className="h-8 w-auto object-contain" loading="lazy" />
            <span className="text-sm font-semibold text-foreground">{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    name: "Slack",
    logo: slackLogo,
    cat: "Communication",
    catCls: "bg-violet-50 text-violet-600 border-violet-200",
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
    cat: "ERP",
    catCls: "bg-blue-50 text-blue-600 border-blue-200",
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
    cat: "Accounting",
    catCls: "bg-blue-50 text-blue-600 border-blue-200",
    desc: "For teams on QBO, Sanyya pushes approved invoices and PO data directly, keeping your books accurate without manual journal entries.",
    bullets: [
      "Invoice sync",
      "PO data push",
      "Vendor sync",
      "Expense categorization",
    ],
  },
  {
    name: "Bill.com",
    logo: billLogo,
    cat: "Payments",
    catCls: "bg-amber-50 text-amber-700 border-amber-200",
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
    cat: "Spend Management",
    catCls: "bg-amber-50 text-amber-700 border-amber-200",
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
    cat: "Lab Management",
    catCls: "bg-emerald-50 text-emerald-700 border-emerald-200",
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
    color: "text-blue-500 bg-blue-50",
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
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-blue-600">
                  Integrations
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Plugs Into Your Stack, <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    No Migration Required
                  </span>
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
                  <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                    Book a Demo <ArrowRight className="size-4" />
                  </GradientButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <HubSpokeVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED, QUARTZY */}
      <Section size="tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary p-6 sm:p-10">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-violet-600">
                  Exclusive
                </span>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  The Only Procurement Platform That Integrates with Quartzy
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  If your lab already manages supplies in Quartzy, Sanyya connects directly,
                  syncing inventory, requests, and ordering data between both systems. No
                  duplication. No switching tools. Your lab team keeps using what they know, while
                  procurement gets the visibility it needs.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Inventory Levels", "Supply Requests", "Order History"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid h-32 w-32 place-items-center rounded-2xl border border-border bg-white p-4 shadow-sm">
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
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Connect Your Entire Procurement Ecosystem
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl border border-border bg-white p-1.5">
                    <img src={c.logo} alt={`${c.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-medium ${c.catCls}`}
                  >
                    {c.cat}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <ul className="mt-4 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
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
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Set Up in Minutes, Not Months
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                <div
                  className={`mx-auto grid size-14 place-items-center rounded-2xl ${s.color}`}
                >
                  <s.icon className="size-6" />
                </div>
                <div className="mt-4 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text font-mono text-xs font-semibold uppercase tracking-widest text-transparent">
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
          <div className="rounded-3xl border border-border bg-secondary p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <SectionBadge tone="neutral">API</SectionBadge>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  Need Something Custom?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Sanyya offers a REST API for teams that need custom integrations with internal
                  tools, data warehouses, or specialized systems. Our team can help you design the
                  integration architecture.
                </p>
                <a
                  href="#book-demo"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600"
                >
                  Contact Us <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-[#0E1629] p-4 font-mono text-[12px] leading-relaxed text-slate-200 shadow-lg">
                <div className="mb-2 flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/70" />
                  <span className="size-2.5 rounded-full bg-amber-400/70" />
                  <span className="size-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div>
                  <span className="text-blue-300">GET</span>{" "}
                  <span className="text-cyan-300">/api/v1/purchase-orders?status=active</span>
                </div>
                <div className="mt-2 text-slate-400">{"{"}</div>
                <div className="pl-4">
                  <span className="text-violet-300">"id"</span>:{" "}
                  <span className="text-emerald-300">"po_8421"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-violet-300">"vendor"</span>:{" "}
                  <span className="text-emerald-300">"Fisher Scientific"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-violet-300">"total"</span>:{" "}
                  <span className="text-amber-300">12480.00</span>
                </div>
                <div className="text-slate-400">{"}"}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

    </>
  );
}
