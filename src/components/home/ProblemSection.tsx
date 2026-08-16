import { Mail, Clock, PackageX } from "lucide-react";
import { Section } from "@/components/site/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const pains = [
  {
    icon: Mail,
    title: "Quotes Buried in Inboxes",
    body: "Vendor quotes scattered across email threads. No comparison, no history, no leverage.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
  },
  {
    icon: Clock,
    title: "Approvals That Take Days",
    body: "Slack DMs, email chains, lost context. By the time it's approved, the price changed.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
  },
  {
    icon: PackageX,
    title: "No Proof of Delivery",
    body: "Your ERP says it was ordered. But did it actually arrive? At the right temperature? In the right quantity? Nobody knows.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
];

export function ProblemSection() {
  return (
    <Section id="problem">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-md border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
            The Problem
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl md:text-6xl">
            Your procurement stack is held together with{" "}
            <span className="text-foreground">email and spreadsheets</span>
          </h2>
        </Reveal>
      </div>
      <Stagger className="mt-12 grid gap-4 md:gap-6 md:grid-cols-3">
        {pains.map((p) => (
          <StaggerItem key={p.title}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
              <div className={`grid size-11 place-items-center rounded-xl ${p.iconBg}`}>
                <p.icon className={`size-5 ${p.iconColor}`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground sm:text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
