import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, GradientButton, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumb } from "@/components/product/Breadcrumb";

export const Route = createFileRoute("/why-sanyya")({
  head: () => ({
    meta: [
      { title: "Why Sanyya, spend control that scales with you" },
      {
        name: "description",
        content:
          "Sanyya was built by an operator who ran early stage biotech operations, chased approvals, matched packing slips, and rebuilt spend numbers by hand.",
      },
      { property: "og:title", content: "Why Sanyya" },
      {
        property: "og:description",
        content: "Built by someone who did this job, not adapted from an enterprise system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhySanyyaPage,
});

const principles = [
  {
    title: "It has to work for physical things",
    text: "Reagents, equipment, and materials arrive on a truck, not in an inbox. Receiving is part of the job, not an afterthought bolted onto a system designed for software subscriptions.",
  },
  {
    title: "It has to work where people already are",
    text: "People will not come to the system. The system has to go to them.",
  },
  {
    title: "It has to be usable on the first day",
    text: "There is no one to run an implementation. No admin, no consultants, no rollout budget. If it needs a training session, it is already the wrong tool.",
  },
];

function WhySanyyaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-20" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6">
          {/* Every block on this page shares one measure (max-w-3xl) so the
              left edge does not shift as you scroll. */}
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Why Sanyya" }]} />
            </Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-md border border-[hsl(269_80%_57%/0.25)] bg-[hsl(269_80%_57%/0.08)] px-4 py-1.5 tabular-nums text-[11px] text-brand">
                Why Sanyya
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
                For years, we{" "}
                <span
                  className="mr-3 md:mr-4 text-muted-foreground tracking-normal text-[1.45em] leading-[1.05] align-baseline"
                  style={{ fontFamily: "var(--font-hand)" }}
                >
                  were
                </span>{" "}
                <span className="text-foreground">the system</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 text-pretty text-base font-normal leading-[1.7] text-muted-foreground md:text-lg">
                Chasing the approvals. Matching the packing slips. Rebuilding the numbers every time
                someone asked. Sanyya is what we wished existed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <Section size="tight" className="!pt-10 md:!pt-14">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="space-y-6 text-base font-normal leading-[1.7] text-muted-foreground md:text-lg md:leading-[1.75]">
              <p>
                Sanyya started with years of running operations at early stage biotech companies.
                Building labs out of empty rooms, through permits and benches and freezers, until
                real science was happening in them. That included the loading dock and everything
                that came off it.
              </p>
              <p>
                None of that was in anyone's job description. It just landed on whoever was closest
                to it, and the record of what happened lived in that person's head and their inbox.
                We did not just evaluate the alternatives. We lived through them.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto max-w-3xl my-14">
            <span aria-hidden className="mb-5 block h-[2px] w-10 bg-brand" />
            <p className="text-2xl font-semibold leading-[1.3] tracking-[-0.03em] text-foreground md:text-[30px]">
              Slack and spreadsheets first. Then a procurement tool that never fit.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="space-y-6 text-base font-normal leading-[1.7] text-muted-foreground md:text-lg md:leading-[1.75]">
              <p>
                Then a system we designed and built ourselves, out of forms, spreadsheets, email
                notifications, and custom scripts, because nothing on the market worked at our size
                and we needed something that did.
              </p>
              <p>
                Then the enterprise route. A multi year contract,{" "}
                <span className="font-medium text-foreground">six figures a year</span> once
                implementation was counted, and the better part of a year before anyone could use
                it. Approval rules so complex that only a certified specialist could change them,
                which meant every small change became a support ticket. The tools were built for a
                company that did not exist yet. Nothing was built for the company that existed
                today.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHAT THAT CHANGED */}
      <Section size="tight" className="!pt-0">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-balance font-display text-4xl sm:text-5xl">What that changed</h2>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
              Three things were non negotiable from the first line of code.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group relative py-7 pl-6 transition-colors md:py-8">
                  <span
                    aria-hidden
                    className="absolute left-0 top-7 h-6 w-px bg-brand/30 transition-all duration-300 group-hover:h-[calc(100%-3.5rem)] group-hover:bg-brand md:top-8"
                  />
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">{p.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* THE MIDDLE TIER */}
      <Section size="tight" className="!pt-0">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-balance font-display text-4xl sm:text-5xl">
              What about the tools in the middle?
            </h2>
            <div className="mt-6 space-y-6 text-base font-normal leading-[1.7] text-muted-foreground md:text-lg md:leading-[1.75]">
              <p>
                There is a whole tier between a spreadsheet and an enterprise system. They cost{" "}
                <span className="font-medium text-foreground">two to four times</span> what we do,
                they still take weeks to configure, and they are still built around a purchasing
                team you do not have.
              </p>
              <p>
                The bigger problem is fit. They are good at ordering things that arrive in boxes.
                Most of what you spend is{" "}
                <span className="rounded bg-brand/10 px-1.5 py-0.5 font-medium text-foreground">
                  a study, a contract, a service
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CLOSING */}
      <section className="relative overflow-hidden pt-6 pb-20 md:pt-8 md:pb-28">
        <div className="container relative mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card px-6 py-10 text-center md:px-10">
              <span aria-hidden className="mx-auto mb-6 block h-px w-16 bg-brand/50" />
              <p className="text-balance text-lg text-muted-foreground md:text-xl">
                Sanyya is the system that would have made those years easier. It is built for{" "}
                <span className="font-medium text-foreground">the team you have right now</span>,
                not the one you might have in three years.
              </p>
              <div className="mt-7 flex justify-center">
                <GradientButton as="link" to="/product" size="lg" className="w-full sm:w-auto">
                  See how it works <ArrowRight className="size-4" />
                </GradientButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
