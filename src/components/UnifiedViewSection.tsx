import { motion } from "framer-motion";
import { Check, ImageIcon, FileText, Package, Receipt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const UnifiedViewSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100">
            Unified Intelligence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The 360° Audit View
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stop toggling between tabs. See the Purchase Order, the Packing Slip photo, and the 
            Vendor Invoice side-by-side for instant context and approval.
          </p>
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
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/80 border-b border-slate-200/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm text-slate-500 font-medium ml-3">Sanyya — Transaction #TXN-4921</span>
            </div>

            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 divide-x divide-slate-200/60">
              {/* Column 1: Purchase Order */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-slate-800 text-sm">PO #4921</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-xs hover:bg-emerald-100">
                    Approved
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                    <p className="text-sm font-medium text-slate-700 mb-1">Fetal Bovine Serum, 500ml</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                      <span>Qty: <span className="text-slate-700">5</span></span>
                      <span>Price: <span className="text-slate-700">$450.00</span></span>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50/80 rounded-lg border border-slate-100">
                    <p className="text-sm font-medium text-slate-700 mb-1">DMEM Media, 1L</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                      <span>Qty: <span className="text-slate-700">10</span></span>
                      <span>Price: <span className="text-slate-700">$85.00</span></span>
                    </div>
                  </div>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-end mt-4 gap-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400" />
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

              {/* Column 2: Packing Slip */}
              <div className="p-6 bg-slate-50/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-violet-500" />
                    <span className="font-semibold text-slate-800 text-sm">Slip #99-A</span>
                  </div>
                  <span className="text-xs text-slate-500">Uploaded via Mobile</span>
                </div>

                {/* Photo Placeholder */}
                <div className="relative aspect-[4/3] bg-slate-100 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <ImageIcon className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs text-slate-400">Packing Slip Photo</span>
                  </div>
                  {/* Scan lines overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgb(100 116 139) 4px, rgb(100 116 139) 5px)'
                  }} />
                </div>

                {/* Match Badge */}
                <div className="flex items-center justify-center">
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                    <Check className="w-3 h-3 mr-1" />
                    Matches PO
                  </Badge>
                </div>

                {/* Connection indicators */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-400" />
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Column 3: Invoice */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-amber-500" />
                    <span className="font-semibold text-slate-800 text-sm">Invoice #INV-2024</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Vendor</p>
                    <p className="text-sm font-medium text-slate-700">BioSupply Co.</p>
                  </div>
                  
                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-slate-900 font-mono tabular-nums">$2,250.00</p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 mb-3">
                      <Check className="w-4 h-4" />
                      <span>3-Way Match Verified</span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Approve for Payment
                    </Button>
                  </div>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-start mt-4 gap-1">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-400" />
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
