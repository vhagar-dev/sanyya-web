import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Smartphone, Scan, Sparkles, Check, Cpu } from "lucide-react";

// Visual 1: Vector Search Graph (High-Science Example)
const VectorVisual = () => (
  <div className="relative w-full h-80 md:h-96">
    {/* Glass card container */}
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating data points */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-slate-300/40"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -6, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Point A: Scientific Name (Generic) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute left-[15%] top-[28%]"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-mono">
            "Doxorubicin HCl"
          </div>
        </div>
      </motion.div>

      {/* Point B: Brand Name (Vendor Terminology) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring" }}
        className="absolute right-[15%] bottom-[28%]"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-mono">
            "Adriamycin"
          </div>
        </div>
      </motion.div>

      {/* Connecting Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 320"
      >
        <defs>
          <linearGradient
            id="vectorLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
            <stop offset="100%" stopColor="hsl(199, 89%, 48%)" />
          </linearGradient>
        </defs>
        <motion.line
          x1="90"
          y1="110"
          x2="310"
          y2="210"
          stroke="url(#vectorLineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.line
          x1="90"
          y1="110"
          x2="310"
          y2="210"
          stroke="hsl(199, 89%, 48%)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.15"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>

      {/* Similarity Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-5 py-2.5 rounded-full shadow-xl shadow-cyan-500/40 flex items-center gap-2">
          <span className="text-sm font-medium">Match</span>
          <span className="text-lg font-bold tabular-nums">(0.99)</span>
        </div>
      </motion.div>
    </div>
  </div>
);

// Visual 2: Mobile PWA Phone Mockup
const MobileVisual = () => (
  <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
    {/* Phone mockup */}
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative w-52 h-[420px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-2xl z-10" />

          {/* Camera viewfinder */}
          <div className="h-full bg-gradient-to-b from-slate-800 to-slate-700 relative">
            {/* Scan line */}
            <motion.div
              className="absolute inset-x-5 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
              animate={{ top: ["18%", "72%", "18%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Packing Slip Document */}
            <div className="absolute inset-8 top-14 flex items-center justify-center">
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: [-2, 0, -2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white rounded-xl p-5 shadow-lg w-32"
              >
                <div className="space-y-2">
                  <div className="h-2.5 w-20 bg-slate-300 rounded" />
                  <div className="h-1.5 w-full bg-slate-200 rounded" />
                  <div className="h-1.5 w-24 bg-slate-200 rounded" />
                  <div className="h-1.5 w-full bg-slate-200 rounded" />
                  <div className="h-1.5 w-16 bg-slate-200 rounded" />
                  <div className="flex gap-1.5 mt-3">
                    <div className="h-4 w-4 bg-emerald-400 rounded" />
                    <div className="h-1.5 w-12 bg-slate-300 rounded mt-1" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-12 left-5 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
            <div className="absolute top-12 right-5 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
            <div className="absolute bottom-24 left-5 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
            <div className="absolute bottom-24 right-5 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />

            {/* Success Toast */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 left-4 right-4"
            >
              <div className="bg-emerald-500 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg">
                <Check className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-semibold">
                  Matched: PO #8821
                </span>
              </div>
            </motion.div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-900 flex items-center justify-center">
              <div className="w-28 h-1 bg-slate-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* WASM Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-3 -right-6 bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
      >
        <Cpu className="w-4 h-4" />
        WASM
      </motion.div>
    </motion.div>
  </div>
);

// Visual 3: OCR Invoice Processing
const OCRVisual = () => (
  <div className="relative w-full h-80 md:h-96 flex items-center justify-center p-6">
    {/* Invoice mockup with bounding boxes */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-100"
    >
      {/* Invoice header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="h-4 w-28 bg-slate-800 rounded mb-2" />
          <div className="h-2.5 w-20 bg-slate-300 rounded" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-2 border-2 border-cyan-400 rounded-lg animate-pulse" />
          <div className="bg-slate-100 px-4 py-2 rounded-lg">
            <span className="text-sm font-mono text-slate-600">
              INV-2024-001
            </span>
          </div>
        </motion.div>
      </div>

      {/* Vendor info with bounding box */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative mb-6"
      >
        <div className="absolute -inset-2 border-2 border-fuchsia-400 rounded-lg animate-pulse" />
        <div className="space-y-1.5 p-2">
          <div className="h-2.5 w-40 bg-slate-300 rounded" />
          <div className="h-2 w-36 bg-slate-200 rounded" />
          <div className="h-2 w-32 bg-slate-200 rounded" />
        </div>
      </motion.div>

      {/* Line items */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <div className="h-2.5 w-24 bg-slate-200 rounded" />
          <div className="h-2.5 w-16 bg-slate-200 rounded" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-2 border-2 border-cyan-400 rounded-lg animate-pulse" />
          <div className="flex justify-between p-2">
            <div className="h-2.5 w-28 bg-slate-300 rounded" />
            <div className="h-2.5 w-20 bg-emerald-400 rounded" />
          </div>
        </motion.div>
        <div className="flex justify-between">
          <div className="h-2.5 w-32 bg-slate-200 rounded" />
          <div className="h-2.5 w-18 bg-slate-200 rounded" />
        </div>
      </div>

      {/* Total with bounding box */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="relative border-t pt-4"
      >
        <div className="absolute -inset-2 border-2 border-fuchsia-400 rounded-lg animate-pulse" />
        <div className="flex justify-between items-center p-2">
          <div className="h-3.5 w-14 bg-slate-400 rounded" />
          <div className="h-3.5 w-24 bg-slate-800 rounded" />
        </div>
      </motion.div>

      {/* Legend */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-cyan-400 rounded" />
          <span className="text-xs text-slate-500">Key Fields</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-fuchsia-400 rounded" />
          <span className="text-xs text-slate-500">Entities</span>
        </div>
      </div>
    </motion.div>
  </div>
);

// Checklist Item Component
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-emerald-600" />
    </div>
    <span className="text-slate-600">{children}</span>
  </div>
);

// Feature Row Component with Parallax
const FeatureRow = ({
  badge,
  badgeColor,
  headline,
  body,
  checklist,
  visual,
  reversed = false,
}: {
  badge: string;
  badgeColor: string;
  headline: string;
  body: string;
  checklist: string[];
  visual: React.ReactNode;
  reversed?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Column */}
      <div className={`space-y-6 ${reversed ? "md:order-2" : ""}`}>
        <span
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${badgeColor}`}
        >
          {badge}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {headline}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">{body}</p>
        <div className="space-y-3 pt-2">
          {checklist.map((item, i) => (
            <CheckItem key={i}>{item}</CheckItem>
          ))}
        </div>
      </div>

      {/* Visual Column with Parallax */}
      <motion.div style={{ y }} className={reversed ? "md:order-1" : ""}>
        {visual}
      </motion.div>
    </motion.div>
  );
};

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-blue-100/20 via-violet-100/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4"
          >
            <Sparkles className="w-3 h-3" />
            How It Works
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-shimmer">
            Centralize. Verify. Resolve.
          </h2>
          <p className="mt-4 text-lg text-slate-600 subheading-fade">
            Bring your disparate documents into one intelligent view. Sanyya
            ingests the data, correlates the dots, and highlights the
            truth—giving you a perfect audit trail before you book.
          </p>
        </motion.div>

        {/* Feature Rows */}
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Row 1: Centralize */}
          <FeatureRow
            badge="Step 1: Centralize"
            badgeColor="bg-cyan-100 text-cyan-700"
            headline="Ingest & Normalize."
            body="Upload your POs, contracts, and invoices in any format. Sanyya ingests raw data from PDF, CSV, or Image and normalizes it into a single source of truth—no complex ERP migration required."
            checklist={[
              "Works with any file format",
              "No IT integration needed",
            ]}
            visual={<VectorVisual />}
          />

          {/* Row 2: Verify */}
          <FeatureRow
            badge="Step 2: Verify"
            badgeColor="bg-violet-100 text-violet-700"
            headline="Verify Against Reality."
            body="We automate the 3-way match for physical goods and link service invoices to contract milestones. Plus, our mobile PWA lets LabOps snap packing slips at the bench—no barcode guns or laptop carts."
            checklist={[
              "Liberates LabOps from scanners",
              "Matches synonyms automatically",
            ]}
            visual={<MobileVisual />}
            reversed
          />

          {/* Row 3: Resolve */}
          <FeatureRow
            badge="Step 3: Resolve"
            badgeColor="bg-emerald-100 text-emerald-700"
            headline="Resolve with Confidence."
            body="Stop guessing. We present a fully reconciled 'decision package'—PO, packing slip, and invoice side-by-side. Approve with certainty and hand off clean data to your finance team."
            checklist={["360° Audit View", "Ready-to-book data"]}
            visual={<OCRVisual />}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
