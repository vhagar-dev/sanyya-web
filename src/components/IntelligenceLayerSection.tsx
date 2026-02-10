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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 50%) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs sm:text-sm font-medium mb-4"
          >
            <Layers className="w-3 h-3" />
            The Missing Intelligence Layer
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight heading-shimmer inline-block text-foreground px-2">
            Keep your tools. Supercharge your accuracy.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            You don't need to switch systems. Sanyya acts as a specialized intelligence layer that sits between your PO
            system and Bill Payment platform to perform the perfect 3-way match.
          </p>
        </motion.div>

        {/* Stack Visualization */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-0">
            {/* Left: Your PO System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-[30%] z-10 w-full"
            >
              <div className="glass-card p-4 md:p-6 text-center flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 md:mb-4">
                  <FileText className="w-6 md:w-7 h-6 md:h-7 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Your PO System</h3>
                <p className="text-xs md:text-sm text-muted-foreground">NetSuite, QuickBooks, Xero, email forwarding, or CSV exports</p>
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
                <div className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-primary rounded-full" />
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:hidden text-muted-foreground"
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
                {/* Glow effect with magenta/pink */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(292, 84%, 57%, 0.3), hsl(330, 70%, 55%, 0.15), transparent 70%)",
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

                <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-6 shadow-2xl text-center border border-primary/20">
                  <div className="flex justify-center mb-3">
                    <SanyyaLogo size="md" showText={false} variant="dark" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">Sanyya</h3>
                  <p className="text-xs text-muted-foreground">(Truth Seeker)</p>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs text-primary font-medium">3-Way Match</span>
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
                <div className="h-0.5 w-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:hidden text-muted-foreground"
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>

            {/* Right: Your Bill Pay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:w-[30%] z-10 w-full"
            >
              <div className="glass-card p-4 md:p-6 text-center flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 md:mb-4">
                  <CreditCard className="w-6 md:w-7 h-6 md:h-7 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Your Bill Pay</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Bill.com, Ramp, NetSuite</p>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {checklistItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntelligenceLayerSection;
