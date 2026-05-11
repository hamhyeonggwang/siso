"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/sections/section-shell";
import { programs, programFilterLabels } from "@/data/programs";
import type { Program, ProgramAgeGroup, ProgramCategory } from "@/types/content";
import { cn } from "@/lib/utils";

const ageFilters: ProgramAgeGroup[] = [
  "preschool",
  "lower_elementary",
  "upper_elementary",
  "teen",
];

const categoryFilters: ProgramCategory[] = [
  "group",
  "individual",
  "social_skills",
  "self_regulation",
  "school_participation",
];

function StatusBadge({ status }: { status: Program["status"] }) {
  if (status === "open") return <Badge tone="teal">접수 중</Badge>;
  if (status === "waitlist") return <Badge tone="navy">대기</Badge>;
  return <Badge>초대</Badge>;
}

function Thumb({ hint }: { hint: string }) {
  return (
    <div className="relative h-36 overflow-hidden rounded-[18px] border border-[#E5E7EB]/80 bg-gradient-to-br from-[#E2E8F0]/70 via-[#F8FAFC] to-[color-mix(in_srgb,var(--siso-mint)_22%,white)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-35 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(30,41,59,0.28), transparent 45%), radial-gradient(circle at 80% 0%, rgba(103,197,184,0.35), transparent 40%)",
        }}
      />
      <p className="absolute inset-0 grid place-items-center px-4 text-center text-[11px] font-medium text-[var(--siso-muted)]">
        {hint}
      </p>
    </div>
  );
}

export function ProgramExplorer() {
  const [age, setAge] = React.useState<ProgramAgeGroup[]>([]);
  const [cats, setCats] = React.useState<ProgramCategory[]>([]);

  const toggle = <T extends string>(
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>,
    item: T,
  ) =>
    setList((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
    );

  const filtered = programs.filter((p) => {
    const ageOk =
      age.length === 0 || age.some((a) => p.ageGroups.includes(a as never));
    const catOk =
      cats.length === 0 || cats.some((c) => p.categories.includes(c as never));
    return ageOk && catOk;
  });

  const chipClasses = (active: boolean) =>
    cn(
      "rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-normal transition-all duration-200",
      active
        ? "border-[var(--siso-mint)] bg-[var(--siso-mint)] text-white shadow-sm"
        : "border-transparent bg-white/90 text-[var(--siso-muted)] hover:border-[#E5E7EB]",
    );

  return (
    <SectionShell
      id="programs"
      eyebrow="프로그램"
      title="맞는 과정을 찾아보세요."
      description="연령과 초점을 눌러 필터링할 수 있습니다."
      className="bg-[#F8FAFC]"
    >
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {ageFilters.map((key) => (
            <button
              key={key}
              type="button"
              className={chipClasses(age.includes(key))}
              onClick={() => toggle(age, setAge, key)}
            >
              {programFilterLabels.age[key]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((key) => (
            <button
              key={key}
              type="button"
              className={chipClasses(cats.includes(key))}
              onClick={() => toggle(cats, setCats, key)}
            >
              {programFilterLabels.focus[key]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1 text-xs text-[#9CA3AF]">
          <span>
            <span className="font-semibold text-[var(--siso-text)]">{filtered.length}</span>개 표시
          </span>
          {(age.length > 0 || cats.length > 0) && (
            <button
              type="button"
              className="font-semibold text-[var(--siso-mint)] underline-offset-4 hover:underline"
              onClick={() => {
                setAge([]);
                setCats([]);
              }}
            >
              초기화
            </button>
          )}
        </div>
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((program) => (
            <motion.article
              layout
              key={program.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="flex h-full flex-col rounded-[22px] border border-[#E5E7EB]/80 bg-white p-5 shadow-sm"
            >
              <Thumb hint={program.thumbnailHint} />
              <div className="mt-4 flex flex-wrap gap-1.5">
                {program.ageGroups.map((a) => (
                  <Badge key={a} tone="navy">
                    {programFilterLabels.age[a]}
                  </Badge>
                ))}
                {program.categories.slice(0, 2).map((c) => (
                  <Badge key={c}>{programFilterLabels.focus[c]}</Badge>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--siso-text)]">{program.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                {program.shortDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {program.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-[11px] font-medium text-[#4B5563]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#F1F5F9] pt-4">
                <StatusBadge status={program.status} />
                <Button
                  variant="card"
                  href={`/programs/${program.slug}`}
                  showArrow
                  motionInteractive={false}
                >
                  자세히
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
