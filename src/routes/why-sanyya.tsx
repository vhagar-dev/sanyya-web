import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  
  Package,
  Sparkles,
  Rocket,
  FlaskConical,
  Calculator,
  ShoppingCart,
  Zap,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";

export const Route = createFileRoute("/why-sanyya")({
  head: () => ({
    meta: [
      { title: "Why Sanyya, Procurement Built for You" },
      {
        name: "description",
        content:
          "Sanyya was built by an operator for biotech and hardware teams. Compare Sanyya to enterprise and mid-market procurement tools.",
      },
      { property: "og:title", content: "Why Sanyya" },
      {
        property: "og:description",
        content: "Procurement software actually built for you, not adapted from enterprise.",
      },
    ],
  }),
  component: WhySanyyaPage,
});

const differentiators = [
  {
    title: "Designed for Physical Spend",
    icon: Package,
    accent: "bg-blue-500",
    iconCls: "text-blue-500 bg-blue-50",
    text: "Reagents, components, lab equipment, raw materials. Sanyya was built for companies that buy things that arrive on a truck, not things that arrive in an email. Receiving, matching, and inventory workflows reflect that.",
  },
  {
    title: "Works Where Your Team Works",
    icon: MessageSquare,
    accent: "bg-violet-500",
    iconCls: "text-violet-500 bg-violet-50",
    text: "Slack agent for requisitions. Mobile app for receiving at the dock. Email forwarding for invoices. Sanyya meets your team where they already are instead of asking them to learn another portal.",
  },
  {
    title: "AI That Knows Your Vendors",
    icon: Sparkles,
    accent: "bg-cyan-500",
    iconCls: "text-cyan-500 bg-cyan-50",
    text: "OCR models trained on each vendor's packing slip format. Semantic matching that understands 'FBS 500mL' and 'Fetal Bovine Serum, 500 mL' are the same thing. The system gets smarter the more you use it.",
  },
  {
    title: "Live in Days, Not Quarters",
    icon: Zap,
    accent: "bg-emerald-500",
    iconCls: "text-emerald-500 bg-emerald-50",
    text: "No 6-month rollout. No consultants. No training sessions nobody attends. Sanyya is designed to be obvious from the first login. Your team can be live in days because the platform was built to be intuitive, not configured to be usable.",
  },
  {
    title: "Workflows You Control",
    icon: Settings,
    accent: "bg-slate-500",
    iconCls: "text-slate-600 bg-slate-100",
    text: "Build complex approval chains with no code. Change approvers, thresholds, or routing rules at any time with full version control. Someone leaves, your org restructures, a VP goes on PTO. Update in minutes, not support tickets.",
  },
  {
    title: "Priced for Your Stage",
    icon: Rocket,
    accent: "bg-amber-500",
    iconCls: "text-amber-500 bg-amber-50",
    text: "You don't need 50 modules and a dedicated admin. Start with one module, add more as you grow. Pricing that makes sense for a Series A through C company, with implementation measured in days.",
  },
];

const personas = [
  {
    title: "Lab Ops / Operations",
    icon: FlaskConical,
    accent: "bg-blue-500",
    iconCls: "text-blue-500 bg-blue-50",
    text: "You're drowning in email threads, spreadsheets, and manual reconciliation. Sanyya gives you one system for quotes, requisitions, approvals, receiving, and invoicing, with workflows that match how your company actually operates.",
  },
  {
    title: "Finance & CFO",
    icon: Calculator,
    accent: "bg-amber-500",
    iconCls: "text-amber-500 bg-amber-50",
    text: "You need spend visibility, budget controls, accrual reporting, and audit trails. Sanyya connects every procurement document into a single source of truth, with real-time dashboards and bill pay platform integration.",
  },
  {
    title: "Procurement Lead",
    icon: ShoppingCart,
    accent: "bg-violet-500",
    iconCls: "text-violet-500 bg-violet-50",
    text: "You want vendor intelligence, automated matching, and approval workflows that don't require babysitting. Sanyya automates the tedious parts so you can focus on strategy and vendor relationships.",
  },
];

function WhySanyyaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Why Sanyya" }]} />
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-amber-700">
                Why Sanyya
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Procurement Software That Was{" "}
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  Actually Built for You
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
                Not adapted from an enterprise tool. Not bolted onto an ERP. Designed from first
                principles by an operator who lived the pain, for biotech, hardware, and
                physical-spend teams that need intuitive workflows without the complexity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex justify-center">
                <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                  Book a Demo <ArrowRight className="size-4" />
                </GradientButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-600">
              Difference
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              What Makes Sanyya Different
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <div className={`h-1 w-full ${d.accent}`} />
                <div className="p-8">
                  <div className={`grid size-12 place-items-center rounded-xl ${d.iconCls}`}>
                    <d.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* PERSONAS */}
      <Section size="tight">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>Teams</SectionBadge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Who Thrives on Sanyya
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
                <div className={`h-1.5 w-full ${p.accent}`} />
                <div className="p-6">
                  <div className={`grid size-12 place-items-center rounded-xl ${p.iconCls}`}>
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* CTA */}
      <Section size="tight" id="book-demo">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to See the{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Difference?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join the biotech and hardware teams already using Sanyya.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                Book a Demo <ArrowRight className="size-4" />
              </GradientButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
