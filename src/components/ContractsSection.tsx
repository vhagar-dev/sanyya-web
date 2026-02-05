import { motion } from "framer-motion";
import { FileText, MapPin, Shield, Bell } from "lucide-react";

const ContractsSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Centralized Repository",
      description:
        "Keep your MSAs and SOWs attached directly to the vendor profile so they never get lost in email threads.",
      colorClass: "text-primary",
      bgClass: "bg-primary/10 border-primary/20",
    },
    {
      icon: MapPin,
      title: "Milestone-Based Drawdowns",
      description:
        'Break down large service agreements into payable phases (e.g., "Phase 1 Complete") to prevent premature payment.',
      colorClass: "text-pink-400",
      bgClass: "bg-pink-500/10 border-pink-500/20",
    },
    {
      icon: Shield,
      title: "Total Value Caps",
      description:
        "Set a hard budget limit based on the signed contract. If a PO exceeds the agreed SOW amount, we flag it immediately.",
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Bell,
      title: "Renewal Reminders",
      description: "Set expiration dates and get notified before a contract auto-renews or expires.",
      colorClass: "text-primary",
      bgClass: "bg-primary/10 border-primary/20",
    },
  ];

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-background">
      {/* Gradient background with magenta/pink tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-pink-500/5" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 md:mb-6">
              For Services & Consultants
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 px-2 lg:px-0">
              Track Milestones,{" "}
              <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
                Not Just Invoices
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2 lg:px-0">
              CROs and consultants don't ship boxes. We match their invoices against contract milestones instead—preventing scope creep and premature payments.
            </p>
          </motion.div>

          {/* Right side - Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="glass-card p-4 md:p-6"
              >
                <div className={`w-9 md:w-10 h-9 md:h-10 rounded-lg flex items-center justify-center mb-3 md:mb-4 border ${feature.bgClass}`}>
                  <feature.icon className={`w-4 md:w-5 h-4 md:h-5 ${feature.colorClass}`} strokeWidth={1.5} />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">{feature.title}</h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;
