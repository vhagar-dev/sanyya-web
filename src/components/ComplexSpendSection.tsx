import { motion } from "framer-motion";
import { Package, PieChart, Handshake, Check } from "lucide-react";

const ComplexSpendSection = () => {
  const cards = [
    {
      title: "Standard POs",
      icon: Package,
      copy: "Perfect 3-way matching for physical goods. We verify Line Item, Quantity, and Price instantly.",
      isHighlighted: false,
    },
    {
      title: "Blanket POs",
      icon: PieChart,
      copy: "We track the 'bucket.' Sanyya monitors budget drawdowns over time, ensuring recurring bills for dry ice or fasteners never exceed the cap.",
      isHighlighted: true,
    },
    {
      title: "Open POs",
      icon: Handshake,
      copy: "Manage ongoing vendor relationships without fixed end-dates. Sanyya keeps these orders active and organized, tracking every incremental invoice against the total agreement.",
      isHighlighted: true,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Gradient background with magenta/pink tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-pink-500/5" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs sm:text-sm font-medium mb-4 md:mb-6">
            Beyond the Basics
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6 px-2">
            Not Just Standard POs
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            Real-world spend is messy. Standing orders, service contracts, milestone payments—we handle them all.
          </p>
        </motion.div>

        {/* 3-Column Card Layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative p-5 md:p-8 rounded-xl md:rounded-2xl transition-all duration-300 hover:-translate-y-1
                ${index === 0 ? 'sm:col-span-2 md:col-span-1' : ''}
                ${
                  card.isHighlighted
                    ? "bg-card/80 backdrop-blur-xl border-2 border-primary/30 shadow-lg shadow-primary/10"
                    : "glass-card"
                }
              `}
            >
              {/* Highlighted glow effect */}
              {card.isHighlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-pink-500/5 to-transparent pointer-events-none" />
              )}

              {/* Icon */}
              <div
                className={`
                w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6
                ${
                  card.isHighlighted
                    ? "bg-gradient-to-br from-primary to-pink-500 text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }
              `}
              >
                <card.icon className="w-6 md:w-7 h-6 md:h-7" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{card.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.copy}</p>

              {/* Special capability badge for highlighted cards */}
              {card.isHighlighted && (
                <div className="mt-6 pt-4 border-t border-primary/20">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    <Check className="w-4 h-4" />
                    Advanced Capability
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplexSpendSection;
