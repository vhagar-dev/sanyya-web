import { useEffect, useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const hatch = (rgb: string) =>
  `repeating-linear-gradient(135deg, rgba(${rgb},0.12) 0 5px, transparent 5px 10px)`;

const cardShell = "bg-card/60 border border-border rounded-lg p-5 flex h-[360px] flex-col gap-3";

function CardLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] text-muted-foreground">{children}</div>;
}

const missing = [
  { name: "Charles River study", note: "in flight, unbilled", amt: "$620K" },
  { name: "WuXi contract", note: "signed, not invoiced", amt: "$480K" },
  { name: "JAX order", note: "delivered, no invoice", amt: "$200K" },
];

function FounderGraphic() {
  return (
    <div className={cardShell}>
      <CardLabel>Paid vs committed</CardLabel>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between text-[11px]">
          <span className="text-muted-foreground">What accounting shows</span>
          <span className="tabular-nums text-muted-foreground">$2.1M</span>
        </div>
        <div className="h-[22px] w-full overflow-hidden rounded-md bg-secondary">
          <div className="h-full w-[62%] rounded-md bg-muted-foreground/30" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between text-[11px]">
          <span className="font-semibold text-foreground">What we&apos;ve actually committed</span>
          <span className="tabular-nums" style={{ color: "#2563eb" }}>
            $3.4M
          </span>
        </div>
        <div className="flex h-[22px] w-full overflow-hidden rounded-md bg-secondary">
          <div className="h-full w-[62%] bg-muted-foreground/30" />
          <div
            className="h-full w-[38%] rounded-r-md border border-dashed border-violet-300"
            style={{ backgroundImage: hatch("37,99,235") }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <div className="tabular-nums text-[9px] text-muted-foreground">Not in the books</div>
        {missing.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between gap-3 rounded-md border border-dashed border-violet-200 px-2.5 py-1.5"
            style={{ backgroundImage: hatch("37,99,235") }}
          >
            <div className="min-w-0">
              <div className="truncate text-[11px] font-medium text-foreground">{m.name}</div>
              <div className="truncate text-[10px] text-muted-foreground">{m.note}</div>
            </div>
            <span className="tabular-nums text-[11px]" style={{ color: "#2563eb" }}>
              {m.amt}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs font-semibold text-foreground">Runway</span>
        <span className="flex items-baseline gap-2 tabular-nums">
          <span className="text-xs text-muted-foreground">was 11 mo</span>
          <span className="text-lg font-semibold" style={{ color: "#2563eb" }}>
            8 mo
          </span>
        </span>
      </div>
    </div>
  );
}

const chain = [
  { name: "Quote", chip: "3 PDFs in email", where: "Inbox" },
  { name: "PO", chip: "a Word doc", where: "Someone's desktop" },
  { name: "Approval", chip: "a DM, unread", where: "Slack" },
  { name: "Receive", chip: "no record kept", where: "Nowhere" },
  { name: "Invoice", chip: "arrives anyway", where: "Inbox again" },
];

function LabGraphic() {
  return (
    <div className={cardShell}>
      <CardLabel>Where the process lives</CardLabel>

      <div className="flex flex-1 flex-col">
        {chain.map((s, i) => {
          const isReceive = s.name === "Receive";
          const isApproval = s.name === "Approval";
          const isInvoice = s.name === "Invoice";
          const topStub = i !== 0 && !isReceive;
          const bottomLine = i !== chain.length - 1 && !isApproval;
          return (
            <div key={s.name} className="grid grid-cols-[14px_62px_1fr] gap-[10px]">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-px flex-none",
                    topStub && "border-l border-dashed border-slate-300",
                  )}
                  style={{ height: 10 }}
                />
                {isReceive ? (
                  <div
                    className="flex size-[14px] flex-none items-center justify-center rounded-md border border-violet-300 text-[9px] leading-none"
                    style={{ color: "#7c3aed" }}
                  >
                    ×
                  </div>
                ) : (
                  <div className="size-[7px] flex-none rounded-full bg-muted-foreground/30" />
                )}
                <div
                  className={cn(
                    "w-px flex-1",
                    bottomLine && "border-l border-dashed border-slate-300",
                  )}
                  style={{ minHeight: 16 }}
                />
              </div>

              <div className="pt-1">
                <div
                  className="text-xs font-semibold"
                  style={isReceive ? { color: "#7c3aed" } : undefined}
                >
                  {s.name}
                </div>
                <div className="mt-0.5 tabular-nums text-[9px] text-muted-foreground">
                  {s.where}
                </div>
              </div>

              <div className={cn("self-start pt-1", !isInvoice && "pb-3")}>
                <div
                  className={cn(
                    "inline-block rounded-md px-2 py-1 tabular-nums text-[10px]",
                    isReceive
                      ? "border border-dashed border-violet-300"
                      : "border border-border text-muted-foreground",
                  )}
                  style={
                    isReceive
                      ? { backgroundImage: hatch("124,58,237"), color: "#7c3aed" }
                      : undefined
                  }
                >
                  {s.chip}
                </div>
                {isReceive && (
                  <div className="mt-1 text-[10px] text-muted-foreground">the chain stops here</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">Tools involved</span>
        <span className="tabular-nums text-[11px]" style={{ color: "#7c3aed" }}>
          5 steps, 5 different places
        </span>
      </div>
    </div>
  );
}

const matchRows = [
  {
    eyebrow: "Invoice",
    value: "Cytiva · INV-8231",
    note: "$12,480, due in 4 days",
    ok: true,
  },
  {
    eyebrow: "Purchase order",
    value: "a Word doc, somewhere",
    note: "nobody can find it",
    ok: false,
  },
  {
    eyebrow: "Receipt",
    value: "did it arrive?",
    note: "asked the lab manager, 2 days ago",
    ok: false,
  },
];

function FinanceGraphic() {
  return (
    <div className={cardShell}>
      <div className="flex items-center justify-between">
        <CardLabel>Three-way match</CardLabel>
        <span className="tabular-nums text-[10px]" style={{ color: "#0e7490" }}>
          1 of 3
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[16px_1fr] gap-[10px]">
        <div className="my-1 rounded-l-lg border-b border-l border-t border-border" />
        <div className="flex flex-col gap-2.5">
          {matchRows.map((r) => (
            <div
              key={r.eyebrow}
              className={cn(
                "flex items-center justify-between gap-3 rounded-md px-3 py-2.5",
                r.ok ? "border border-border" : "border border-dashed border-slate-300",
              )}
              style={r.ok ? undefined : { backgroundImage: hatch("100,116,139") }}
            >
              <div className="min-w-0">
                <div className="tabular-nums text-[9px] text-muted-foreground">{r.eyebrow}</div>
                <div className="truncate text-xs font-medium text-foreground">{r.value}</div>
                <div className="truncate text-[10px] text-muted-foreground">{r.note}</div>
              </div>
              <span
                className={cn(
                  "flex size-5 flex-none items-center justify-center rounded-full text-[11px] leading-none",
                  r.ok ? "bg-violet-50" : "bg-secondary text-muted-foreground",
                )}
                style={r.ok ? { color: "#0e7490" } : undefined}
                aria-hidden
              >
                {r.ok ? "✓" : "×"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3 text-[11px]">
        <span className="text-muted-foreground">Payment</span>
        <span
          className="rounded-md border border-violet-200 px-2 py-0.5 tabular-nums text-[10px]"
          style={{ color: "#0e7490" }}
        >
          Cannot verify
        </span>
      </div>
    </div>
  );
}

type Role = {
  slug: "founder" | "lab" | "finance";
  answer: string;
  name: string;
  accent: string;
  question: string;
  body: string;
  moments: { title: string; body: string }[];
  Graphic: ComponentType;
};

const roles: Role[] = [
  {
    slug: "founder",
    answer: "You answer for the number",
    name: "Founder / CEO",
    accent: "#2563eb",
    question: "The board asks how much you spent on R&D last quarter.",
    body: "Then they ask how much of it was clinical. You rebuild both numbers from Charles River and JAX invoices and your own memory, and you are still not certain they are right.",
    moments: [
      {
        title: "You have committed more than your books show.",
        body: "Accounting reflects what you paid, not what you promised. Your runway is shorter than your spreadsheet says.",
      },
      {
        title: "What did regulatory consulting cost us last quarter?",
        body: "You will know once someone goes back through the invoices, probably next week.",
      },
      {
        title: "A finance lead joins and asks how purchasing works.",
        body: "There is nothing to hand them except a folder and a story.",
      },
    ],
    Graphic: FounderGraphic,
  },
  {
    slug: "lab",
    answer: "You place the orders",
    name: "Lab & Operations",
    accent: "#7c3aed",
    question: "Charles River wants a formal PO before they will start.",
    body: "You build one by hand in a doc, send it, and hope you remember what happens next.",
    moments: [
      {
        title:
          "Three quotes from Thermo Fisher, Qiagen, and Bio-Rad, and you need to compare them.",
        body: "Download each one, open them side by side, rebuild it in a spreadsheet, then do it again next month.",
      },
      {
        title: "Someone needs approval and does not know who to ask.",
        body: "The request sits in a DM while the experiment waits.",
      },
      {
        title: "The Qiagen order arrived. Now what?",
        body: "There is no simple way to record what came in, so nobody knows what is still outstanding.",
      },
    ],
    Graphic: LabGraphic,
  },
  {
    slug: "finance",
    answer: "You close the books",
    name: "Finance",
    accent: "#0e7490",
    question: "Can I pay this Cytiva invoice?",
    body: "You message the lab manager and wait, because nobody can tell you whether it actually arrived.",
    moments: [
      {
        title: "Who approved this?",
        body: "You search a dense Slack thread and hope the answer is somewhere in it.",
      },
      {
        title: "What arrived but has not been billed yet?",
        body: "Accruals become educated guesses, every month.",
      },
      {
        title: "Did we pay this twice?",
        body: "You find out later, if you find out at all.",
      },
    ],
    Graphic: FinanceGraphic,
  },
];

export function WhichVersion() {
  const [open, setOpen] = useState<Role["slug"]>("founder");
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (roles.some((r) => r.slug === hash)) {
      setOpen(hash as Role["slug"]);
    }
  }, []);

  const select = (slug: Role["slug"]) => {
    setOpen(slug);
  };

  const role = roles.find((r) => r.slug === open) ?? roles[0];
  const { Graphic } = role;
  const problems = [{ title: role.question, body: role.body }, ...role.moments];

  return (
    <section className="bg-background" id="where-you-sit">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
        <h2 className="font-display text-left text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] tracking-[-0.03em] text-foreground">
          You&apos;ve lived this. Which version?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {roles.map((r) => {
            const active = r.slug === open;
            return (
              <button
                key={r.slug}
                id={r.slug}
                type="button"
                onClick={() => select(r.slug)}
                aria-pressed={active}
                className={cn(
                  "scroll-mt-[80px] rounded-md border px-4 py-4 text-left transition-colors duration-200 md:px-5 md:py-5",
                  active
                    ? "border-brand bg-brand/[0.07] text-foreground"
                    : "border-border bg-card text-foreground md:hover:border-foreground/30",
                )}
              >
                <div
                  className={cn(
                    "text-lg font-semibold tracking-tight md:text-xl",
                    active && "text-brand",
                  )}
                >
                  {r.name}
                </div>
                <div className={cn("mt-1.5 text-sm md:text-base", "text-muted-foreground")}>
                  {r.answer}
                </div>
              </button>
            );
          })}
        </div>

        <div ref={panelRef} className="mt-10" style={{ overflowAnchor: "none" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={role.slug}
              className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_420px] lg:gap-16"
            >
              <div className="flex flex-col">
                {problems.map((p, i) => {
                  const lead = i === 0;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "max-w-[62ch]",
                        lead ? "pb-6" : "border-t border-border/70 py-6 last:pb-0",
                      )}
                    >
                      <p className="font-display text-pretty text-[clamp(1.125rem,1.8vw,1.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground">
                        {p.title}
                      </p>
                      <p className="mt-3 max-w-[52ch] text-pretty text-[15px] font-normal leading-[1.6] text-muted-foreground">
                        {p.body}
                      </p>

                      {lead && (
                        <div className="mt-8 w-full max-w-sm lg:hidden">
                          <Graphic />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <div className="sticky top-16 w-full">
                  <Graphic />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
