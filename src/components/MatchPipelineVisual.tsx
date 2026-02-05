import { motion } from "framer-motion";
import { FileText, Package, Receipt, Scan, GitCompare, CheckCircle2 } from "lucide-react";

const MatchPipelineVisual = () => {
  // Extracted fields that animate in
  const extractedFields = [
    { label: "vendor", value: "Thermo Fisher" },
    { label: "amount", value: "$12,450.00" },
    { label: "items", value: "3 line items" },
  ];

  return (
    <div className="w-full">
      {/* Pipeline Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
        
        {/* Stage 1: Documents Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-row lg:flex-col items-center gap-3"
        >
          <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0 lg:mb-2">Input</div>
          <div className="flex flex-row lg:flex-col gap-2">
            {[
              { icon: FileText, label: "PO", color: "fuchsia" },
              { icon: Package, label: "GRN", color: "pink" },
              { icon: Receipt, label: "INV", color: "rose" },
            ].map((doc, i) => (
              <motion.div
                key={doc.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-${doc.color}-500/10 border border-${doc.color}-500/30 flex items-center justify-center`}
                style={{
                  backgroundColor: doc.color === "fuchsia" ? "rgba(217, 70, 239, 0.1)" : 
                                   doc.color === "pink" ? "rgba(236, 72, 153, 0.1)" : 
                                   "rgba(244, 63, 94, 0.1)",
                  borderColor: doc.color === "fuchsia" ? "rgba(217, 70, 239, 0.3)" : 
                               doc.color === "pink" ? "rgba(236, 72, 153, 0.3)" : 
                               "rgba(244, 63, 94, 0.3)",
                }}
              >
                <doc.icon 
                  className="w-5 h-5 md:w-6 md:h-6" 
                  style={{
                    color: doc.color === "fuchsia" ? "rgb(217, 70, 239)" : 
                           doc.color === "pink" ? "rgb(236, 72, 153)" : 
                           "rgb(244, 63, 94)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="hidden lg:flex items-center origin-left"
        >
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-fuchsia-500/50 to-fuchsia-500/20" />
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-fuchsia-500/50" />
        </motion.div>

        {/* Mobile Arrow */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="lg:hidden flex flex-col items-center origin-top"
        >
          <div className="w-[2px] h-6 bg-gradient-to-b from-fuchsia-500/50 to-fuchsia-500/20" />
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-fuchsia-500/50" />
        </motion.div>

        {/* Stage 2: Parse & Extract */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="relative"
        >
          <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider text-center mb-2">Parse</div>
          <div className="glass-card p-3 md:p-4 min-w-[140px] md:min-w-[160px]">
            <div className="flex items-center gap-2 mb-3">
              <Scan className="w-4 h-4 text-fuchsia-400" />
              <span className="text-xs font-medium text-foreground">Field Extraction</span>
            </div>
            <div className="space-y-1.5">
              {extractedFields.map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.5 + i * 0.15 }}
                  className="flex items-center gap-2 text-[10px] md:text-xs"
                >
                  <span className="text-muted-foreground font-mono">{field.label}:</span>
                  <motion.span 
                    className="text-foreground font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 + i * 0.15 }}
                  >
                    {field.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
            {/* Scanning animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent rounded-xl pointer-events-none"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: [0, 0.5, 0], y: ["0%", "100%", "100%"] }}
              transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
          className="hidden lg:flex items-center origin-left"
        >
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-pink-500/50 to-pink-500/20" />
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-pink-500/50" />
        </motion.div>

        {/* Mobile Arrow 2 */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
          className="lg:hidden flex flex-col items-center origin-top"
        >
          <div className="w-[2px] h-6 bg-gradient-to-b from-pink-500/50 to-pink-500/20" />
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-pink-500/50" />
        </motion.div>

        {/* Stage 3: Compare */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="relative"
        >
          <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider text-center mb-2">Compare</div>
          <div className="glass-card p-3 md:p-4 min-w-[140px] md:min-w-[160px]">
            <div className="flex items-center gap-2 mb-3">
              <GitCompare className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-medium text-foreground">Semantic Match</span>
            </div>
            <div className="space-y-1.5">
              {[
                { pair: "PO ↔ GRN", score: 98.2 },
                { pair: "GRN ↔ INV", score: 97.8 },
                { pair: "PO ↔ INV", score: 99.1 },
              ].map((match, i) => (
                <motion.div
                  key={match.pair}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 2.1 + i * 0.15 }}
                  className="flex items-center justify-between gap-2 text-[10px] md:text-xs"
                >
                  <span className="text-muted-foreground font-mono">{match.pair}</span>
                  <motion.div 
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.2 + i * 0.15 }}
                  >
                    <div className="w-12 md:w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${match.score}%` }}
                        transition={{ duration: 0.5, delay: 2.3 + i * 0.15 }}
                      />
                    </div>
                    <span className="text-emerald-400 font-medium tabular-nums">{match.score}%</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Arrow 3 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
          className="hidden lg:flex items-center origin-left"
        >
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-emerald-500/50 to-emerald-500/80" />
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-emerald-500/80" />
        </motion.div>

        {/* Mobile Arrow 3 */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
          className="lg:hidden flex flex-col items-center origin-top"
        >
          <div className="w-[2px] h-6 bg-gradient-to-b from-emerald-500/50 to-emerald-500/80" />
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-emerald-500/80" />
        </motion.div>

        {/* Stage 4: Confirm */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.7, type: "spring", stiffness: 200 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">Result</div>
          <div className="relative">
            <motion.div
              className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-500/40">
              <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9 }}
              className="text-xs md:text-sm font-semibold text-emerald-400"
            >
              Matched
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
              className="text-[10px] text-muted-foreground"
            >
              98.4% confidence
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MatchPipelineVisual;
