import { motion } from "framer-motion";
import { CreditCard, Database, Mail, Smartphone, Cloud, Layers, ShieldCheck, Network, Zap, Globe } from "lucide-react";
import SanyyaLogo from "./SanyyaLogo";

const IntegrationSection = () => {
  const inputs = [
    { icon: CreditCard, label: "Ramp" },
    { icon: Database, label: "NetSuite" },
    { icon: Mail, label: "Email & PDF" },
    { icon: Smartphone, label: "Mobile PWA" },
  ];

  const outputs = [
    { icon: CreditCard, label: "Ramp" },
    { icon: Database, label: "NetSuite" },
    { icon: Cloud, label: "QuickBooks Online" },
  ];

  const featureCards = [
    {
      icon: Layers,
      title: "The Intelligence Layer",
      description: "We don't replace your ERP or Bill Pay. We sit on top of them to enforce accuracy without disrupting your workflow.",
      highlight: true,
    },
    {
      icon: ShieldCheck,
      title: "Zero-Risk Implementation",
      description: "No data migration. No downtime. No training your team on a new PO system. Just connect and verify.",
      highlight: false,
    },
    {
      icon: Network,
      title: "Universal Compatibility",
      description: "Whether you use NetSuite, QuickBooks, or custom spreadsheets, Sanyya ingests the data to find the 3-way match.",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Match POs and Invoices across different currencies with auto-normalization.",
      highlight: false,
    },
  ];

  // Input S-curve paths
  const inputPaths = [
    "M 165 55 C 240 55, 280 140, 340 140",
    "M 165 110 C 250 110, 270 140, 340 140",
    "M 165 170 C 250 170, 270 140, 340 140",
    "M 165 225 C 240 225, 280 140, 340 140",
  ];

  // Output S-curve paths (3 outputs now)
  const outputPaths = [
    "M 460 140 C 520 140, 560 55, 635 55",
    "M 460 140 C 520 140, 560 140, 635 140",
    "M 460 140 C 520 140, 560 225, 635 225",
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4"
          >
            <Zap className="w-3 h-3" />
            Zero-Friction Setup
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight heading-shimmer inline-block text-foreground px-2">
            Plug Into Your Existing Stack
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto subheading-fade leading-relaxed text-center px-2">
            No migrations. No training. Sanyya sits between your PO system and Bill Pay to enforce accuracy.
          </p>
        </motion.div>

        {/* Data Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 py-4 md:py-8 min-h-[250px] md:min-h-[300px]">
            
            {/* Column 1: INPUTS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 lg:w-[22%] z-10"
            >
              {inputs.map((input, index) => (
                <motion.div
                  key={input.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <input.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{input.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* SVG Flowing Connections */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Input line gradient - magenta/pink */}
                  <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(292, 84%, 57%)" />
                    <stop offset="100%" stopColor="hsl(330, 70%, 55%)" />
                  </linearGradient>
                  
                  {/* Output line gradient - emerald */}
                  <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(160, 84%, 45%)" />
                    <stop offset="100%" stopColor="hsl(170, 80%, 50%)" />
                  </linearGradient>
                </defs>

                {/* Input flowing lines with breathing pulse */}
                {inputPaths.map((d, i) => (
                  <motion.path
                    key={`input-line-${i}`}
                    d={d}
                    stroke="url(#inputGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ 
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Output flowing lines with breathing pulse */}
                {outputPaths.map((d, i) => (
                  <motion.path
                    key={`output-line-${i}`}
                    d={d}
                    stroke="url(#outputGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ 
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      delay: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Column 2: THE BRAIN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative lg:w-[28%] flex justify-center z-10"
            >
              {/* Breathing glow effect */}
              <motion.div 
                className="absolute -inset-5 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(292, 84%, 57%, 0.4), hsl(330, 70%, 55%, 0.2), transparent 70%)",
                }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-card rounded-xl px-10 py-8 shadow-lg border border-border">
              <div className="flex flex-col items-center gap-3">
                  <SanyyaLogo size="lg" showText={false} />
                  <span className="text-xs text-muted-foreground font-medium">
                    Vector Matching & 3-Way Logic
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Column 3: OUTPUTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-6 lg:w-[22%] z-10"
            >
              {outputs.map((output, index) => (
                <motion.div
                  key={output.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-300">
                    <output.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{output.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile flow indicators */}
          <div className="lg:hidden flex flex-col items-center gap-4 my-6">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-1 h-10 rounded-full bg-gradient-to-b from-primary to-pink-500"
            />
            <div className="text-xs text-muted-foreground font-medium">Processing</div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="w-1 h-10 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-500"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.highlight 
                  ? 'bg-gradient-to-br from-card to-secondary text-foreground shadow-lg border border-primary/20' 
                  : 'glass-card'
              }`}
            >
              <div className={`w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                card.highlight
                  ? 'bg-primary/10' 
                  : 'bg-secondary'
              }`}>
                <card.icon className={`w-5 md:w-6 h-5 md:h-6 ${
                  card.highlight 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`} strokeWidth={1.5} />
              </div>
              <h4 className={`text-sm md:text-lg mb-1 md:mb-2 ${
                card.highlight 
                  ? 'font-bold text-foreground' 
                  : 'font-semibold text-foreground'
              }`}>
                {card.title}
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${
                card.highlight 
                  ? 'text-muted-foreground' 
                  : 'text-muted-foreground'
              }`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
