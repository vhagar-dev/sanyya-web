import { Hash, Sparkles, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import sanyyaLogo from "@/assets/sanyya-logo.png";
import avatarMaya from "@/assets/avatar-maya.jpg";

export function SlackMockup({
  variant = "default",
  className,
}: {
  variant?: "default" | "compact";
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_hsl(220_43%_11%/0.06)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-3">
          <div className="flex items-center gap-2 text-foreground">
            <Hash className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">lab-ops</span>
          </div>
          <div className="tabular-nums text-[10px] text-muted-foreground">slack · sanyya agent</div>
        </div>
        <div className="space-y-4 p-4 sm:p-5">
          <Message author="Maya P." avatar={avatarMaya} time="10:42 AM">
            <p className="text-sm">Hey, I need 5 lab benches for the new clean room.</p>
          </Message>

          <Message
            author="Sanyya"
            avatar={sanyyaLogo}
            avatarBg="bg-fuchsia-50"
            badge
            time="10:42 AM"
          >
            <p className="text-sm">Got it. To create the requisition I need a couple things:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Budget code or project</li>
              <li>• Preferred vendor (or want me to compare?)</li>
              <li>• Need-by date</li>
            </ul>
          </Message>

          {variant !== "compact" && (
            <Message author="Maya P." avatar={avatarMaya} time="10:43 AM">
              <p className="text-sm">Project CR-12. Compare vendors please. Need by Nov 15.</p>
            </Message>
          )}

          <Message
            author="Sanyya"
            avatar={sanyyaLogo}
            avatarBg="bg-fuchsia-50"
            badge
            time="10:43 AM"
          >
            <p className="text-sm">Drafted PR-2041 · 5× lab benches · CR-12</p>
            <div className="mt-3 rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Best match</div>
                  <div className="text-sm font-medium text-foreground">VWR · $4,820</div>
                </div>
                <span className="rounded-full bg-[hsl(160_84%_50%/0.15)] px-2 py-0.5 tabular-nums text-[10px] text-[hsl(160_84%_40%)]">
                  ↓ 12%
                </span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-md bg-[hsl(160_84%_45%)] px-3 py-1.5 text-xs font-medium text-white">
                <Check className="size-3.5" /> Approve
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
                <X className="size-3.5" /> Reject
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
                <Sparkles className="size-3.5" /> Compare more
              </button>
            </div>
          </Message>
        </div>
      </div>
    </div>
  );
}

function Message({
  author,
  avatar,
  avatarBg,
  badge,
  time,
  children,
}: {
  author: string;
  avatar: string;
  avatarBg?: string;
  badge?: boolean;
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={cn(
          "size-8 shrink-0 overflow-hidden rounded-md border border-border",
          avatarBg ?? "bg-secondary",
        )}
      >
        <img
          src={avatar}
          alt={author}
          width={32}
          height={32}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{author}</span>
          {badge && (
            <span className="rounded-sm bg-brand/15 px-1 tabular-nums text-[9px] text-[hsl(268_70%_44%)]">
              App
            </span>
          )}
          <span className="tabular-nums text-[10px] text-muted-foreground">{time}</span>
        </div>
        <div className="mt-0.5 text-foreground">{children}</div>
      </div>
    </div>
  );
}
