import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-normal",
  {
    variants: {
      tone: {
        neutral: "border-[#E2E8F0] bg-white/90 text-[var(--siso-muted)]",
        teal: "border-[color-mix(in_srgb,var(--siso-mint)_40%,#e2e8f0)] bg-[color-mix(in_srgb,var(--siso-mint)_12%,white)] text-[#0f766e]",
        navy: "border-[#E2E8F0] bg-slate-100/90 text-[var(--siso-text)]",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ tone }), className)} {...props} />
  );
}
