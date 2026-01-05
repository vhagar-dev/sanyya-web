import { motion } from "framer-motion";
import { Check, Sparkles, Users } from "lucide-react";

const PioneerSection = () => {
  const benefits = [
    { label: "Hands-On Partnership", text: "We work directly with you to identify and eliminate 3-way match bottlenecks." },
    { label: "The Discount", text: "Locked-in 50% Lifetime Discount for Design Partners." },
    { label: "The Access", text: "Direct Slack channel with our Engineering Team." },
    { label: "The Influence", text: "Priority roadmap voting rights." },
  ];

  const scrollToWaitlist = () => {
    const heroSection = document.querySelector('#hero-waitlist');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Exclusive Program</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-hover">
            Become a Design Partner.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto transition-all duration-300 hover:text-slate-200 mb-4">
            We're partnering with <span className="text-amber-400 font-semibold">10 hardware & D2C startups</span> to 
            alleviate the operational bottlenecks in your 3-way matching process.
          </p>
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <Users className="w-4 h-4" />
            <span>Limited to 10 founding partners</span>
          </div>
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
            <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-2xl opacity-60 blur-sm" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-2xl opacity-40" />
            
            {/* Card content */}
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              {/* Card Header */}
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/20 to-amber-400/20 rounded-full text-amber-300 text-sm font-semibold tracking-wide uppercase">
                  Design Partner Benefits
                </span>
              </div>

              {/* Benefits List */}
              <div className="space-y-5 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <Check className="w-4 h-4 text-slate-900" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-amber-400 text-sm font-semibold">{benefit.label}:</span>
                      <p className="text-white">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToWaitlist}
                className="w-full py-4 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:via-amber-400 hover:to-amber-300 transition-all duration-300 shadow-lg shadow-amber-500/30"
              >
                Join the Waitlist
              </motion.button>

              {/* Micro-copy */}
              <p className="text-center text-slate-400 text-sm mt-4">
                We'll reach out to schedule an intro call.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PioneerSection;
