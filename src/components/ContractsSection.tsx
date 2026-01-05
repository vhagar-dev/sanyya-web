import { motion } from "framer-motion";
import { FileText, MapPin, Shield, Bell } from "lucide-react";

const ContractsSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Centralized Repository",
      description:
        "Keep your MSAs and SOWs attached directly to the vendor profile so they never get lost in email threads.",
      // Assigning specific shades to create a flow that matches the text gradient
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50 border-cyan-100",
    },
    {
      icon: MapPin,
      title: "Milestone-Based Drawdowns",
      description:
        'Break down large service agreements into payable phases (e.g., "Phase 1 Complete") to prevent premature payment.',
      colorClass: "text-teal-600",
      bgClass: "bg-teal-50 border-teal-100",
    },
    {
      icon: Shield,
      title: "Total Value Caps",
      description:
        "Set a hard budget limit based on the signed contract. If a PO exceeds the agreed SOW amount, we flag it immediately.",
      colorClass: "text-emerald-600",
      bgClass: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: Bell,
      title: "Renewal Reminders",
      description: "Set expiration dates and get notified before a contract auto-renews or expires.",
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50 border-cyan-100",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
              Service Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 mb-6">
              Contracts, Services{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                & Milestones
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Manage the agreement, not just the payment. Store basic contract terms directly in Sanyya to track
              progress. We match invoices against those specific milestones—perfect for managing CROs and consultants
              without physical shipping receipts.
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
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* UPDATED ICON STYLING:
                   Using the specific color classes from the object above.
                */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${feature.bgClass}`}>
                  <feature.icon className={`w-5 h-5 ${feature.colorClass}`} strokeWidth={1.5} />
                </div>

                {/* OPTION 2 (Solid Gradient) - Uncomment this block and delete the div above if you prefer the solid look:
                   
                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-emerald-500 flex items-center justify-center mb-4 shadow-sm">
                     <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                   </div>
                 */}

                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;
