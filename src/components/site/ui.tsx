import { Link } from "@tanstack/react-router";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "danger" | "success" | "neutral";
  className?: string;
}) {
  const tones = {
    brand: "border-[hsl(217_91%_57%/0.35)] text-[hsl(217_91%_38%)] bg-[hsl(217_91%_57%/0.1)]",
    danger: "border-destructive/40 text-destructive bg-destructive/10",
    success: "border-[hsl(160_84%_50%/0.4)] text-[hsl(160_84%_40%)] bg-[hsl(160_84%_50%/0.1)]",
    neutral: "border-border text-muted-foreground bg-card/50",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type GBProps = {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
} & (
  | ({ as?: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | { as: "link"; to: string; href?: never }
);

export function GradientButton(props: GBProps) {
  const { children, className, size = "md" } = props;
  const sizing =
    size === "lg"
      ? "h-12 md:h-14 px-7 md:px-8 text-base md:text-lg"
      : "h-11 md:h-12 px-6 md:px-7 text-sm md:text-base";
  const base = cn(
    "shine relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium text-white",
    "bg-brand-gradient shadow-[0_8px_30px_-8px_hsl(217_91%_57%/0.6)] transition-all duration-300",
    "md:hover:shadow-[0_14px_40px_-10px_hsl(258_90%_55%/0.7)] md:hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    sizing,
    className,
  );
  if (props.as === "button") {
    const { as: _a, children: _c, className: _cn, size: _s, ...rest } = props;
    return (
      <button className={base} {...rest}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
  if (props.as === "link") {
    return (
      <Link to={props.to} className={base}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }
  const { as: _a, children: _c, className: _cn, size: _s, ...rest } = props as any;
  return (
    <a className={base} {...rest}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

export function GhostButton({
  children,
  className,
  href,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: "md" | "lg";
}) {
  const sizing =
    size === "lg"
      ? "h-12 md:h-14 px-7 md:px-8 text-base md:text-lg"
      : "h-11 md:h-12 px-6 md:px-7 text-sm md:text-base";
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 text-foreground transition-all duration-300",
    "md:hover:bg-card md:hover:border-foreground/30",
    sizing,
    className,
  );
  return (
    <a href={href ?? "#"} className={cls}>
      {children}
    </a>
  );
}

export function GlassCard({
  children,
  className,
  hoverable = true,
}: {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass relative rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300",
        hoverable &&
          "md:hover:-translate-y-1 md:hover:border-[hsl(0_0%_100%/0.14)] md:hover:shadow-[0_20px_60px_-30px_hsl(217_91%_57%/0.5)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GradientGlow({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "h-40 w-40 blur-2xl",
    md: "h-72 w-72 blur-3xl",
    lg: "h-[500px] w-[500px] blur-3xl",
    xl: "h-[800px] w-[800px] blur-3xl",
  };
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full opacity-60",
        "bg-[radial-gradient(circle,hsl(217_91%_60%/0.45),hsl(258_90%_66%/0.3)_45%,transparent_70%)]",
        sizes[size],
        className,
      )}
    />
  );
}

export function Section({
  id,
  children,
  className,
  size = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "tight" | "loose";
}) {
  const padding =
    size === "tight"
      ? "py-12 md:py-16 lg:py-20"
      : size === "loose"
      ? "py-24 md:py-32 lg:py-40"
      : "py-20 md:py-28";
  return (
    <section id={id} className={cn("relative", padding, className)}>
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="container mx-auto px-4 sm:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
