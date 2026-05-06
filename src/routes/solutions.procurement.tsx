import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FilePlus,
  Scale,
  FileText,
  Users,
  GitBranch,
  Sparkles,
  Mail,
  Bell,
  Keyboard,
  HelpCircle,
  FileSpreadsheet,
  CheckCircle,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow, GhostButton } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { ModuleCard } from "@/components/site/ModuleCard";

export const Route = createFileRoute("/solutions/procurement")({
  head: () => ({
    meta: [
      { title: "Sanyya for Procurement, Quote Leverage. Vendor Scoring. Zero Busywork." },
      {
        name: "description",
        content:
          "Multi-vendor quoting, automated approvals, vendor scorecards, and quote-to-PO in one click, built for procurement leads who want leverage, not busywork.",
      },
      { property: "og:title", content: "Sanyya for Procurement" },
      {
        property: "og:description",
        content: "Procurement that's strategic, not administrative.",
      },
    ],
  }),
  component: ProcurementPage,
});

const frustrations = [
  { title: "Email-Based Quoting", icon: Mail, text: "You email 4 vendors for quotes. Responses trickle in over a week. You build a comparison in Excel. Then someone asks you to add a 5th vendor. You start over." },
  { title: "Approval Babysitting", icon: Bell, text: "A requisition has been sitting with a VP for 3 days. You Slack them. They forgot. You resend the email. The researcher is asking you for an update. You're the bottleneck, and it's not even your approval." },
  { title: "PO Data Re-Entry", icon: Keyboard, text: "You approved the quote. Now you manually type the same line items into a PO. Then type them again into your accounting system. Same data, three times." },
  { title: "No Vendor Intelligence", icon: HelpCircle, text: "Which vendor has the best on-time rate? Who gave you the best price last quarter? You don't know, because the data is scattered across inboxes, spreadsheets, and someone's memory." },
];

const solutions = [
  { title: "Structured Quoting", icon: FileSpreadsheet, text: "Send quote requests to multiple vendors from one screen. Responses populate a side-by-side comparison automatically. Add vendors, adjust quantities, re-quote, all without starting over." },
  { title: "Self-Running Approvals", icon: CheckCircle, text: "Configurable approval chains with auto-escalation, Slack notifications, and delegation rules. Approvers get one-click approve/reject, in Sanyya or Slack. You don't chase anyone." },
  { title: "Quote-to-PO in One Click", icon: Zap, text: "Accept a quote and the PO generates automatically, same line items, same pricing, same vendor. No re-typing. Send to the vendor or queue for review." },
  { title: "Vendor Scorecards", icon: TrendingUp, text: "Automatic scorecards based on real data: on-time delivery, price consistency, quality issues, responsiveness. Know which vendors deserve more business, and which don't." },
];

const modules = [
  { title: "Requisitions", category: "INTAKE", icon: FilePlus, iconCls: "text-emerald-600 bg-emerald-50", text: "Every purchase starts here. Structured requests with item details, budgets, and automatic routing to the right approver.", href: "/product/requisitions" },
  { title: "Quote Management", category: "SOURCING", icon: Scale, iconCls: "text-violet-600 bg-violet-50", text: "Multi-vendor quoting, side-by-side comparison, AI recommendations, and one-click PO conversion.", href: "/product/quotes" },
  { title: "Purchase Orders", category: "COMMITMENTS", icon: FileText, iconCls: "text-blue-600 bg-blue-50", text: "Full PO lifecycle, from generation to dispatch to close. Blanket POs, amendments, and revision tracking.", href: "/product/purchase-orders" },
  { title: "Vendor Management", category: "INTELLIGENCE", icon: Users, iconCls: "text-sky-600 bg-sky-50", text: "Vendor profiles, contact management, performance scorecards, and pricing history all in one place.", href: "/product/vendors" },
  { title: "Approvals & Workflows", category: "CONTROLS", icon: GitBranch, iconCls: "text-amber-600 bg-amber-50", text: "Dynamic approval chains, by amount, department, category, or any combination. Built to flex as your company grows.", href: "/product/approvals" },
  { title: "AI Match Engine", category: "RECONCILIATION", icon: Sparkles, iconCls: "text-cyan-600 bg-cyan-50", text: "Automatic PO-GRN-Invoice matching catches discrepancies before they become disputes.", href: "/product/match-engine" },
];

function ProcurementHeroVisual() {
  return (
    <div className="grid gap-3 rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-30px_rgba(60,131,245,0.45)] md:grid-cols-2">
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Active Quotes
        </div>
        <div className="space-y-2">
          {[
            { name: "Lab benches · CR-12", status: "3 of 4 received", tone: "blue" as const },
            { name: "PCR kits · Q4 reorder", status: "Evaluation ready", tone: "emerald" as const },
            { name: "Stepper motors · R-201", status: "Awaiting response", tone: "amber" as const },
          ].map((q) => (
            <div key={q.name} className="rounded-lg border border-border bg-secondary p-2.5">
              <div className="text-[12px] font-medium text-foreground">{q.name}</div>
              <div
                className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] ${
                  q.tone === "blue"
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : q.tone === "emerald"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                }`}
              >
                {q.status}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Top Vendor Scorecard
        </div>
        <div className="rounded-lg border border-border bg-secondary p-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">Fisher Scientific</div>
            <div className="font-mono text-sm text-foreground">
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                4.2
              </span>
              <span className="text-muted-foreground">/5</span>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { l: "On-Time Delivery", v: 92 },
              { l: "Price Competitiveness", v: 87 },
              { l: "Quality", v: 95 },
            ].map((m) => (
              <div key={m.l}>
                <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>{m.l}</span>
                  <span className="font-mono">{m.v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
                    style={{ width: `${m.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcurementPage() {
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
                { label: "Procurement" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-violet-600">
                  For Procurement
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Quote Leverage. Vendor Scoring.{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    Zero Busywork.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  You became a procurement lead to drive strategy, not to babysit approvals,
                  re-key PO data, or chase vendors for quote updates. Sanyya automates the
                  repetitive parts so you can focus on what actually moves the needle: better
                  prices, better vendors, better outcomes.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                    Book a Demo <ArrowRight className="size-4" />
                  </GradientButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <ProcurementHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FRUSTRATIONS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge tone="neutral">Without a System</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Does This Sound Like Your Week?
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {frustrations.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-red-100 bg-red-50/40 p-6 shadow-sm">
                <div className="grid size-10 place-items-center rounded-lg bg-red-100/70">
                  <f.icon className="size-5 text-red-400" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section size="tight" className="bg-secondary">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>With Sanyya</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Now Imagine Having Actual Leverage
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm">
                <div className="grid size-10 place-items-center rounded-lg bg-emerald-100/70">
                  <s.icon className="size-5 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MODULES */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Modules</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Your Procurement Toolkit
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
              Procurement That's Strategic,{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Not Administrative.
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
