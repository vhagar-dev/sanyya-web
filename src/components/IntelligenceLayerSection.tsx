import { motion } from "framer-motion";
import { Layers, FileText, CreditCard, Check, ArrowRight, Sparkles } from "lucide-react";
import SanyyaLogo from "./SanyyaLogo";

const IntelligenceLayerSection = () => {
  const checklistItems = [
    "0% downtime implementation",
    "Works with your existing PO workflow",
    "Automatic 3-way matching",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-medium mb-4"
          >
            <Layers className="w-3 h-3" />
            The Missing Intelligence Layer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-shimmer inline-block">
            Keep your tools. Supercharge your accuracy.
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            You don't need to switch systems. Sanyya acts as a specialized intelligence layer that sits between your PO
            system and Bill Payment platform to perform the perfect 3-way match.
          </p>
        </motion.div>

        {/* Stack Visualization */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {/* Left: Your PO System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-[30%] z-10"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-blue-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Your PO System</h3>
                <p className="text-sm text-slate-500">NetSuite, QuickBooks, Xero, email forwarding, or CSV exports</p>
              </div>
            </motion.div>

            {/* Connector Line Left */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center lg:w-[10%] origin-left"
            >
              <div className="flex items-center gap-1">
                <div className="h-0.5 w-12 bg-gradient-to-r from-blue-300 to-violet-400 rounded-full" />
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:hidden text-slate-300"
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>

            {/* Center: Sanyya (Truth Seeker) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:w-[20%] z-20"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(160, 84%, 50%, 0.3), hsl(258, 90%, 70%, 0.15), transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl text-center">
                  <div className="flex justify-center mb-3">
                    <SanyyaLogo size="md" showText={false} variant="dark" />
                  </div>
                  <h3 className="font-bold text-white mb-1">Sanyya</h3>
                  <p className="text-xs text-slate-400">(Truth Seeker)</p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">3-Way Match</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connector Line Right */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:flex items-center justify-center lg:w-[10%] origin-left"
            >
              <div className="flex items-center gap-1">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
                <div className="h-0.5 w-12 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full" />
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:hidden text-slate-300"
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>

            {/* Right: Your Bill Pay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:w-[30%] z-10"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-emerald-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Your Bill Pay</h3>
                <p className="text-sm text-slate-500">Bill.com, Ramp, Brex</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {checklistItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-sm text-slate-600 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntelligenceLayerSection;
