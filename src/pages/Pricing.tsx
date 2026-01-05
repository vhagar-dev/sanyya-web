import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Seed",
      price: 0,
      description: "For labs just starting.",
      features: [
        "Up to 100 invoices/month",
        "Basic 3-way matching",
        "Email forwarding ingestion",
        "QuickBooks Online sync",
        "Community support",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Growth",
      price: isYearly ? 159 : 199,
      description: "For scaling operations.",
      features: [
        "Unlimited invoices",
        "Vector semantic matching",
        "Mobile PWA for warehouse",
        "All ERP integrations",
        "Anomaly detection alerts",
        "Priority email support",
        "Custom approval workflows",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      description: "For strict compliance & SOC2.",
      features: [
        "Everything in Growth",
        "SOC 2 Type II compliance",
        "SSO / SAML integration",
        "Dedicated success manager",
        "Custom SLA guarantees",
        "On-premise deployment option",
        "Audit log exports",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Are there any seat limits?",
      answer:
        "No. All Sanyya plans include unlimited users at no extra cost. We believe financial visibility should be accessible to your entire team—from warehouse staff to executives—without per-seat pricing barriers.",
    },
    {
      question: "Does Sanyya integrate with QuickBooks?",
      answer:
        "Yes! We offer native integrations with QuickBooks Online and QuickBooks Desktop. Verified bills are automatically pushed to your accounting system, eliminating double-entry and ensuring your books stay accurate.",
    },
    {
      question: "Can I switch plans at any time?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle.",
    },
    {
      question: "Is there a free trial for Growth?",
      answer:
        "Yes, we offer a 14-day free trial of the Growth plan with full access to all features. No credit card required to start.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Unlimited users.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            We do not charge per-seat. Pay for the platform, not the headcount.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span
              className={`text-sm font-medium transition-colors ${
                !isYearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-300"
              style={{ backgroundColor: isYearly ? "hsl(160, 84%, 39%)" : undefined }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                isYearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Yearly
              <span className="bg-emerald-100 text-emerald-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                -20%
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-white border-2 border-cyan-200 shadow-xl shadow-cyan-500/10 scale-105 z-10"
                    : "bg-white/80 border border-slate-200 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900 tabular-nums">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500">/mo</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-slate-900">{plan.price}</div>
                  )}
                  {isYearly && typeof plan.price === "number" && plan.price > 0 && (
                    <p className="text-sm text-emerald-600 mt-1">
                      Billed annually (${plan.price * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                      </span>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know about our pricing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-100 last:border-0"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-slate-900 font-medium hover:no-underline hover:bg-slate-50/50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
