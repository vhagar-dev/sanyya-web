import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import phantomBurnCover from "@/assets/phantom-burn-cover.png";
import rdParadoxCover from "@/assets/rd-paradox-cover.png";
import threeWayMatchCover from "@/assets/3way-match-cover.png";
const blogContent: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: React.ReactNode;
  }
> = {
  "phantom-burn": {
    title: "The Phantom Burn That Kills Hardware Startups",
    date: "December 6, 2025",
    readTime: "8 min read",
    category: "Founder's Note",
    image: phantomBurnCover,
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
          The "Day 1" Myth vs. The "Day 100" Reality
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          In the early days of a startup, spend management is easy. You are a team of five sitting in one room. You know
          exactly who bought the soldering iron, you know when the reagents arrived, and you know how much money is in
          the bank. You have total control because you have total visibility.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Most of us start on Google Sheets. And honestly? For the first six months, it works. It's flexible, free, and
          fast. But there is a specific moment where the spreadsheet betrays you.
        </p>

        <p className="text-xl font-semibold text-foreground mb-6 italic">
          The day you have to search your Slack history to prove a $5,000 purchase was approved is the day you have lost
          control.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          You end up with three different spreadsheets named "PO_Log_Final_v2". Approvals happen in DMs. Scientists
          order things assuming they were approved. Suddenly, the Ops Lead is ordering PCBs, the Scientists are ordering
          antibodies, and you have no idea what is actually committed against your bank account.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          This is where <span className="font-semibold text-foreground">"Phantom Burn"</span> begins.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The $15,000 Mistake: A View from the Trenches
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Phantom Burn is the money you leak not through bad strategy, but through bad execution. It's the "death by a
          thousand cuts" that VCs dread because it means their capital isn't going toward growth—it's going toward
          waste.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          I have worn every hat in the startup world, including the unglamorous "AP Specialist" hat. I have seen the
          damage firsthand.
        </p>

        {/* Red Callout Box */}
        <div className="bg-red-50 border-l-4 border-red-200 p-4 my-6 rounded-r-lg">
          <p className="text-slate-700 leading-[1.8]">
            I once saw a $15,000 invoice for a -80°C freezer get paid twice. Why? Because the vendor emailed the PDF
            invoice, and their automated system sent a physical copy via snail mail two weeks later. The spreadsheet
            didn't catch it. The accounts payable team assumed it was a new bill.{" "}
            <span className="font-bold text-red-700">That's $15,000 of runway—gone in a keystroke.</span>
          </p>
        </div>

        <p className="text-slate-600 leading-[1.8] mb-12">
          Most startups fail basic 3-Way Match compliance. It's not because they are negligent; it's because the
          physical world is messy. Partial shipments, nomenclature gaps, and lost paper on the loading dock make
          reconciliation a nightmare.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The "Solution" Was Part of the Problem
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          When founders realize they have lost control, they panic. They look for software. And that is when they walk
          into the trap of the "Legacy Giants"—platforms like NetSuite, Coupa, or Procurify.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          I have sat through these demos. I have watched Ops Managers lose hours of their lives answering irrelevant
          questions just to see a product interface. The reality is brutal:
        </p>

        {/* Gray Card for Legacy Giants */}
        <div className="bg-slate-50 rounded-xl p-8 my-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-foreground mb-2">The Implementation Tax</h4>
              <p className="text-slate-600 leading-[1.8]">
                You don't just sign up; you "implement." This takes months. It forces you to designate an internal
                champion—usually your busiest Ops Manager—who now has a second full-time job just managing the
                consultants. They are forced to run a company-wide scavenger hunt, chasing down vendor lists and part
                numbers. Most of this data is irrelevant to getting started. But instead of generating value, your team
                is stuck compiling static spreadsheets just to feed the beast.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">The Black Box Bluff</h4>
              <p className="text-slate-600 leading-[1.8]">
                There is a reason they hide their matching logic behind "proprietary algorithms." They treat 3-Way
                Matching like mystical rocket science to justify the price tag. But if you peel back the curtain, they
                haven't actually solved the problem. They are using rigid keyword matching that fails constantly.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">The "Desktop" Bias</h4>
              <p className="text-slate-600 leading-[1.8]">
                They build software for accountants, not for operations. That is why they expect your warehouse staff to
                act as archivists—walking physical packing slips to a flatbed scanner, converting them to PDFs, and
                manually uploading them. They ignore the reality of the loading dock.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">The Profit of Complexity</h4>
              <p className="text-slate-600 leading-[1.8]">
                They build software that is intentionally impossible to configure on your own. You are forced to hire
                expensive implementation consultants just to go live. But the bleeding doesn't stop there—you are then
                hooked into annual fees just to maintain basic integrations and keep the system up to date. That
                complexity isn't a bug; it's the core of their business model.{" "}
                <span className="font-bold text-foreground">
                  You end up spending more capital managing the software than you actually save on the procurement it
                  was supposed to track.
                </span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          It Doesn't Have to Be This Way
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          We started Sanyya because we refused to accept that "months of implementation" was the only option.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-8">
          We built Sanyya for the teams moving atoms, not just bits. We built it for the Biotech and Hardware founders
          who need:
        </p>

        <div className="space-y-5 mb-12 pl-1">
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-violet-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">Zero-Friction Capture:</span> Snap a picture of a packing
              slip on the loading dock via a PWA and have it instantly digitized.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">Context-Aware Matching:</span> Use Vector-Based AI to
              understand that "FBS" and "Serum" are the same thing.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-cyan-500 to-emerald-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">Real-World Logic:</span> Handle partial shipments and
              blanket PO drawdowns without breaking the system.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The New Standard: Self-Serve & Zero Friction
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Here is the radical truth we are bringing to the market:{" "}
          <span className="font-semibold text-foreground">
            You do not need a sales call to start managing your spend.
          </span>
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          Sanyya is designed to overlay your existing process. It is self-serve, transparently priced, and takes
          minutes—not months—to set up. Whether you use it as your full PO system or just as a "reconciliation engine"
          to clean up your messy data, it puts the control back in your hands immediately.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          Don't Wait for the Audit
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          If you are a founder, a fractional CFO, or an Ops lead, do not wait until you have 50 employees to think about
          this. By then, the "Phantom Burn" is already eating your runway. Establish the discipline now. Get visibility
          now. Do it with a tool that respects your time and your intelligence.
        </p>

        <div className="border-t border-slate-200 pt-10 mt-12">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 tracking-tight">
            Welcome to Sanyya. The Operating System for Physical R&D.
          </p>
          <p className="text-slate-500 italic">— The Sanyya Team</p>
        </div>
      </>
    ),
  },
  "3-way-match-guide": {
    title: "The Anatomy of a Transaction: A Founder's Guide to the 3-Way Match",
    date: "December 6, 2025",
    readTime: "6 min read",
    category: "Insights",
    image: threeWayMatchCover,
    content: (
      <>
        {/* Cover Image with Lightbox */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="mb-12 -mx-4 md:-mx-8 lg:-mx-12 cursor-zoom-in group">
              <img 
                src={threeWayMatchCover} 
                alt="The 3-Way Match: PO, Packing Slip, and Invoice reconciliation diagram" 
                className="w-full rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01]"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
            <img 
              src={threeWayMatchCover} 
              alt="The 3-Way Match: PO, Packing Slip, and Invoice reconciliation diagram" 
              className="w-full h-full object-contain rounded-lg"
            />
          </DialogContent>
        </Dialog>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-light">
          If you are a Seed-stage founder, "procurement process" sounds like a dirty word. It sounds like bureaucracy.
          It sounds like slowing down. You're trying to discover a molecule, not win an accounting award.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          But fast-forward 18 months. You are raising your Series A. The VC's audit team arrives and asks for your
          "verified vendor list" and "proof of expense controls." You hand them a credit card statement and a Google
          Drive folder full of PDFs named Scan_001.pdf.
        </p>

        <p className="text-xl font-semibold text-foreground mb-6 italic">The room goes quiet.</p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          The difference between a <em>science project</em> and a <em>company</em> is financial discipline. In biotech
          and hardware—where burn rates are high and inventory is physical—that discipline relies on one specific,
          unglamorous mechanism: <span className="font-semibold text-foreground">The 3-Way Match.</span>
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          Here is exactly how it works, why it breaks in the lab, and how to master it so you can pass due diligence
          without blinking.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          Part 1: The Lifecycle of a Dollar
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-8">
          Before we get to the matching, we need to understand the chain of custody. In a proper system, money doesn't
          just leave the building whenever someone enters a credit card number; it follows a path.
        </p>

        <h3 className="text-xl font-bold text-foreground tracking-tight mb-4 mt-10">1. The Requisition (The "Ask")</h3>

        <p className="text-slate-600 leading-[1.8] mb-4">
          A scientist needs 500mL of Fetal Bovine Serum (FBS) or a specific microcontroller. They don't just buy it.
          They submit a <span className="font-semibold text-foreground">Purchase Requisition (PR)</span>.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-8 pl-4 border-l-2 border-slate-200">
          <span className="font-semibold text-foreground">Crucial Distinction:</span> This is an <em>internal</em>{" "}
          document only. It hasn't left the building yet. It is simply asking permission to spend the money.
        </p>

        <h3 className="text-xl font-bold text-foreground tracking-tight mb-4 mt-10">
          2. The Approval (The Gatekeeper)
        </h3>

        <p className="text-slate-600 leading-[1.8] mb-6">
          This step is the firewall between a "good idea" and "cash out the door."
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          In a Seed-stage startup, this isn't a complex software workflow. It's usually just your overworked{" "}
          <span className="font-semibold text-foreground">Ops Lead or Lab Manager</span>. They are the human shield
          sanity-checking logistics:{" "}
          <em>
            "Do we already have this chemical hidden in the back of the -80? Is this the right vendor? Are we shipping
            to the new lab address or the old one?"
          </em>
        </p>

        <p className="text-slate-600 leading-[1.8] mb-8">
          They aren't being bureaucrats; they are ensuring you don't buy things you don't need.
        </p>

        {/* Pro Tip Callout Box */}
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-l-4 border-emerald-400 p-6 my-8 rounded-r-xl">
          <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Pro Tip: The "Amazon Effect" vs. Strategic Sourcing
          </h4>
          <p className="text-slate-700 leading-[1.8] mb-4">
            <span className="font-semibold">Why did the Ops Manager change the vendor?</span> Scientists are used to the
            "Amazon experience"—finding the first item on Google and hitting "Buy." But in biotech, <em>who</em> you buy
            from matters. When an Ops Manager rejects a request from "RandomSite.com" and switches it to a Preferred
            Vendor (like Thermo Fisher or Digi-Key), they are enforcing{" "}
            <span className="font-semibold">Strategic Sourcing</span>.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <span className="font-semibold">The MSA Discount:</span> You likely have a negotiated agreement that
                gives you 15-40% off list price. Buying "rogue" pays retail.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <span className="font-semibold">The Cold Chain Factor:</span> A preferred vendor knows your receiving
                dock hours and ships on dry ice. Random vendors might leave antibodies melting on your doorstep on a
                Saturday.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <span className="font-semibold">Cash Flow:</span> Preferred vendors give you{" "}
                <span className="font-semibold">Net 30 terms</span>, preserving your cash flow for an extra month.
              </span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-foreground tracking-tight mb-4 mt-10">
          3. The Purchase Order (The Promise)
        </h3>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Once the Ops Lead approves the Requisition, it transforms into a{" "}
          <span className="font-semibold text-foreground">Purchase Order (PO)</span>.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          In the early days, your "PO System" might just be a Word template you save as a PDF and email to a sales rep.
          That's fine. What matters is what the document represents:{" "}
          <span className="font-semibold text-foreground">A PO is a contract.</span> By sending it, you are legally
          promising the vendor that you will pay <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">$X</code>{" "}
          for <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">$Y</code> goods.
        </p>

        <div className="border-t border-slate-200 my-12" />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-8">
          Part 2: What exactly is "3-Way Matching"?
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-8">
          This is the gold standard of accounting. It's the mechanism that stops you from bleeding cash due to errors or
          fraud. Before your finance team pays an invoice, they must compare three specific documents to ensure they all
          tell the exact same story.
        </p>

        <div className="space-y-6 mb-10">
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-bold text-foreground mb-2">Document 1: The Purchase Order (The "I wanted this")</h4>
            <p className="text-slate-600 leading-[1.8] mb-1">
              <em>What it says:</em> "We agreed to buy 10 boxes of pipettes at $50/box."
            </p>
            <p className="text-slate-600 leading-[1.8]">
              <em>Source:</em> You (The Buyer).
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-bold text-foreground mb-2">
              Document 2: The Receiving Slip / Packing List (The "I got this")
            </h4>
            <p className="text-slate-600 leading-[1.8] mb-1">
              <em>What it says:</em> "Here are the 10 boxes of pipettes you asked for."
            </p>
            <p className="text-slate-600 leading-[1.8] mb-2">
              <em>Source:</em> The Loading Dock.
            </p>
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-red-600">The Trap:</span> This is often a crinkled piece of paper
              stuck to the outside of a soggy cardboard box. In most startups, this gets thrown in the trash.{" "}
              <span className="font-bold text-foreground">This is fatal.</span> Without this piece of paper, you cannot
              prove you actually received what you are paying for.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-bold text-foreground mb-2">Document 3: The Invoice (The "Pay me this")</h4>
            <p className="text-slate-600 leading-[1.8] mb-1">
              <em>What it says:</em> "You owe me $500 according to PO #123."
            </p>
            <p className="text-slate-600 leading-[1.8]">
              <em>Source:</em> The Vendor's accounting department.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-foreground mb-3">The Match Logic:</h4>
          <p className="text-slate-700 leading-[1.8] font-mono text-sm mb-3">
            If <span className="font-bold">PO (Quantity & Price)</span> =={" "}
            <span className="font-bold">Receipt (Quantity)</span> == <span className="font-bold">Invoice (Total)</span>{" "}
            → <span className="text-emerald-600 font-bold">THEN PAY.</span>
          </p>
          <p className="text-slate-600 leading-[1.8]">
            If any of these three numbers do not match, the brakes lock up. That halt is the "Three-Way Match"
            protecting your runway.
          </p>
        </div>

        <div className="border-t border-slate-200 my-12" />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-8">
          Part 3: Why This Breaks in Biotech (The "Partial" Nightmare)
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          If you were running a software company buying Zoom licenses, this would be easy. But you are moving atoms. The
          physical world is messy.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Here is the scenario that breaks spreadsheets and generic accounting software:
        </p>

        <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-600">
          <li>
            <span className="font-semibold text-foreground">Day 1:</span> You issue a PO for{" "}
            <span className="font-bold">10</span> complex, custom-machined parts.
          </li>
          <li>
            <span className="font-semibold text-foreground">Day 14:</span> The vendor has yield issues. They ship{" "}
            <span className="font-bold">4</span> parts and put the other 6 on backorder.
          </li>
          <li>
            <span className="font-semibold text-foreground">Day 15:</span> The box arrives on your dock. The packing
            slip says "Qty: 4."
          </li>
          <li>
            <span className="font-semibold text-foreground">Day 16:</span> The vendor's automated billing system sends
            an invoice for <span className="font-bold">10</span> parts because their accounting software didn't talk to
            their shipping software.
          </li>
        </ol>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h4 className="font-bold text-red-700 mb-3">Without a 3-Way Match:</h4>
            <p className="text-slate-700 leading-[1.8]">
              Your finance person sees a PO for 10 and an invoice for 10. They pay it.{" "}
              <span className="font-bold text-red-700">You just paid for 6 parts you don't have.</span>
            </p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <h4 className="font-bold text-emerald-700 mb-3">With a 3-Way Match:</h4>
            <p className="text-slate-700 leading-[1.8]">
              The system flags the discrepancy: "Invoice says 10, but Receipt says 4." The payment is blocked
              automatically. <span className="font-bold text-emerald-700">You only pay for what hit your dock.</span>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 my-12" />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-8">
          Part 4: The Compliance "Why"
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-8">
          Why do auditors and VCs care so much about this boring back-office process?
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-3">1. Fraud Prevention (Ghost Vendors)</h4>
            <p className="text-slate-600 leading-[1.8]">
              Without a PO system, it is incredibly easy for a dishonest employee to create a fake invoice from a shell
              company and pay it. A 3-Way Match makes internal fraud nearly impossible because you would need to forge a
              fake receiving slip <em>and</em> have a fake PO approved by someone else to release funds.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-3">2. GAAP Compliance (Accrual Accounting)</h4>
            <p className="text-slate-600 leading-[1.8]">
              To report your finances correctly to investors, you need to book the expense when you <em>receive</em> the
              item or service, not when you <em>pay</em> the cash. You cannot do this correctly if you aren't tracking
              receiving slips. This is often the #1 red flag during a financial audit indicating a disorganized company.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 my-12" />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-8">
          Conclusion: Start Small, But Start Now
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Implementing a 3-Way Match process sounds heavy. It sounds like something "big pharma" does.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          But it doesn't require expensive, monolithic ERP software. It just requires a workflow that respects the
          physical reality of your lab. Whether you use a specialized tool designed for R&D (like Sanyya) or just a very
          disciplined manual process, you must start capturing the packing slips today.
        </p>

        <p className="text-xl font-semibold text-foreground mb-12 italic">
          Because the only thing worse than a failed experiment is paying for the reagents twice.
        </p>

        <div className="border-t border-slate-200 pt-10 mt-10">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to master your 3-Way Match?
          </p>
          <p className="text-slate-500 italic">— The Sanyya Team</p>
        </div>
      </>
    ),
  },
  "1": {
    title: "The R&D Spend Paradox: Why the World's Most Innovative Teams Are Stuck with the Oldest Tools",
    date: "December 4, 2025",
    readTime: "5 min read",
    category: "Founder's Letter",
    image: rdParadoxCover,
    content: (
      <>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-light">
          We live in a golden age of scientific acceleration. CRISPR is rewriting genomes. mRNA platforms delivered
          vaccines in record time. AI is discovering new molecules faster than ever before. Yet behind every
          groundbreaking lab sits a finance team reconciling invoices in spreadsheets, chasing down packing slips, and
          manually matching purchase orders line by line.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          This is the <span className="font-semibold text-foreground">R&D Spend Paradox</span>: the teams pushing the
          boundaries of human knowledge are stuck with financial tools designed for a different era. It's a friction
          that slows down science, burns cash, and frustrates everyone involved.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">We built Sanyya to fix this.</p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The Pain Point: When "Move Fast" Meets "Stay Compliant"
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          Hardware and life science companies operate under unique pressures. They need to move fast—ordering
          specialized reagents, custom parts, and expensive equipment on tight timelines. But they also need to stay
          compliant—every dollar spent must be accounted for, every vendor invoice verified, every budget tracked.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          The result? A collision of urgency and bureaucracy. Scientists want to focus on experiments, not expense
          reports. Finance teams want clean books, not a detective hunt for missing receipts. Warehouse managers want to
          receive goods, not become data entry clerks.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">
          And somewhere in the middle, money leaks out. Duplicate payments slip through. Invoices get paid without
          verification. Budgets are blown because no one caught the overcharge until month-end close.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The Failed Solution: "Just Migrate Your ERP"
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          The traditional answer to this problem is a massive ERP migration. Rip out your existing systems, spend months
          (or years) implementing a new platform, retrain your entire team, and hope it all works.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-6">
          But here's the reality: most R&D companies don't need to replace their entire financial stack. They need to{" "}
          <span className="font-semibold text-foreground">connect it</span>. They need an intelligence layer that sits
          on top of their existing tools—QuickBooks, NetSuite, Ramp, Bill.com—and makes them smarter.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-12">That's exactly what Sanyya does.</p>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The Sanyya Approach: An Intelligence Layer, Not a Replacement
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-8">
          Sanyya is built on a simple premise: your existing tools are fine. What's missing is the brain that connects
          them. We've built a semantic reconciliation engine that understands your POs, your packing slips, and your
          invoices—not as static documents, but as connected data points that tell a story.
        </p>

        <div className="space-y-5 mb-12 pl-1">
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-violet-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">
                We don't just scan an invoice; we validate it against reality.
              </span>{" "}
              For physical goods, we automate the critical 3-way match. For service agreements, we match invoices
              directly against contract milestones and work-completion logs.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">
                We liberate your LabOps and Warehouse teams from the receiving desk.
              </span>{" "}
              Sanyya turns any smartphone into a receiving terminal. Your team can snap a photo of a packing slip the
              moment the box arrives. No USB scanners, no laptop carts, just done.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1.5 rounded-full bg-gradient-to-b from-cyan-500 to-emerald-500 flex-shrink-0" />
            <p className="text-slate-600 leading-[1.8]">
              <span className="font-semibold text-foreground">We don't replace your accounting software;</span> we sit
              upstream of it. We handle the messy verification work so your finance team receives only perfectly
              matched, audit-ready data.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6 mt-16">
          The Future is Aligned
        </h2>

        <p className="text-slate-600 leading-[1.8] mb-6">
          We believe the future of R&D finance isn't about more software—it's about smarter connections. It's about
          giving scientists the freedom to focus on discovery while giving finance teams the control they need. It's
          about turning the chaos of procurement into a clear, auditable trail from purchase order to payment.
        </p>

        <p className="text-slate-600 leading-[1.8] mb-10">
          That's the vision we're building at Sanyya. And we're looking for pioneer partners—innovative hardware and
          life science companies who want to shape this future with us.
        </p>

        <div className="border-t border-slate-200 pt-10 mt-10">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 tracking-tight">
            Welcome to Sanyya. Let's build something remarkable together.
          </p>

          <p className="text-slate-500 italic">— The Sanyya Team</p>
        </div>
      </>
    ),
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header - Light Airy Style */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-gradient" />

        {/* Floating Orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-violet-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl" />

        {/* Financial Grid */}
        <div className="absolute inset-0 financial-grid pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Category Pill */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 border border-violet-200/50 mb-6"
          >
            <Sparkles className="w-3 h-3 text-violet-500" />
            {post.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4 text-muted-foreground text-sm pb-10 border-b border-slate-200"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto px-6 py-12"
      >
        {post.content}
      </motion.article>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden p-8 md:p-12 text-center"
        >
          {/* Soft Gradient Orbs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-violet-100/60 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Ready to Transform Your R&D Finance?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Join our Pioneer Program and be among the first to experience intelligent financial reconciliation.
            </p>
            <Link to="/#pioneer">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-lg shadow-slate-900/15 hover:shadow-xl transition-all shine-effect"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
