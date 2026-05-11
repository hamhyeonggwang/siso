"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, UserRoundCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/sections/section-shell";
import { assessments, assessmentCategories } from "@/data/assessments";
import type { AssessmentCategory } from "@/types/content";
import { cn } from "@/lib/utils";

const categoryTone: Record<AssessmentCategory, "teal" | "navy" | "neutral"> =
  {
    sensory: "teal",
    motor: "navy",
    perception: "neutral",
    executive: "neutral",
    participation: "teal",
  };

const categoryLabel: Record<AssessmentCategory, string> = {
  sensory: "감각·조절",
  motor: "운동·실행",
  perception: "시각 지각",
  executive: "실행기능",
  participation: "참여 관점",
};

export function AssessmentExplorer() {
  const [filter, setFilter] = React.useState<
    AssessmentCategory | "all"
  >("all");

  const items =
    filter === "all"
      ? assessments
      : assessments.filter((a) => a.category === filter);

  return (
    <SectionShell
      id="assessments"
      eyebrow="평가"
      title="아이에게 맞는 평가를 고릅니다."
      description="연령, 소요 시간, 추천 상황을 한눈에 정리했습니다."
      className="bg-white"
    >
      <div className="flex flex-wrap gap-2">
        {assessmentCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id as typeof filter)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-normal transition-all duration-200",
              cat.id === filter
                ? "border-[var(--siso-mint)] bg-[var(--siso-mint)] text-white shadow-sm"
                : "border-transparent bg-[#F8FAFC]/90 text-[#6B7280] hover:bg-white",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="flex h-full flex-col rounded-[22px] border border-[#E5E7EB] bg-[#FAFBFC] p-5 shadow-sm"
            >
              <div className="flex flex-wrap gap-2">
                <Badge tone={categoryTone[item.category]}>
                  {categoryLabel[item.category]}
                </Badge>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#6B7280]">
                  <UserRoundCheck className="h-3 w-3 text-[var(--siso-mint)]" />
                  {item.targetAge}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#6B7280]">
                  <Timer className="h-3 w-3 text-[var(--siso-mint)]" />
                  {item.estimatedTime}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--siso-text)]">{item.name}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{item.summary}</p>
              <p className="mt-4 text-xs leading-relaxed text-[#9CA3AF]">
                {item.recommendedFor.slice(0, 2).join(" · ")}
              </p>
              <div className="mt-auto flex justify-end pt-6">
                <Button
                  variant="ghost"
                  href={`/apply?focus=assessment-${item.id}`}
                  showArrow
                >
                  상담 요청
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
