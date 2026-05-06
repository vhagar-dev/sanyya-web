import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Brain,
  CheckCircle2,
  XCircle,
  TrendingUp,
  AlertTriangle,
  Layers,
  ScrollText,
  Gauge,
  ShieldCheck,
  GitCompareArrows,
  Workflow,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { HowItWorks } from "@/components/product/HowItWorks";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ThreeWayMatchInteractive } from "@/components/match-engine/ThreeWayMatchInteractive";

export const Route = createFileRoute("/product/match-engine")({
  head: () => ({
    meta: [
      { title: "AI Match Engine | Sanyya" },
      {
        name: "description",
        content:
          "Semantic vector matching connects POs, packing slips, and invoices, even when vendors use completely different names for the same thing.",
      },
      { property: "og:title", content: "AI Match Engine | Sanyya" },
      {
        property: "og:description",
        content:
          "From messy to matched. Vector embeddings, cosine similarity, and 3-way reconciliation built for scientific and industrial vocabulary.",
      },
    ],
  }),
  component: MatchEnginePage,
});

function VectorMatchHero() {
  return (
    <div
      className="relative rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(217 91% 60% / 0.08) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>dim: 1536</span>
        <span>cosine similarity</span>
      </div>

      <div className="relative mt-8 grid grid-cols-3 items-center gap-4">
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-3 text-center shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600">PO</div>
          <div className="mt-1 text-xs font-semibold text-blue-700">DMEM, high glucose, 500mL × 6</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-px w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            99.2% Match
          </span>
          <div className="h-px w-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
        </div>

        <div className="rounded-xl border-2 border-violet-300 bg-violet-50 p-3 text-center shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-widest text-violet-600">Slip</div>
          <div className="mt-1 text-xs font-semibold text-violet-700">DMEM HG 500mL × 6</div>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-2 text-center font-mono text-[11px] text-muted-foreground">
        similarity = cos(θ) → 0.992
      </div>
    </div>
  );
}

