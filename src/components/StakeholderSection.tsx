import { motion } from "framer-motion";
import { TrendingUp, Check, Briefcase, ClipboardList, Shield } from "lucide-react";

const StakeholderSection = () => {
  return (
    <section id="roi" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[400px] md:h-[600px] bg-gradient-to-r from-primary/10 via-pink-500/10 to-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4"
          >
            <TrendingUp className="w-3 h-3" />
            Who Benefits
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground px-2">
            Built for Your Whole Team
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground px-2">
            From the CFO to LabOps—everyone wins when the match is perfect.
          </p>
        </motion.div>

        {/* Bento Grid Cards */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: The CFO/Controller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-6 flex flex-col h-full sm:col-span-2 md:col-span-1"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 md:w-8 h-7 md:h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Briefcase className="w-3.5 md:w-4 h-3.5 md:h-4 text-blue-400" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-blue-400 uppercase tracking-wider">Finops</span>
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 text-center">The Perpetual Audit</h4>

            {/* Body */}
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1 text-center">
              Stop chasing paper during month-end close. Sanyya forces a physical 3-way match before the invoice is paid, ensuring 100% GAAP compliance without the email chase.
            </p>

            {/* Visual Widget: Progress Bar */}
            <div className="mt-4 md:mt-6 bg-secondary/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] md:text-xs text-muted-foreground font-medium">Month-End Reconciliation</p>
                <span className="text-[10px] md:text-xs font-bold text-emerald-400 tabular-nums">100%</span>
              </div>
              <div className="h-2.5 md:h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="flex items-center justify-center gap-1.5 md:gap-2 mt-2 md:mt-3"
              >
                <Check className="w-3.5 md:w-4 h-3.5 md:h-4 text-emerald-400" />
                <span className="text-xs md:text-sm font-semibold text-foreground">Complete</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: The Ops Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-6 flex flex-col h-full"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 md:w-8 h-7 md:h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <ClipboardList className="w-3.5 md:w-4 h-3.5 md:h-4 text-violet-400" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-violet-400 uppercase tracking-wider">Operations</span>
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 text-center">Automate the Receiving Desk</h4>

            {/* Body */}
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1 text-center">
              Replace data entry with digital verification. Sanyya reads the messy packing slip, verifies the cold chain, and auto-updates the ERP. You go home on time.
            </p>

            {/* Visual Widget: Notification Toast */}
            <div className="mt-4 md:mt-6 bg-secondary/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-border flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg shadow-emerald-500/30 w-full"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-xs md:text-sm truncate">Packing Slip #4092 Matched</p>
                    <p className="text-[10px] md:text-xs text-emerald-100 mt-0.5 truncate">PO #882 • Inventory Updated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: The Founder/CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-6 flex flex-col h-full"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 md:w-8 h-7 md:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Shield className="w-3.5 md:w-4 h-3.5 md:h-4 text-amber-400" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-amber-400 uppercase tracking-wider">Executive</span>
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 text-center">Defend Your Runway</h4>

            {/* Body */}
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1 text-center">
              We found $1.2M in unverified risk in a single pilot. Sanyya acts as the 'Financial Firewall' that protects your cash from vendor errors, fraud, and phantom inventory.
            </p>

            {/* Visual Widget: Capital Protected Metric */}
            <div className="mt-4 md:mt-6 bg-secondary/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-border">
              <p className="text-[10px] md:text-xs text-muted-foreground font-medium mb-1.5 md:mb-2 text-center">Capital Protected</p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-emerald-400 tabular-nums">$1,206,327</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-1 mt-1.5 md:mt-2"
              >
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] md:text-xs text-emerald-400 font-medium">From single pilot audit</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
