import { motion } from "framer-motion";
import { FileText, Package, Receipt, CheckCircle2 } from "lucide-react";

const FieldMatchVisual = () => {
  const documents = [
    { icon: FileText, label: "PO", color: "fuchsia" },
    { icon: Package, label: "GRN", color: "pink" },
    { icon: Receipt, label: "INV", color: "rose" },
  ];

  const fields = [
    { name: "vendor", values: ["Thermo Fisher", "Thermo Fisher Scientific", "Thermo Fisher"], matched: true },
    { name: "amount", values: ["$12,450.00", "$12,450.00", "$12,450.00"], matched: true },
    { name: "qty", values: ["50 units", "48 units", "50 units"], matched: false, resolved: true },
  ];

  const getColor = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      fuchsia: { bg: "rgba(217, 70, 239, 0.1)", border: "rgba(217, 70, 239, 0.3)", text: "rgb(217, 70, 239)" },
      pink: { bg: "rgba(236, 72, 153, 0.1)", border: "rgba(236, 72, 153, 0.3)", text: "rgb(236, 72, 153)" },
      rose: { bg: "rgba(244, 63, 94, 0.1)", border: "rgba(244, 63, 94, 0.3)", text: "rgb(244, 63, 94)" },
    };
    return colors[color];
  };

  return (
    <div className="w-full py-2">
      {/* Document Headers */}
      <div className="flex justify-center gap-4 md:gap-8 mb-6">
        {documents.map((doc, i) => (
          <motion.div
            key={doc.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: getColor(doc.color).bg,
                border: `1px solid ${getColor(doc.color).border}`,
              }}
            >
              <doc.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: getColor(doc.color).text }} />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{doc.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Field Extraction Lines & Comparison Zone */}
      <div className="relative">
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: "140px" }}>
          <defs>
            <linearGradient id="line-gradient-fuchsia" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(217, 70, 239)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(217, 70, 239)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-gradient-pink" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-gradient-rose" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(244, 63, 94)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(244, 63, 94)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Animated lines from each document to comparison zone */}
          {[0, 1, 2].map((docIndex) => (
            <motion.line
              key={docIndex}
              x1={`${25 + docIndex * 25}%`}
              y1="0"
              x2="50%"
              y2="100%"
              stroke={`url(#line-gradient-${documents[docIndex].color})`}
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + docIndex * 0.15 }}
            />
          ))}
        </svg>

        {/* Spacer for lines */}
        <div className="h-[140px]" />
      </div>

      {/* Comparison Zone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="relative mx-auto max-w-md"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/20 via-pink-500/20 to-rose-500/20 rounded-xl blur-lg" />
        
        <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3 text-center">
            Field Comparison
          </div>
          
          <div className="space-y-2">
            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.8 + i * 0.2 }}
                className="flex items-center gap-3"
              >
                {/* Field name */}
                <div className="w-16 text-[10px] md:text-xs font-mono text-muted-foreground">
                  {field.name}
                </div>
                
                {/* Values from each doc */}
                <div className="flex-1 flex items-center gap-1">
                  {field.values.map((value, vi) => (
                    <motion.div
                      key={vi}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.0 + i * 0.2 + vi * 0.1 }}
                      className={`flex-1 text-[9px] md:text-[10px] px-2 py-1 rounded text-center truncate ${
                        !field.matched && vi === 1 
                          ? "bg-amber-500/10 border border-amber-500/30 text-amber-400" 
                          : "bg-secondary/50 text-foreground"
                      }`}
                    >
                      {value}
                    </motion.div>
                  ))}
                </div>
                
                {/* Match indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.3 + i * 0.2, type: "spring" }}
                >
                  {field.matched ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : field.resolved ? (
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    </div>
                  ) : null}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Overall match result */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.8 }}
            className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-2"
          >
            <motion.div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
              animate={{ boxShadow: ["0 0 0 0 rgba(52, 211, 153, 0.4)", "0 0 0 8px rgba(52, 211, 153, 0)", "0 0 0 0 rgba(52, 211, 153, 0)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 3 }}
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <div className="text-xs font-semibold text-emerald-400">3-Way Match Complete</div>
              <div className="text-[10px] text-muted-foreground">1 variance auto-resolved</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FieldMatchVisual;