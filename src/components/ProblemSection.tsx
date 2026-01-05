import { motion } from "framer-motion";
import { Database, TrendingDown, Check } from "lucide-react";

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-white relative overflow-hidden">
    {/* Subtle background pattern */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          THE PROBLEM
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The 3-Way Match is Broken for Physical Ops</h2>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Digital POs, paper packing slips, and PDF invoices never align perfectly. For hardware and biotech teams, this
          data friction turns a simple payment into a week-long investigation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1: Data Silo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Database className="w-7 h-7 text-slate-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">The Data Silo</h3>
          <p className="text-slate-600 leading-relaxed">
            Your data arrives via three fragmented channels on three different timelines. A Digital PO created today, a
            Paper Slip arriving on the dock next week, and a PDF Invoice emailed next month. Because they never align,
            your humans are forced to act as "manual middleware" to stitch the transaction together.
          </p>
        </motion.div>

        {/* Card 2: The Semantic Gap (Updated) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl font-mono text-violet-600">≈</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">The Semantic Gap</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Vendors frequently use different nomenclature on packing slips than what appears on your PO. Our Vector
            Engine looks beyond keywords to understand context—automatically matching 'Fetal Bovine Serum' on a purchase
            order to 'FBS' on a packing slip.
          </p>
          <div className="code-block space-y-3 text-slate-300">
            <div>
              <span className="text-slate-500">PO:</span> <span className="text-blue-400">"Fetal Bovine Serum"</span>
            </div>
            <div>
              <span className="text-slate-500">Slip:</span> <span className="text-violet-400">"FBS"</span>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Semantic Match</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Velocity Trap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <TrendingDown className="w-7 h-7 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">The Linear Scaling Trap</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Paperwork shouldn't be your bottleneck. In the legacy world, doubling experiments meant doubling finance
            headcount—causing financial friction to grow faster than your science. Sanyya breaks this linear scaling
            trap, letting you scale volume without bloating your back office.
          </p>

          {/* Mini chart visual */}
          <div className="h-24 flex items-end gap-2">
            {[60, 75, 85, 70, 40, 25, 15, 10].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className={`flex-1 rounded-t-sm ${i < 4 ? "bg-red-400" : "bg-emerald-400"}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span>Manual</span>
            <span>With Sanyya</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
