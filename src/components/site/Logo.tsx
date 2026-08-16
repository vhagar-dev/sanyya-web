import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import sanyyaLogoTransparent from "@/assets/sanyya-logo-transparent.png";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const size = compact ? 30 : 38;
  const textSize = compact ? "text-lg" : "text-xl";
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2", className)}>
      <span className="relative grid place-items-center" style={{ height: size, width: size }}>
        <img
          src={sanyyaLogoTransparent}
          alt="Sanyya logo"
          width={size}
          height={size}
          className="object-contain"
          style={{ height: size, width: size }}
        />
      </span>
      <span className={cn("font-semibold tracking-tight text-foreground", textSize)}>Sanyya</span>
    </Link>
  );
}
