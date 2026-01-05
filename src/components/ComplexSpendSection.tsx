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
      title: "Blanket POs (Standing Orders)",
      icon: PieChart,
      copy: "We track the 'bucket.' Sanyya monitors budget drawdowns over time, ensuring recurring bills for dry ice or fasteners never exceed the cap.",
      isHighlighted: true,
    },
    {
      title: "Service & Milestone POs",
      icon: Handshake,
      copy: "We match invoices against contract milestones for CROs and consultants. Track spend against specific contract terms to prevent scope creep.",
      isHighlighted: true,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            Complex Spend Mastery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-6">
            Built for the Nuances of Real-World Spend
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Generic tools break when there isn't a shipping box. Sanyya understands the subtleties of services, standing
            orders, and milestones.
          </p>
        </motion.div>

        {/* 3-Column Card Layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1
                ${
                  card.isHighlighted
                    ? "bg-white/80 backdrop-blur-xl border-2 border-emerald-200/60 shadow-lg shadow-emerald-500/10"
                    : "bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-md"
                }
              `}
            >
              {/* Highlighted glow effect */}
              {card.isHighlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-transparent pointer-events-none" />
              )}

              {/* Icon */}
              <div
                className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6
                ${
                  card.isHighlighted
                    ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"
                    : "bg-slate-100 text-slate-600"
                }
              `}
              >
                <card.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.copy}</p>

              {/* Special capability badge for highlighted cards */}
              {card.isHighlighted && (
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
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
