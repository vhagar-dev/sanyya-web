import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Layers,
  Plug,
  Sparkles,
  FlaskConical,
  Cog,
  Wrench,
  Wallet,
  ShoppingBag,
  Building2,
} from "lucide-react";
import { Logo } from "./Logo";
import { GradientButton } from "./ui";
import { modules, solutionsByIndustry, solutionsByRole } from "@/data/site";
import { cn } from "@/lib/utils";

const topNav = [{ label: "Integrations", href: "/integrations" }];

const platformItems = [
  {
    name: "Platform Overview",
    desc: "See how all 10 modules work together.",
    href: "/",
    icon: Layers,
  },
  {
    name: "Integrations",
    desc: "Slack, NetSuite, QuickBooks, Bill.com, Ramp, Quartzy.",
    href: "/integrations",
    icon: Plug,
  },
  {
    name: "AI & Matching",
    desc: "Vector embeddings, vendor-trained OCR, semantic matching.",
    href: "/product/match-engine",
    icon: Sparkles,
  },
];

const industryIcons: Record<string, typeof FlaskConical> = {
  "Biotech & Life Sciences": FlaskConical,
  "Hardware & Robotics": Cog,
};
const roleIcons: Record<string, typeof Wrench> = {
  Operations: Wrench,
  Finance: Wallet,
  Procurement: ShoppingBag,
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "product" | "solutions">(null);
  const location = useLocation();
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleOpen = (menu: "product" | "solutions") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setOpenMenu(menu), 150);
  };
  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 100);
  };
  const toggleMenu = (menu: "product" | "solutions") => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6">
          <Logo />

          <nav
            className="hidden md:flex items-center gap-1"
            onMouseLeave={scheduleClose}
          >
            <DesktopMenuTrigger
              label="Product"
              open={openMenu === "product"}
              onOpen={() => scheduleOpen("product")}
              onToggle={() => toggleMenu("product")}
              panelClassName="w-[760px]"
            >
              <ProductMegaMenu />
            </DesktopMenuTrigger>
            <DesktopMenuTrigger
              label="Solutions"
              open={openMenu === "solutions"}
              onOpen={() => scheduleOpen("solutions")}
              onToggle={() => toggleMenu("solutions")}
              panelClassName="w-[580px]"
            >
              <SolutionsMegaMenu />
            </DesktopMenuTrigger>
            {topNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <GradientButton href="#book-demo" size="md">
              Book a Demo <ArrowRight className="size-4" />
            </GradientButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden grid h-11 w-11 place-items-center rounded-lg border border-border bg-card text-foreground"
          >
            <Menu className="size-5" />
          </button>
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
            <Logo />
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
            <GradientButton href="#book-demo" size="md" className="w-full">
              Book a Demo <ArrowRight className="size-4" />
            </GradientButton>
            <div className="mt-6 space-y-2">
              <MobileAccordion label="Modules">
                <div className="grid gap-1">
                  {modules.map((m) => (
                    <Link
                      key={m.slug}
                      to={m.href}
                      className="flex min-h-11 items-start gap-3 rounded-lg p-3 hover:bg-card/60"
                    >
                      <m.icon className={cn("mt-0.5 size-4 shrink-0", m.iconColor)} />
                      <div>
                        <div className="text-sm font-medium text-foreground">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.short}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </MobileAccordion>
              <MobileAccordion label="Platform">
                <div className="grid gap-1">
                  {platformItems.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="flex min-h-11 items-start gap-3 rounded-lg p-3 hover:bg-card/60"
                    >
                      <p.icon className="mt-0.5 size-4 shrink-0 text-[hsl(217_91%_38%)]" />
                      <div>
                        <div className="text-sm font-medium text-foreground">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </MobileAccordion>
              <MobileAccordion label="By Industry">
                <div className="grid gap-1">
                  {solutionsByIndustry.map((s) => {
                    const Icon = industryIcons[s.name] ?? Building2;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        className="flex min-h-11 items-start gap-3 rounded-lg p-3 hover:bg-card/60"
                      >
                        <Icon className="mt-0.5 size-4 shrink-0 text-[hsl(217_91%_38%)]" />
                        <div>
                          <div className="text-sm font-medium text-foreground">{s.name}</div>
                          <div className="text-xs text-muted-foreground">{s.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </MobileAccordion>
              <MobileAccordion label="By Role">
                <div className="grid gap-1">
                  {solutionsByRole.map((s) => {
                    const Icon = roleIcons[s.name] ?? Wrench;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        className="flex min-h-11 items-start gap-3 rounded-lg p-3 hover:bg-card/60"
                      >
                        <Icon className="mt-0.5 size-4 shrink-0 text-[hsl(217_91%_38%)]" />
                        <div>
                          <div className="text-sm font-medium text-foreground">{s.name}</div>
                          <div className="text-xs text-muted-foreground">{s.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <Link
                  to="/why-sanyya"
                  className="mt-2 flex min-h-11 items-center justify-between rounded-lg border-t border-border p-3 text-sm font-medium text-foreground hover:bg-card/60"
                >
                  Why Sanyya
                  <ArrowRight className="size-4" />
                </Link>
              </MobileAccordion>
              {topNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block min-h-11 rounded-lg p-3 text-base text-foreground hover:bg-card/60"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopMenuTrigger({
  label,
  open,
  onOpen,
  onToggle,
  panelClassName,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onToggle: () => void;
  panelClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen}>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors",
          open ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {label}
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-1",
        )}
      >
        <div
          className={cn(
            "max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-border bg-popover shadow-lg",
            panelClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ProductMegaMenu() {
  return (
    <div className="grid grid-cols-[1fr_280px]">
      <div className="p-5">
        <div className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Modules
        </div>
        <div className="grid grid-cols-2 gap-1">
          {modules.map((m) => (
            <Link
              key={m.slug}
              to={m.href}
              className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-card/80"
            >
              <m.icon className={cn("mt-0.5 size-5 shrink-0", m.iconColor)} />
              <div>
                <div className="text-sm font-semibold text-foreground">{m.name}</div>
                <div className="text-xs text-muted-foreground leading-snug">{m.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="border-l border-border bg-secondary p-5">
        <div className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Platform
        </div>
        <div className="space-y-1">
          {platformItems.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-background"
            >
              <p.icon className="mt-0.5 size-5 shrink-0 text-[hsl(217_91%_38%)]" />
              <div>
                <div className="text-sm font-semibold text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground leading-snug">{p.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="p-5">
          <div className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            By Industry
          </div>
          <div className="space-y-1">
            {solutionsByIndustry.map((s) => {
              const Icon = industryIcons[s.name] ?? Building2;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-card/80"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-[hsl(217_91%_38%)]" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{s.name}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{s.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="border-l border-border bg-secondary p-5">
          <div className="mb-3 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            By Role
          </div>
          <div className="space-y-1">
            {solutionsByRole.map((s) => {
              const Icon = roleIcons[s.name] ?? Wrench;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-background"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-[hsl(217_91%_38%)]" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{s.name}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{s.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <Link
          to="/why-sanyya"
          className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-card/60"
        >
          <div>
            <div className="text-sm font-semibold text-foreground">Why Sanyya</div>
            <div className="text-xs text-muted-foreground">
              How we compare and why teams pick us.
            </div>
          </div>
          <ArrowRight className="size-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-11 w-full items-center justify-between p-3 text-base text-foreground"
      >
        {label}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="border-t border-border p-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
