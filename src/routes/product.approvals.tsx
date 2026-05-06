import { createFileRoute } from "@tanstack/react-router";
import {
  MessageSquare,
  Shuffle,
  Layers,
  AlertTriangle,
  GitBranch,
  Route as RouteIcon,
  Blocks,
  Building2,
  Zap,
  Clock,
  ShieldCheck,
  FileText,
  Check,
  ArrowRight,
} from "lucide-react";
import { ProductHero } from "@/components/product/ProductHero";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { TwoLayerEngine } from "@/components/approvals/TwoLayerEngine";
import { DryRunSimulator } from "@/components/approvals/DryRunSimulator";

export const Route = createFileRoute("/product/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals & Workflows | Sanyya" },
      {
        name: "description",
        content:
          "A two-layer enterprise approval engine: routing rules pick the workflow, a versioned workflow library handles the chain. Atomic, audit-grade, race-free.",
      },
      { property: "og:title", content: "Approvals & Workflows | Sanyya" },
      {
        property: "og:description",
        content:
          "Routing rules over a hardcoded fact vocabulary, snapshotted workflow library, twin-agreement simulator, append-only decision log.",
      },
    ],
  }),
  component: ApprovalsPage,
});

function ApprovalRoutingDiagram() {
  return (
    <div className="relative rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Requisition → routing rules → workflow
        </div>
        <span className="rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-violet-600">
          Atomic
        </span>
      </div>

      <div className="rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3 text-center">
        <div className="text-xs text-muted-foreground">New Requisition · REQ-2026-0418</div>
        <div className="text-sm font-semibold text-foreground">Lab benches, €24,800 · R&D</div>
      </div>

      <div className="my-3 mx-auto h-6 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-blue-600">Matched rule · p8</div>
        <code className="mt-1 block font-mono text-[11px] text-blue-700">currency = 'EUR'</code>
        <div className="mt-1 text-xs text-blue-700/80">→ Workflow: CFO sign-off v1</div>
      </div>

      <div className="my-3 mx-auto h-6 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />

      <div className="grid grid-cols-3 gap-2 text-xs">
        <Step tone="neutral" label="START" />
        <Step tone="violet" label="Finance" active />
        <Step tone="cyan" label="CFO" />
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-[hsl(210_40%_98%)] px-3 py-2 text-xs text-muted-foreground">
        <span>routing_rule_id pinned</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">FOR UPDATE lock</span>
      </div>
    </div>
  );
}

function Step({ tone, label, active }: { tone: "neutral" | "violet" | "cyan"; label: string; active?: boolean }) {
  const tones = {
    neutral: "border-border bg-white text-muted-foreground",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
  } as const;
  return (
    <div className={`rounded-lg border p-2 text-center ${tones[tone]} ${active ? "ring-2 ring-violet-300" : ""}`}>
      <div className="font-medium">{label}</div>
    </div>
  );
}

function BuilderNode({ tone, label }: { tone: "blue" | "violet" | "emerald"; label: string }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  } as const;
  return (
    <div className={`rounded-md border px-2 py-1.5 text-center text-[11px] font-medium ${tones[tone]}`}>
      {label}
    </div>
  );
}

const features = [
  { icon: GitBranch, iconBg: "bg-blue-50", iconColor: "text-blue-500", title: "Threshold-Based Routing", body: "Route by dollar amount automatically. Set as many tiers as you need: manager under $5K, VP under $25K, CFO above that." },
  { icon: Layers, iconBg: "bg-violet-50", iconColor: "text-violet-500", title: "Multi-Dimensional Rules", body: "Route by department, project, cost center, vendor type, or any custom field. Combine conditions with AND/OR logic for precise control." },
  { icon: MessageSquare, iconBg: "bg-violet-50", iconColor: "text-violet-500", title: "Slack-Native Approvals", body: "Approvers see full context and approve or deny with Slack buttons. No portal login required. Budget impact and vendor history included." },
  { icon: Zap, iconBg: "bg-amber-50", iconColor: "text-amber-500", title: "Post-Approval Automation", body: "Once approved, configurable actions kick in automatically. Auto-dispatch PO to vendor, stage for procurement review, or let the requester download." },
  { icon: Clock, iconBg: "bg-blue-50", iconColor: "text-blue-500", title: "Escalation & Auto-Delegation", body: "Auto-escalate if no response in X hours. Set delegates for PTO coverage. Reassign approvers when someone leaves the company." },
  { icon: ShieldCheck, iconBg: "bg-emerald-50", iconColor: "text-emerald-500", title: "Budget Guardrails", body: "Approvers see real-time budget impact before they approve. Over-budget requests can be blocked automatically or flagged for review." },
  { icon: FileText, iconBg: "bg-slate-100", iconColor: "text-slate-500", title: "Complete Audit Trail", body: "Every routing decision, approval, rejection, override, re-route, and workflow change is permanently logged with timestamps, users, and reasons. Never edited, never deleted." },
  { icon: AlertTriangle, iconBg: "bg-amber-50", iconColor: "text-amber-500", title: "Conflict & Loop Prevention", body: "Overlapping routing rules are caught before you save. Circular approval loops are blocked at runtime. If a re-route would create a cycle, the system flags it for an admin." },
];

