import { createFileRoute } from "@tanstack/react-router";
import { SignupButton } from "@/components/site/SignupDialog";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Section, SectionBadge, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { StageRail } from "@/components/product/StageRail";
import { SlackMockup } from "@/components/mockups/SlackMockup";
import { DashboardMatchMockup } from "@/components/mockups/DashboardMatchMockup";
import { PhonePackingSlipMockup } from "@/components/mockups/PhonePackingSlipMockup";
import { PurchaseOrderMockup } from "@/components/mockups/PurchaseOrderMockup";
import { DashboardCommandCenter } from "@/components/mockups/DashboardCommandCenter";
import { AuditLogMockup } from "@/components/mockups/AuditLogMockup";
import { Payoff } from "@/components/home/Payoff";
import { stages } from "@/data/stages";

export const Route = createFileRoute("/product/")({
  head: () => ({
    meta: [
      { title: "Product | Sanyya, spend control that scales with you" },
      {
        name: "description",
        content:
          "One connected flow: requests, purchase orders, receiving, invoices, and live spend, from the first ask to the answer.",
      },
      { property: "og:title", content: "Product | Sanyya" },
      {
        property: "og:description",
        content:
          "From the moment someone needs to buy something to the moment you answer what you spent, Sanyya handles it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductPage,
});

type Stage = {
  id: string;
  step: string;
  title: string;
  body: string;
  points: { title: string; body: string }[];
  tight?: boolean;
  visual: ReactNode;
};

const flow: Stage[] = [
  {
    id: stages[0]!.id,
    step: "01",
    title: stages[0]!.title,
    body: "A scientist needs antibodies. An engineer needs a service contract renewed. The ask starts where people already work, in Slack or in the app, and it lands in front of whoever actually has to say yes.",
    points: [
      {
        title: "Request from Slack or the app",
        body: "Describe what you need in a thread. The request is structured for you, with vendor, quantity, project, and expected cost.",
      },
      {
        title: "Routing by amount, department, or project",
        body: "A $400 reagent top up and a $90,000 study do not need the same path. Rules decide who sees what, without anyone chasing.",
      },
      {
        title: "Multi-level approvals",
        body: "Lab lead, then department head, then finance. Each step is recorded with who approved, when, and on what version.",
      },
      {
        title: "Quotes side by side",
        body: "Put Thermo Fisher, Qiagen, and Bio-Rad next to each other on price, lead time, and pack size before anyone commits.",
      },
    ],
    visual: <SlackMockup />,
  },
  {
    id: stages[1]!.id,
    step: "02",
    title: stages[1]!.title,
    body: "An approved request is not a purchase. It becomes a real purchase order the vendor can work from, and from that point on the commitment is tracked rather than remembered.",
    points: [
      {
        title: "Approved request becomes a PO",
        body: "Line items, pricing, and terms carry straight over. No retyping into a spreadsheet or a vendor portal.",
      },
      {
        title: "Sent to the vendor",
        body: "The order goes out with your PO number attached, so what comes back later can be tied to it.",
      },
      {
        title: "Revisions with a full audit trail",
        body: "Quantities change and prices move. Every version is kept, with who changed what and the approval that covered it.",
      },
      {
        title: "Standing orders that draw down",
        body: "A twelve month agreement with Charles River or WuXi sits as one order, with the balance falling as releases are made against it.",
      },
    ],
    visual: <PurchaseOrderMockup />,
  },
  {
    id: stages[2]!.id,
    step: "03",
    title: stages[2]!.title,
    body: "Boxes land on the dock while everyone is busy. Capture the packing slip in the moment, and the difference between what was ordered and what arrived stops being a mystery.",
    points: [
      {
        title: "Capture from your phone",
        body: "Photograph the packing slip at the bench or the loading dock. It is read and attached to the right order.",
      },
      {
        title: "Quantity and unit normalization",
        body: "A case of six, six units, and 6 x 500 mL all resolve to the same thing, whether the slip came from Cytiva or MilliporeSigma.",
      },
      {
        title: "Partial deliveries",
        body: "Half the order arrives Tuesday, the rest in three weeks. The order stays open and shows exactly what is left.",
      },
      {
        title: "What is still outstanding",
        body: "One view of everything ordered and not yet received, so nobody reorders something that is already in transit.",
      },
    ],
    tight: true,
    visual: <PhonePackingSlipMockup />,
  },
  {
    id: stages[3]!.id,
    step: "04",
    title: stages[3]!.title,
    body: "The question is never really about the invoice. It is whether the order, the delivery, and the bill agree. When they do, nobody needs to look at it.",
    points: [
      {
        title: "Forward it by email",
        body: "Send the invoice to your Sanyya address, or drop the PDF in. That is the whole intake process.",
      },
      {
        title: "Line items read automatically",
        body: "Item descriptions, quantities, unit prices, tax, and freight are pulled from the document, whatever layout the vendor uses.",
      },
      {
        title: "Matched to the order and the receipt",
        body: "A Qiagen invoice is checked against what was ordered and what actually showed up, line by line rather than at the total.",
      },
      {
        title: "Only exceptions reach a person",
        body: "A price that moved, a short shipment, a duplicate. Those go to someone. Clean invoices move on to your bill pay platform.",
      },
    ],
    visual: <DashboardMatchMockup />,
  },
  {
    id: stages[4]!.id,
    step: "05",
    title: stages[4]!.title,
    body: "Everything upstream leaves a record, so the numbers stay current on their own. Live spend by project, what is left on each contract, and the full history behind every vendor, all sitting there between the moments you need them.",
    points: [
      {
        title: "Live spend by project, vendor, and department",
        body: "Committed and actual, updated as orders and invoices move, not assembled at the end of the quarter.",
      },
      {
        title: "Contract balances in real time",
        body: "See how much of the study agreement with The Jackson Laboratory is drawn down and what remains before it needs renewing.",
      },
      {
        title: "Vendor records and history",
        body: "Every order, delivery, price, and lead time for a vendor in one place, so the next negotiation starts from evidence.",
      },
      {
        title: "Ask in plain language",
        body: "Connect your own Claude and ask what you spent on the animal study last month. It answers from your own records.",
      },
    ],
    tight: true,
    visual: <DashboardCommandCenter />,
  },
];

function ProductPage() {
  return (
    <div className="xl:[&_.container]:pl-60">
      <StageRail />

      <section className="relative overflow-hidden bg-background pt-28 md:pt-36 pb-12 md:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow
            size="xl"
            className="-top-32 left-1/2 -translate-x-1/2 mesh-drift opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <Reveal>
              <SectionBadge>Product</SectionBadge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance font-display text-5xl leading-[1] sm:text-6xl md:text-7xl">
                Five moments. <span className="text-foreground">One system underneath them.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
                Buying does not happen in pieces. It happens as a sequence of everyday moments, from
                the first ask to the answer at the end of the month. Sanyya covers all of them,
                start to finish, without anyone configuring a thing.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ol className="mt-8 grid gap-2 sm:grid-cols-5">
                {flow.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card/40 p-3 transition-colors hover:border-foreground/25"
                    >
                      <span className="tabular-nums text-[10px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium leading-snug text-foreground">
                        {s.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <Payoff />

      {flow.map((w, i) => (
        <Section
          key={w.id}
          id={w.id}
          size={w.tight ? "tight" : "default"}
          className={i % 2 === 1 ? "bg-secondary/40" : undefined}
        >
          <div className="grid items-center gap-10 md:gap-16 md:grid-cols-2">
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
              <Reveal>
                <div className="tabular-nums text-xs text-muted-foreground/70">{w.step}</div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-3xl sm:text-4xl md:text-5xl">
                  {w.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {w.body}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15} className={`relative ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <GradientGlow size="md" className="-z-10 right-0 top-8 opacity-30" />
              {w.visual}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
              {w.points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border bg-background/60 p-4 md:p-5"
                >
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-[hsl(160_84%_40%)]" />
                    <h3 className="text-sm font-semibold leading-snug text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      ))}

      <Section id="record" size="default" className="bg-secondary/40">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-balance font-display text-3xl sm:text-4xl md:text-5xl">
              And it holds up when someone asks.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every change is one row: who made it, what changed, and the before and after.
              Permissions, approval thresholds, budgets, vendors, and PO terms. Filter it by area or
              person, search it, and export it.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="relative mt-10 md:mt-14">
          <GradientGlow size="md" className="-z-10 left-1/2 top-0 -translate-x-1/2 opacity-25" />
          <AuditLogMockup />
        </Reveal>
      </Section>

      <Section id="fit" size="default" className="pb-8 md:pb-10 overflow-hidden">
        {/* Drafting grid — contained to this section only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(from var(--border) h s l / 0.18) 1px, transparent 1px), linear-gradient(to bottom, hsl(from var(--border) h s l / 0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 0%, black 45%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, black 45%, transparent 85%)",
          }}
        />

        <div className="relative">
          {/* Header row */}
          <div className="border-b border-border pb-3">
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Where Sanyya sits
            </span>
          </div>

          {/* Heading and body */}
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="mt-10 text-balance font-display text-3xl text-foreground sm:text-4xl md:mt-14 md:text-5xl">
                Sanyya sits underneath the tools you already have.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-[60ch] text-sm leading-[1.7] text-muted-foreground">
                Bill pay moves the money. Accounting closes the books. Both of them start at the
                invoice, which means neither one knows what was agreed to before that invoice showed
                up. Sanyya holds that part, and hands it up to both. Nothing you already pay for
                gets replaced.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 md:mt-14">
              {/* Desktop technical drawing */}
              <div className="hidden md:block">
                {/* Upper layer */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <div className="border-[1.5px] border-dashed border-border p-5">
                      <div className="text-base font-semibold text-foreground">Bill pay</div>
                      <p className="mt-1 text-sm text-muted-foreground">Moves the money.</p>
                    </div>
                    <div className="relative h-10">
                      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-[1.5px] border-dashed border-brand" />
                      <div className="absolute left-[calc(50%+10px)] top-1/2 max-w-[calc(50%-1rem)] md:max-w-[260px] -translate-y-1/2 text-[10px] md:text-[11px] leading-tight text-muted-foreground">
                        Matched invoices
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="border-[1.5px] border-dashed border-border p-5">
                      <div className="text-base font-semibold text-foreground">Accounting</div>
                      <p className="mt-1 text-sm text-muted-foreground">Closes the books.</p>
                    </div>
                    <div className="relative h-10">
                      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-[1.5px] border-dashed border-brand" />
                      <div className="absolute left-[calc(50%+10px)] top-1/2 max-w-[calc(50%-1rem)] md:max-w-[260px] -translate-y-1/2 text-[10px] md:text-[11px] leading-tight text-muted-foreground">
                        Purchase records and approvals
                      </div>
                    </div>
                  </div>
                </div>

                {/* Base layer */}
                <div className="border-[1.5px] border-brand p-6 md:p-8">
                  <div className="border-b border-border pb-4">
                    <div className="text-[22px] font-semibold text-foreground">Sanyya</div>
                  </div>
                  <div className="mt-6 grid grid-cols-4 divide-x divide-border">
                    <div className="px-5 first:pl-0">
                      <div className="text-[13px] text-foreground">Requests</div>
                      <div className="mt-4 text-[13px] text-foreground">Contracts and SOWs</div>
                    </div>
                    <div className="px-5">
                      <div className="text-[13px] text-foreground">Approvals</div>
                      <div className="mt-4 text-[13px] text-foreground">Receiving</div>
                    </div>
                    <div className="px-5">
                      <div className="text-[13px] text-foreground">Quotes</div>
                      <div className="mt-4 text-[13px] text-foreground">Three way match</div>
                    </div>
                    <div className="px-5 last:pr-0">
                      <div className="text-[13px] text-foreground">Purchase orders</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile technical drawing */}
              <div className="md:hidden">
                {/* Upper layer: Bill pay and Accounting side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-[1.5px] border-dashed border-border p-3">
                    <div className="text-sm font-semibold text-foreground">Bill pay</div>
                    <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                      Moves the money.
                    </p>
                  </div>
                  <div className="border-[1.5px] border-dashed border-border p-3">
                    <div className="text-sm font-semibold text-foreground">Accounting</div>
                    <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                      Closes the books.
                    </p>
                  </div>
                </div>

                {/* Connectors */}
                <div className="grid grid-cols-2 gap-3">
                  {[0, 1].map((k) => (
                    <div key={k} className="relative h-10">
                      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-brand" />
                      <div className="absolute left-1/2 top-0 h-0.5 w-[10px] -translate-x-1/2 bg-brand" />
                      <div className="absolute left-1/2 bottom-0 h-0.5 w-[10px] -translate-x-1/2 bg-brand" />
                    </div>
                  ))}
                </div>

                {/* Base layer */}
                <div className="border-[1.5px] border-brand p-5">
                  <div className="border-b border-border pb-4">
                    <div className="text-xl font-semibold text-foreground">Sanyya</div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-[14px]">
                    <div className="text-[13px] text-foreground">Requests</div>
                    <div className="text-[13px] text-foreground">Approvals</div>
                    <div className="text-[13px] text-foreground">Quotes</div>
                    <div className="text-[13px] text-foreground">Purchase orders</div>
                    <div className="text-[13px] text-foreground">Contracts and SOWs</div>
                    <div className="text-[13px] text-foreground">Receiving</div>
                    <div className="text-[13px] text-foreground">Three way match</div>
                  </div>
                </div>

                {/* Reference notes */}
                <div className="mt-4 space-y-1.5 text-[11px] leading-snug text-muted-foreground">
                  <div>
                    <span className="text-brand">Bill pay</span> · Matched invoices
                  </div>
                  <div>
                    <span className="text-brand">Accounting</span> · Purchase records and approvals
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="cta" size="loose">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              className="text-balance text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.15] tracking-normal text-muted-foreground"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              See it on your own spend
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Ten minutes and your own information. Nothing to configure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center">
              <SignupButton size="lg">
                Get early access <ArrowRight className="size-4" />
              </SignupButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
