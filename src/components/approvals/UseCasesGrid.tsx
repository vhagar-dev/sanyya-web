import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  Zap,
  Building2,
  Handshake,
  Globe,
  FastForward,
  GitFork,
  UserPlus,
  PlayCircle,
} from "lucide-react";

const cases = [
  {
    icon: Zap,
    cond: "amount < $1,000",
    outcome: "Auto-approve",
    detail: "Default rule → workflow with no APPROVER (Start → End).",
    tone: "emerald",
  },
  {
    icon: Building2,
    cond: "department = 'mkt' AND amount > $50k",
    outcome: "Director → Finance → CFO",
    detail: "Three-step workflow snapshotted at instance creation.",
    tone: "blue",
  },
  {
    icon: Handshake,
    cond: "vendor IN preapproved AND amount < $10k",
    outcome: "Fast-track",
    detail: "Skip the standard chain for trusted vendor relationships.",
    tone: "violet",
  },
  {
    icon: Globe,
    cond: "currency = 'EUR'",
    outcome: "CFO sign-off",
    detail: "Currency-driven routing, no manual override needed.",
    tone: "cyan",
  },
  {
    icon: FastForward,
    cond: "urgency >= HIGH",
    outcome: "Skip first approver",
    detail: "CONDITION node match → skip; no-match → standard chain.",
    tone: "amber",
  },
  {
    icon: GitFork,
    cond: "amount > $5k",
    outcome: "Director, else Manager",
    detail: "CONDITION node branching with no-match handle on FALSE.",
    tone: "blue",
  },
  {
    icon: UserPlus,
    cond: "manager.allow_reroute = true",
    outcome: "Reroute to senior engineer",
    detail: "Engine inserts a synthetic node_instance for the new assignee.",
    tone: "violet",
  },
  {
    icon: PlayCircle,
    cond: "hypothetical: $25k EUR from Sarah",
    outcome: "Dry-run preview",
    detail: "Simulator shows matched rule, workflow, and predicted chain.",
    tone: "cyan",
  },
] as const;

const toneMap = {
  emerald: { chip: "border-emerald-200 bg-emerald-50 text-emerald-700", icon: "text-emerald-600 bg-emerald-50" },
  blue: { chip: "border-blue-200 bg-blue-50 text-blue-700", icon: "text-blue-600 bg-blue-50" },
  violet: { chip: "border-violet-200 bg-violet-50 text-violet-700", icon: "text-violet-600 bg-violet-50" },
  cyan: { chip: "border-cyan-200 bg-cyan-50 text-cyan-700", icon: "text-cyan-600 bg-cyan-50" },
  amber: { chip: "border-amber-200 bg-amber-50 text-amber-700", icon: "text-amber-600 bg-amber-50" },
} as const;

export function UseCasesGrid() {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2">
      {cases.map((c) => {
        const t = toneMap[c.tone];
        return (
          <StaggerItem key={c.cond}>
            <div className="h-full rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className={`grid size-9 shrink-0 place-items-center rounded-lg ${t.icon}`}>
                  <c.icon className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${t.chip}`}>
                      IF {c.cond}
                    </span>
                    <span className="text-xs text-muted-foreground">→</span>
                    <span className="text-sm font-semibold text-foreground">{c.outcome}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
