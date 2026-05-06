import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ImageIcon, FileText, Package, Receipt, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, SectionBadge } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export function ThreeWayMatchInteractive() {
  const [showDiscrepancy, setShowDiscrepancy] = useState(false);

  return (
    <Section id="tether-in-action">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge tone={showDiscrepancy ? "danger" : "success"}>
            {showDiscrepancy ? "Discrepancy Detected" : "3-Way Match Complete"}
          </SectionBadge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The digital tether <span className="text-brand-gradient">in action</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {showDiscrepancy
              ? "Stop overpayment before it happens. Sanyya flags when invoices don't match the goods on your dock."
              : "PO, packing slip, and invoice, digitally linked into one verified record, ready for instant approval."}
          </p>

          {/* Toggle */}
          <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/40 p-1">
            <button
              onClick={() => setShowDiscrepancy(false)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                !showDiscrepancy
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Check className="size-4" /> Perfect Match
            </button>
            <button
              onClick={() => setShowDiscrepancy(true)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                showDiscrepancy
                  ? "bg-red-500/15 text-red-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <AlertTriangle className="size-4" /> Discrepancy
            </button>
          </div>

          {/* Doc chain */}
          <div className="mt-8 hidden items-center justify-center gap-3 sm:flex md:gap-6">
            <Pill icon={FileText} label="PO" tone="blue" />
            <Connector ok />
            <Pill icon={Package} label="GRN" tone={showDiscrepancy ? "amber" : "violet"} />
            <Connector ok={!showDiscrepancy} />
            <Pill icon={Receipt} label="INV" tone={showDiscrepancy ? "red" : "amber"} />
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:hidden">
            <Pill icon={FileText} label="PO" tone="blue" />
            <VConnector ok />
            <Pill icon={Package} label="GRN" tone={showDiscrepancy ? "amber" : "violet"} />
            <VConnector ok={!showDiscrepancy} />
            <Pill icon={Receipt} label="INV" tone={showDiscrepancy ? "red" : "amber"} />
          </div>
        </div>
      </Reveal>

      {/* App Window */}
      <Reveal delay={0.15} className="mt-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl backdrop-blur-xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-500" />
              <div className="size-2.5 rounded-full bg-yellow-500" />
              <div className="size-2.5 rounded-full bg-green-500" />
            </div>
            <span className="ml-3 truncate text-xs text-muted-foreground sm:text-sm">
              Sanyya, Transaction #TXN-4921
            </span>
            <AnimatePresence mode="wait">
              {showDiscrepancy ? (
                <motion.div
                  key="ar"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="ml-auto"
                >
                  <Badge className="border-red-500/20 bg-red-500/10 text-[10px] text-red-400 hover:bg-red-500/15 md:text-xs">
                    <AlertTriangle className="mr-1 size-3" /> Action Required
                  </Badge>
                </motion.div>
              ) : (
                <motion.div
                  key="rd"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="ml-auto"
                >
                  <Badge className="border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-400 hover:bg-emerald-500/15 md:text-xs">
                    <Check className="mr-1 size-3" /> Ready to Approve
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* PO */}
            <div className="p-5 md:p-6">
              <ColHeader
                icon={<FileText className="size-4 text-blue-400" />}
                title="PO #4921"
                right={
                  <Badge className="border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-400 hover:bg-emerald-500/15 md:text-xs">
                    Approved
                  </Badge>
                }
              />
              <div className="space-y-3">
                <LineCard
                  name="Serological Pipettes, 10mL, sterile"
                  qty={showDiscrepancy ? "200" : "200"}
                  price="$14.50"
                />
                <LineCard name="T75 Cell Culture Flasks" qty="20" price="$8.40" />
              </div>
            </div>

            {/* GRN */}
            <div className="bg-secondary/20 p-5 md:p-6">
              <ColHeader
                icon={
                  <Package
                    className={`size-4 ${showDiscrepancy ? "text-amber-400" : "text-violet-400"}`}
                  />
                }
                title="Slip #99-A"
                right={
                  showDiscrepancy ? (
                    <Badge className="border-amber-500/20 bg-amber-500/10 text-[10px] text-amber-400 hover:bg-amber-500/15 md:text-xs">
                      Partial Receipt
                    </Badge>
                  ) : (
                    <span className="text-[10px] text-muted-foreground md:text-xs">
                      Uploaded via Mobile
                    </span>
                  )
                }
              />
              <div
                className={`relative mb-4 flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed bg-secondary transition-colors ${
                  showDiscrepancy ? "border-amber-500/30" : "border-border"
                }`}
              >
                <div className="text-center">
                  <ImageIcon className="mx-auto mb-2 size-10 text-muted-foreground/50" />
                  <span className="text-xs text-muted-foreground">Packing Slip Photo</span>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {showDiscrepancy ? (
                  <motion.div
                    key="dgr"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <div className="mb-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Serological Pipettes Verified
                      </p>
                      <p className="font-mono text-lg font-bold text-amber-400">
                        180 <span className="text-xs font-normal text-muted-foreground">of 200 units</span>
                      </p>
                    </div>
                    <VerifiedRow name="T75 Flasks Verified" value="20" of="20" />
                    <div className="mt-3 flex justify-center">
                      <Badge className="border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/15">
                        <AlertTriangle className="mr-1 size-3" /> 20 Units Missing
                      </Badge>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pgr"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <VerifiedRow name="Serological Pipettes Verified" value="200" of="200" />
                    <div className="mt-3" />
                    <VerifiedRow name="T75 Flasks Verified" value="20" of="20" />
                    <div className="mt-3 flex justify-center">
                      <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/15">
                        <Check className="mr-1 size-3" /> Matches PO
                      </Badge>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Invoice */}
            <div className="p-5 md:p-6">
              <ColHeader
                icon={
                  <Receipt
                    className={`size-4 ${showDiscrepancy ? "text-red-400" : "text-amber-400"}`}
                  />
                }
                title="Invoice #INV-2024"
                right={
                  showDiscrepancy ? (
                    <Badge className="border-red-500/20 bg-red-500/10 text-[10px] text-red-400 hover:bg-red-500/15 md:text-xs">
                      <AlertTriangle className="mr-1 size-3" /> Mismatch
                    </Badge>
                  ) : null
                }
              />
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-secondary/50 p-3">
                  <p className="mb-1 text-xs text-muted-foreground">Vendor</p>
                  <p className="text-sm font-medium text-foreground">BioSupply Co.</p>
                </div>
                <AnimatePresence mode="wait">
                  {showDiscrepancy ? (
                    <motion.div
                      key="dinv"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-3"
                    >
                      <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                        <p className="mb-1 text-xs text-muted-foreground">Total Amount</p>
                        <p className="font-mono text-2xl font-bold tabular-nums text-red-400">
                          $23,350.00
                        </p>
                        <p className="mt-1 text-xs text-red-400/80">Billed for 50 + 10 units</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-red-400" />
                          <div>
                            <p className="text-xs font-medium text-red-400">Quantity Mismatch</p>
                            <p className="mt-0.5 text-xs text-red-400/80">
                              Billed for 50, only 30 received (20 missing)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-1">
                        <div className="mb-3 flex items-center gap-2 text-xs text-red-400">
                          <AlertTriangle className="size-4" />
                          <span>PO ↔ GRN ↔ Invoice Mismatch</span>
                        </div>
                        <Button className="w-full bg-red-500 text-white hover:bg-red-600">
                          <AlertTriangle className="mr-2 size-4" /> Flag Discrepancy
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="pinv"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-3"
                    >
                      <div className="rounded-lg border border-border bg-secondary/50 p-4">
                        <p className="mb-1 text-xs text-muted-foreground">Total Amount</p>
                        <p className="font-mono text-2xl font-bold tabular-nums text-foreground">
                          $3,100.00
                        </p>
                      </div>
                      <div className="pt-1">
                        <div className="mb-3 flex items-center gap-2 text-xs text-emerald-400">
                          <Check className="size-4" />
                          <span>PO ↔ GRN ↔ Invoice Tethered</span>
                        </div>
                        <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                          Approve for Payment
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ColHeader({
  icon,
  title,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-semibold text-foreground md:text-sm">{title}</span>
      </div>
      {right}
    </div>
  );
}

function LineCard({ name, qty, price }: { name: string; qty: string; price: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-3">
      <p className="mb-1 text-sm font-medium text-foreground">{name}</p>
      <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
        <span>
          Qty: <span className="font-semibold text-foreground">{qty}</span>
        </span>
        <span>
          Price: <span className="text-foreground">{price}</span>
        </span>
      </div>
    </div>
  );
}

function VerifiedRow({ name, value, of }: { name: string; value: string; of: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-3">
      <p className="mb-1 text-xs text-muted-foreground">{name}</p>
      <p className="font-mono text-sm font-bold text-foreground">
        {value} <span className="text-xs font-normal text-muted-foreground">of {of} units</span>
      </p>
    </div>
  );
}

const toneMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  violet: "bg-violet-500/10 border-violet-500/30 text-violet-400",
  amber: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  red: "bg-red-500/10 border-red-500/30 text-red-400",
};

function Pill({
  icon: Icon,
  label,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tone: keyof typeof toneMap;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${toneMap[tone]}`}
    >
      <Icon className="size-4" />
      {label}
    </div>
  );
}

function Connector({ ok }: { ok: boolean }) {
  const color = ok ? "bg-emerald-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-1">
      <div className={`h-0.5 w-6 md:w-10 ${color}`} />
      <div className={`grid size-5 place-items-center rounded-full ${color}`}>
        {ok ? (
          <Check className="size-3 text-white" />
        ) : (
          <AlertTriangle className="size-3 text-white" />
        )}
      </div>
      <div className={`h-0.5 w-6 md:w-10 ${color}`} />
    </div>
  );
}

function VConnector({ ok }: { ok: boolean }) {
  const color = ok ? "bg-emerald-500" : "bg-red-500";
  return (
    <div className="flex flex-col items-center">
      <div className={`h-3 w-0.5 ${color}`} />
      <div className={`grid size-5 place-items-center rounded-full ${color}`}>
        {ok ? (
          <Check className="size-3 text-white" />
        ) : (
          <AlertTriangle className="size-3 text-white" />
        )}
      </div>
      <div className={`h-3 w-0.5 ${color}`} />
    </div>
  );
}
