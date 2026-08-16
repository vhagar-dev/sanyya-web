import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { BoardSlideArtifact, QuotesArtifact, InvoiceArtifact } from "./ProblemArtifacts";

type RoleKey = "founder" | "ops" | "finance";

const roles: { key: RoleKey; label: string; descriptor: string }[] = [
  { key: "founder", label: "Founder / CEO", descriptor: "You answer for the number" },
  { key: "ops", label: "Lab & Operations", descriptor: "You place the orders" },
  { key: "finance", label: "Finance", descriptor: "You close the books" },
];

const artifacts: Record<RoleKey, React.ReactNode> = {
  founder: <BoardSlideArtifact />,
  ops: <QuotesArtifact />,
  finance: <InvoiceArtifact />,
};

const problems: Record<RoleKey, { moment: string; cost: string }[]> = {
  founder: [
    {
      moment: "The board asks what the animal study has cost so far.",
      cost: "You rebuild the number from Charles River and JAX invoices and your own memory, and you are still not certain it is right.",
    },
    {
      moment: "You have committed more than your books show.",
      cost: "Accounting reflects what you paid, not what you promised. Your runway is shorter than your spreadsheet says.",
    },
    {
      moment: "What did regulatory consulting cost us last quarter?",
      cost: "You will know once someone goes back through the invoices, probably next week.",
    },
    {
      moment: "A finance lead joins and asks how purchasing works.",
      cost: "There is nothing to hand them except a folder and a story.",
    },
  ],
  ops: [
    {
      moment: "Three quotes from Thermo Fisher, Qiagen, and Bio-Rad, and you need to compare them.",
      cost: "Download each one, open them side by side, rebuild it in a spreadsheet, then do it again next month.",
    },
    {
      moment: "Charles River wants a formal PO before they will start.",
      cost: "You build one by hand in a doc, send it, and hope you remember what happens next.",
    },
    {
      moment: "Someone needs approval and does not know who to ask.",
      cost: "The request sits in a DM while the experiment waits.",
    },
    {
      moment: "The Qiagen order arrived. Now what?",
      cost: "There is no simple way to record what came in, so nobody knows what is still outstanding.",
    },
  ],
  finance: [
    {
      moment: "Can I pay this Cytiva invoice?",
      cost: "You message the lab manager and wait, because nobody can tell you whether it actually arrived.",
    },
    {
      moment: "Who approved this?",
      cost: "You search a dense Slack thread and hope the answer is somewhere in it.",
    },
    {
      moment: "What arrived but has not been billed yet?",
      cost: "Accruals become educated guesses, every month.",
    },
    {
      moment: "Did we pay this twice?",
      cost: "You find out later, if you find out at all.",
    },
  ],
};

export function RoleProblems() {
  const [role, setRole] = useState<RoleKey>("founder");
  const [lead, ...rest] = problems[role];

  return (
    <div className="relative bg-secondary/40">
      <Section id="where-you-sit">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-balance font-display text-4xl sm:text-5xl md:text-6xl">
              Where do you sit?
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {roles.map((r) => {
              const active = r.key === role;
              return (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRole(r.key)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-2xl px-6 py-6 text-left transition-all duration-300 md:px-7 md:py-7",
                    active
                      ? "bg-brand-gradient text-white shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]"
                      : "border border-border bg-card/60 text-foreground md:hover:border-foreground/30 md:hover:bg-card md:hover:-translate-y-0.5",
                  )}
                >
                  <div className="text-lg font-semibold tracking-tight md:text-xl">{r.label}</div>
                  <div
                    className={cn(
                      "mt-1.5 text-sm md:text-base",
                      active ? "text-white/80" : "text-muted-foreground",
                    )}
                  >
                    {r.descriptor}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 md:grid-cols-3 md:gap-6"
            >
              {/* Lead card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-border bg-card/70 p-7 md:col-span-3 md:p-10"
              >
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <div>
                    <p className="text-balance text-2xl font-display text-foreground md:text-3xl">
                      {lead.moment}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {lead.cost}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-sm">{artifacts[role]}</div>
                  </div>
                </div>
              </motion.div>

              {/* Remaining */}
              {rest.map((p, i) => (
                <motion.div
                  key={p.moment}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 md:p-8 md:hover:-translate-y-1 md:hover:shadow-lg"
                >
                  <p className="text-balance text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {p.moment}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.cost}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}
