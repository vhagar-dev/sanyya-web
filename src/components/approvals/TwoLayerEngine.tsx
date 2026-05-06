import { GlassCard } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Filter, GitBranch } from "lucide-react";

const factVocab = ["amount", "currency", "department", "project", "vendor", "urgency", "requested_by"];

export function TwoLayerEngine() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Reveal>
        <GlassCard className="h-full">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
              <Filter className="size-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Layer 1
              </div>
              <h3 className="text-lg font-semibold text-foreground">Routing rules</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Set conditions based on amount, department, project, vendor, urgency, or any custom
            field. Sanyya evaluates each request against your rules in priority order and routes it
            to the right workflow automatically. A default catch-all ensures nothing slips through.
          </p>
          <div className="mt-4 rounded-xl border border-border bg-[hsl(210_40%_98%)] p-3">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Route by
            </div>
            <div className="flex flex-wrap gap-1.5">
              {factVocab.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-[11px] text-blue-700"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <RuleRow priority={5} cond="Amount < $1,000" target="Auto-approve" />
            <RuleRow priority={10} cond="Amount > $50K AND Department = Marketing" target="Marketing CFO chain" />
            <RuleRow priority={20} cond="Vendor is pre-approved AND Amount < $10K" target="Fast-track" />
            <RuleRow priority={999} cond="Everything else" target="Standard chain" muted />
          </div>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.1}>
        <GlassCard className="h-full">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-violet-50 text-violet-600">
              <GitBranch className="size-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Layer 2
              </div>
              <h3 className="text-lg font-semibold text-foreground">Workflow library</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Build reusable approval workflows with any combination of approvers, conditions, and
            branches. Assign multiple routing rules to the same workflow. Every workflow is
            versioned, so admin edits never break requests that are already in-flight.
          </p>
          <div className="mt-4 rounded-xl border border-border bg-[hsl(210_40%_98%)] p-4">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Example: tiered with branch
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Node tone="neutral">START</Node>
              <Arrow />
              <Node tone="blue">Manager</Node>
              <Arrow />
              <Node tone="amber">IF amount &gt; $5k</Node>
              <Arrow />
              <Node tone="violet">Director</Node>
              <Arrow />
              <Node tone="cyan">CFO</Node>
              <Arrow />
              <Node tone="neutral">END</Node>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              <span>v3 · locked when request enters</span>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );
}

function RuleRow({
  priority,
  cond,
  target,
  muted,
}: {
  priority: number;
  cond: string;
  target: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs ${muted ? "bg-[hsl(210_40%_98%)]" : "bg-white"}`}
    >
      <span className="rounded bg-[hsl(210_40%_94%)] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
        p{priority}
      </span>
      <code className="flex-1 truncate font-mono text-[11px] text-foreground">{cond}</code>
      <span className="text-muted-foreground">→</span>
      <span className="text-foreground">{target}</span>
    </div>
  );
}

function Arrow() {
  return <span className="text-muted-foreground">→</span>;
}

function Node({ children, tone }: { children: React.ReactNode; tone: "neutral" | "blue" | "violet" | "cyan" | "amber" }) {
  const tones = {
    neutral: "border-border bg-[hsl(210_40%_98%)] text-muted-foreground",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  } as const;
  return (
    <span className={`rounded-md border px-2 py-1 font-medium ${tones[tone]}`}>{children}</span>
  );
}
