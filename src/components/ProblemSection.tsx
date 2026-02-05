import { motion } from "framer-motion";
import { Clock, Brain, FileWarning, Check, X } from "lucide-react";

const ProblemSection = () => (
  <section id="problem" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-background relative overflow-hidden">
    {/* Subtle background pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 40%) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          THE PROBLEM
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground px-2">
          Why Your ERP is Hallucinating.
        </h2>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
          Legacy ERP systems assume a 'Happy Path'—where ordered equals received. But they lack a centralized connection to the physical loading dock. Without a digitally-linked Packing Slip or GRN, you have no verified proof of delivery—just messy data and "Phantom Inventory."
        </p>

        {/* Disconnected Documents Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 md:mt-14 max-w-2xl mx-auto"
        >
          <div className="relative bg-secondary/30 rounded-2xl border border-border p-4 sm:p-6 md:p-8">
            {/* The three documents - stacked on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 md:gap-4">
              {/* PO Document */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-border shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-blue-400">PO</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">Purchase Order</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-muted rounded" />
                  <div className="h-1.5 w-3/4 bg-muted rounded" />
                  <div className="h-1.5 w-1/2 bg-muted rounded" />
                </div>
              </motion.div>

              {/* Broken Link 1 - hidden on mobile, shows between docs on larger */}
              <div className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-4 md:w-8 h-0.5 bg-red-500/40" />
                <X className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                <div className="w-4 md:w-8 h-0.5 bg-red-500/40" />
              </div>
              
              {/* Mobile broken link indicator */}
              <div className="sm:hidden flex items-center gap-2">
                <div className="h-0.5 w-6 bg-red-500/40" />
                <X className="w-3 h-3 text-red-400" />
                <div className="h-0.5 w-6 bg-red-500/40" />
              </div>

              {/* Invoice Document */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-border shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-emerald-400">INV</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">Invoice</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-muted rounded" />
                  <div className="h-1.5 w-2/3 bg-muted rounded" />
                  <div className="h-1.5 w-4/5 bg-muted rounded" />
                </div>
              </motion.div>

              {/* Broken Link 2 */}
              <div className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-4 md:w-8 h-0.5 bg-red-500/40" />
                <X className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                <div className="w-4 md:w-8 h-0.5 bg-red-500/40" />
              </div>
              
              {/* Mobile broken link indicator */}
              <div className="sm:hidden flex items-center gap-2">
                <div className="h-0.5 w-6 bg-red-500/40" />
                <X className="w-3 h-3 text-red-400" />
                <div className="h-0.5 w-6 bg-red-500/40" />
              </div>

              {/* Packing Slip Document */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-red-500/30 shadow-lg relative"
              >
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">
                  UNLINKED
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-orange-400">GRN</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">Packing Slip</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-muted rounded" />
                  <div className="h-1.5 w-1/2 bg-muted rounded" />
                  <div className="h-1.5 w-3/4 bg-muted rounded" />
                </div>
              </motion.div>
            </div>

            {/* Caption */}
            <p className="text-center text-xs text-muted-foreground mt-4">
              Without a digital link, these three documents live in silos—creating "Phantom Inventory"
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Card 1: The Blind Spot Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5 sm:p-6 md:p-8 group col-span-1 sm:col-span-2 lg:col-span-1"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-7 h-7 text-red-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">The Blind Spot Gap</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Financial data and Physical data arrive weeks apart. In that gap, 'Phantom Inventory' is created because there is no viable way to link a physical packing slip to the digital PO and Invoice. Your team spends 30% of their week just chasing the paper trail to prove something actually arrived.
          </p>

          {/* Timeline Visual */}
          <div className="bg-secondary/50 rounded-xl p-3 sm:p-4 border border-border overflow-hidden">
            {/* Mobile: Vertical timeline */}
            <div className="sm:hidden space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-400">1</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Day 1</span>
                  <span className="text-[10px] text-foreground font-semibold ml-2">PO Created</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-emerald-400">3</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Day 3</span>
                  <span className="text-[10px] text-foreground font-semibold ml-2">Invoice</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg px-2 py-1">
                  <span className="text-[9px] font-bold text-red-400">⚠ 12-day RISK GAP</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-orange-400">15</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Day 15</span>
                  <span className="text-[10px] text-foreground font-semibold ml-2">Arrives</span>
                </div>
              </div>
            </div>

            {/* Tablet+: Horizontal timeline */}
            <div className="hidden sm:flex items-center justify-between relative gap-2">
              {/* Timeline line - split into segments */}
              <div className="absolute top-4 left-8 w-[15%] sm:w-[12%] lg:w-[18%] h-0.5 bg-border" />
              <div className="absolute top-4 left-[25%] sm:left-[22%] lg:left-[28%] right-[25%] sm:right-[22%] lg:right-[28%] h-1 bg-red-500/40 rounded-full" />
              <div className="absolute top-4 right-8 w-[15%] sm:w-[12%] lg:w-[18%] h-0.5 bg-border" />
              
              {/* Day 1 */}
              <div className="relative z-10 flex flex-col items-center flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-blue-400">1</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Day 1</span>
                <span className="text-[9px] sm:text-[10px] text-foreground font-semibold">PO</span>
              </div>

              {/* Day 3 */}
              <div className="relative z-10 flex flex-col items-center flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-400">3</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Day 3</span>
                <span className="text-[9px] sm:text-[10px] text-foreground font-semibold text-center">Inv</span>
              </div>

              {/* Unverified Risk Gap */}
              <div className="relative z-10 flex flex-col items-center flex-shrink-0">
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 mb-1 sm:mb-2">
                  <span className="text-[7px] sm:text-[8px] lg:text-[9px] font-bold text-red-400 whitespace-nowrap">⚠ GAP</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-red-400/70">12d</span>
              </div>

              {/* Day 15 */}
              <div className="relative z-10 flex flex-col items-center flex-shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-orange-400">15</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium">Day 15</span>
                <span className="text-[9px] sm:text-[10px] text-foreground font-semibold text-center">GRN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: The Fuzzy Logic Failure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5 sm:p-6 md:p-8 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-7 h-7 text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">The 'Fuzzy Logic' Failure</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Even when a Packing Slip exists, it rarely matches the PO verbatim. Vendors write 'FBS' instead of 'Fetal Bovine Serum.' Legacy OCR can't bridge this gap, forcing humans to manually reconcile 40% of shipments.
          </p>
          <div className="code-block space-y-3">
            <div>
              <span className="text-muted-foreground">PO:</span> <span className="text-blue-400">"Fetal Bovine Serum"</span>
            </div>
            <div>
              <span className="text-muted-foreground">Slip:</span> <span className="text-violet-400">"FBS"</span>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Semantic Match</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: The Audit Cliff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-5 sm:p-6 md:p-8 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FileWarning className="w-7 h-7 text-yellow-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground">The Audit Cliff</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When auditors ask for proof of delivery, manual systems crumble. Because the GRN (Packing Slip) is never digitally tethered to the appropriate PO or Invoice, there is zero visibility into verified delivery. For most Series B companies, this lack of a connected audit trail triggers a 3-week panic to find lost PDFs.
          </p>

          {/* File System Visual with Error Toast */}
          <div className="bg-secondary/50 rounded-xl border border-border overflow-hidden">
            {/* File System Header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 border-b border-border">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">Documents</span>
            </div>
            
            {/* File List */}
            <div className="p-2 space-y-1">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-muted/30">
                <span className="text-[10px]">📁</span>
                <span className="text-[10px] text-muted-foreground truncate">Q4_invoices/</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-muted/30">
                <span className="text-[10px]">📄</span>
                <span className="text-[10px] text-muted-foreground truncate">vendor_contracts/</span>
              </div>
            </div>

            {/* Error Toast - Static, not overlapping */}
            <div className="mx-2 mb-2 bg-red-500 text-white rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold">File Not Found</p>
                  <p className="text-[9px] opacity-80 truncate">PO_8823_receipt.pdf</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>

    {/* Transition to Solution - positioned to overlap section boundaries */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-20 text-center py-4"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-primary/50" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
        >
          <span className="text-primary text-sm font-medium">There's a better way</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            ↓
          </motion.span>
        </motion.div>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 via-border to-transparent" />
      </div>
    </motion.div>
  </section>
);

export default ProblemSection;
