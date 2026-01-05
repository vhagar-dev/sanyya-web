import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SanyyaLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const SanyyaLogo = ({ className, showText = true, size = "md", variant = "light" }: SanyyaLogoProps) => {
  const sizeClasses = {
    sm: { container: "w-10 h-10", text: "text-sm", circle: "w-6 h-6" },
    md: { container: "w-12 h-12", text: "text-base", circle: "w-7 h-7" },
    lg: { container: "w-14 h-14", text: "text-xl", circle: "w-8 h-8" }
  };

  const blendMode = variant === "dark" ? "screen" : "multiply";

  const orbitAnimation = {
    animate: (direction: { x: number; y: number }) => ({
      x: [0, direction.x, 0, -direction.x * 0.5, 0],
      y: [0, direction.y, 0, -direction.y * 0.5, 0],
    }),
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* The Trinity Mark Container - Transparent */}
      <div className={cn("relative", sizeClasses[size].container)}>
        {/* Circle 1: Violet/Blue - Top Center */}
        <motion.div
          animate={orbitAnimation.animate({ x: 0, y: -2 })}
          transition={orbitAnimation.transition}
          className={cn(
            "absolute rounded-full",
            sizeClasses[size].circle
          )}
          style={{
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(180deg, #6366F1 0%, #2563EB 100%)",
            mixBlendMode: blendMode,
          }}
        />

        {/* Circle 2: Cyan/Emerald - Bottom Left */}
        <motion.div
          animate={orbitAnimation.animate({ x: -2, y: 1 })}
          transition={orbitAnimation.transition}
          className={cn(
            "absolute rounded-full",
            sizeClasses[size].circle
          )}
          style={{
            bottom: "5%",
            left: "10%",
            background: "linear-gradient(180deg, #22D3EE 0%, #10B981 100%)",
            mixBlendMode: blendMode,
          }}
        />

        {/* Circle 3: Magenta/Pink - Bottom Right */}
        <motion.div
          animate={orbitAnimation.animate({ x: 2, y: 1 })}
          transition={orbitAnimation.transition}
          className={cn(
            "absolute rounded-full",
            sizeClasses[size].circle
          )}
          style={{
            bottom: "5%",
            right: "10%",
            background: "linear-gradient(180deg, #D946EF 0%, #EC4899 100%)",
            mixBlendMode: blendMode,
          }}
        />

      </div>

      {/* The Text */}
      {showText && (
        <span className={cn(
          "font-bold tracking-[0.25em] text-slate-900",
          sizeClasses[size].text
        )}>
          SANYYA
        </span>
      )}
    </div>
  );
};

export default SanyyaLogo;
