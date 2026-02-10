import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const PioneerSection = () => {
  const benefits = [
    { label: "Hands-On Partnership", text: "We work directly with you to identify and eliminate 3-way match bottlenecks." },
    { label: "The Discount", text: "Locked-in lifetime discount for Design Partners." },
    { label: "The Access", text: "Direct Slack channel with our Team." },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-gradient-to-r from-primary/10 via-transparent to-glow-pink/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
            <Sparkles className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary" />
            <span className="text-primary text-xs md:text-sm font-medium">Limited Spots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 heading-hover px-2">
            Ready to Fix Your Match?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-300 hover:text-foreground px-2">
            Join our <span className="text-primary font-semibold">design partners</span> getting 
            early access and a lifetime discount.
          </p>
        </motion.div>

        {/* Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-glow-pink to-primary rounded-2xl opacity-60 blur-sm" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-glow-pink to-primary rounded-2xl opacity-40" />
            
            {/* Card content */}
            <div className="relative bg-card/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary/20">
              {/* Card Header */}
              <div className="text-center mb-6 md:mb-8">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-gradient-to-r from-primary/20 to-glow-pink/20 rounded-full text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Design Partner Benefits
                </span>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 md:gap-4"
                  >
                    <div className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-br from-primary to-glow-pink flex items-center justify-center">
                      <Check className="w-3 md:w-4 h-3 md:h-4 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-primary text-xs md:text-sm font-semibold">{benefit.label}:</span>
                      <p className="text-foreground text-sm md:text-base">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Waitlist Form */}
              <WaitlistForm variant="compact" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PioneerSection;
