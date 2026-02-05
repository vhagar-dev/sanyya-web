import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ImageIcon, FileText, Package, Receipt, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const UnifiedViewSection = () => {
  const [showDiscrepancy, setShowDiscrepancy] = useState(true);

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 20% / 0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <Badge className={`mb-4 text-xs transition-colors duration-300 ${
            showDiscrepancy 
              ? "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/15"
              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15"
          }`}>
            {showDiscrepancy ? "Discrepancy Detected" : "3-Way Match Complete"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
            The Digital Tether in Action
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            {showDiscrepancy 
              ? "Stop overpayment before it happens. Sanyya automatically flags when invoices don't match the actual goods on your dock."
              : "See the Purchase Order, Packing Slip, and Invoice digitally linked as one verified record—ready for instant approval."
            }
          </p>

          {/* Toggle Switch */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowDiscrepancy(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                !showDiscrepancy 
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              <Check className="w-4 h-4 inline mr-2" />
              Perfect Match
            </button>
            <button
              onClick={() => setShowDiscrepancy(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                showDiscrepancy 
                  ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              Discrepancy
            </button>
          </div>

          {/* Connected Documents Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            {/* Mobile: Stacked vertical layout */}
            <div className="flex sm:hidden flex-col items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium text-blue-400">PO</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-emerald-500" />
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="w-0.5 h-3 bg-emerald-500" />
              </div>
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
                showDiscrepancy 
                  ? "bg-amber-500/10 border-amber-500/30" 
                  : "bg-violet-500/10 border-violet-500/30"
              }`}>
                <Package className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`} />
                <span className={`text-xs font-medium transition-colors duration-300 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`}>GRN</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-0.5 h-3 transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`} />
                <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`}>
                  {showDiscrepancy ? <AlertTriangle className="w-3 h-3 text-white" /> : <Check className="w-3 h-3 text-white" />}
                </div>
                <div className={`w-0.5 h-3 transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`} />
              </div>
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
                showDiscrepancy 
                  ? "bg-red-500/10 border-red-500/30" 
                  : "bg-amber-500/10 border-amber-500/30"
              }`}>
                <Receipt className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`} />
                <span className={`text-xs font-medium transition-colors duration-300 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`}>INV</span>
              </div>
            </div>

            {/* Tablet+: Horizontal layout */}
            <div className="hidden sm:flex items-center justify-center gap-3 md:gap-6">
              {/* PO */}
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium text-blue-400">PO</span>
              </div>
              
              {/* Connected line with check */}
              <div className="flex items-center gap-1">
                <div className="w-4 md:w-8 h-0.5 bg-emerald-500" />
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="w-4 md:w-8 h-0.5 bg-emerald-500" />
              </div>

              {/* Packing Slip */}
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
                showDiscrepancy 
                  ? "bg-amber-500/10 border-amber-500/30" 
                  : "bg-violet-500/10 border-violet-500/30"
              }`}>
                <Package className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`} />
                <span className={`text-xs font-medium transition-colors duration-300 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`}>GRN</span>
              </div>

              {/* Connected line with warning/check */}
              <div className="flex items-center gap-1">
                <div className={`w-4 md:w-8 h-0.5 transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`} />
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`}>
                  {showDiscrepancy ? <AlertTriangle className="w-3 h-3 text-white" /> : <Check className="w-3 h-3 text-white" />}
                </div>
                <div className={`w-4 md:w-8 h-0.5 transition-colors duration-300 ${showDiscrepancy ? "bg-red-500" : "bg-emerald-500"}`} />
              </div>

              {/* Invoice */}
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
                showDiscrepancy 
                  ? "bg-red-500/10 border-red-500/30" 
                  : "bg-amber-500/10 border-amber-500/30"
              }`}>
                <Receipt className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`} />
                <span className={`text-xs font-medium transition-colors duration-300 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`}>INV</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* App Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Window Chrome */}
          <div className="bg-card/70 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-2xl border border-border overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-secondary/80 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground font-medium ml-2 md:ml-3 truncate">Sanyya — Transaction #TXN-4921</span>
              <AnimatePresence mode="wait">
                {showDiscrepancy ? (
                  <motion.div
                    key="action-required"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge className="ml-auto bg-red-500/10 text-red-400 border-red-500/20 text-[10px] md:text-xs hover:bg-red-500/15">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Action Required
                    </Badge>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge className="ml-auto bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] md:text-xs hover:bg-emerald-500/15">
                      <Check className="w-3 h-3 mr-1" />
                      Ready to Approve
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3-Column Grid - stack on mobile */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Column 1: Purchase Order */}
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-foreground text-xs md:text-sm">PO #4921</span>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] md:text-xs hover:bg-emerald-500/15">
                    Approved
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-sm font-medium text-foreground mb-1">Fetal Bovine Serum, 500ml</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      <span>Qty: <span className="text-foreground font-semibold">{showDiscrepancy ? "50" : "5"}</span></span>
                      <span>Price: <span className="text-foreground">$450.00</span></span>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-sm font-medium text-foreground mb-1">DMEM Media, 1L</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      <span>Qty: <span className="text-foreground">10</span></span>
                      <span>Price: <span className="text-foreground">$85.00</span></span>
                    </div>
                  </div>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-end mt-4 gap-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400" />
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Column 2: Packing Slip */}
              <div className="p-4 md:p-6 bg-secondary/20">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <Package className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`} />
                    <span className="font-semibold text-foreground text-xs md:text-sm">Slip #99-A</span>
                  </div>
                  <AnimatePresence mode="wait">
                    {showDiscrepancy ? (
                      <motion.div
                        key="partial"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] md:text-xs hover:bg-amber-500/15">
                          Partial Receipt
                        </Badge>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="complete"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span className="text-[10px] md:text-xs text-muted-foreground">Uploaded via Mobile</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Photo Placeholder */}
                <div className={`relative aspect-[4/3] bg-secondary rounded-lg border-2 border-dashed flex items-center justify-center mb-4 transition-colors duration-300 ${
                  showDiscrepancy ? "border-amber-500/30" : "border-border"
                }`}>
                  <div className="text-center">
                    <ImageIcon className="w-10 h-10 text-muted-foreground/50 mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground">Packing Slip Photo</span>
                  </div>
                  {/* Scan lines overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, hsl(0 0% 50%) 4px, hsl(0 0% 50%) 5px)'
                  }} />
                </div>

                <AnimatePresence mode="wait">
                  {showDiscrepancy ? (
                    <motion.div
                      key="discrepancy-grn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Verified Count */}
                      <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/20 mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Fetal Bovine Serum Verified</p>
                        <p className="text-lg font-bold text-amber-400 font-mono">30 <span className="text-xs text-muted-foreground font-normal">of 50 units</span></p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border mb-3">
                        <p className="text-xs text-muted-foreground mb-1">DMEM Media Verified</p>
                        <p className="text-sm font-bold text-foreground font-mono">10 <span className="text-xs text-muted-foreground font-normal">of 10 units</span></p>
                      </div>
                      {/* Match Badge */}
                      <div className="flex items-center justify-center">
                        <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/15">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          20 Units Missing
                        </Badge>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="perfect-grn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Fetal Bovine Serum Verified</p>
                        <p className="text-sm font-bold text-foreground font-mono">5 <span className="text-xs text-muted-foreground font-normal">of 5 units</span></p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border mb-3">
                        <p className="text-xs text-muted-foreground mb-1">DMEM Media Verified</p>
                        <p className="text-sm font-bold text-foreground font-mono">10 <span className="text-xs text-muted-foreground font-normal">of 10 units</span></p>
                      </div>
                      {/* Match Badge */}
                      <div className="flex items-center justify-center">
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15">
                          <Check className="w-3 h-3 mr-1" />
                          Matches PO
                        </Badge>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Connection indicators */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`h-px w-8 bg-gradient-to-r from-transparent transition-colors duration-300 ${showDiscrepancy ? "to-red-400" : "to-emerald-400"}`} />
                    {showDiscrepancy ? (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    ) : (
                      <Check className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Column 3: Invoice */}
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <Receipt className={`w-4 h-4 transition-colors duration-300 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`} />
                    <span className="font-semibold text-foreground text-xs md:text-sm">Invoice #INV-2024</span>
                  </div>
                  <AnimatePresence mode="wait">
                    {showDiscrepancy ? (
                      <motion.div
                        key="mismatch"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-[10px] md:text-xs hover:bg-red-500/15">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Mismatch
                        </Badge>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Vendor</p>
                    <p className="text-sm font-medium text-foreground">BioSupply Co.</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {showDiscrepancy ? (
                      <motion.div
                        key="discrepancy-invoice"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20 relative overflow-hidden">
                          <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
                          <p className="text-xs text-muted-foreground mb-1 relative z-10">Total Amount</p>
                          <p className="text-2xl font-bold text-red-400 font-mono tabular-nums relative z-10">$23,350.00</p>
                          <p className="text-xs text-red-400/80 mt-1 relative z-10">Billed for 50 + 10 units</p>
                        </div>

                        {/* Error Alert */}
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-medium text-red-400">Quantity Mismatch</p>
                              <p className="text-xs text-red-400/80 mt-0.5">Billed for 50, only 30 received (20 missing)</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <div className="flex items-center gap-2 text-xs text-red-400 mb-3">
                            <AlertTriangle className="w-4 h-4" />
                            <span>PO ↔ GRN ↔ Invoice Mismatch</span>
                          </div>
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Flag Discrepancy
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="perfect-invoice"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                          <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-foreground font-mono tabular-nums">$3,100.00</p>
                        </div>

                        <div className="pt-2">
                          <div className="flex items-center gap-2 text-xs text-emerald-400 mb-3">
                            <Check className="w-4 h-4" />
                            <span>PO ↔ GRN ↔ Invoice Tethered</span>
                          </div>
                          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                            Approve for Payment
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-start mt-4 gap-1">
                  {showDiscrepancy ? (
                    <>
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-400" />
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnifiedViewSection;
