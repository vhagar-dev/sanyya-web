import { motion } from "framer-motion";
import { Crown, Zap, Smartphone, TrendingUp, Check, DollarSign } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const ROISection = () => {
  return (
    <section id="roi" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-blue-100/20 via-violet-100/20 to-emerald-100/20 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium mb-4"
          >
            <TrendingUp className="w-3 h-3" />
            Operational Impact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-shimmer inline-block">
            One Truth for Operations and Finance
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium subheading-fade">Measured in Minutes and Margins</p>
          <p className="mt-2 text-slate-500">
            The architecture designed to solve specific pains for every stakeholder.
          </p>
        </motion.div>

        {/* ROI Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1: The CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="group glass-card overflow-hidden h-full">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  {/* UPDATED ICON STYLE: Soft Amber */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">For the Founder</p>
                    <h3 className="font-semibold text-slate-800">The CEO</h3>
                  </div>
                </div>

                {/* Headline */}
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Stop Phantom Burn</h4>

                {/* Body Text */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  Prevents capital leakage by blocking invoices for unreceived inventory. Designed to extend your runway
                  by <span className="tabular-nums font-semibold text-slate-700">4-5%</span> annually.
                </p>
              </div>

              {/* Visual Widget: Cash Saved Chart */}
              <div className="px-8 pb-8">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                  <p className="text-xs text-slate-500 mb-3 font-medium">Cash Saved Over Time</p>
                  <div className="flex items-end justify-between gap-2 h-20">
                    {[20, 35, 45, 60, 75, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm origin-bottom shadow-sm"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Q1</span>
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Q2</span>
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Q3</span>
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Q4</span>
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Y2</span>
                    <span className="text-[10px] text-slate-400 font-mono tabular-nums">Y3</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: The Controller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="group glass-card overflow-hidden h-full">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  {/* UPDATED ICON STYLE: Soft Blue */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">For the Finance Lead</p>
                    <h3 className="font-semibold text-slate-800">The Controller</h3>
                  </div>
                </div>

                {/* Headline */}
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Accelerate the Close</h4>

                {/* Body Text */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eliminates the manual stare and compare loop. Turns your Month-End close from a{" "}
                  <span className="tabular-nums font-semibold text-slate-700">10-day</span> scramble into a{" "}
                  <span className="tabular-nums font-semibold text-slate-700">2-day</span> review.
                </p>
              </div>

              {/* Visual Widget: Progress Bar */}
              <div className="px-8 pb-8">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-slate-500 font-medium">Reconciliation Status</p>
                    <span className="text-xs font-bold text-blue-600 tabular-nums">100%</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-2 mt-3"
                  >
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-slate-700">Automated</span>
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Warehouse Ops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SpotlightCard className="group glass-card overflow-hidden h-full">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  {/* UPDATED ICON STYLE: Soft Violet */}
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">For the Ops Manager</p>
                    <h3 className="font-semibold text-slate-800">Warehouse & Lab Ops</h3>
                  </div>
                </div>

                {/* Headline */}
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Zero-Friction Deployment</h4>

                {/* Body Text */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  No IT tickets. No App Store logins. A PWA scanner that works on any device in seconds, ensuring{" "}
                  <span className="tabular-nums font-semibold text-slate-700">100%</span> team adoption.
                </p>
              </div>

              {/* Visual Widget: Notification Bubble */}
              <div className="px-8 pb-8">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                  <div className="flex justify-center py-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-2xl px-5 py-4 shadow-xl shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Shipment Verified</p>
                          <p className="text-xs text-emerald-100 mt-0.5 font-mono tabular-nums">Response time: 0.4s</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
