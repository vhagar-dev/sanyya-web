import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { modules, solutionsByIndustry, solutionsByRole } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Procurement that actually works. Built for biotech, hardware, and deep-tech teams.
            </p>
          </div>
          <FooterColumn title="Product">
            {modules.slice(0, 6).map((m) => (
              <Link key={m.slug} to={m.href} className="block py-1 hover:text-foreground">
                {m.name}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Solutions">
            {[...solutionsByIndustry, ...solutionsByRole].map((s) => (
              <a key={s.name} href={s.href} className="block py-1 hover:text-foreground">
                {s.name}
              </a>
            ))}
          </FooterColumn>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Sanyya Systems, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-foreground">
        {title}
      </div>
      <div className="space-y-0.5 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
