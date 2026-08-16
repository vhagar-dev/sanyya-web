import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { GradientButton } from "./ui";
import { subscribeEmail } from "@/lib/signup";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

/**
 * Low-key signup: the button slides open into an inline email field.
 * No modal, no extra page.
 */
export function SignupButton({
  children = "Get early access",
  size = "md",
  className,
  variant = "gradient",
}: {
  children?: ReactNode;
  size?: Size;
  className?: string;
  variant?: "gradient" | "link";
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const heights = size === "lg" ? "h-11 md:h-12" : size === "sm" ? "h-9 md:h-10" : "h-10 md:h-11";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      setError("Enter a valid email address");
      return;
    }
    setStatus("loading");
    try {
      const result = await subscribeEmail(trimmed);
      if (result.ok) setStatus("done");
      else {
        setStatus("idle");
        setError(result.error);
      }
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-md border border-border bg-secondary/70 px-4 text-sm text-foreground",
          heights,
          className,
        )}
      >
        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
          <Check className="size-3" />
        </span>
        Thanks. We will be in touch shortly to get you set up.
      </span>
    );
  }

  if (!open) {
    if (variant === "link") {
      return (
        <button type="button" onClick={() => setOpen(true)} className={className}>
          {children}
        </button>
      );
    }
    return (
      <GradientButton as="button" size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </GradientButton>
    );
  }

  return (
    <span className={cn("inline-block align-middle", className)}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-md border border-border bg-card pl-3 pr-1.5",
          "shadow-[0_1px_2px_hsl(220_43%_11%/0.06)] focus-within:ring-2 focus-within:ring-brand/40",
          "animate-in fade-in slide-in-from-left-2 duration-200",
          heights,
        )}
      >
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="you@company.com"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Get early access"
          className={cn(
            "grid shrink-0 place-items-center rounded-md bg-brand-gradient px-3 text-sm font-medium text-white transition-opacity",
            size === "lg" ? "h-8 md:h-9" : size === "sm" ? "h-6 md:h-7" : "h-7 md:h-8",
            status === "loading" && "opacity-60",
          )}
        >
          {status === "loading" ? "..." : <ArrowRight className="size-4" />}
        </button>
      </form>
      {error ? (
        <span className="mt-1.5 block text-left text-xs text-destructive">{error}</span>
      ) : null}
    </span>
  );
}
