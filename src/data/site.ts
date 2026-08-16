import {
  FileText,
  MessageSquare,
  GitBranch,
  ShoppingCart,
  PackageCheck,
  Boxes,
  Receipt,
  Building2,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Module = {
  name: string;
  slug: string;
  href: string;
  icon: LucideIcon;
  iconColor: string;
  short: string;
  long: string;
  featured?: boolean;
};

export const modules: Module[] = [
  {
    name: "Quote Management",
    slug: "quotes",
    href: "/product",
    icon: FileText,
    iconColor: "text-[hsl(168_78%_38%)]",
    short: "Centralize and compare vendor quotes.",
    long: "Centralize vendor quotes. Compare side-by-side. Get AI-powered recommendations.",
  },
  {
    name: "Requisitions",
    slug: "requisitions",
    href: "/product",
    icon: MessageSquare,
    iconColor: "text-[hsl(268_70%_44%)]",
    short: "Create POs from Slack with an AI agent.",
    long: "Create purchase requests from Slack. Our AI agent handles the rest.",
    featured: true,
  },
  {
    name: "Approvals & Workflows",
    slug: "approvals",
    href: "/product",
    icon: GitBranch,
    iconColor: "text-[hsl(170_70%_40%)]",
    short: "Dynamic routing by threshold or project.",
    long: "Dynamic approval routing by threshold, department, project, or any dimension you need.",
  },
  {
    name: "Purchase Orders",
    slug: "purchase-orders",
    href: "/product",
    icon: ShoppingCart,
    iconColor: "text-[hsl(168_78%_40%)]",
    short: "Single source of truth for commitments.",
    long: "The single source of truth for every commitment. Blanket PO drawdown tracking included.",
  },
  {
    name: "Receiving",
    slug: "receiving",
    href: "/product",
    icon: PackageCheck,
    iconColor: "text-[hsl(25_90%_40%)]",
    short: "Mobile receiving with vendor-trained OCR.",
    long: "Mobile app for the loading dock. AI-powered OCR trained on vendor-specific packing slip formats.",
    featured: true,
  },
  {
    name: "Inventory Management",
    slug: "inventory",
    href: "/product",
    icon: Boxes,
    iconColor: "text-[hsl(160_84%_40%)]",
    short: "Real-time stock from actual deliveries.",
    long: "Real-time stock levels driven by actual deliveries. AI learns your consumption patterns over time.",
  },
  {
    name: "Invoice Processing",
    slug: "invoices",
    href: "/product",
    icon: Receipt,
    iconColor: "text-[hsl(38_92%_40%)]",
    short: "3-way match with bill pay handoff.",
    long: "Email-forward ingestion, 3-way matching, approval routing, and handoff to any bill pay platform.",
  },
  {
    name: "Vendor Management",
    slug: "vendors",
    href: "/product",
    icon: Building2,
    iconColor: "text-[hsl(190_85%_32%)]",
    short: "Auto vendor scorecards from real data.",
    long: "Automatic vendor scorecards built from pricing accuracy, delivery reliability, and quote consistency.",
  },
  {
    name: "Dashboards & Reporting",
    slug: "dashboards",
    href: "/product",
    icon: BarChart3,
    iconColor: "text-[hsl(190_85%_32%)]",
    short: "Line-item search and accruals.",
    long: "Line-item search across every document. Custom dashboards. Accrual reporting.",
  },
  {
    name: "AI Match Engine",
    slug: "match-engine",
    href: "/product",
    icon: Sparkles,
    iconColor: "text-[hsl(190_85%_32%)]",
    short: "Semantic 3-way matching at the line level.",
    long: "Semantic vector matching connects POs, packing slips, and invoices, even with different names.",
  },
];

export const integrations = [
  "Quartzy",
  "Slack",
  "NetSuite",
  "Ramp",
  "Bill.com",
  "QuickBooks Online",
];
