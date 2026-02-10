import { motion } from "framer-motion";
import { FileText, Package, Receipt, CreditCard, Cloud, Database } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import SanyyaLogo from "./SanyyaLogo";

// Toggle to show debug anchor circles
const DEBUG = false;

interface NodePosition {
  x: number;
  y: number;
}

interface PathData {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  pathD: string;
}

interface DiagramPaths {
  inputPaths: PathData[];
  outputPaths: PathData[];
  svgWidth: number;
  svgHeight: number;
}

const CombinedMatchVisual = () => {
  const inputs = [
    { icon: FileText, label: "PO" },
    { icon: Package, label: "GRN" },
    { icon: Receipt, label: "Invoice" },
  ];

  const outputs = [
    { icon: CreditCard, label: "Ramp" },
    { icon: Cloud, label: "QBO" },
    { icon: Database, label: "NetSuite" },
  ];

  // Refs for shared SVG overlay and container
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Refs for nodes - attached to the icon squares only (initialize with correct length)
  const inputRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const outputRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const centerCardRef = useRef<HTMLDivElement>(null);

  // State for calculated paths
  const [diagramPaths, setDiagramPaths] = useState<DiagramPaths>({
    inputPaths: [],
    outputPaths: [],
    svgWidth: 0,
    svgHeight: 0,
  });

  // Generate smooth bezier path with 0.5 curvature for symmetry
  const generateBezierPath = (
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): string => {
    const cpx = startX + (endX - startX) * 0.5;
    return `M ${startX} ${startY} C ${cpx} ${startY}, ${cpx} ${endY}, ${endX} ${endY}`;
  };

  // Calculate positions dynamically relative to shared SVG
  const calculatePositions = useCallback(() => {
    if (!svgRef.current || !centerCardRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const centerRect = centerCardRef.current.getBoundingClientRect();

    // Center-left and center-right of the Sanyya card
    const centerLeftX = centerRect.left - svgRect.left;
    const centerLeftY = centerRect.top + centerRect.height / 2 - svgRect.top;
    const centerRightX = centerRect.right - svgRect.left;
    const centerRightY = centerLeftY;

    // Calculate input paths (from input icons to center-left of card)
    const inputPaths: PathData[] = inputRefs.current.map((ref, idx) => {
      if (!ref) {
        console.warn(`Input ref ${idx} is null`);
        return { startX: 0, startY: 0, endX: 0, endY: 0, pathD: "" };
      }

      const rect = ref.getBoundingClientRect();
      // Center-right of input icon square
      const startX = rect.right - svgRect.left;
      const startY = rect.top + rect.height / 2 - svgRect.top;
      // End at center-left of card
      const endX = centerLeftX;
      const endY = centerLeftY;
      
      const pathD = generateBezierPath(startX, startY, endX, endY);

      return { startX, startY, endX, endY, pathD };
    });

    // Calculate output paths (from center-right of card to output icons)
    const outputPaths: PathData[] = outputRefs.current.map((ref, idx) => {
      if (!ref) {
        console.warn(`Output ref ${idx} is null`);
        return { startX: 0, startY: 0, endX: 0, endY: 0, pathD: "" };
      }

      const rect = ref.getBoundingClientRect();
      // Start at center-right of card
      const startX = centerRightX;
      const startY = centerRightY;
      // Center-left of output icon square
      const endX = rect.left - svgRect.left;
      const endY = rect.top + rect.height / 2 - svgRect.top;

      const pathD = generateBezierPath(startX, startY, endX, endY);

      return { startX, startY, endX, endY, pathD };
    });

    setDiagramPaths({
      inputPaths,
      outputPaths,
      svgWidth: svgRect.width,
      svgHeight: svgRect.height,
    });
  }, []);

  // Recalculate on mount, resize, and transforms
  useEffect(() => {
    // RAF settle loop to account for Framer Motion entrance transforms
    let rafId = 0;
    const start = performance.now();
    const settle = () => {
      calculatePositions();
      // Extend settle time to 2 seconds to ensure all Framer Motion animations complete
      if (performance.now() - start < 2000) rafId = requestAnimationFrame(settle);
    };
    rafId = requestAnimationFrame(settle);

    // Also recalculate after a delay to catch any late-mounting refs
    const timeoutId = setTimeout(() => {
      calculatePositions();
    }, 500);

    const handleResize = () => requestAnimationFrame(calculatePositions);
    window.addEventListener("resize", handleResize);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => requestAnimationFrame(calculatePositions));

      const elements: Element[] = [
        desktopContainerRef.current,
        svgRef.current,
        centerCardRef.current,
        ...inputRefs.current,
        ...outputRefs.current,
      ].filter(Boolean) as Element[];

      elements.forEach((el) => ro?.observe(el));
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      ro?.disconnect();
    };
  }, [calculatePositions]);

  return (
    <div className="relative py-8 px-4">
      {/* Desktop Layout with shared SVG overlay */}
      <div
        ref={desktopContainerRef}
        className="relative hidden lg:flex items-center justify-center gap-0"
      >
        {/* Shared SVG overlay behind all nodes */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ overflow: "visible" }}
          viewBox={
            diagramPaths.svgWidth && diagramPaths.svgHeight
              ? `0 0 ${diagramPaths.svgWidth} ${diagramPaths.svgHeight}`
              : undefined
          }
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="inputGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--glow-magenta))" />
              <stop offset="100%" stopColor="hsl(var(--glow-pink))" />
            </linearGradient>
            <linearGradient id="outputGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--status-success))" />
              <stop offset="100%" stopColor="hsl(160, 70%, 50%)" />
            </linearGradient>
            <filter id="glowInput" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glowOutput" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Input paths (purple/magenta) - animated particles only */}
          {diagramPaths.inputPaths.map((path, i) => {
            // Check for valid path with non-zero coordinates
            if (!path.pathD || (path.startX === 0 && path.startY === 0)) return null;
            return (
              <g key={`input-${i}`}>
                {/* Animated particles using SVG animateMotion for reliable animation */}
                {[0, 1].map((p) => (
                  <circle
                    key={`p-in-${i}-${p}`}
                    r="4"
                    fill="hsl(var(--glow-magenta))"
                    filter="url(#glowInput)"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${0.8 + i * 0.2 + p * 1}s`}
                      path={path.pathD}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${0.8 + i * 0.2 + p * 1}s`}
                    />
                  </circle>
                ))}
              </g>
            );
          })}

          {/* Output paths (green) - animated particles only */}
          {diagramPaths.outputPaths.map((path, i) => {
            // Check for valid path with non-zero coordinates
            if (!path.pathD || (path.endX === 0 && path.endY === 0)) return null;
            return (
              <g key={`output-${i}`}>
                {/* Animated particles using SVG animateMotion for reliable animation */}
                {[0, 1].map((p) => (
                  <circle
                    key={`p-out-${i}-${p}`}
                    r="4"
                    fill="hsl(var(--status-success))"
                    filter="url(#glowOutput)"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${1.3 + i * 0.2 + p * 1}s`}
                      path={path.pathD}
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${1.3 + i * 0.2 + p * 1}s`}
                    />
                  </circle>
                ))}
              </g>
            );
          })}

          {/* Debug anchor circles */}
          {DEBUG && (
            <>
              {diagramPaths.inputPaths.map((path, i) => (
                <g key={`debug-input-${i}`}>
                  <circle cx={path.startX} cy={path.startY} r="6" fill="red" opacity={0.8} />
                  <circle cx={path.endX} cy={path.endY} r="6" fill="blue" opacity={0.8} />
                </g>
              ))}
              {diagramPaths.outputPaths.map((path, i) => (
                <g key={`debug-output-${i}`}>
                  <circle cx={path.startX} cy={path.startY} r="6" fill="orange" opacity={0.8} />
                  <circle cx={path.endX} cy={path.endY} r="6" fill="green" opacity={0.8} />
                </g>
              ))}
            </>
          )}
        </svg>

        {/* Input Nodes */}
        <div className="flex flex-col gap-8 z-10">
          {inputs.map((input, i) => (
            <motion.div
              key={input.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.div
                ref={(el) => (inputRefs.current[i] = el)}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-glow-magenta/20 to-glow-pink/10 border border-glow-magenta/40 flex items-center justify-center shadow-lg relative z-20"
                animate={{
                  boxShadow: [
                    "0 0 20px hsla(var(--glow-magenta), 0.15)",
                    "0 0 35px hsla(var(--glow-magenta), 0.3)",
                    "0 0 20px hsla(var(--glow-magenta), 0.15)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              >
                <input.icon className="w-6 h-6 text-glow-magenta" />
              </motion.div>
              <span className="text-sm font-medium text-muted-foreground w-16 relative z-20">{input.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Spacer for lines */}
        <div className="w-32" />

        {/* Central Sanyya Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          {/* Outer glow */}
          <motion.div
            className="absolute -inset-8 rounded-3xl"
            style={{
              background: "radial-gradient(ellipse at center, hsla(var(--glow-magenta), 0.25), transparent 70%)",
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Neural network decoration */}
          <div className="absolute -inset-4 overflow-hidden rounded-2xl opacity-15">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              {[
                { x1: 15, y1: 25, x2: 60, y2: 60 },
                { x1: 15, y1: 95, x2: 60, y2: 60 },
                { x1: 60, y1: 60, x2: 105, y2: 25 },
                { x1: 60, y1: 60, x2: 105, y2: 95 },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="hsl(var(--glow-magenta))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                />
              ))}
              {[
                { cx: 15, cy: 25 },
                { cx: 15, cy: 95 },
                { cx: 60, cy: 60 },
                { cx: 105, cy: 25 },
                { cx: 105, cy: 95 },
              ].map((node, i) => (
                <motion.circle
                  key={i}
                  cx={node.cx}
                  cy={node.cy}
                  r="5"
                  fill="hsl(var(--glow-magenta))"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    delay: 1 + i * 0.15,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Main container - ref attached here for accurate edge measurements */}
          <div
            ref={centerCardRef}
            className="relative bg-card/95 backdrop-blur-xl border border-glow-magenta/30 rounded-2xl px-8 py-6 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-2">
              <SanyyaLogo size="lg" showText={false} />
              <span className="text-base font-semibold text-foreground tracking-wide">Sanyya</span>
              <span className="text-xs text-muted-foreground">Semantic Match Engine</span>
            </div>
          </div>
        </motion.div>

        {/* Spacer for lines */}
        <div className="w-32" />

        {/* Output Nodes */}
        <div className="flex flex-col gap-8 z-10">
          {outputs.map((output, i) => (
            <motion.div
              key={output.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm font-medium text-muted-foreground w-16 text-right relative z-20">{output.label}</span>
              <motion.div
                ref={(el) => (outputRefs.current[i] = el)}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-status-success/20 to-emerald-500/10 border border-status-success/40 flex items-center justify-center shadow-lg relative z-20"
                animate={{
                  boxShadow: [
                    "0 0 20px hsla(var(--status-success), 0.15)",
                    "0 0 35px hsla(var(--status-success), 0.3)",
                    "0 0 20px hsla(var(--status-success), 0.15)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 + i * 0.4 }}
              >
                <output.icon className="w-6 h-6 text-status-success" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Vertical flow with animated particles */}
      <div className="flex lg:hidden flex-col items-center gap-4">
        {/* Input Icons Row */}
        <div className="flex items-center gap-4">
          {inputs.map((input, i) => (
            <motion.div
              key={input.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-glow-magenta/20 to-glow-pink/10 border border-glow-magenta/40 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 15px hsla(var(--glow-magenta), 0.15)",
                    "0 0 25px hsla(var(--glow-magenta), 0.3)",
                    "0 0 15px hsla(var(--glow-magenta), 0.15)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              >
                <input.icon className="w-5 h-5 text-glow-magenta" />
              </motion.div>
              <span className="text-xs text-muted-foreground">{input.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated flow indicator with particles - Input to Center */}
        <div className="relative h-12 w-full flex justify-center">
          {/* Static line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-glow-magenta/40 to-glow-pink/40 rounded-full" />
          
          {/* Animated particles flowing down */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`particle-in-${i}`}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-glow-magenta"
              style={{
                boxShadow: "0 0 8px hsl(var(--glow-magenta)), 0 0 16px hsl(var(--glow-magenta))",
              }}
              animate={{
                top: ["-4px", "calc(100% + 4px)"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Central Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-4 rounded-2xl"
            style={{
              background: "radial-gradient(ellipse at center, hsla(var(--glow-magenta), 0.2), transparent 70%)",
            }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative bg-card/95 backdrop-blur-xl border border-glow-magenta/30 rounded-xl px-6 py-4">
            <div className="flex flex-col items-center gap-1">
              <SanyyaLogo size="md" showText={false} />
              <span className="text-sm font-semibold text-foreground">Sanyya</span>
              <span className="text-[10px] text-muted-foreground">Semantic Match Engine</span>
            </div>
          </div>
        </motion.div>

        {/* Animated flow indicator with particles - Center to Output */}
        <div className="relative h-12 w-full flex justify-center">
          {/* Static line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-status-success/40 to-emerald-500/40 rounded-full" />
          
          {/* Animated particles flowing down */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`particle-out-${i}`}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-status-success"
              style={{
                boxShadow: "0 0 8px hsl(var(--status-success)), 0 0 16px hsl(var(--status-success))",
              }}
              animate={{
                top: ["-4px", "calc(100% + 4px)"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.75 + i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Output Icons Row */}
        <div className="flex items-center gap-4">
          {outputs.map((output, i) => (
            <motion.div
              key={output.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-status-success/20 to-emerald-500/10 border border-status-success/40 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 15px hsla(var(--status-success), 0.15)",
                    "0 0 25px hsla(var(--status-success), 0.3)",
                    "0 0 15px hsla(var(--status-success), 0.15)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 + i * 0.3 }}
              >
                <output.icon className="w-5 h-5 text-status-success" />
              </motion.div>
              <span className="text-xs text-muted-foreground">{output.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedMatchVisual;
