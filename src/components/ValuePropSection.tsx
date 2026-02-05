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
  <section id="architecture" className="py-16 md:py-28 bg-background relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-primary/10 via-pink-500/10 to-transparent rounded-full blur-3xl" />
    
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs sm:text-sm font-medium mb-4"
        >
          <Sparkles className="w-3 h-3" />
          Deep Dive
        </motion.span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight heading-shimmer text-foreground">How We Do It</h2>
        <p className="mt-3 md:mt-4 text-lg md:text-xl text-muted-foreground font-medium subheading-fade">The technology behind the magic.</p>
        <p className="mt-2 text-sm md:text-base text-muted-foreground px-2">Semantic Search, Spatial OCR, and Edge Computing working together.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <Tabs defaultValue="vector" className="w-full">
          <TabsList className="flex overflow-x-auto md:grid md:grid-cols-4 w-full h-auto gap-2 bg-transparent p-0 mb-6 md:mb-8 pb-2 md:pb-0 scrollbar-hide">
            {[
              { value: "vector", icon: Brain, label: "Vector Match" },
              { value: "ocr", icon: Eye, label: "Spatial OCR" },
              { value: "mobile", icon: Smartphone, label: "Mobile Edge" },
              { value: "anomaly", icon: Shield, label: "Anomaly" },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-4 rounded-lg md:rounded-xl border border-border bg-card data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-pink-500 data-[state=active]:text-primary-foreground data-[state=active]:border-transparent data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 transition-all duration-300 hover:border-primary/30 h-auto min-w-[70px] flex-shrink-0 md:flex-shrink md:min-w-0"
              >
                <tab.icon className="w-4 md:w-5 h-4 md:h-5" />
                <span className="text-[9px] md:text-xs font-medium text-center leading-tight whitespace-nowrap">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Tab 1: Vector Reconciliation */}
          <TabsContent value="vector" className="mt-0">
            <div className="glass-card p-4 sm:p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                      <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Semantic Embeddings</h3>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="relative group">
                                <div className="absolute inset-0 bg-primary/40 rounded-full blur-md group-hover:bg-primary/60 transition-all duration-300" />
                                <Info className="w-5 h-5 text-primary relative z-10 cursor-pointer hover:text-pink-400 transition-colors" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="right" 
                              className="w-80 p-0 bg-card/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/50"
                              sideOffset={12}
                            >
                              <div className="p-4">
                                <h4 className="text-sm font-bold text-foreground mb-2">The Math: Cosine Similarity</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                  Sanyya converts text into high-dimensional vectors. To check if "IPA" and "Isopropyl Alcohol" are the same, we calculate the cosine of the angle between their vectors.
                                </p>
                                
                                {/* Vector Diagram */}
                                <div className="bg-secondary/50 rounded-lg p-3 mb-3 border border-border">
                                  <svg viewBox="0 0 200 100" className="w-full h-20">
                                    {/* Grid lines */}
                                    <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                    <line x1="20" y1="80" x2="20" y2="10" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
                                    
                                    {/* Vector A (primary) */}
                                    <line x1="20" y1="80" x2="160" y2="25" stroke="url(#vectorGradientA)" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="160" cy="25" r="4" fill="hsl(292, 84%, 57%)" />
                                    <text x="165" y="22" fill="hsl(292, 84%, 57%)" fontSize="9" fontWeight="600">"IPA"</text>
                                    
                                    {/* Vector B (pink) */}
                                    <line x1="20" y1="80" x2="170" y2="35" stroke="url(#vectorGradientB)" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="170" cy="35" r="4" fill="hsl(330, 70%, 55%)" />
                                    <text x="175" y="38" fill="hsl(330, 70%, 55%)" fontSize="9" fontWeight="600">"Isopropyl..."</text>
                                    
                                    {/* Angle arc */}
                                    <path d="M 50 65 A 30 30 0 0 1 55 58" fill="none" stroke="#10b981" strokeWidth="1.5" />
                                    <text x="58" y="62" fill="#10b981" fontSize="10" fontWeight="600">θ</text>
                                    
                                    {/* Gradients */}
                                    <defs>
                                      <linearGradient id="vectorGradientA" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(292, 84%, 57%)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="hsl(292, 84%, 57%)" />
                                      </linearGradient>
                                      <linearGradient id="vectorGradientB" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="hsl(330, 70%, 55%)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="hsl(330, 70%, 55%)" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                </div>
                                
                                {/* Formula */}
                                <div className="bg-secondary rounded-md px-3 py-2 mb-3 border border-border">
                                  <code className="text-emerald-400 font-mono text-sm">Similarity = cos(θ)</code>
                                </div>
                                
                                {/* Match confidence */}
                                <div className="flex items-center justify-between bg-emerald-500/10 rounded-md px-3 py-2 border border-emerald-500/20">
                                  <span className="text-xs text-muted-foreground">Match Confidence:</span>
                                  <span className="text-emerald-400 font-bold font-mono">99.2%</span>
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded hidden sm:inline">OpenAI text-embedding-3 + Vector DB</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Legacy tools fail on synonyms (e.g., 'Laptop' vs 'MacBook'). We project line items into vector space and calculate <span className="font-semibold text-primary">Cosine Similarity</span> to find matches based on meaning, not just spelling.
                  </p>
                </div>
                
                {/* Visual: Semantic Matching Demo */}
                <div className="bg-secondary/50 rounded-2xl p-4 sm:p-6 border border-border overflow-hidden">
                  {/* Document comparison header */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[10px] text-blue-400 font-medium">Purchase Order</span>
                    </div>
                    <span className="text-muted-foreground text-xs">vs</span>
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-[10px] text-amber-400 font-medium">Packing Slip</span>
                    </div>
                  </div>

                  {/* Main comparison visual */}
                  <div className="relative">
                    {/* Animated connection background */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-full h-24 relative">
                        {/* Animated pulse rings */}
                        <motion.div
                          className="absolute left-[15%] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-primary/30"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute right-[15%] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-pink-500/30"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>

                    {/* Terms with embedding visualization */}
                    <div className="flex items-center justify-between relative z-10">
                      {/* Term A - From PO */}
                      <motion.div 
                        className="text-center"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 flex flex-col items-center justify-center mb-2 shadow-lg shadow-primary/10 relative overflow-hidden">
                          {/* Shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                          <span className="text-sm md:text-base font-bold text-primary relative z-10">"Laptop"</span>
                          <span className="text-[9px] text-primary/60 mt-1 relative z-10">from PO #4921</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                          <div className="w-1 h-1 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: '0.1s' }} />
                          <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </motion.div>
                      
                      {/* Connection line */}
                      <div className="flex-1 mx-3 md:mx-6 relative">
                        {/* Animated data flow particles */}
                        <div className="absolute inset-0 flex items-center">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                            animate={{ x: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                            animate={{ x: ['100%', '0%'], opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                          />
                        </div>
                        
                        {/* Connection line */}
                        <div className="h-0.5 bg-gradient-to-r from-primary via-emerald-400 to-pink-500 rounded-full" />
                      </div>
                      
                      {/* Term B - From Packing Slip */}
                      <motion.div 
                        className="text-center"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-2 border-pink-500/40 flex flex-col items-center justify-center mb-2 shadow-lg shadow-pink-500/10 relative overflow-hidden">
                          {/* Shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                          />
                          <span className="text-sm md:text-base font-bold text-pink-400 relative z-10">"MacBook"</span>
                          <span className="text-[9px] text-pink-400/60 mt-1 relative z-10">from Slip #99-A</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <div className="w-1 h-1 rounded-full bg-pink-500/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-1 h-1 rounded-full bg-pink-500/70 animate-pulse" style={{ animationDelay: '0.1s' }} />
                          <div className="w-1 h-1 rounded-full bg-pink-500 animate-pulse" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Score badge - centered below */}
                    <motion.div 
                      initial={{ scale: 0, y: 10 }}
                      whileInView={{ scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="flex flex-col items-center mt-6"
                    >
                      <div className="bg-emerald-500 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-1.5">
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="text-emerald-200"
                        >
                          ✦
                        </motion.span>
                        98% Semantic Match
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1.5">Cosine Similarity Score</div>
                    </motion.div>
                  </div>

                  {/* Bottom insight */}
                  <motion.div 
                    className="mt-10 pt-4 border-t border-border/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-400">✓</span> Same meaning
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-400">✓</span> Different spelling
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-400">✓</span> Auto-matched
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Tab 2: Spatial OCR */}
          <TabsContent value="ocr" className="mt-0">
            <div className="glass-card p-4 sm:p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30 flex-shrink-0">
                      <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Zero-Shot Extraction</h3>
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded hidden sm:inline">LayoutLMv3 (Multi-modal Transformer)</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Stop building templates. Our AI uses <span className="font-semibold text-violet-400">spatial reasoning</span> to extract data from messy, unformatted invoices and crumpled packing slips instantly. It reads documents like a human.
                  </p>
                </div>
                
                {/* Visual: Invoice with bounding boxes */}
                <div className="bg-secondary/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border">
                  <div className="bg-card rounded-xl border border-border p-4 relative">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <span className="text-foreground font-semibold">INVOICE #4521</span>
                          <div className="absolute -inset-1 border-2 border-primary rounded bg-primary/10" />
                        </motion.div>
                        <span className="text-muted-foreground text-xs">Oct 15, 2024</span>
                      </div>
                      
                      <div className="border-t border-border pt-3">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="relative inline-block"
                        >
                          <span className="text-muted-foreground">Vendor: </span>
                          <span className="text-foreground">Acme Electronics</span>
                          <div className="absolute -inset-1 border-2 border-emerald-400 rounded bg-emerald-400/10" />
                        </motion.div>
                      </div>
                      
                      <div className="border-t border-border pt-3 space-y-2">
                        <div className="flex justify-between">
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-foreground relative"
                          >
                            Resistor Pack 10k Ohm x100
                            <div className="absolute -inset-1 border-2 border-amber-400 rounded bg-amber-400/10" />
                          </motion.span>
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-foreground font-medium relative"
                          >
                            $45.00
                            <div className="absolute -inset-1 border-2 border-violet-400 rounded bg-violet-400/10" />
                          </motion.span>
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-3 flex justify-end">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                          className="text-foreground font-bold relative"
                        >
                          Total: $45.00
                          <div className="absolute -inset-1 border-2 border-rose-400 rounded bg-rose-400/10" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {[
                      { color: 'bg-primary', label: 'Invoice #' },
                      { color: 'bg-emerald-400', label: 'Vendor' },
                      { color: 'bg-amber-400', label: 'Line Item' },
                      { color: 'bg-violet-400', label: 'Amount' },
                    ].map((item) => (
                      <span key={item.label} className="flex items-center gap-1 text-xs text-muted-foreground">
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
            <div className="glass-card p-4 sm:p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
                      <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">PWA / Edge Computing</h3>
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded hidden sm:inline">WebAssembly (WASM) + Client-Side CV</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Zero friction for the warehouse. Our Progressive Web App captures packing slip photos and performs image de-skewing <span className="font-semibold text-cyan-400">directly on the device</span>. No App Store downloads, no latency.
                  </p>
                </div>
                
                {/* Visual: Phone with camera interface showing packing slip */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-b from-primary/20 to-transparent rounded-[4rem] blur-2xl" />
                    <div className="relative w-52 h-[420px] bg-gradient-to-b from-card to-secondary rounded-[2.5rem] p-3 shadow-2xl border border-border">
                      <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden flex flex-col">
                        {/* Camera viewfinder */}
                        <div className="flex-1 relative bg-gradient-to-b from-card to-secondary flex items-center justify-center p-4">
                          <motion.div 
                            className="w-full h-full border-2 border-primary rounded-xl relative overflow-hidden bg-muted/5"
                            animate={{ borderColor: ['hsl(292, 84%, 57%)', 'hsl(330, 70%, 55%)', 'hsl(292, 84%, 57%)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {/* Corner brackets */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br" />
                            
                            {/* Packing slip preview */}
                            <div className="absolute inset-3 bg-white rounded-lg shadow-lg p-3">
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
                              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                              animate={{ top: ['0%', '100%', '0%'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Bottom UI */}
                        <div className="p-4 bg-secondary/50 space-y-3">
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-500 rounded-xl px-4 py-3 flex items-center justify-center gap-3"
                          >
                            <div className="w-8 h-8 bg-emerald-400/30 rounded-lg flex items-center justify-center">
                              <Camera className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-semibold text-sm">
                              Packing Slip Captured
                            </span>
                          </motion.div>
                          <div className="text-[10px] text-muted-foreground text-center">3 items matched to PO #4521</div>
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
            <div className="glass-card p-4 sm:p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center shadow-lg shadow-rose-500/30 flex-shrink-0">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Unit Economic Guardrails</h3>
                      <span className="text-[10px] md:text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded hidden sm:inline">Historical Variance Analysis</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    We memorize your price history. If a vendor quietly raises the price of a component by 10%, or if shipping costs spike, the system <span className="font-semibold text-rose-400">flags the variance</span> for CFO review before payment.
                  </p>
                </div>
                
                {/* Visual: Price chart with alert */}
                <div className="bg-secondary/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Resistor 10k Ohm - Price History</span>
                    <span className="text-xs text-muted-foreground">Last 6 months</span>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-40 relative">
                    <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 30, 60, 90, 120].map((y) => (
                        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="hsl(0 0% 20%)" strokeWidth="1" />
                      ))}
                      
                      {/* Normal price line */}
                      <motion.path
                        d="M 0 80 L 50 78 L 100 82 L 150 79 L 200 81 L 220 80"
                        fill="none"
                        stroke="hsl(292, 84%, 57%)"
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
                      className="absolute top-2 right-4 flex items-center gap-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      +12% Variance
                    </motion.div>
                    
                    {/* Price labels */}
                    <div className="absolute left-0 top-0 text-xs text-muted-foreground">$0.50</div>
                    <div className="absolute left-0 bottom-0 text-xs text-muted-foreground">$0.40</div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="w-3 h-0.5 bg-primary rounded" /> Historical Avg
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
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
