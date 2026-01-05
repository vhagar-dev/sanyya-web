import { motion } from "framer-motion";
import {
  CreditCard,
  ShieldCheck,
  Code,
  BrainCircuit,
  Monitor,
  Smartphone,
  Hourglass,
  Zap,
  Minus,
  Check,
} from "lucide-react";

const comparisonRows = [
  {
    label: "The Financial Action",
    legacy: {
      icon: CreditCard,
      title: "Paying on Faith",
      context:
        "Approves invoices based on digital signatures, not physical reality. If a manager clicks 'Approve' but the box is empty, you pay anyway.",
    },
    sanyya: {
      icon: ShieldCheck,
      iconColor: "text-emerald-500",
      title: "Reconciling Reality",
      context:
        "Confirm receipt before you cut the check. We enforce the 3-way match, proving that goods physically arrived so you can approve invoices with zero doubt.",
    },
  },
  {
    label: "The Matching Tech",
    legacy: {
      icon: Code,
      title: "Rigid String Matching",
      context:
        "Fails instantly when nomenclature differs. If the PO says 'Falcon Tube' and the invoice says 'Conical', the system breaks and flags it for manual review.",
    },
    sanyya: {
      icon: BrainCircuit,
      iconColor: "text-violet-500",
      title: "Vector Embeddings",
      context:
        "Fluent in lab speak. Our engine instantly recognizes that 'Falcon Tube' means '50mL Conical' and knows that 'Doxorubicin' matches 'Adriamycin' without any manual mapping.",
    },
  },
  {
    label: "The Workflow",
    legacy: {
      icon: Monitor,
      title: "Tethered Workstations",
      context:
        "Receiving happens at a desk, not the bench. Staff must haul boxes to a computer or use clunky barcode guns, causing delays and lost receipts.",
    },
    sanyya: {
      icon: Smartphone,
      iconColor: "text-blue-500",
      title: "Zero-Install Bench Capture",
      context:
        "Turn any smartphone into an enterprise scanner instantly—no App Store downloads or IT tickets. Stop hauling boxes to a computer; just snap and verify the packing slip right at the bench the moment it arrives.",
    },
  },
];

const CompetitiveLandscape = () => {
  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148, 163, 184) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148, 163, 184) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block">
            <span className="text-slate-800">Keep Your Existing Workflow.</span>{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Just Connect.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 subheading-fade leading-relaxed max-w-3xl mx-auto">
            Sanyya acts as the intelligence layer sitting on top of
            your existing procurement stack to automate the 3-way match.
          </p>
        </motion.div>

        {/* Split Comparison Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left Column - Legacy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
            >
              <div className="mb-8">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">The Old Way</span>
                <h3 className="text-lg font-semibold text-slate-500 mt-1">Legacy Payment Rails</h3>
                <p className="text-sm text-slate-400">(Bill.com / Ramp)</p>
              </div>

              <div className="space-y-6">
                {comparisonRows.map((row, index) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="pb-6 border-b border-slate-200 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Minus className="w-4 h-4 text-slate-300" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <row.legacy.icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                          <span className="font-semibold text-slate-500">{row.legacy.title}</span>
                        </div>
                        {row.legacy.context && (
                          <p className="text-sm text-slate-400 leading-relaxed">{row.legacy.context}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Sanyya */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative md:scale-105 md:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-emerald-400/20 to-cyan-400/20 blur-xl opacity-60" />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-emerald-200/50 shadow-2xl">
                <div className="mb-8">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    The Sanyya Way
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1">Sanyya</h3>
                  <p className="text-sm text-slate-500">(The Financial Brain)</p>
                </div>

                <div className="space-y-6">
                  {comparisonRows.map((row, index) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <row.sanyya.icon className={`w-4 h-4 ${row.sanyya.iconColor}`} strokeWidth={1.5} />
                            <span className="font-semibold text-slate-800">{row.sanyya.title}</span>
                          </div>
                          {row.sanyya.context && (
                            <p className="text-sm text-slate-600 leading-relaxed">{row.sanyya.context}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-slate-600 mt-12 max-w-2xl mx-auto"
        >
          Sanyya sits <strong className="text-slate-800">on top</strong> of your existing procurement tools. Keep your
          workflows. Keep your approvals. Use Sanyya for the verification.
        </motion.p>
      </div>
    </section>
  );
};

export default CompetitiveLandscape;
