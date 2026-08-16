import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { SignupButton } from "./SignupDialog";
import { ThemeToggle } from "./ThemeToggle";

import { cn } from "@/lib/utils";
import { stages } from "@/data/stages";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
        <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4 sm:px-6">
          <Logo compact />

          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <Link
                to="/product"
                className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                Product
                <ChevronDown
                  className={cn("size-3.5 transition-transform", productOpen && "rotate-180")}
                />
              </Link>

              <div
                className={cn(
                  "absolute left-0 top-full w-[22rem] pt-3 transition-all duration-200",
                  productOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="rounded-2xl border border-border bg-background p-4 shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
                  <div className="px-2 pb-3 tabular-nums text-[10px] text-muted-foreground">
                    How it works, end to end
                  </div>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute left-[1.4rem] top-4 bottom-4 w-px bg-gradient-to-b from-[hsl(269_80%_57%/0.5)] via-border to-[hsl(272_75%_72%/0.5)]"
                    />
                    <ul className="relative space-y-0.5">
                      {stages.map((s, i) => (
                        <li key={s.id}>
                          <Link
                            to="/product"
                            hash={s.id}
                            className="group flex gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-secondary/60"
                          >
                            <span className="z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-border bg-background tabular-nums text-[10px] text-muted-foreground transition-colors group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white">
                              {i + 1}
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-foreground">
                                {s.dropdownTitle}
                              </span>
                              <span className="block text-xs text-muted-foreground">{s.line}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 border-t border-border pt-3">
                    <Link
                      to="/product"
                      className="inline-flex items-center gap-1.5 px-2 text-sm font-medium text-foreground hover:text-brand"
                    >
                      See the whole flow <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/why-sanyya"
              className="rounded-lg px-4 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              Why Sanyya
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <SignupButton size="sm">
              Get early access <ArrowRight className="size-3.5" />
            </SignupButton>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-card text-foreground"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-background" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm border-l border-border bg-background transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-14 items-center justify-between border-b border-border px-4">
            <Logo compact />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-card"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex h-[calc(100%-3.5rem)] flex-col overflow-y-auto p-4">
            <div className="px-3 pb-2 tabular-nums text-[10px] text-muted-foreground">
              How it works, end to end
            </div>
            <div className="relative pl-1">
              <div aria-hidden className="absolute left-[1.4rem] top-4 bottom-4 w-px bg-border" />
              <ul className="relative space-y-1">
                {stages.map((s, i) => (
                  <li key={s.id}>
                    <Link to="/product" hash={s.id} className="flex gap-3 rounded-lg px-2 py-2">
                      <span className="z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-border bg-background tabular-nums text-[10px] text-muted-foreground">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {s.dropdownTitle}
                        </span>
                        <span className="block text-xs text-muted-foreground">{s.line}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/product"
              className="mt-3 flex min-h-11 items-center gap-1.5 rounded-lg border-t border-border px-3 pt-3 text-sm font-medium text-foreground"
            >
              See the whole flow <ArrowRight className="size-3.5" />
            </Link>

            <nav className="mt-4 grid gap-1 border-t border-border pt-4">
              <Link
                to="/why-sanyya"
                className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-foreground hover:bg-card/60"
              >
                Why Sanyya
              </Link>
            </nav>
            <SignupButton size="sm" className="mt-6 w-full">
              Get early access <ArrowRight className="size-3.5" />
            </SignupButton>
          </div>
        </div>
      </div>
    </>
  );
}
