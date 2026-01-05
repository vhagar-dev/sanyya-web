import { motion } from "framer-motion";
import { Brain, Eye, Smartphone, Shield, Sparkles, Scan, AlertTriangle, Camera, FileText, Check, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ValuePropSection = () => (
  <section id="architecture" className="py-24 bg-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-violet-100/40 to-transparent rounded-full blur-3xl" />
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-medium mb-4"
        >
          <Sparkles className="w-3 h-3" />
          Architecture Deep Dive
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight heading-shimmer">Under the Hood</h2>
        <p className="mt-4 text-xl text-slate-600 font-medium subheading-fade">Intelligence at every layer.</p>
        <p className="mt-2 text-slate-500">We combine Semantic Search, Spatial OCR, and Edge Computing to automate the 3-way match.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <Tabs defaultValue="vector" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-8">
            {[
              { value: "vector", icon: Brain, label: "Vector Reconciliation" },
              { value: "ocr", icon: Eye, label: "Spatial OCR" },
              { value: "mobile", icon: Smartphone, label: "Mobile Edge" },
              { value: "anomaly", icon: Shield, label: "Anomaly Detection" },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 bg-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-violet-600 data-[state=active]:text-white data-[state=active]:border-transparent data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 transition-all duration-300 hover:border-blue-200 h-auto"
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-xs font-medium text-center leading-tight">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Tab 1: Vector Reconciliation */}
          <TabsContent value="vector" className="mt-0">
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold">Semantic Embeddings</h3>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="relative group">
                                <div className="absolute inset-0 bg-blue-400/40 rounded-full blur-md group-hover:bg-blue-400/60 transition-all duration-300" />
                                <Info className="w-5 h-5 text-blue-500 relative z-10 cursor-pointer hover:text-blue-600 transition-colors" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="right" 
                              className="w-80 p-0 bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
                              sideOffset={12}
                            >
                              <div className="p-4">
                                <h4 className="text-sm font-bold text-white mb-2">The Math: Cosine Similarity</h4>
                                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                  Sanyya converts text into high-dimensional vectors. To check if "IPA" and "Isopropyl Alcohol" are the same, we calculate the cosine of the angle between their vectors.
                                </p>
                                
                                {/* Vector Diagram */}
                                <div className="bg-slate-800/50 rounded-lg p-3 mb-3 border border-slate-700/50">
                                  <svg viewBox="0 0 200 100" className="w-full h-20">
                                    {/* Grid lines */}
                                    <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                    <line x1="20" y1="80" x2="20" y2="10" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                    
                                    {/* Vector A (blue) */}
                                    <line x1="20" y1="80" x2="160" y2="25" stroke="url(#vectorGradientA)" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="160" cy="25" r="4" fill="#3b82f6" />
                                    <text x="165" y="22" fill="#3b82f6" fontSize="9" fontWeight="600">"IPA"</text>
                                    
                                    {/* Vector B (violet) */}
                                    <line x1="20" y1="80" x2="170" y2="35" stroke="url(#vectorGradientB)" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="170" cy="35" r="4" fill="#8b5cf6" />
                                    <text x="175" y="38" fill="#8b5cf6" fontSize="9" fontWeight="600">"Isopropyl..."</text>
                                    
                                    {/* Angle arc */}
                                    <path d="M 50 65 A 30 30 0 0 1 55 58" fill="none" stroke="#10b981" strokeWidth="1.5" />
                                    <text x="58" y="62" fill="#10b981" fontSize="10" fontWeight="600">θ</text>
                                    
                                    {/* Gradients */}
                                    <defs>
                                      <linearGradient id="vectorGradientA" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                      </linearGradient>
                                      <linearGradient id="vectorGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#8b5cf6" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                                
                                {/* Formula */}
                                <div className="bg-slate-800 rounded-md px-3 py-2 mb-3 border border-slate-700/50">
                                  <code className="text-emerald-400 font-mono text-sm">Similarity = cos(θ)</code>
                                </div>
                                
                                {/* Match confidence */}
                                <div className="flex items-center justify-between bg-emerald-500/10 rounded-md px-3 py-2 border border-emerald-500/20">
                                  <span className="text-xs text-slate-400">Match Confidence:</span>
                                  <span className="text-emerald-400 font-bold font-mono">99.2%</span>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">OpenAI text-embedding-3 + Vector DB</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Legacy tools fail on synonyms (e.g., 'Laptop' vs 'MacBook'). We project line items into vector space and calculate <span className="font-semibold text-blue-600">Cosine Similarity</span> to find matches based on meaning, not just spelling.
                  </p>
                </div>
                
                {/* Visual: Similarity Graph */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-blue-100 border-2 border-blue-200 flex items-center justify-center mb-2">
                        <span className="text-sm font-semibold text-blue-700">"Laptop"</span>
                      </div>
                      <span className="text-xs text-slate-400">Term A</span>
                    </div>
                    
                    <div className="flex-1 mx-4 relative">
                      <div className="h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 rounded-full" />
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                      >
                        98% Match
                      </motion.div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-violet-100 border-2 border-violet-200 flex items-center justify-center mb-2">
                        <span className="text-sm font-semibold text-violet-700">"MacBook"</span>
                      </div>
                      <span className="text-xs text-slate-400">Term B</span>
                    </div>
                  </div>
                  
                  {/* Vector space dots */}
                  <div className="h-24 relative bg-white rounded-xl border border-slate-200 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${i < 7 ? 'bg-blue-400' : 'bg-violet-400'}`}
                        style={{ left: `${15 + Math.random() * 70}%`, top: `${15 + Math.random() * 70}%` }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.7, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-slate-400 bg-white/80 px-2 py-1 rounded">Vector Space</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Tab 2: Spatial OCR */}
          <TabsContent value="ocr" className="mt-0">
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Zero-Shot Extraction</h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">LayoutLMv3 (Multi-modal Transformer)</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Stop building templates. Our AI uses <span className="font-semibold text-violet-600">spatial reasoning</span> to extract data from messy, unformatted invoices and crumpled packing slips instantly. It reads documents like a human.
                  </p>
                </div>
                
                {/* Visual: Invoice with bounding boxes */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 relative">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <span className="text-slate-600 font-semibold">INVOICE #4521</span>
                          <div className="absolute -inset-1 border-2 border-blue-400 rounded bg-blue-400/10" />
                        </motion.div>
                        <span className="text-slate-400 text-xs">Oct 15, 2024</span>
                      </div>
                      
                      <div className="border-t border-slate-100 pt-3">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="relative inline-block"
                        >
                          <span className="text-slate-500">Vendor: </span>
                          <span className="text-slate-700">Acme Electronics</span>
                          <div className="absolute -inset-1 border-2 border-emerald-400 rounded bg-emerald-400/10" />
                        </motion.div>
                      </div>
                      
                      <div className="border-t border-slate-100 pt-3 space-y-2">
                        <div className="flex justify-between">
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600 relative"
                          >
                            Resistor Pack 10k Ohm x100
                            <div className="absolute -inset-1 border-2 border-amber-400 rounded bg-amber-400/10" />
                          </motion.span>
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-700 font-medium relative"
                          >
                            $45.00
                            <div className="absolute -inset-1 border-2 border-violet-400 rounded bg-violet-400/10" />
                          </motion.span>
                        </div>
                      </div>
                      
                      <div className="border-t border-slate-100 pt-3 flex justify-end">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                          className="text-slate-800 font-bold relative"
                        >
                          Total: $45.00
                          <div className="absolute -inset-1 border-2 border-rose-400 rounded bg-rose-400/10" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {[
                      { color: 'bg-blue-400', label: 'Invoice #' },
                      { color: 'bg-emerald-400', label: 'Vendor' },
                      { color: 'bg-amber-400', label: 'Line Item' },
                      { color: 'bg-violet-400', label: 'Amount' },
                    ].map((item) => (
                      <span key={item.label} className="flex items-center gap-1 text-xs text-slate-500">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Tab 3: Mobile Edge */}
          <TabsContent value="mobile" className="mt-0">
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">PWA / Edge Computing</h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">WebAssembly (WASM) + Client-Side CV</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Zero friction for the warehouse. Our Progressive Web App captures packing slip photos and performs image de-skewing <span className="font-semibold text-cyan-600">directly on the device</span>. No App Store downloads, no latency.
                  </p>
                </div>
                
                {/* Visual: Phone with camera interface showing packing slip */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-[4rem] blur-2xl" />
                    <div className="relative w-52 h-[420px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-3 shadow-2xl border border-slate-700">
                      <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col">
                        {/* Camera viewfinder */}
                        <div className="flex-1 relative bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center p-4">
                          <motion.div 
                            className="w-full h-full border-2 border-cyan-400 rounded-xl relative overflow-hidden bg-white/5"
                            animate={{ borderColor: ['hsl(187, 92%, 69%)', 'hsl(217, 91%, 60%)', 'hsl(187, 92%, 69%)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {/* Corner brackets */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br" />
                            
                            {/* Packing slip preview */}
                            <div className="absolute inset-3 bg-white rounded-lg shadow-lg p-3 transform rotate-1">
                              <div className="text-[8px] text-slate-800 font-bold mb-2">PACKING SLIP</div>
                              <div className="space-y-1.5">
                                <div className="h-1.5 bg-slate-200 rounded w-3/4" />
                                <div className="h-1.5 bg-slate-200 rounded w-1/2" />
                                <div className="border-t border-slate-200 pt-1.5 mt-2">
                                  <div className="flex justify-between text-[6px] text-slate-500">
                                    <span>Item</span>
                                    <span>Qty</span>
                                  </div>
                                  <div className="space-y-1 mt-1">
                                    <div className="flex justify-between">
                                      <div className="h-1 bg-slate-300 rounded w-16" />
                                      <div className="h-1 bg-slate-300 rounded w-4" />
                                    </div>
                                    <div className="flex justify-between">
                                      <div className="h-1 bg-slate-300 rounded w-14" />
                                      <div className="h-1 bg-slate-300 rounded w-4" />
                                    </div>
                                    <div className="flex justify-between">
                                      <div className="h-1 bg-slate-300 rounded w-12" />
                                      <div className="h-1 bg-slate-300 rounded w-4" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Checkmark overlay */}
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                              >
                                <Check className="w-3 h-3 text-white" />
                              </motion.div>
                            </div>
                            
                            {/* Scan animation overlay */}
                            <motion.div 
                              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                              animate={{ top: ['0%', '100%', '0%'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Bottom UI */}
                        <div className="p-4 bg-slate-800/50 space-y-2">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-500 rounded-xl py-3 text-center"
                          >
                            <span className="text-white font-semibold text-sm flex items-center justify-center gap-2">
                              <Camera className="w-4 h-4" />
                              Packing Slip Captured
                            </span>
                          </motion.div>
                          <div className="text-[10px] text-slate-400 text-center">3 items matched to PO #4521</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Tab 4: Anomaly Detection */}
          <TabsContent value="anomaly" className="mt-0">
            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Unit Economic Guardrails</h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Historical Variance Analysis</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We memorize your price history. If a vendor quietly raises the price of a component by 10%, or if shipping costs spike, the system <span className="font-semibold text-rose-600">flags the variance</span> for CFO review before payment.
                  </p>
                </div>
                
                {/* Visual: Price chart with alert */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-600">Resistor 10k Ohm - Price History</span>
                    <span className="text-xs text-slate-400">Last 6 months</span>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-40 relative">
                    <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 30, 60, 90, 120].map((y) => (
                        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                      ))}
                      
                      {/* Normal price line */}
                      <motion.path
                        d="M 0 80 L 50 78 L 100 82 L 150 79 L 200 81 L 220 80"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                      
                      {/* Spike line */}
                      <motion.path
                        d="M 220 80 L 250 40 L 280 38"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                      />
                      
                      {/* Alert dot */}
                      <motion.circle
                        cx="250"
                        cy="40"
                        r="8"
                        fill="#ef4444"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, type: 'spring' }}
                      />
                    </svg>
                    
                    {/* Alert badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 }}
                      className="absolute top-2 right-4 flex items-center gap-1 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      +12% Variance
                    </motion.div>
                    
                    {/* Price labels */}
                    <div className="absolute left-0 top-0 text-xs text-slate-400">$0.50</div>
                    <div className="absolute left-0 bottom-0 text-xs text-slate-400">$0.40</div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-200">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="w-3 h-0.5 bg-blue-500 rounded" /> Historical Avg
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="w-3 h-0.5 bg-red-500 rounded" /> Anomaly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  </section>
);

export default ValuePropSection;
