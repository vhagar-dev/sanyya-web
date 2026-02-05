import { motion } from "framer-motion";
import { Check, X, AlertTriangle, Info, FileText, Package, Receipt } from "lucide-react";

const ColorPalettePreview = () => {
  const primaryColors = [
    { name: "Primary Magenta", hsl: "292 84% 57%", hex: "#D946EF", usage: "Brand accent, CTAs" },
    { name: "Primary Pink", hsl: "330 70% 55%", hex: "#DB2777", usage: "Gradients, hover states" },
  ];

  const documentColors = [
    { name: "PO Blue", hsl: "217 91% 60%", hex: "#3B82F6", icon: FileText, label: "PO" },
    { name: "GRN Orange", hsl: "25 95% 53%", hex: "#F97316", icon: Package, label: "GRN" },
    { name: "Invoice Red", hsl: "0 84% 60%", hex: "#EF4444", icon: Receipt, label: "INV" },
  ];

  const statusColors = [
    { name: "Success", hsl: "160 84% 45%", hex: "#10B981", icon: Check, label: "Matched" },
    { name: "Warning", hsl: "38 92% 50%", hex: "#F59E0B", icon: AlertTriangle, label: "Review" },
    { name: "Error", hsl: "0 84% 60%", hex: "#EF4444", icon: X, label: "Failed" },
    { name: "Info Violet", hsl: "258 90% 66%", hex: "#8B5CF6", icon: Info, label: "AI Feature" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(0_0%_7%)] text-[hsl(0_0%_98%)] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Sanyya Color Palette Preview</h1>
          <p className="text-[hsl(0_0%_65%)]">Visual preview of the proposed design system colors</p>
        </motion.div>

        {/* Primary Brand Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "hsl(292, 84%, 57%)" }} />
            Primary Brand Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {primaryColors.map((color) => (
              <div
                key={color.name}
                className="rounded-xl border border-[hsl(0_0%_18%)] overflow-hidden"
                style={{ background: "hsl(0, 0%, 11%)" }}
              >
                <div
                  className="h-24"
                  style={{ background: `hsl(${color.hsl})` }}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{color.name}</h3>
                      <p className="text-sm text-[hsl(0_0%_65%)]">{color.usage}</p>
                    </div>
                    <div className="text-right text-sm font-mono">
                      <div className="text-[hsl(0_0%_65%)]">{color.hex}</div>
                      <div className="text-[hsl(0_0%_50%)]">{color.hsl}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Preview */}
          <div className="mt-4 rounded-xl overflow-hidden border border-[hsl(0_0%_18%)]">
            <div
              className="h-16"
              style={{ background: "linear-gradient(135deg, hsl(292, 84%, 57%), hsl(330, 70%, 55%))" }}
            />
            <div className="p-3 text-center text-sm" style={{ background: "hsl(0, 0%, 11%)" }}>
              <span className="text-[hsl(0_0%_65%)]">Primary Gradient (Magenta → Pink)</span>
            </div>
          </div>
        </motion.section>

        {/* Document Type Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">📄 Document Type Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documentColors.map((color) => (
              <div
                key={color.name}
                className="rounded-xl border border-[hsl(0_0%_18%)] p-6 flex flex-col items-center gap-4"
                style={{ background: "hsl(0, 0%, 11%)" }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ 
                    background: `hsl(${color.hsl} / 0.2)`,
                    border: `2px solid hsl(${color.hsl} / 0.4)`
                  }}
                >
                  <color.icon className="w-7 h-7" style={{ color: `hsl(${color.hsl})` }} />
                </div>
                <div className="text-center">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-2"
                    style={{ 
                      background: `hsl(${color.hsl} / 0.2)`,
                      color: `hsl(${color.hsl})`
                    }}
                  >
                    {color.label}
                  </div>
                  <h3 className="font-semibold">{color.name}</h3>
                  <p className="text-xs font-mono text-[hsl(0_0%_50%)]">{color.hsl}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Status Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">✓ Status & Semantic Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statusColors.map((color) => (
              <div
                key={color.name}
                className="rounded-xl border border-[hsl(0_0%_18%)] p-4"
                style={{ background: "hsl(0, 0%, 11%)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ 
                    background: `hsl(${color.hsl} / 0.2)`,
                  }}
                >
                  <color.icon className="w-5 h-5" style={{ color: `hsl(${color.hsl})` }} />
                </div>
                <h3 className="font-semibold text-sm">{color.name}</h3>
                <p className="text-xs text-[hsl(0_0%_65%)]">{color.label}</p>
                <p className="text-[10px] font-mono text-[hsl(0_0%_50%)] mt-1">{color.hsl}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Example Component: 3-Way Match Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">🎨 Example: 3-Way Match Card</h2>
          <div
            className="rounded-2xl border border-[hsl(0_0%_18%)] p-6 max-w-2xl"
            style={{ background: "hsl(0, 0%, 11%)" }}
          >
            {/* Header with gradient */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(292, 84%, 57%), hsl(330, 70%, 55%))" }}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Match #4521</h3>
                  <p className="text-sm text-[hsl(0_0%_65%)]">Verified 2 mins ago</p>
                </div>
              </div>
              <div
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{ 
                  background: "hsl(160, 84%, 45%, 0.2)",
                  color: "hsl(160, 84%, 45%)"
                }}
              >
                Matched
              </div>
            </div>

            {/* Documents Row */}
            <div className="flex items-center justify-between gap-4 mb-6">
              {documentColors.map((doc, i) => (
                <div key={doc.name} className="flex-1 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: `hsl(${doc.hsl} / 0.2)`,
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: `hsl(${doc.hsl})` }}>
                      {doc.label}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium truncate">{doc.label}-2024-001</div>
                    <div className="text-[10px] text-[hsl(0_0%_50%)]">$12,450.00</div>
                  </div>
                  {i < documentColors.length - 1 && (
                    <div className="hidden md:block w-8 h-0.5 rounded" style={{ background: "hsl(160, 84%, 45%, 0.4)" }} />
                  )}
                </div>
              ))}
            </div>

            {/* Confidence Score */}
            <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: "hsl(0, 0%, 15%)" }}>
              <span className="text-sm text-[hsl(0_0%_65%)]">Semantic Confidence</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 rounded-full overflow-hidden" style={{ background: "hsl(0, 0%, 20%)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ 
                      width: "96%",
                      background: "linear-gradient(90deg, hsl(160, 84%, 45%), hsl(170, 80%, 50%))"
                    }}
                  />
                </div>
                <span className="text-sm font-bold" style={{ color: "hsl(160, 84%, 45%)" }}>96%</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Button Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">🔘 Button Styles</h2>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ 
                background: "hsl(292, 84%, 57%)",
                boxShadow: "0 10px 30px -10px hsl(292, 84%, 57%, 0.5)"
              }}
            >
              Primary CTA
            </button>
            <button
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ 
                background: "linear-gradient(135deg, hsl(292, 84%, 57%), hsl(330, 70%, 55%))",
                boxShadow: "0 10px 30px -10px hsl(292, 84%, 57%, 0.5)"
              }}
            >
              Gradient CTA
            </button>
            <button
              className="px-6 py-3 rounded-xl font-semibold transition-transform hover:-translate-y-0.5"
              style={{ 
                background: "hsl(160, 84%, 45%)",
                color: "white",
                boxShadow: "0 10px 30px -10px hsl(160, 84%, 45%, 0.5)"
              }}
            >
              Success Action
            </button>
            <button
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
              style={{ 
                background: "transparent",
                border: "1px solid hsl(0, 0%, 25%)",
                color: "hsl(0, 0%, 98%)"
              }}
            >
              Secondary
            </button>
          </div>
        </motion.section>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pt-8 border-t border-[hsl(0_0%_18%)]"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[hsl(0_0%_65%)] hover:text-[hsl(292_84%_57%)] transition-colors"
          >
            ← Back to Homepage
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ColorPalettePreview;
