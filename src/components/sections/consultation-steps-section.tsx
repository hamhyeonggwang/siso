"use client";

import { motion } from "framer-motion";
import { Phone, UserRound, ClipboardCheck, Flag, HeartHandshake } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";

const steps = [
  { num: "01", label: "문의", detail: "전화, 홈페이지, 카카오톡 등으로 문의합니다.", Icon: Phone },
  { num: "02", label: "초기상담", detail: "보호자 상담을 통해 필요한 방향을 안내합니다.", Icon: UserRound },
  { num: "03", label: "평가", detail: "아이의 강점과 어려움을 다각도로 평가합니다.", Icon: ClipboardCheck },
  { num: "04", label: "계획수립", detail: "아이에게 필요한 목표와 중재 계획을 세웁니다.", Icon: Flag },
  { num: "05", label: "지원 및 코칭", detail: "치료와 코칭을 통해 일상 속 변화를 돕습니다.", Icon: HeartHandshake },
] as const;

export function ConsultationStepsSection() {
  return (
    <SectionShell
      id="flow"
      eyebrow="서비스 절차"
      title="시소 서비스 절차 안내"
      description="처음 오셔도 순서가 보입니다. 복잡한 단계 없이 오늘의 고민에서 시작해 참여 목표까지 이어집니다."
      className="bg-white/80"
    >
      <div className="relative overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol className="flex min-w-[680px] gap-0 md:min-w-0 md:justify-between">
          {steps.map((step, i) => {
            const StepIcon = step.Icon;
            return (
            <li key={step.label} className="relative flex flex-1 flex-col items-center text-center">
              {i < steps.length - 1 ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[calc(50%+1.5rem)] top-7 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[var(--siso-mint)]/40 to-[var(--siso-sky)]/30 md:block"
                  style={{ backgroundImage: "repeating-linear-gradient(to right, var(--siso-mint) 0, var(--siso-mint) 6px, transparent 6px, transparent 12px)" }}
                />
              ) : null}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
                className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-[#E2E8F0]/90 bg-white shadow-soft"
              >
                <StepIcon className="h-6 w-6 text-[var(--siso-mint)]" strokeWidth={1.5} aria-hidden />
              </motion.div>
              <p className="mt-3 text-[11px] font-bold tracking-widest text-[var(--siso-mint)]">{step.num}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--siso-text)]">{step.label}</p>
              <p className="mt-1.5 max-w-[9rem] text-xs leading-snug text-[var(--siso-muted)]">
                {step.detail}
              </p>
            </li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}
