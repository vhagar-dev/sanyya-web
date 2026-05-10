import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  FileSearch,
  Upload,
  Mail,
  ScanText,
  Search,
  Building2,
  Calendar,
  ListOrdered,
  Hash,
  DollarSign,
  FileText,
  ShieldCheck,
  PenLine,
  CheckCircle2,
  XCircle,
  Files,
  Eye,
  Database,
  Brain,
  MessageCircle,
  Sparkles,
  Layers,
  BarChart3,
  HelpCircle,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GhostButton, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";

export const Route = createFileRoute("/product/sanyya-drive")({
  head: () => ({
    meta: [
      { title: "Sanyya Drive: AI Document Intelligence | Sanyya" },
      {
        name: "description",
        content:
          "Drop any business document into Sanyya Drive. AI reads, extracts, and indexes every line, date, and dollar. Searchable like a database.",
      },
      { property: "og:title", content: "Sanyya Drive: AI Document Intelligence | Sanyya" },
      {
        property: "og:description",
        content:
          "OCR, extraction, and search for COAs, vendor agreements, spec sheets, quotes, and every other document in your business.",
      },
    ],
  }),
  component: SanyyaDrivePage,
});

function ComingSoonPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-700">
      <span className="size-1.5 rounded-full bg-violet-500" />
      Coming soon
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Sanyya Drive
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-blue-600">
          AI indexed
        </span>
      </div>

      <div className="rounded-xl border-2 border-dashed border-border bg-[hsl(210_40%_98%)] p-4 text-center">
        <Upload className="mx-auto size-5 text-blue-500" />
        <div className="mt-1.5 text-xs font-medium text-foreground">Drop files or paste link</div>
        <div className="text-[11px] text-muted-foreground">PDFs, scans, spreadsheets, images</div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { name: "COA-7721.pdf", meta: "Thermo Fisher · Mar 2024" },
          { name: "MSA-Corning.pdf", meta: "Vendor agreement · 2026" },
          { name: "spec-96well.pdf", meta: "Spec sheet · Lot B41" },
        ].map((d) => (
          <div key={d.name} className="rounded-lg border border-border bg-white p-2 text-left">
            <div className="flex items-center gap-1">
              <FileText className="size-3 text-slate-400" />
              <CheckCircle2 className="size-3 text-emerald-500" />
            </div>
            <div className="mt-1 truncate text-[10px] font-medium text-foreground">{d.name}</div>
            <div className="truncate text-[9px] text-muted-foreground">{d.meta}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-white px-2.5 py-2">
        <Search className="size-3.5 text-muted-foreground" />
        <div className="truncate text-[11px] text-foreground">
          certificate of analysis, Thermo Fisher, 2024
        </div>
      </div>

      <div className="mt-2 space-y-1.5">
        {[
          { t: "COA-7721.pdf", s: "Lot B41 · Expiry 2025-03" },
          { t: "COA-7889.pdf", s: "Lot C12 · Expiry 2025-06" },
          { t: "COA-8014.pdf", s: "Lot D03 · Expiry 2025-09" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-md border border-border bg-[hsl(210_40%_98%)] px-2.5 py-1.5"
          >
            <div className="flex items-center gap-2">
              <FileText className="size-3 text-blue-500" />
              <div className="text-[11px] font-medium text-foreground">{r.t}</div>
            </div>
            <div className="text-[10px] text-muted-foreground">{r.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pains = [
  {
    icon: Files,
    title: "Filed and Forgotten",
    body: "Documents go into a shared drive or email folder and are never seen again. When you need a COA for an audit, you spend 30 minutes digging through folders.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Unsearchable PDFs",
    body: "Scanned packing slips, faxed invoices, handwritten lot numbers. None of it is searchable. You know the document exists, you just can't find it.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: Brain,
    title: "Context Lives in People's Heads",
    body: "The person who filed the vendor agreement remembers the terms. When they leave, that knowledge disappears. Documents have no structure, no tags, no metadata.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Database,
    title: "Manual Data Entry",
    body: "Someone reads every COA and types the lot number, expiry date, and grade into a spreadsheet. It's slow, error-prone, and no one wants to do it.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

const extractions = [
  { icon: Building2, title: "Vendor & Supplier Info", body: "Company names, addresses, contact details, and account numbers pulled from any document header or footer.", iconBg: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: Calendar, title: "Dates & Timelines", body: "Invoice dates, expiry dates, ship dates, contract renewal dates. Every date found and tagged by type.", iconBg: "bg-violet-50", iconColor: "text-violet-500" },
  { icon: ListOrdered, title: "Line Items & Quantities", body: "Every product, SKU, quantity, unit price, and total extracted from tables, even poorly formatted ones.", iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: Hash, title: "Lot Numbers & Batch IDs", body: "Critical for FDA compliance and traceability. Extracted from COAs, packing slips, and receiving documents.", iconBg: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: DollarSign, title: "Financial Amounts", body: "Totals, subtotals, taxes, discounts, and per-line amounts. Pulled from invoices, quotes, and POs.", iconBg: "bg-amber-50", iconColor: "text-amber-500" },
  { icon: FileText, title: "Terms & Conditions", body: "Payment terms, warranty periods, SLAs, and renewal clauses surfaced from contracts and agreements.", iconBg: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: ShieldCheck, title: "Certifications & Compliance", body: "ISO numbers, FDA references, grade specifications, and storage requirements from COAs and spec sheets.", iconBg: "bg-violet-50", iconColor: "text-violet-500" },
  { icon: PenLine, title: "Signatures & Approvals", body: "Detect signed vs. unsigned documents. Flag which agreements are fully executed and which are still pending.", iconBg: "bg-emerald-50", iconColor: "text-emerald-500" },
];

function StepVisualDrop() {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="rounded-lg border-2 border-dashed border-border bg-[hsl(210_40%_98%)] p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <FileText className="size-5 text-blue-500" />
          <FileText className="size-6 text-violet-500" />
          <FileText className="size-5 text-cyan-500" />
        </div>
        <div className="mt-2 text-xs font-medium text-foreground">Drop files here</div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-2">
        <Mail className="size-4 text-blue-500" />
        <ArrowRight className="size-3 text-muted-foreground" />
        <span className="text-[11px] font-mono text-foreground">drive@yourco.sanyya.ai</span>
      </div>
    </div>
  );
}

function StepVisualRead() {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="rounded-lg border border-border bg-[hsl(210_40%_98%)] p-3">
        <div className="space-y-1.5">
          <div className="rounded bg-blue-100 px-2 py-1 text-[10px] font-medium text-blue-700">Vendor: Thermo Fisher</div>
          <div className="rounded bg-violet-100 px-2 py-1 text-[10px] font-medium text-violet-700">Date: 2024-03-12</div>
          <div className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-medium text-emerald-700">Lot: B41-7721</div>
          <div className="rounded bg-amber-100 px-2 py-1 text-[10px] font-medium text-amber-700">Total: $4,820.00</div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <ScanText className="size-3.5 text-blue-500" />
        Structured fields extracted
      </div>
    </div>
  );
}

function StepVisualSearch() {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-[hsl(210_40%_98%)] px-2.5 py-2">
        <Search className="size-3.5 text-muted-foreground" />
        <span className="text-[11px] text-foreground">lot B41 expiring before June</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {["COA-7721.pdf", "Packing-4512.pdf", "Invoice-9087.pdf"].map((f) => (
          <div key={f} className="flex items-center justify-between rounded border border-border bg-white px-2 py-1.5">
            <span className="text-[11px] text-foreground">{f}</span>
            <CheckCircle2 className="size-3 text-emerald-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StepVisualAsk() {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="flex items-start gap-2">
        <div className="grid size-6 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-600">
          <HelpCircle className="size-3.5" />
        </div>
        <div className="flex-1 rounded-lg rounded-tl-none border border-border bg-blue-50 px-2.5 py-1.5">
          <span className="text-[11px] text-foreground">What's our spend with Corning YTD?</span>
        </div>
      </div>
      <div className="mt-2 flex items-start gap-2">
        <div className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
          <Sparkles className="size-3" />
        </div>
        <div className="flex-1 rounded-lg rounded-tl-none border border-border bg-white px-2.5 py-1.5">
          <span className="text-[11px] text-foreground">$28,410 across 14 POs.</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Drop or Forward",
    body: "Drag and drop any document, including PDFs, scanned images, and spreadsheets, into Sanyya Drive. Or forward documents to your dedicated Sanyya Drive email address. We accept anything.",
    visual: <StepVisualDrop />,
  },
  {
    n: "02",
    title: "AI Reads Everything",
    body: "Our OCR and extraction engine reads every page. Not just the header. Every line item, table cell, date, dollar amount, and term. Handwritten notes, multi-page contracts, scanned receipts. All of it.",
    visual: <StepVisualRead />,
  },
  {
    n: "03",
    title: "Search Like a Database",
    body: "Every word, number, and field becomes instantly searchable. Find a specific lot number across 10,000 documents. Pull every spec sheet from a vendor. Surface every contract expiring this quarter.",
    visual: <StepVisualSearch />,
  },
  {
    n: "04",
    title: "Ask the Agent",
    body: "Don't want to search? Just ask. The AI agent understands your documents and your entire procurement history. Ask it anything, from a specific lot number to a spend analysis across the last 6 months.",
    visual: <StepVisualAsk />,
  },
];

function SearchComparison() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Traditional */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Traditional file search
          </div>
          <XCircle className="size-4 text-red-500" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-[hsl(210_40%_98%)] px-2.5 py-2">
          <Search className="size-3.5 text-muted-foreground" />
          <span className="text-[12px] text-foreground">thermo fisher certificate</span>
        </div>
        <div className="mt-3 rounded-lg border border-dashed border-border p-6 text-center">
          <div className="text-sm font-medium text-muted-foreground">0 results</div>
          <div className="mt-1 text-[11px] text-muted-foreground">
            Filename is{" "}
            <code className="font-mono text-[10px]">TF_COA_2024_03_batch7721.pdf</code>
          </div>
        </div>
      </div>

      {/* Sanyya Drive */}
      <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-[0_8px_30px_-12px_hsl(217_91%_57%/0.4)]">
        <div className="mb-3 flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
            Sanyya Drive search
          </div>
          <CheckCircle2 className="size-4 text-emerald-500" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/50 px-2.5 py-2">
          <Search className="size-3.5 text-blue-600" />
          <span className="text-[12px] text-foreground">thermo fisher certificate</span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { t: "TF_COA_2024_03_batch7721.pdf", v: "Thermo Fisher · 2024-03-12", s: "…certificate of analysis for lot B41…" },
            { t: "TF_COA_2024_05_batch8014.pdf", v: "Thermo Fisher · 2024-05-22", s: "…this certificate confirms purity at 99.8%…" },
            { t: "Receiving-9087.pdf", v: "Thermo Fisher · 2024-06-01", s: "…matched against COA-7889 certificate…" },
            { t: "Audit-Q2-2024.pdf", v: "Internal · 2024-07-10", s: "…3 Thermo Fisher certificates reviewed…" },
          ].map((r) => (
            <div key={r.t} className="rounded-lg border border-border bg-white p-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="truncate text-[12px] font-semibold text-foreground">{r.t}</div>
                <div className="shrink-0 text-[10px] text-muted-foreground">{r.v}</div>
              </div>
              <div className="mt-1 truncate text-[11px] text-muted-foreground">
                <span className="rounded bg-amber-100 px-1 text-amber-800">certificate</span> {r.s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const exampleQueries = [
  "Show me all COAs from Thermo Fisher in Q1 2024",
  "Which vendor agreements expire in the next 90 days?",
  "Find every PO with Corning 96-well plates over $500",
];

const agentCapabilities = [
  {
    icon: Search,
    title: "Look Things Up",
    body: "Find specific facts buried in any document. Lot numbers, expiry dates, payment terms, pricing. The agent finds it instantly, even if you don't remember which document it's in.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Layers,
    title: "Analyze Across Documents",
    body: "Ask questions that span hundreds of documents. Compare vendor terms, track price changes over time, or find every COA from a specific supplier. The agent reasons across your entire document library.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: BarChart3,
    title: "Query All Your Procurement Data",
    body: "The agent doesn't just know your documents. It knows your POs, invoices, inventory levels, and vendor history from across all Sanyya modules. Ask about spend, delivery performance, or outstanding commitments.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-blue-100 bg-blue-50 px-3.5 py-2 text-sm text-foreground">
        {children}
      </div>
    </div>
  );
}

function AgentBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <div className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-sm">
        <Sparkles className="size-3.5" />
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-white px-3.5 py-2 text-sm text-foreground shadow-sm">
        {children}
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-full bg-brand-gradient text-white">
            <MessageCircle className="size-3.5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Sanyya Agent</div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Online · trained on your data
            </div>
          </div>
        </div>
        <span className="rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-violet-700">
          Beta
        </span>
      </div>

      <div className="space-y-3">
        <UserBubble>What were the payment terms on our last 3 Thermo Fisher agreements?</UserBubble>
        <AgentBubble>
          <p>Here's what I found across your Thermo Fisher vendor agreements:</p>
          <ul className="mt-2 space-y-1 text-[13px]">
            <li>• Agreement TF-2024-019 (Mar 2024): Net 45, 2% early pay discount</li>
            <li>• Agreement TF-2023-088 (Sep 2023): Net 30, no discount</li>
            <li>• Agreement TF-2023-041 (Feb 2023): Net 60</li>
          </ul>
          <p className="mt-2 text-[13px] text-muted-foreground">
            Payment terms improved over time. Your most recent agreement has the best early pay
            discount.
          </p>
        </AgentBubble>
        <UserBubble>How much did we spend on cell culture media in Q4?</UserBubble>
        <AgentBubble>
          <p>
            Across all POs in Q4 2024, you spent{" "}
            <span className="font-semibold">$14,280</span> on cell culture media from 3 vendors.
            Thermo Fisher was 62% of that spend. Want me to break it down by product?
          </p>
        </AgentBubble>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-[hsl(210_40%_98%)] px-3 py-2">
        <div className="flex gap-1">
          <span className="size-1.5 animate-pulse rounded-full bg-blue-400" />
          <span className="size-1.5 animate-pulse rounded-full bg-violet-400 [animation-delay:120ms]" />
          <span className="size-1.5 animate-pulse rounded-full bg-cyan-400 [animation-delay:240ms]" />
        </div>
        <span className="text-[11px] text-muted-foreground">Agent is thinking…</span>
      </div>
    </div>
  );
}

function SanyyaDrivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 mesh-drift opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Product" },
                { label: "Sanyya Drive" },
              ]}
            />
          </Reveal>
          <div className="mt-8 grid gap-10 md:gap-14 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <SectionBadge>Sanyya Drive</SectionBadge>
                  <ComingSoonPill />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Drop Any Document.{" "}
                  <span className="text-brand-gradient">Find Anything Inside It.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  Sanyya Drive reads every document you upload: COAs, vendor agreements, spec
                  sheets, quotes. It extracts every detail. Search across all your documents, or
                  just ask the AI agent. It knows your documents, your POs, your vendors, and your
                  spend.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                    Book a Demo <ArrowRight className="size-4" />
                  </GradientButton>
                  <GhostButton href="#how-it-works" size="lg" className="w-full sm:w-auto">
                    See How It Works <ArrowDown className="size-4" />
                  </GhostButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="relative">
              <GradientGlow size="md" className="-z-10 -right-10 top-10 opacity-40" />
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your Documents Are a <span className="text-brand-gradient">Black Hole</span>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg"
            >
              <div className={`grid size-11 place-items-center rounded-xl ${p.iconBg}`}>
                <p.icon className={`size-5 ${p.iconColor}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Drop It. We Read It. <span className="text-brand-gradient">You Search It.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-gradient font-mono text-sm font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-5">{s.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Extraction */}
      <Section id="extraction" size="tight" className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Extraction</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Every Detail, <span className="text-brand-gradient">Automatically</span>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extractions.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg"
            >
              <div className={`grid size-10 place-items-center rounded-full ${e.iconBg}`}>
                <e.icon className={`size-5 ${e.iconColor}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{e.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Search */}
      <Section id="search">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Search</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ask Questions, <span className="text-brand-gradient">Not Filenames</span>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <SearchComparison />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {exampleQueries.map((q) => (
              <div
                key={q}
                className="flex items-start gap-2 rounded-xl border border-border bg-white p-4 shadow-sm"
              >
                <Search className="mt-0.5 size-4 shrink-0 text-blue-500" />
                <span className="text-sm text-foreground">{q}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50/60 p-4 text-center text-sm text-foreground sm:text-base">
            Or skip the search bar entirely. Ask the AI agent:{" "}
            <em className="text-violet-700">
              "Show me every document from Corning where the order was over $1,000."
            </em>
          </div>
        </div>
      </Section>

      {/* AI Agent */}
      <Section id="agent" className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>AI Agent</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ask Your Data <span className="text-brand-gradient">Anything</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Sanyya's AI agent sits on top of everything: your documents, purchase orders,
              invoices, inventory, and vendor history. Ask it a question in plain English and get an
              answer in seconds. Not hours of digging.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            {agentCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className={`grid size-11 shrink-0 place-items-center rounded-xl ${c.iconBg}`}>
                    <c.icon className={`size-5 ${c.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <ChatMockup />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section id="book-demo" size="tight" className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <ComingSoonPill />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Stop Searching. <span className="text-brand-gradient">Start Finding.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Sanyya Drive and the AI agent are coming soon.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex justify-center">
              <GradientButton href="#book-demo" size="lg">
                Book a Demo <ArrowRight className="size-4" />
              </GradientButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

// silence unused icon warnings for icons reserved for future variants
void FileSearch;
