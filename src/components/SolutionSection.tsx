import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Smartphone, Scan, Sparkles, Check, Cpu } from "lucide-react";

// Hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

// Visual 1: Vector Search Graph (High-Science Example)
const VectorVisual = () => {
  // Fixed positions for floating particles (avoiding badge area at top-center)
  const particles = [
    { left: 15, top: 20 }, { left: 85, top: 18 }, { left: 10, top: 55 },
    { left: 30, top: 75 }, { left: 55, top: 85 }, { left: 75, top: 60 },
    { left: 90, top: 45 }, { left: 20, top: 80 },
  ];

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96">
      {/* Glass card container */}
      <div className="absolute inset-0 bg-card/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-border shadow-xl overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(292 84% 57% / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(292 84% 57% / 0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating data points */}
        {particles.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-blue-400/60' : 'bg-violet-400/60'}`}
            style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2 + (i % 2),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Point A: Doxorubicin - positioned precisely */}
        <div className="absolute left-[20%] top-[45%]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative"
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-blue-400/50"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Main node */}
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50" />
            {/* Label - positioned above */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm text-foreground text-[10px] md:text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-mono border border-blue-500/40 shadow-lg">
              "Doxorubicin"
            </div>
          </motion.div>
        </div>

        {/* Point B: Adriamycin - positioned precisely */}
        <div className="absolute right-[20%] bottom-[25%]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="relative"
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-violet-400/50"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            {/* Main node */}
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg shadow-violet-500/50" />
            {/* Label - positioned below */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm text-foreground text-[10px] md:text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-mono border border-violet-500/40 shadow-lg">
              "Adriamycin"
            </div>
          </motion.div>
        </div>

        {/* Connecting Line with bidirectional particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="glow2">
              <feGaussianBlur stdDeviation="1" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Glow background line */}
          <motion.line
            x1="24" y1="48"
            x2="76" y2="72"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.3"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Main line */}
          <motion.line
            x1="24" y1="48"
            x2="76" y2="72"
            stroke="url(#lineGrad)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#glow2)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          
          {/* Bidirectional particles - going right */}
          <motion.circle
            r="1"
            fill="#60a5fa"
            filter="url(#glow2)"
            animate={{ cx: [24, 76, 24], cy: [48, 72, 48] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="0.8"
            fill="#c084fc"
            filter="url(#glow2)"
            animate={{ cx: [24, 76, 24], cy: [48, 72, 48] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          
          {/* Bidirectional particles - going left */}
          <motion.circle
            r="1"
            fill="#a78bfa"
            filter="url(#glow2)"
            animate={{ cx: [76, 24, 76], cy: [72, 48, 72] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.circle
            r="0.8"
            fill="#818cf8"
            filter="url(#glow2)"
            animate={{ cx: [76, 24, 76], cy: [72, 48, 72] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Similarity Badge - positioned above the line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
          className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
        >
          {/* Badge glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 rounded-full blur-lg"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Badge */}
          <div className="relative bg-gradient-to-r from-primary to-pink-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/90"
            >
              ✦
            </motion.span>
            <span className="text-sm font-semibold">Match</span>
            <span className="text-base font-bold">(0.99)</span>
          </div>
        </motion.div>

        {/* Subtle corner indicators */}
        <div className="absolute bottom-2 left-3 text-[7px] text-muted-foreground/40 font-mono">
          dim: 1536
        </div>
        <div className="absolute bottom-2 right-3 text-[7px] text-muted-foreground/40 font-mono">
          cosine similarity
        </div>
      </div>
    </div>
  );
};

// Visual 2: Mobile PWA Phone Mockup
const MobileVisual = () => (
  <div className="relative w-full h-72 sm:h-80 md:h-96 flex items-center justify-center">
    {/* Phone mockup */}
    <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="relative">
      <div className="relative w-40 sm:w-52 h-[320px] sm:h-[420px] bg-gradient-to-b from-card to-secondary rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl border border-border">
        <div className="w-full h-full bg-background rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-background rounded-b-2xl z-10" />

          {/* Camera viewfinder */}
          <div className="h-full bg-gradient-to-b from-card to-secondary relative">
            {/* Scan line */}
            <motion.div
              className="absolute inset-x-5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              animate={{ top: ["18%", "72%", "18%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Packing Slip Document */}
            <div className="absolute inset-8 top-14 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-5 shadow-lg w-32"
              >
                <div className="space-y-2">
                  <div className="h-2.5 w-20 bg-slate-300 rounded" />
                  <div className="h-1.5 w-full bg-slate-200 rounded" />
                  <div className="h-1.5 w-24 bg-slate-200 rounded" />
                  <div className="h-1.5 w-full bg-slate-200 rounded" />
                  <div className="h-1.5 w-16 bg-slate-200 rounded" />
                  <div className="flex gap-1.5 mt-3">
                    <div className="h-4 w-4 bg-emerald-400 rounded" />
                    <div className="h-1.5 w-12 bg-slate-300 rounded mt-1" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-12 left-5 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute top-12 right-5 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <div className="absolute bottom-24 left-5 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            <div className="absolute bottom-24 right-5 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

            {/* Success Toast */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 left-4 right-4"
            >
              <div className="bg-emerald-500 rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg">
                <Check className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-semibold">Matched: PO #8821</span>
              </div>
            </motion.div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 inset-x-0 h-10 bg-background flex items-center justify-center">
              <div className="w-28 h-1 bg-muted rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* WASM Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-8 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
      >
        <Cpu className="w-4 h-4" />
        WASM
      </motion.div>
    </motion.div>
  </div>
);

// Visual 3: OCR Invoice Processing
const OCRVisual = () => (
  <div className="relative w-full h-72 sm:h-80 md:h-96 flex items-center justify-center p-4 sm:p-6">
    {/* Invoice mockup with bounding boxes */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative bg-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-md border border-border"
    >
      {/* Invoice header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="h-4 w-28 bg-foreground rounded mb-2" />
          <div className="h-2.5 w-20 bg-muted rounded" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-2 border-2 border-primary rounded-lg animate-pulse" />
          <div className="bg-secondary px-4 py-2 rounded-lg">
            <span className="text-sm font-mono text-foreground">INV-2024-001</span>
          </div>
        </motion.div>
      </div>

      {/* Vendor info with bounding box */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative mb-6"
      >
        <div className="absolute -inset-2 border-2 border-pink-500 rounded-lg animate-pulse" />
        <div className="space-y-1.5 p-2">
          <div className="h-2.5 w-40 bg-muted rounded" />
          <div className="h-2 w-36 bg-muted-foreground/20 rounded" />
          <div className="h-2 w-32 bg-muted-foreground/20 rounded" />
        </div>
      </motion.div>

      {/* Line items */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <div className="h-2.5 w-24 bg-muted-foreground/20 rounded" />
          <div className="h-2.5 w-16 bg-muted-foreground/20 rounded" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-2 border-2 border-primary rounded-lg animate-pulse" />
          <div className="flex justify-between p-2">
            <div className="h-2.5 w-28 bg-muted rounded" />
            <div className="h-2.5 w-20 bg-emerald-500 rounded" />
          </div>
        </motion.div>
        <div className="flex justify-between">
          <div className="h-2.5 w-32 bg-muted-foreground/20 rounded" />
          <div className="h-2.5 w-18 bg-muted-foreground/20 rounded" />
        </div>
      </div>

      {/* Total with bounding box */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="relative border-t border-border pt-4"
      >
        <div className="absolute -inset-2 border-2 border-pink-500 rounded-lg animate-pulse" />
        <div className="flex justify-between items-center p-2">
          <div className="h-3.5 w-14 bg-muted rounded" />
          <div className="h-3.5 w-24 bg-foreground rounded" />
        </div>
      </motion.div>

      {/* Legend */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-primary rounded" />
          <span className="text-xs text-muted-foreground">Key Fields</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-pink-500 rounded" />
          <span className="text-xs text-muted-foreground">Entities</span>
        </div>
      </div>
    </motion.div>
  </div>
);

// Checklist Item Component
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-emerald-400" />
    </div>
    <span className="text-muted-foreground">{children}</span>
  </div>
);

// Feature Row Component with Parallax (disabled on mobile)
const FeatureRow = ({
  badge,
  badgeColor,
  headline,
  body,
  checklist,
  visual,
  reversed = false,
}: {
  badge: string;
  badgeColor: string;
  headline: string;
  body: string;
  checklist: string[];
  visual: React.ReactNode;
  reversed?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Disable parallax on mobile to prevent layout issues
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${reversed ? "md:flex-row-reverse" : ""}`}
    >
      {/* Text Column */}
      <div className={`space-y-4 md:space-y-6 ${reversed ? "md:order-2" : ""}`}>
        <span className={`inline-flex items-center px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium ${badgeColor}`}>
          {badge}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">{headline}</h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{body}</p>
        <div className="space-y-3 pt-2">
          {checklist.map((item, i) => (
            <CheckItem key={i}>{item}</CheckItem>
          ))}
        </div>
      </div>

      {/* Visual Column - no parallax on mobile */}
      <motion.div style={{ y: isMobile ? 0 : y }} className={reversed ? "md:order-1" : ""}>
        {visual}
      </motion.div>
    </motion.div>
  );
};

const SolutionSection = () => {
  return (
    <section id="solution" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-primary/10 via-pink-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4"
          >
            <Sparkles className="w-3 h-3" />
            How It Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Sanyya Creates the Digital Tether.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground px-2">
            We digitally link your Purchase Order, Invoice, and Packing Slip into one verified record—eliminating Phantom Inventory and creating an audit-ready paper trail.
          </p>

          {/* Connected Documents Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="relative bg-secondary/30 rounded-2xl border border-emerald-500/30 p-4 sm:p-6 md:p-8">
              {/* Success glow */}
              <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl" />
              
              {/* The three documents connected - stacked on mobile */}
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 md:gap-4">
                {/* SVG Connection Lines - Animated (hidden on mobile) */}
                <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="tether-gradient-1" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="hsl(142, 76%, 36%)" />
                      <stop offset="100%" stopColor="hsl(142, 76%, 46%)" />
                    </linearGradient>
                  </defs>
                  {/* Line from PO to GRN */}
                  <motion.line
                    x1="24%"
                    y1="50%"
                    x2="36%"
                    y2="50%"
                    stroke="url(#tether-gradient-1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Line from GRN to Invoice */}
                  <motion.line
                    x1="64%"
                    y1="50%"
                    x2="76%"
                    y2="50%"
                    stroke="url(#tether-gradient-1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  />
                </svg>

                {/* PO Document */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-emerald-500/30 shadow-lg z-10"
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
                  </div>
                </motion.div>

                {/* Check 1 - Animated */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                  className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/50 z-10 flex-shrink-0"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </motion.div>

                {/* Packing Slip Document */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-emerald-500/30 shadow-lg relative z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, type: "spring" }}
                    className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold"
                  >
                    LINKED
                  </motion.div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-violet-400">GRN</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">Packing Slip</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-muted rounded" />
                    <div className="h-1.5 w-1/2 bg-muted rounded" />
                  </div>
                </motion.div>

                {/* Check 2 - Animated */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 300 }}
                  className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/50 z-10 flex-shrink-0"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </motion.div>

                {/* Invoice Document */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="w-full sm:flex-1 bg-card rounded-xl p-3 md:p-4 border border-emerald-500/30 shadow-lg z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-amber-400">INV</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">Invoice</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-muted rounded" />
                    <div className="h-1.5 w-2/3 bg-muted rounded" />
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs text-emerald-400 mt-4 font-medium">
                ✓ Digitally tethered — audit-ready
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Rows */}
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
          {/* Row 1: Centralize */}
          <FeatureRow
            badge="Step 1: Centralize"
            badgeColor="bg-primary/10 border border-primary/20 text-primary"
            headline="Ingest & Normalize."
            body="Upload your POs, Invoices, and Packing Slips in any format. Sanyya ingests raw data from PDF, CSV, or Image and normalizes it into a single source of truth—creating the foundation for a digital tether."
            checklist={["Works with any file format", "No IT integration needed"]}
            visual={<VectorVisual />}
          />

          {/* Row 2: Verify */}
          <FeatureRow
            badge="Step 2: Verify"
            badgeColor="bg-violet-500/10 border border-violet-500/20 text-violet-400"
            headline="Tether the Packing Slip."
            body="Our mobile PWA lets LabOps snap Packing Slips at the dock—instantly linking GRNs to the corresponding PO and Invoice. This creates a verified, digital proof of delivery that lives with the financial record."
            checklist={["Digitally links GRN to PO & Invoice", "Eliminates Phantom Inventory"]}
            visual={<MobileVisual />}
            reversed
          />

          {/* Row 3: Resolve */}
          <FeatureRow
            badge="Step 3: Resolve"
            badgeColor="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            headline="Resolve with Confidence."
            body="We present a fully reconciled 'decision package'—PO, Packing Slip, and Invoice digitally tethered side-by-side. Approve with certainty and hand off audit-ready data to your finance team."
            checklist={["360° Audit View", "Ready-to-book data"]}
            visual={<OCRVisual />}
          />
        </div>

      </div>

      {/* Transition to next section - positioned to overlap section boundaries */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-20 py-4 flex flex-col items-center"
      >
        {/* Vertical gradient line top */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-primary/50" />
        
        {/* Animated badge */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="my-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm"
        >
          See it in action
          <span className="text-lg">↓</span>
        </motion.div>
        
        {/* Vertical gradient line bottom */}
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 via-border to-transparent" />
      </motion.div>
    </section>
  );
};

export default SolutionSection;
