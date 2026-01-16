import { motion } from "framer-motion";
import { Database, TrendingDown, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const problemCards = [
  {
    id: "data-silo",
    icon: (size: "sm" | "lg") => (
      <Database
        className={
          size === "lg" ? "w-7 h-7 text-slate-600" : "w-5 h-5 text-slate-600"
        }
      />
    ),
    iconBg: "from-slate-100 to-slate-200",
    title: "The Data Silo",
    description:
      'Your data arrives via three fragmented channels on three different timelines. A Digital PO created today, a Paper Slip arriving on the dock next week, and a PDF Invoice emailed next month. Because they never align, your humans are forced to act as "manual middleware" to stitch the transaction together.',
  },
  {
    id: "semantic-gap",
    icon: () => <span className="text-2xl font-mono text-violet-600">≈</span>,
    iconBg: "from-violet-100 to-violet-200",
    title: "The Semantic Gap",
    description:
      "Vendors frequently use different nomenclature on packing slips than what appears on your PO. Our Vector Engine looks beyond keywords to understand context—automatically matching 'Fetal Bovine Serum' on a purchase order to 'FBS' on a packing slip.",
    hasCodeBlock: true,
  },
  {
    id: "velocity-trap",
    icon: (size: "sm" | "lg") => (
      <TrendingDown
        className={
          size === "lg"
            ? "w-7 h-7 text-emerald-600"
            : "w-5 h-5 text-emerald-600"
        }
      />
    ),
    iconBg: "from-emerald-100 to-emerald-200",
    title: "The Linear Scaling Trap",
    description:
      "Paperwork shouldn't be your bottleneck. In the legacy world, doubling experiments meant doubling finance headcount—causing financial friction to grow faster than your science. Sanyya breaks this linear scaling trap, letting you scale volume without bloating your back office.",
    hasChart: true,
  },
];

const ProblemSection = () => (
  <section
    id="problem"
    className="py-24 bg-[#E8E4F8] md:bg-white relative overflow-hidden"
  >
    {/* Top blur gradient - mobile only */}
    <div className="md:hidden absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

    {/* Bottom blur gradient - mobile only */}
    <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

    {/* Subtle background pattern */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          THE PROBLEM
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The 3-Way Match is Broken for Physical Ops
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Digital POs, paper packing slips, and PDF invoices never align
          perfectly. For hardware and biotech teams, this data friction turns a
          simple payment into a week-long investigation
        </p>
      </motion.div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {problemCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="glass-card p-8 group"
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {card.icon("lg")}
            </div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {card.description}
            </p>

            {card.hasCodeBlock && (
              <div className="code-block space-y-3 text-slate-300">
                <div>
                  <span className="text-slate-500">PO:</span>{" "}
                  <span className="text-blue-400">"Fetal Bovine Serum"</span>
                </div>
                <div>
                  <span className="text-slate-500">Slip:</span>{" "}
                  <span className="text-violet-400">"FBS"</span>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">
                    Semantic Match
                  </span>
                </div>
              </div>
            )}

            {card.hasChart && (
              <>
                <div className="h-24 flex items-end gap-2">
                  {[60, 75, 85, 70, 40, 25, 15, 10].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className={`flex-1 rounded-t-sm ${
                        i < 4 ? "bg-red-400" : "bg-emerald-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>Manual</span>
                  <span>With Sanyya</span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: Accordion layout */}
      <div className="md:hidden max-w-lg mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {problemCards.map((card) => (
            <AccordionItem
              key={card.id}
              value={card.id}
              className="glass-card border-0 rounded-2xl overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    {card.icon("sm")}
                  </div>
                  <span className="text-left font-semibold text-base">
                    {card.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-slate-600 leading-relaxed mb-4">
                  {card.description}
                </p>

                {card.hasCodeBlock && (
                  <div className="code-block space-y-3 text-slate-300">
                    <div>
                      <span className="text-slate-500">PO:</span>{" "}
                      <span className="text-blue-400">
                        "Fetal Bovine Serum"
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Slip:</span>{" "}
                      <span className="text-violet-400">"FBS"</span>
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">
                        Semantic Match
                      </span>
                    </div>
                  </div>
                )}

                {card.hasChart && (
                  <>
                    <div className="h-20 flex items-end gap-2">
                      {[60, 75, 85, 70, 40, 25, 15, 10].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`flex-1 rounded-t-sm ${
                            i < 4 ? "bg-red-400" : "bg-emerald-400"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                      <span>Manual</span>
                      <span>With Sanyya</span>
                    </div>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default ProblemSection;
