import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Columns,
  Clock,
  Link2,
  GitCompareArrows,
  History,
  Sparkles,
  Timer,
  ArrowRight,
  Check,
  Copy,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/quotes")({
  head: () => ({
    meta: [
      { title: "Quote Management | Sanyya" },
      {
        name: "description",
        content:
          "A single, structured destination for vendor quotes. Side-by-side comparison, historical pricing, and AI-powered recommendations.",
      },
      { property: "og:title", content: "Quote Management | Sanyya" },
      {
        property: "og:description",
        content:
          "Stop losing money before you buy. Centralize vendor quotes, compare side-by-side, and get AI recommendations.",
      },
    ],
  }),
  component: QuotesPage,
});

function QuoteComparisonHero() {
  const vendors = [
    { name: "Fisher Scientific", price: "$842", lead: "5 days", ship: "$48", score: "9.5", rec: true },
    { name: "VWR", price: "$868", lead: "7 days", ship: "$52", score: "8.6", rec: false },
    { name: "Sigma-Aldrich", price: "$895", lead: "4 days", ship: "$60", score: "8.9", rec: false },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Quote comparison · 250mL Reagent
        </div>
        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan-700">
          3 quotes
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {vendors.map((v) => (
          <div
            key={v.name}
            className={`rounded-xl border p-3 ${v.rec ? "border-blue-300 bg-blue-50/60 ring-2 ring-blue-200" : "border-border bg-white"}`}
          >
            {v.rec && (
              <div className="-mx-3 -mt-3 mb-2 rounded-t-xl bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-widest text-white">
                Recommended
              </div>
            )}
            <div className="truncate text-xs font-semibold text-foreground">{v.name}</div>
            <Row label="Unit" value={v.price} />
            <Row label="Lead" value={v.lead} />
            <Row label="Ship" value={v.ship} />
            <div className="mt-2 border-t border-border pt-2">
              <div className="text-[10px] text-muted-foreground">Total Score</div>
              <div className="text-base font-bold text-foreground">{v.score}<span className="text-xs text-muted-foreground">/10</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-1.5 flex items-center justify-between text-[11px]">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function ShareLinkMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Share quote link
      </div>
      <div className="mt-3 space-y-3">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-muted-foreground">Vendor name</span>
          <input
            readOnly
            value="Fisher Scientific"
            className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm"
          />
        </label>
        <div>
          <span className="mb-1 block text-xs font-medium text-muted-foreground">Secure link</span>
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
            <Link2 className="size-4 shrink-0 text-blue-600" />
            <code className="flex-1 truncate font-mono text-[11px] text-blue-700">
              sanyya.app/q/8f4a-2c91
            </code>
            <button className="inline-flex items-center gap-1 rounded-md border border-blue-200 bg-white px-2 py-1 text-[11px] font-medium text-blue-700">
              <Copy className="size-3" /> Copy
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
          <Check className="size-4" /> Link copied, sent to vendor
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-border bg-[hsl(210_40%_98%)] p-3">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Vendor preview</div>
        <div className="mt-1 text-xs text-foreground">
          Submit your quote, pricing, lead time, and terms. No login required.
        </div>
      </div>
    </div>
  );
}

function ComparisonTableMockup() {
  const rows = [
    { label: "Unit Price", a: "$842", b: "$868", c: "$895", winner: "a" },
    { label: "Lead Time", a: "5 days", b: "7 days", c: "4 days", winner: "c" },
    { label: "Shipping", a: "$48", b: "$52", c: "$60", winner: "a" },
    { label: "Payment", a: "Net 30", b: "Net 45", c: "Net 30", winner: null },
    { label: "Total", a: "$890", b: "$920", c: "$955", winner: "a", bold: true },
  ];
  const headers: { key: "a" | "b" | "c"; name: string; win?: boolean }[] = [
    { key: "a", name: "Fisher Sci", win: true },
    { key: "b", name: "VWR" },
    { key: "c", name: "Sigma" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="grid grid-cols-4 border-b border-border bg-[hsl(210_40%_98%)] text-xs">
        <div className="px-3 py-2 font-mono uppercase tracking-widest text-muted-foreground">Field</div>
        {headers.map((h) => (
          <div
            key={h.key}
            className={`px-3 py-2 font-semibold ${h.win ? "bg-blue-50 text-blue-700" : "text-foreground"}`}
          >
            {h.name}
          </div>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-4 border-b border-border last:border-0 text-xs">
          <div className="px-3 py-2 text-muted-foreground">{r.label}</div>
          {(["a", "b", "c"] as const).map((k) => (
            <div
              key={k}
              className={`px-3 py-2 ${k === "a" ? "bg-blue-50/40" : ""} ${r.bold ? "font-bold" : ""} ${r.winner === k ? "text-emerald-700" : "text-foreground"}`}
            >
              {r[k]}
              {r.winner === k && <span className="ml-1 text-emerald-500">✓</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function AIRecommendationMockup() {
  const metrics = [
    { label: "Price", value: 9.2, color: "bg-blue-500" },
    { label: "Reliability", value: 9.8, color: "bg-emerald-500" },
    { label: "Historical Accuracy", value: 9.5, color: "bg-violet-500" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles className="size-4 text-violet-600" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Sanyya recommends
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-base font-semibold text-foreground">Fisher Scientific</div>
          <div className="text-[11px] text-muted-foreground">Based on 23 previous orders</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-muted-foreground">Overall</div>
          <div className="text-2xl font-bold text-brand-gradient">9.5</div>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">{m.label}</span>
              <span className="font-medium text-foreground">{m.value}/10</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[hsl(210_40%_94%)]">
              <div className={`h-full ${m.color}`} style={{ width: `${m.value * 10}%` }} />
            </div>
          </div>
        ))}
        <div className="pt-2">
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="font-medium text-foreground">Overall</span>
            <span className="font-bold text-foreground">9.5/10</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[hsl(210_40%_94%)]">
            <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: Link2, title: "Vendor Direct-Ingestion", body: "Secure, no-login links for vendors to submit quotes directly. No back-and-forth emails." },
  { icon: GitCompareArrows, title: "Side-by-Side Comparison", body: "Structured view of pricing, terms, lead times, and conditions across all vendors." },
  { icon: History, title: "Historical Pricing", body: "Track what you paid last time, from whom, and how it compares to today's quotes." },
  { icon: Sparkles, title: "AI Recommendations", body: "Aggregates price, reliability, and delivery history to suggest the best vendor, not just the cheapest." },
  { icon: Timer, title: "Quote Expiration Tracking", body: "Know when quotes expire so you never miss a good price." },
  { icon: ArrowRight, title: "Seamless Handoff", body: "Accept a quote and it flows directly into a requisition, no re-entry." },
];

const pains = [
  { icon: Mail, title: "Scattered Quotes", body: "Quotes live in individual inboxes. When someone leaves the company, their vendor relationships and pricing history leave with them.", border: "border-l-blue-400", iconColor: "text-blue-500" },
  { icon: Columns, title: "No Comparison", body: "Comparing vendors means opening multiple emails, copying numbers into a spreadsheet, and hoping you didn't miss a line item.", border: "border-l-violet-400", iconColor: "text-violet-500" },
  { icon: Clock, title: "No History", body: "You bought this same reagent 6 months ago. What did you pay? Who gave the best price? Nobody remembers.", border: "border-l-amber-400", iconColor: "text-amber-500" },
];

function QuotesPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Quote Management" },
        ]}
        badge="Quote Management"
        title={
          <>
            Stop losing money before you{" "}
            <span className="text-brand-gradient">even buy.</span>
          </>
        }
        subtitle="Vendor quotes are buried in email threads. You can't compare, you can't track history, and you have zero negotiating leverage. Sanyya gives you a single, structured destination for all pricing data, with side-by-side comparison and AI-powered recommendations."
        visual={<QuoteComparisonHero />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The pre-purchase black hole
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Before a single dollar is spent, your team is already losing, vendor quotes arrive in
              separate email threads, nobody tracks historical pricing, and there's no structured way
              to compare options. By the time a decision is made, the cheapest option may have expired.
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
              Invite, compare, <span className="text-brand-gradient">recommend</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks
            steps={[{ title: "Invite vendors directly", body: "Generate a secure, no-login link for each vendor. They input their quote directly into Sanyya, pricing, terms, lead times, and any conditions. No more chasing email attachments." }]}
            visual={<ShareLinkMockup />}
          />
          <HowItWorks
            steps={[{ title: "Compare side-by-side", body: "All submitted quotes land in a structured comparison view. See pricing, lead times, terms, and shipping costs across vendors in one glance. No spreadsheet required." }]}
            visual={<ComparisonTableMockup />}
          />
          <HowItWorks
            steps={[{ title: "Get AI recommendations", body: "Sanyya's recommendation engine aggregates historical data, past pricing, delivery reliability, invoice accuracy, and suggests the best vendor. Not just the cheapest, but the most reliable." }]}
            visual={<AIRecommendationMockup />}
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
              Everything you need before the PO
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
              Know what you're paying, <span className="text-brand-gradient">before you pay it.</span>
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