function BeforeAfterMockup() {
  const pairs = [
    { po: "Anti-CD3 Monoclonal Antibody, clone OKT3", slip: "OKT3 anti-human CD3 mAb", score: "98.7%" },
    { po: "STM32F407VGT6 MCU × 50", slip: "STM32 Cortex-M4, 50 pcs", score: "97.3%" },
    { po: "DMEM, high glucose, 500mL", slip: "Dulbecco's MEM HG 500ml", score: "99.1%" },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-red-700">
          <XCircle className="size-4" /> Traditional matching
        </div>
        <div className="mt-4 space-y-2">
          {pairs.map((p) => (
            <div key={p.po} className="rounded-lg border border-red-200 bg-white p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="truncate text-foreground">{p.po}</span>
                <span className="mx-2 text-muted-foreground">↔</span>
                <span className="truncate text-foreground">{p.slip}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-red-600">
                <XCircle className="size-3.5" /> No Match
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-700">
          <CheckCircle2 className="size-4" /> Sanyya semantic matching
        </div>
        <div className="mt-4 space-y-2">
          {pairs.map((p) => (
            <div key={p.po} className="rounded-lg border border-emerald-200 bg-white p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="truncate text-foreground">{p.po}</span>
                <span className="mx-2 text-muted-foreground">↔</span>
                <span className="truncate text-foreground">{p.slip}</span>
              </div>
              <div className="mt-1.5 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="size-3.5" /> {p.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VectorizeMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Embedding pipeline
      </div>
      <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-4 text-center">
          <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600">Input</div>
          <div className="mt-1 text-sm font-semibold text-blue-700">Corning 96-Well Plate, TC-Treated</div>
        </div>
        <div className="flex items-center justify-center">
          <Sparkles className="size-5 text-violet-500" />
        </div>
        <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
          <code className="block overflow-hidden font-mono text-[10px] leading-relaxed text-foreground">
            [0.341, 0.772, -0.089,
            <br /> 0.547, -0.318, 0.602,
            <br /> 0.119, ... ]
          </code>
          <div className="mt-2 text-[10px] text-muted-foreground">1536 dimensions</div>
        </div>
      </div>
    </div>
  );
}

function CosineSimilarityMockup() {
  return (
    <div
      className="rounded-2xl border border-border bg-white p-5 shadow-sm"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(217 91% 60% / 0.06) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Cosine similarity
      </div>
      <svg viewBox="0 0 240 170" className="mt-3 w-full">
        <defs>
          <marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="hsl(217 91% 60%)" />
          </marker>
          <marker id="arrowV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="hsl(258 90% 66%)" />
          </marker>
        </defs>
        {/* axes */}
        <line x1="20" y1="150" x2="220" y2="150" stroke="hsl(214 32% 88%)" strokeWidth="0.75" />
        <line x1="20" y1="20" x2="20" y2="150" stroke="hsl(214 32% 88%)" strokeWidth="0.75" />
        {/* vectors */}
        <line x1="20" y1="150" x2="200" y2="40" stroke="hsl(217 91% 60%)" strokeWidth="1.25" markerEnd="url(#arrowB)" />
        <line x1="20" y1="150" x2="170" y2="80" stroke="hsl(258 90% 66%)" strokeWidth="1.25" markerEnd="url(#arrowV)" />
        {/* origin dot */}
        <circle cx="20" cy="150" r="1.5" fill="hsl(215 16% 47%)" />
        {/* angle arc between the two vectors, radius 70 */}
        <path d="M 83.25 120.48 A 70 70 0 0 1 80 113.33" fill="none" stroke="hsl(215 16% 55%)" strokeWidth="1" />
        <text x="92" y="116" fontSize="10" fill="hsl(215 16% 47%)" fontFamily="monospace" fontStyle="italic">θ</text>
        {/* labels */}
        <text x="206" y="38" fontSize="9" fill="hsl(217 91% 38%)" fontFamily="monospace">IPA</text>
        <text x="176" y="78" fontSize="9" fill="hsl(258 90% 50%)" fontFamily="monospace">Isopropyl Alcohol</text>
      </svg>
      <div className="mt-3 inline-block rounded-md bg-[hsl(210_40%_98%)] px-2.5 py-1 font-mono text-[11px] text-foreground">
        Similarity = cos(θ)
      </div>
      <div className="mt-2 font-bold text-emerald-600">Match Confidence: 98.7%</div>
    </div>
  );
}

function ThreeWayDiagramMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-3">
        <DocCard label="PO" tone="blue" lines={["STM32F407VGT6 MCU × 50", "Tantalum Cap 10µF × 200"]} />
        <DocCard label="GRN / Slip" tone="cyan" lines={["STM32 Cortex-M4, 48 pcs", "10µF Tantalum × 200"]} flag />
        <DocCard label="Invoice" tone="violet" lines={["STM32F407 Microcontroller × 50, $487.50", "Tantalum Cap 10µF × 200"]} />
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs text-amber-700">
          <AlertTriangle className="size-3.5" /> Qty: PO=100, GRN=95, Invoice=100 → 5 units short
        </div>
        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
          3-Way Match Complete
        </div>
      </div>
    </div>
  );
}

function DocCard({ label, tone, lines, flag }: { label: string; tone: "blue" | "cyan" | "violet"; lines: string[]; flag?: boolean }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
  } as const;
  return (
    <div className={`rounded-xl border-2 p-3 ${tones[tone]}`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest">{label}</span>
        {flag && <AlertTriangle className="size-3.5 text-amber-500" />}
      </div>
      <ul className="mt-2 space-y-1 text-[11px] text-foreground">
        {lines.map((l) => (
          <li key={l} className="rounded bg-white/70 px-2 py-1">{l}</li>
        ))}
      </ul>
    </div>
  );
}

function DomainExamples() {
  const examples = [
    { tag: "Biotech", a: "DMEM, high glucose", b: "Dulbecco's Modified Eagle Medium HG", score: "99.1%", note: "Abbreviation + variant" },
    { tag: "Antibodies", a: "Anti-CD3 mAb, OKT3", b: "OKT3 anti-human CD3 Monoclonal Antibody", score: "98.7%", note: "Clone-name reorder" },
    { tag: "Hardware", a: "STM32F407VGT6", b: "STM32 Cortex-M4 Microcontroller", score: "97.3%", note: "Part number ↔ chip family" },
    { tag: "PPE", a: "Nitrile Gloves, Medium, Blue", b: "Blue Med Nitrile Glove", score: "99.5%", note: "Word order variation" },
    { tag: "Manufacturing", a: "PCB Assembly 4-layer FR-4", b: "4L PCB Fab, FR-4 Substrate", score: "96.8%", note: "Spec abbreviations" },
    { tag: "Lab Reagents", a: "Trypsin-EDTA 0.25%", b: "TrypLE Express Enzyme", score: "94.1%", note: "Functionally equivalent" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {examples.map((e) => (
        <div key={e.a} className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-700">
              {e.tag}
            </span>
            <span className="rounded-md bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text font-bold text-transparent">
              {e.score}
            </span>
          </div>
          <div className="mt-3 space-y-1.5 text-sm">
            <div className="rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-1.5 text-foreground">{e.a}</div>
            <div className="text-center text-xs text-muted-foreground">↕</div>
            <div className="rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-1.5 text-foreground">{e.b}</div>
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground">{e.note}</div>
        </div>
      ))}
    </div>
  );
}

function AnomalyChartMockup() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Resistor 10k Ohm, unit price (6 mo)
      </div>
      <svg viewBox="0 0 300 120" className="mt-3 w-full">
        <line x1="20" y1="100" x2="290" y2="100" stroke="hsl(214 32% 92%)" />
        <polyline
          points="20,75 70,72 120,76 170,73 220,74 270,30"
          fill="none"
          stroke="hsl(217 91% 60%)"
          strokeWidth="2.5"
        />
        <circle cx="270" cy="30" r="5" fill="hsl(0 84% 60%)" />
        <text x="20" y="115" fontSize="9" fill="hsl(215 16% 47%)" fontFamily="monospace">May</text>
        <text x="260" y="115" fontSize="9" fill="hsl(215 16% 47%)" fontFamily="monospace">Oct</text>
      </svg>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
        <AlertTriangle className="size-4" /> +15% Price Variance, Vendor: Acme Electronics
      </div>
      <div className="mt-2 text-[11px] text-muted-foreground">Flagged for CFO review before payment.</div>
    </div>
  );
}

const features = [
  { icon: Brain, title: "Semantic Vector Matching", body: "Matches by meaning, not spelling. Handles abbreviations, synonyms, and vendor-specific naming." },
  { icon: GitCompareArrows, title: "2-Way Matching", body: "Invoice vs. PO verification for services and at-discretion matching." },
  { icon: Layers, title: "3-Way Matching", body: "Full PO + GRN + Invoice reconciliation for physical goods." },
  { icon: Sparkles, title: "Domain-Trained Embeddings", body: "Models fine-tuned for biotech, hardware, and industrial procurement vocabulary." },
  { icon: TrendingUp, title: "Quantity & Price Verification", body: "Catches overbilling, short shipments, and unit price variances across documents." },
  { icon: AlertTriangle, title: "Anomaly Detection", body: "Historical price tracking and variance alerts flag unexpected changes before payment." },
  { icon: Gauge, title: "Confidence Scoring", body: "Every match comes with a confidence score. Low-confidence matches are flagged for human review." },
  { icon: ScrollText, title: "Audit-Ready Output", body: "Complete reconciliation records with match scores, timestamps, and decision logs." },
];

function MatchEnginePage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "AI Match Engine" },
        ]}
        badge="AI Match Engine"
        title={
          <>
            From messy to{" "}
            <span className="text-brand-gradient">matched.</span>
          </>
        }
        subtitle="Our semantic matching engine uses vector embeddings to connect POs, packing slips, and invoices, even when vendors use completely different names for the same thing. 'DMEM, high glucose' on the PO. 'Dulbecco's Modified Eagle Medium HG' on the packing slip. Sanyya knows they're the same."
        visual={<VectorMatchHero />}
      />

      <Section id="problem">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">Why this matters</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The matching problem nobody talks about
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Every procurement system claims to do matching. But they all rely on exact text comparison
              or basic keyword matching. In the real world, vendors write "OKT3" instead of "Anti-CD3
              Monoclonal Antibody," "STM32 Cortex-M4" instead of "STM32F407VGT6," and "Dulbecco's MEM HG"
              instead of "DMEM, high glucose." Traditional matching fails on all of these. Sanyya doesn't.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Reveal delay={0.1}>
            <BeforeAfterMockup />
          </Reveal>
        </div>
      </Section>

      <Section id="how-it-works" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Vectorize, compare, <span className="text-brand-gradient">reconcile</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-12">
          <HowItWorks
            steps={[{ title: "Vectorize everything", body: "When a document enters Sanyya, PO, packing slip, or invoice, every line item is converted into a high-dimensional vector embedding. This captures the semantic meaning of the text, not just the characters." }]}
            visual={<VectorizeMockup />}
          />
          <HowItWorks
            steps={[{ title: "Calculate similarity", body: "To check if two line items match, we calculate the cosine similarity between their vectors. Items with similar meaning, even completely different spellings, score close to 1.0. This is how 'IPA' matches 'Isopropyl Alcohol' with 98.7% confidence." }]}
            visual={<CosineSimilarityMockup />}
          />
          <HowItWorks
            steps={[{ title: "3-way reconciliation", body: "The match engine runs across all three document types simultaneously, PO, Packing Slip (GRN), and Invoice. It finds the best semantic match for every line item, flags discrepancies in quantities or pricing, and produces an audit-ready reconciliation." }]}
            visual={<ThreeWayDiagramMockup />}
          />
        </div>
      </Section>

      <ThreeWayMatchInteractive />

      <Section id="technical-edge">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>The technical edge</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for <span className="text-brand-gradient">scientific & industrial</span> vocabulary
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Our embedding models are fine-tuned for procurement terminology across biotech, hardware,
              and industrial supply chains. They understand that "DMEM" is "Dulbecco's Modified Eagle
              Medium" and that "10kΩ" is "10k Ohm", domain knowledge generic AI models don't have.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <DomainExamples />
        </div>
      </Section>

      <Section id="anomaly" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Beyond matching</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              We also catch what <em>shouldn't</em> match
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              The match engine doesn't just find connections, it spots anomalies. If a vendor quietly
              raises the price of a component by 15%, or if shipping costs spike compared to historical
              averages, Sanyya flags the variance before payment is authorized.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-emerald-500" /> Variance alerts before payment authorization</li>
              <li className="flex items-center gap-2"><Workflow className="size-4 text-blue-500" /> Routes flagged invoices to CFO review</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <AnomalyChartMockup />
          </Reveal>
        </div>
      </Section>

      <Section id="features">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything the match engine does
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <FeatureGrid features={features} />
        </div>
      </Section>

      <Section id="cta-secondary" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Matching that actually{" "}
              <span className="text-brand-gradient">understands your business.</span>
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
