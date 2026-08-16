import { useMemo, useState } from "react";
import { GlassCard } from "@/components/site/ui";
import { PlayCircle } from "lucide-react";

type Facts = {
  department: "mkt" | "rnd" | "ops";
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  vendor: "preapproved" | "standard" | "new";
};

type RuleMatch = {
  ruleId: string;
  priority: number;
  predicate: string;
  workflow: string;
  chain: string[];
};

function evaluate(f: Facts): RuleMatch {
  if (f.vendor === "preapproved" && f.amount < 10000) {
    return {
      ruleId: "rule_fasttrack",
      priority: 5,
      predicate: "vendor IN preapproved AND amount < $10,000",
      workflow: "Fast-track v2",
      chain: ["Manager"],
    };
  }
  if (f.currency === "EUR") {
    return {
      ruleId: "rule_eur_cfo",
      priority: 8,
      predicate: "currency = 'EUR'",
      workflow: "CFO sign-off v1",
      chain: ["Finance", "CFO"],
    };
  }
  if (f.department === "mkt" && f.amount > 50000) {
    return {
      ruleId: "rule_mkt_large",
      priority: 10,
      predicate: "department = 'mkt' AND amount > $50,000",
      workflow: "Marketing tier-3 v4",
      chain: ["Marketing Director", "Finance", "CFO"],
    };
  }
  if (f.amount < 1000) {
    return {
      ruleId: "rule_auto",
      priority: 100,
      predicate: "amount < $1,000",
      workflow: "Auto-approve v1",
      chain: [],
    };
  }
  return {
    ruleId: "rule_default",
    priority: 999,
    predicate: "default (catch-all)",
    workflow: "Standard chain v3",
    chain: ["Manager", "Director"],
  };
}

export function DryRunSimulator() {
  const [facts, setFacts] = useState<Facts>({
    department: "mkt",
    amount: 25000,
    currency: "EUR",
    vendor: "standard",
  });
  const result = useMemo(() => evaluate(facts), [facts]);

  return (
    <GlassCard hoverable={false}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PlayCircle className="size-4 text-violet-600" />
          <span className="tabular-nums text-[10px] text-muted-foreground">Dry-run simulator</span>
        </div>
        <span className="rounded-md border border-violet-200 bg-violet-50 px-2 py-0.5 tabular-nums text-[10px] text-violet-800">
          Simulation only
        </span>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div className="tabular-nums text-[10px] text-muted-foreground">Test scenario</div>
          <Field label="Department">
            <select
              value={facts.department}
              onChange={(e) =>
                setFacts({ ...facts, department: e.target.value as Facts["department"] })
              }
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
            >
              <option value="mkt">Marketing</option>
              <option value="rnd">R&D</option>
              <option value="ops">Operations</option>
            </select>
          </Field>
          <Field label="Amount (USD-eq)">
            <input
              type="number"
              value={facts.amount}
              onChange={(e) => setFacts({ ...facts, amount: Number(e.target.value) || 0 })}
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
            />
          </Field>
          <Field label="Currency">
            <select
              value={facts.currency}
              onChange={(e) =>
                setFacts({ ...facts, currency: e.target.value as Facts["currency"] })
              }
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </Field>
          <Field label="Vendor">
            <select
              value={facts.vendor}
              onChange={(e) => setFacts({ ...facts, vendor: e.target.value as Facts["vendor"] })}
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
            >
              <option value="preapproved">Pre-approved</option>
              <option value="standard">Standard</option>
              <option value="new">New vendor</option>
            </select>
          </Field>
        </div>

        <div className="rounded-xl border border-border bg-secondary p-4">
          <div className="tabular-nums text-[10px] text-muted-foreground">What would happen</div>

          <div className="mt-3 rounded-lg border border-border bg-card p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Rule matched</span>
              <span className="rounded bg-violet-50 px-1.5 py-0.5 tabular-nums text-[10px] text-violet-800">
                p{result.priority}
              </span>
            </div>
            <code className="mt-1 block tabular-nums text-[11px] text-foreground">
              {result.predicate}
            </code>
          </div>

          <div className="mt-3 rounded-lg border border-border bg-card p-3">
            <div className="text-xs text-muted-foreground">Workflow</div>
            <div className="mt-1 text-sm font-semibold text-foreground">{result.workflow}</div>
          </div>

          <div className="mt-3">
            <div className="mb-2 text-xs text-muted-foreground">Approval path</div>
            {result.chain.length === 0 ? (
              <div className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-sm text-violet-800">
                Auto-approved, no approvers required
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                {result.chain.map((a, i) => (
                  <span key={a} className="inline-flex items-center gap-2">
                    <span className="rounded-md border border-violet-200 bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700">
                      {a}
                    </span>
                    {i < result.chain.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