const pains = [
  { icon: AlertTriangle, title: "Can't Change Without Breaking Things", body: "Someone leaves the company. A VP goes on PTO. Your org restructures. In most tools, changing an approval chain means calling your admin or filing a support ticket, and hoping nothing in-flight breaks. You need workflows you can update in minutes, not days.", border: "border-l-red-400", iconColor: "text-red-500" },
  { icon: MessageSquare, title: "Lost Context", body: "Approvers get a ping with no context. They have to go hunt for the details before they can decide.", border: "border-l-amber-400", iconColor: "text-amber-500" },
  { icon: Shuffle, title: "Post-Approval Chaos", body: "The request got approved... now what? Someone has to manually create the PO and send it to the vendor.", border: "border-l-violet-400", iconColor: "text-violet-500" },
];

function ApprovalsPage() {
  return (
    <>
      <ProductHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product" },
          { label: "Approvals & Workflows" },
        ]}
        badge="Approvals & Workflows"
        title={
          <>
            Approvals that match how your{" "}
            <span className="text-brand-gradient">company actually works.</span>
          </>
        }
        subtitle="Dynamic approval routing by dollar threshold, department, project, or any dimension you need. Change workflows on the fly with full version control. Let approvers re-route to whoever needs to weigh in. No code. No consultants. Just workflows that adapt as fast as your company does."
        visual={<ApprovalRoutingDiagram />}
      />

      <Section id="problem" size="tight">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="danger">The problem this solves</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Approvals shouldn't be a guessing game
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Most procurement tools give you a single linear chain. Real companies need
              multi-dimensional routing, branching mid-chain, exception handling that doesn't break
              the audit trail, and a way to answer "why did this requisition take this path?" without
              spelunking through logs.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-border border-l-4 ${p.border} bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg`}
            >
              <div className="grid size-10 place-items-center rounded-lg border border-border bg-[hsl(210_40%_98%)]">
                <p.icon className={`size-4 ${p.iconColor}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="two-layer">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Architecture</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              A <span className="text-brand-gradient">two-layer</span> approval engine
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Routing rules decide <em>which</em> workflow runs. The workflow library decides{" "}
              <em>how</em> the chain unfolds. Together, they handle everything from simple manager
              sign-offs to multi-level, conditional approval chains.
            </p>
          </Reveal>
        </div>
        <div className="mt-12">
          <TwoLayerEngine />
        </div>
      </Section>


      <Section id="evolve">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Workflows that evolve with you</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Change Anything. <span className="text-brand-gradient">Break Nothing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Companies change. People leave, teams restructure, budgets shift. Your approval
              workflows need to keep up, without losing the audit trail of what was in place when
              past decisions were made.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Card 1, Version Control */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="grid size-12 place-items-center rounded-xl bg-violet-50 text-violet-500">
                <GitBranch className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Edit Workflows Live, With Version Control
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Admins can modify approval workflows at any time, re-assign approvers, adjust
                thresholds, add new routing rules. Every change is versioned automatically. You can
                see exactly what the workflow looked like when any past approval was made, who
                changed it, and why. Think of it as git for your approval logic.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Version history
                </div>
                <div className="mt-2 divide-y divide-border">
                  <div className="flex items-start gap-3 py-2">
                    <span className="mt-0.5 rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-700">
                      v3 · current
                    </span>
                    <div className="text-xs text-muted-foreground">
                      Added CFO approval for &gt;$50k, May 1, 2026 by Admin
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <span className="mt-0.5 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      v2
                    </span>
                    <div className="text-xs text-muted-foreground">
                      Replaced J. Chen with M. Patel (PTO coverage), Apr 15, 2026 by Admin
                    </div>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <span className="mt-0.5 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-600">
                      v1
                    </span>
                    <div className="text-xs text-muted-foreground">
                      Initial workflow created, Mar 1, 2026 by Admin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2, Dynamic Re-Routing */}
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-500">
                <RouteIcon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Dynamic Approver Re-Routing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                When an approval lands on someone's desk, they can re-route it to anyone else they
                think should weigh in, a subject matter expert, a project lead, or a colleague who
                knows the vendor better. The original approver stays in the loop, and the full
                routing chain is logged for audit.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
                <div className="rounded-lg border border-border bg-white p-3">
                  <div className="text-xs text-muted-foreground">Approval pending</div>
                  <div className="text-sm font-semibold text-foreground">Sarah · Procurement Lead</div>
                  <div className="mt-2 flex gap-2">
                    <button className="flex-1 rounded-md bg-emerald-500 px-2 py-1.5 text-xs font-medium text-white">
                      Approve
                    </button>
                    <button className="flex-1 rounded-md border border-blue-300 bg-white px-2 py-1.5 text-xs font-medium text-blue-600">
                      Route to…
                    </button>
                  </div>
                </div>
                <div className="my-2 flex justify-center">
                  <ArrowRight className="size-4 rotate-90 text-muted-foreground" />
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <div className="text-xs text-blue-700">Routed to</div>
                  <div className="text-sm font-semibold text-foreground">Dr. Patel · Lab Director</div>
                  <div className="mt-1 text-[11px] italic text-muted-foreground">
                    "Needs PI sign-off on reagent specification."
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Check className="size-3 text-emerald-500" />
                  <span>Routed by Sarah → Approved by Dr. Patel → Logged.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3, No-Code Complexity */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="grid size-12 place-items-center rounded-xl bg-cyan-50 text-cyan-500">
                <Blocks className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No-Code Complexity
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Conditional branches by amount, department, project, or
                custom field. Sequential chains with escalation rules. Auto-delegation during PTO.
                You can build workflows this complex without writing a line of code or hiring a
                consultant, the visual builder makes it obvious.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
                <div className="flex justify-center">
                  <BuilderNode tone="violet" label="Request" />
                </div>
                <div className="mx-auto my-1 h-3 w-px bg-gradient-to-b from-blue-500 to-violet-500" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <BuilderNode tone="blue" label="If < $10k" />
                    <BuilderNode tone="violet" label="Manager" />
                    <BuilderNode tone="emerald" label="Auto-approve" />
                  </div>
                  <div className="space-y-2">
                    <BuilderNode tone="blue" label="If ≥ $10k" />
                    <BuilderNode tone="violet" label="VP" />
                    <BuilderNode tone="violet" label="CFO (>$50k)" />
                  </div>
                </div>
                <div className="mx-auto my-1 h-3 w-px bg-gradient-to-b from-violet-500 to-emerald-500" />
                <div className="flex justify-center">
                  <BuilderNode tone="emerald" label="PO Generated" />
                </div>
                <div className="mt-2 text-center text-[11px] text-muted-foreground">+ Add Step</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Coming Soon banner */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 sm:flex-row sm:items-center">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-white text-blue-500">
              <Building2 className="size-5" />
            </div>
            <p className="text-sm text-foreground">
              <span className="font-semibold">Coming Soon:</span>{" "}
              <span className="text-muted-foreground">
                Upload your org chart and Sanyya will auto-map approval routing to your reporting
                structure. As your org changes, your workflows update automatically.
              </span>
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="simulator">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Test your workflows</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Dry-run before you ship
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Test any scenario before it goes live. Enter a department, amount, currency, and
              vendor. Sanyya shows you exactly which routing rule matches, which workflow runs,
              and who would need to approve.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <Reveal delay={0.1}>
            <DryRunSimulator />
          </Reveal>
        </div>
      </Section>

      <Section id="features" className="bg-[hsl(210_40%_98%)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge>Capabilities</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything You Need to Govern Spend
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-secondary p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`grid size-10 shrink-0 place-items-center rounded-lg ${f.iconBg}`}>
                  <f.icon className={`size-5 ${f.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cta-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to build workflows that{" "}
              <span className="text-brand-gradient">actually work?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <a
                href="#book-demo"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-base font-medium text-white shadow-lg shadow-amber-500/30 transition-all duration-300 md:hover:-translate-y-0.5 md:hover:from-amber-400"
              >
                Book a Demo
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

    </>
  );
}
