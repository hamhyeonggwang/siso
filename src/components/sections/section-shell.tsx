import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 border-b border-[#E2E8F0]/80 py-14 md:py-[4.5rem]",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--siso-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--siso-text)] md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-[var(--siso-muted)] md:text-[15px]">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-9 md:mt-11">{children}</div>
      </div>
    </section>
  );
}
