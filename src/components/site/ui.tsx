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
    brand: "border-brand/25 text-brand bg-brand/[0.07]",
    danger: "border-destructive/30 text-destructive bg-destructive/8",
    success: "border-[hsl(160_60%_40%/0.25)] text-[hsl(160_84%_28%)] bg-[hsl(150_65%_95%)]",
    neutral: "border-border text-muted-foreground bg-secondary",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-[12px]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type GBBase = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

type GBAnchorProps = GBBase & { as?: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>;

type GBProps =
  | GBAnchorProps
  | (GBBase & { as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | (GBBase & { as: "link"; to: string; href?: never });

export function GradientButton(props: GBProps) {
  const { children, className, size = "md" } = props;
  const sizing =
    size === "lg"
      ? "h-12 md:h-14 px-8 md:px-10 text-sm md:text-base"
      : size === "sm"
        ? "h-9 md:h-10 px-4 md:px-5 text-xs md:text-sm"
        : "h-11 md:h-12 px-6 md:px-8 text-sm";
  const base = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md font-medium text-primary-foreground",
    "bg-primary transition-colors duration-200",
    "md:hover:opacity-90",
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
  const { as: _a, children: _c, className: _cn, size: _s, ...rest } = props as GBAnchorProps;
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
      ? "h-11 md:h-12 px-6 md:px-7 text-sm md:text-base"
      : "h-10 md:h-11 px-5 md:px-6 text-sm";
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent text-foreground transition-colors duration-200",
    "md:hover:bg-secondary",
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
        "relative rounded-md border border-border bg-card p-6 sm:p-7 md:p-8 transition-colors duration-200",
        hoverable && "md:hover:border-brand/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GradientGlow(_props: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  // Warm editorial system: no radial glows or mesh washes anywhere.
  return null;
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
      ? "py-16 md:py-20 lg:py-24"
      : size === "loose"
        ? "py-28 md:py-40 lg:py-48"
        : "py-24 md:py-36";
  return (
    <section id={id} className={cn("relative", padding, className)}>
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div aria-hidden className="container mx-auto px-4 sm:px-6">
      <div className="h-px w-full bg-border" />
    </div>
  );
}
