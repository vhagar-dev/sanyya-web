import { cn } from "@/lib/utils";
import sanyyaLogo from "@/assets/sanyya-logo.png";

interface SanyyaLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
}

const SanyyaLogo = ({ className, showText = true, size = "md", variant = "dark" }: SanyyaLogoProps) => {
  const sizeClasses = {
    sm: { container: "w-9 h-9", text: "text-base" },
    md: { container: "w-10 h-10", text: "text-base" },
    lg: { container: "w-14 h-14", text: "text-xl" },
    xl: { container: "w-20 h-20", text: "text-2xl" }
  };

  const textColor = variant === "dark" ? "text-white" : "text-slate-900";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* The Brain Logo */}
      <div className={cn("relative", sizeClasses[size].container)}>
        <img 
          src={sanyyaLogo} 
          alt="Sanyya Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* The Text */}
      {showText && (
        <span className={cn(
          "font-bold tracking-[0.25em]",
          textColor,
          sizeClasses[size].text
        )}>
          SANYYA
        </span>
      )}
    </div>
  );
};

export default SanyyaLogo;
