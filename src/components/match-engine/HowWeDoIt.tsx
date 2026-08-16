import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  Smartphone,
  Shield,
  Sparkles,
  AlertTriangle,
  Camera,
  Check,
  Info,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export function HowWeDoIt() {
  return (
    <Section id="how-we-do-it">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge tone="brand">
            <Sparkles className="size-3" /> Deep Dive
          </SectionBadge>
          <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl md:text-6xl">
            How we do it
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            The technology behind the magic. Semantic search, spatial OCR, and edge computing,
            working together.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-5xl">
        <Tabs defaultValue="vector" className="w-full">
          <TabsList className="scrollbar-hide mb-6 flex h-auto w-full gap-2 overflow-x-auto bg-transparent p-0 md:mb-8 md:grid md:grid-cols-4">
            {[
              { value: "vector", icon: Brain, label: "Vector Match" },
              { value: "ocr", icon: Eye, label: "Spatial OCR" },
              { value: "mobile", icon: Smartphone, label: "Mobile Edge" },
              { value: "anomaly", icon: Shield, label: "Anomaly" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex h-auto min-w-[80px] flex-shrink-0 flex-col items-center gap-1.5 rounded-xl border border-border bg-card/50 p-3 text-foreground transition-all hover:border-[hsl(268_70%_52%/0.3)] data-[state=active]:border-transparent data-[state=active]:bg-brand-gradient data-[state=active]:shadow-[0_1px_2px_hsl(220_43%_11%/0.06)] md:flex-shrink md:p-4"
              >
                <tab.icon className="size-5" />
                <span className="text-[11px] font-medium md:text-xs">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Vector */}
          <TabsContent value="vector" className="mt-0">
            <Panel>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <PanelHeading
                    icon={<Brain className="size-5 text-white md:size-6" />}
                    iconBg="bg-brand-gradient shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]"
                    title="Semantic Embeddings"
                    sub="OpenAI text-embedding-3 + Vector DB"
                    extra={
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="group relative">
                              <div className="absolute inset-0 rounded-full bg-[hsl(268_70%_52%/0.4)] blur-md transition group-hover:bg-[hsl(268_70%_52%/0.6)]" />
                              <Info className="relative z-10 size-5 cursor-pointer text-[hsl(268_70%_44%)] transition-colors hover:text-[hsl(190_85%_32%)]" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent
                            side="right"
                            sideOffset={12}
                            className="w-80 border border-border bg-card/95 p-0 shadow-2xl backdrop-blur-xl"
                          >
                            <div className="p-4">
                              <h4 className="mb-2 text-sm font-bold text-foreground">
                                The math: cosine similarity
                              </h4>
                              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                                Sanyya converts text into high-dimensional vectors. To check if
                                "IPA" and "Isopropyl Alcohol" are the same, we calculate the cosine
                                of the angle between their vectors.
                              </p>
                              <div className="mb-3 rounded-lg border border-border bg-secondary/50 p-3">
                                <svg viewBox="0 0 200 100" className="h-20 w-full">
                                  <line
                                    x1="20"
                                    y1="80"
                                    x2="180"
                                    y2="80"
                                    stroke="hsl(0 0% 40% / 0.3)"
                                  />
                                  <line
                                    x1="20"
                                    y1="80"
                                    x2="20"
                                    y2="10"
                                    stroke="hsl(0 0% 40% / 0.3)"
                                  />
                                  <line
                                    x1="20"
                                    y1="80"
                                    x2="160"
                                    y2="25"
                                    stroke="url(#vA)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                  <circle cx="160" cy="25" r="4" fill="hsl(162 84% 57%)" />
                                  <text
                                    x="165"
                                    y="22"
                                    fill="hsl(162 84% 75%)"
                                    fontSize="9"
                                    fontWeight="600"
                                  >
                                    "IPA"
                                  </text>
                                  <line
                                    x1="20"
                                    y1="80"
                                    x2="170"
                                    y2="35"
                                    stroke="url(#vB)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                  <circle cx="170" cy="35" r="4" fill="hsl(174 72% 55%)" />
                                  <text
                                    x="175"
                                    y="38"
                                    fill="hsl(174 72% 75%)"
                                    fontSize="9"
                                    fontWeight="600"
                                  >
                                    "Isopropyl..."
                                  </text>
                                  <path
                                    d="M 50 65 A 30 30 0 0 1 55 58"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="1.5"
                                  />
                                  <text x="58" y="62" fill="#10b981" fontSize="10" fontWeight="600">
                                    θ
                                  </text>
                                  <defs>
                                    <linearGradient id="vA" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop
                                        offset="0%"
                                        stopColor="hsl(162 84% 57%)"
                                        stopOpacity="0.3"
                                      />
                                      <stop offset="100%" stopColor="hsl(162 84% 57%)" />
                                    </linearGradient>
                                    <linearGradient id="vB" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop
                                        offset="0%"
                                        stopColor="hsl(174 72% 55%)"
                                        stopOpacity="0.3"
                                      />
                                      <stop offset="100%" stopColor="hsl(174 72% 55%)" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="mb-3 rounded-md border border-border bg-secondary px-3 py-2">
                                <code className="tabular-nums text-sm text-violet-400">
                                  Similarity = cos(θ)
                                </code>
                              </div>
                              <div className="flex items-center justify-between rounded-md border border-violet-500/20 bg-violet-500/10 px-3 py-2">
                                <span className="text-xs text-muted-foreground">
                                  Match Confidence:
                                </span>
                                <span className="tabular-nums text-sm font-bold text-violet-400">
                                  99.2%
                                </span>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                    Legacy tools fail on synonyms (e.g., 'Laptop' vs 'MacBook'). We project line
                    items into vector space and calculate{" "}
                    <span className="font-semibold text-[hsl(268_70%_44%)]">cosine similarity</span>{" "}
                    to find matches based on meaning, not just spelling.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-2">
                    <Term label='"Laptop"' tone="brand" />
                    <div className="relative mx-2 flex-1">
                      <div className="h-1 rounded-full bg-gradient-to-r from-[hsl(268_70%_52%)] via-violet-400 to-[hsl(272_72%_62%)]" />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-violet-500 px-3 py-1 text-[11px] font-bold text-white shadow-lg"
                      >
                        98% Match
                      </motion.div>
                    </div>
                    <Term label='"MacBook"' tone="pink" />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded-xl border border-border bg-card">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute size-2 rounded-full ${
                          i < 7 ? "bg-[hsl(268_70%_52%)]" : "bg-[hsl(272_72%_62%)]"
                        }`}
                        style={{
                          left: `${15 + ((i * 41) % 70)}%`,
                          top: `${15 + ((i * 23) % 60)}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.7, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded bg-card/80 px-2 py-1 text-xs text-muted-foreground">
                        Vector Space
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </TabsContent>

          {/* OCR */}
          <TabsContent value="ocr" className="mt-0">
            <Panel>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <PanelHeading
                    icon={<Eye className="size-5 text-white md:size-6" />}
                    iconBg="bg-gradient-to-br from-violet-500 to-violet-600 shadow-[0_10px_30px_-10px_rgb(139_92_246/0.6)]"
                    title="Zero-Shot Extraction"
                    sub="LayoutLMv3 (Multi-modal Transformer)"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                    Stop building templates. Our AI uses{" "}
                    <span className="font-semibold text-violet-400">spatial reasoning</span> to
                    extract data from messy invoices and crumpled packing slips instantly. It reads
                    documents like a human.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="relative">
                          <span className="font-semibold text-foreground">INVOICE #4521</span>
                          <div className="absolute -inset-1 rounded border-2 border-[hsl(268_70%_52%)] bg-[hsl(268_70%_52%/0.1)]" />
                        </div>
                        <span className="text-xs text-muted-foreground">Oct 15, 2024</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="relative inline-block">
                          <span className="text-muted-foreground">Vendor: </span>
                          <span className="text-foreground">Acme Electronics</span>
                          <div className="absolute -inset-1 rounded border-2 border-violet-400 bg-violet-400/10" />
                        </div>
                      </div>
                      <div className="space-y-2 border-t border-border pt-3">
                        <div className="flex justify-between">
                          <span className="relative text-foreground">
                            Resistor Pack 10k Ohm x100
                            <div className="absolute -inset-1 rounded border-2 border-amber-400 bg-amber-400/10" />
                          </span>
                          <span className="relative font-medium text-foreground">
                            $45.00
                            <div className="absolute -inset-1 rounded border-2 border-violet-400 bg-violet-400/10" />
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end border-t border-border pt-3">
                        <span className="relative font-bold text-foreground">
                          Total: $45.00
                          <div className="absolute -inset-1 rounded border-2 border-rose-400 bg-rose-400/10" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {[
                      { color: "bg-[hsl(268_70%_52%)]", label: "Invoice #" },
                      { color: "bg-violet-400", label: "Vendor" },
                      { color: "bg-amber-400", label: "Line Item" },
                      { color: "bg-violet-400", label: "Amount" },
                    ].map((i) => (
                      <span
                        key={i.label}
                        className="flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <span className={`size-2 rounded-full ${i.color}`} />
                        {i.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </TabsContent>

          {/* Mobile */}
          <TabsContent value="mobile" className="mt-0">
            <Panel>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <PanelHeading
                    icon={<Smartphone className="size-5 text-white md:size-6" />}
                    iconBg="bg-gradient-to-br from-violet-500 to-violet-600 shadow-[0_10px_30px_-10px_rgb(6_182_212/0.6)]"
                    title="PWA / Edge Computing"
                    sub="WebAssembly (WASM) + Client-Side CV"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                    Zero friction for the warehouse. Our PWA captures packing slip photos and
                    performs image de-skewing{" "}
                    <span className="font-semibold text-violet-400">directly on the device</span>.
                    No App Store downloads, no latency.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 rounded-[4rem] bg-gradient-to-b from-[hsl(268_70%_52%/0.2)] to-transparent blur-2xl" />
                    <div className="relative h-[420px] w-52 rounded-[2.5rem] border border-border bg-gradient-to-b from-card to-secondary p-3 shadow-2xl">
                      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-background">
                        <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-card to-secondary p-4">
                          <motion.div
                            className="relative h-full w-full overflow-hidden rounded-xl border-2 bg-muted/5"
                            animate={{
                              borderColor: [
                                "hsl(162 84% 57%)",
                                "hsl(174 72% 55%)",
                                "hsl(162 84% 57%)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="absolute left-0 top-0 size-6 rounded-tl border-l-2 border-t-2 border-[hsl(268_70%_52%)]" />
                            <div className="absolute right-0 top-0 size-6 rounded-tr border-r-2 border-t-2 border-[hsl(268_70%_52%)]" />
                            <div className="absolute bottom-0 left-0 size-6 rounded-bl border-b-2 border-l-2 border-[hsl(268_70%_52%)]" />
                            <div className="absolute bottom-0 right-0 size-6 rounded-br border-b-2 border-r-2 border-[hsl(268_70%_52%)]" />

                            <div className="absolute inset-3 rotate-1 rounded-lg bg-card p-3 shadow-lg">
                              <div className="mb-2 text-[8px] font-bold text-slate-800">
                                Packing slip
                              </div>
                              <div className="space-y-1.5">
                                <div className="h-1.5 w-3/4 rounded bg-muted-foreground/20" />
                                <div className="h-1.5 w-1/2 rounded bg-muted-foreground/20" />
                                <div className="mt-2 border-t border-border pt-1.5">
                                  <div className="flex justify-between text-[6px] text-muted-foreground">
                                    <span>Item</span>
                                    <span>Qty</span>
                                  </div>
                                  <div className="mt-1 space-y-1">
                                    {[16, 14, 12].map((w) => (
                                      <div key={w} className="flex justify-between">
                                        <div
                                          className="h-1 rounded bg-muted-foreground/30"
                                          style={{ width: `${w * 4}px` }}
                                        />
                                        <div className="h-1 w-4 rounded bg-muted-foreground/30" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-violet-500 shadow-lg"
                              >
                                <Check className="size-3 text-white" />
                              </motion.div>
                            </div>
                            <motion.div
                              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(268_70%_52%/0.5)] to-transparent"
                              animate={{ top: ["0%", "100%", "0%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </motion.div>
                        </div>
                        <div className="space-y-2 bg-secondary/50 p-4">
                          <div className="rounded-xl bg-violet-500 py-3 text-center">
                            <span className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                              <Camera className="size-4" />
                              Packing Slip Captured
                            </span>
                          </div>
                          <div className="text-center text-[10px] text-muted-foreground">
                            3 items matched to PO #4521
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </TabsContent>

          {/* Anomaly */}
          <TabsContent value="anomaly" className="mt-0">
            <Panel>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <PanelHeading
                    icon={<Shield className="size-5 text-white md:size-6" />}
                    iconBg="bg-gradient-to-br from-rose-500 to-orange-600 shadow-[0_10px_30px_-10px_rgb(244_63_94/0.6)]"
                    title="Unit Economic Guardrails"
                    sub="Historical Variance Analysis"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                    We memorize your price history. If a vendor quietly raises a component price by
                    10%, or if shipping spikes, the system{" "}
                    <span className="font-semibold text-rose-400">flags the variance</span> for CFO
                    review before payment.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Resistor 10k Ohm, Price History
                    </span>
                    <span className="text-xs text-muted-foreground">Last 6 months</span>
                  </div>
                  <div className="relative h-40">
                    <svg className="h-full w-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                      {[0, 30, 60, 90, 120].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="300"
                          y2={y}
                          stroke="hsl(0 0% 30%)"
                          strokeWidth="1"
                        />
                      ))}
                      <motion.path
                        d="M 0 80 L 50 78 L 100 82 L 150 79 L 200 81 L 220 80"
                        fill="none"
                        stroke="hsl(162 84% 57%)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
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
                      <motion.circle
                        cx="250"
                        cy="40"
                        r="8"
                        fill="#ef4444"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, type: "spring" }}
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 }}
                      className="absolute right-4 top-2 flex items-center gap-1 rounded-md border border-red-500/20 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-400"
                    >
                      <AlertTriangle className="size-3" /> +12% Variance
                    </motion.div>
                    <div className="absolute left-0 top-0 text-xs text-muted-foreground">$0.50</div>
                    <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">
                      $0.40
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-4 border-t border-border pt-4">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="h-0.5 w-3 rounded bg-[hsl(268_70%_52%)]" /> Historical Avg
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span className="h-0.5 w-3 rounded bg-red-500" /> Anomaly
                    </span>
                  </div>
                </div>
              </div>
            </Panel>
          </TabsContent>
        </Tabs>
      </Reveal>
    </Section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="glass rounded-2xl p-5 sm:p-6 md:p-10">{children}</div>;
}

function PanelHeading({
  icon,
  iconBg,
  title,
  sub,
  extra,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  sub: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid size-10 flex-shrink-0 place-items-center rounded-xl md:size-12 ${iconBg}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-foreground sm:text-xl md:text-2xl">{title}</h3>
          {extra}
        </div>
        <span className="hidden rounded bg-secondary px-2 py-0.5 tabular-nums text-[10px] text-muted-foreground sm:inline md:text-xs">
          {sub}
        </span>
      </div>
    </div>
  );
}

function Term({ label, tone }: { label: string; tone: "brand" | "pink" }) {
  const styles =
    tone === "brand"
      ? "bg-[hsl(268_70%_52%/0.1)] border-[hsl(268_70%_52%/0.3)] text-[hsl(268_70%_44%)]"
      : "bg-[hsl(272_72%_62%/0.1)] border-[hsl(272_72%_62%/0.3)] text-[hsl(190_85%_32%)]";
  return (
    <div className="flex flex-shrink-0 flex-col items-center">
      <div className={`grid size-16 place-items-center rounded-xl border-2 md:size-20 ${styles}`}>
        <span className="text-xs font-semibold md:text-sm">{label}</span>
      </div>
    </div>
  );
}
