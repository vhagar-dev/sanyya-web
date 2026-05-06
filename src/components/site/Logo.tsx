import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import sanyyaLogo from "@/assets/sanyya-logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2", className)}>
      <span className="relative grid place-items-center" style={{ height: 48, width: 48 }}>
        <img
          src={sanyyaLogo}
          alt="Sanyya logo"
          width={48}
          height={48}
          className="object-contain"
          style={{ height: 48, width: 48 }}
        />
      </span>
      <span className="text-xl font-semibold tracking-tight text-foreground">Sanyya</span>
    </Link>
  );
}
