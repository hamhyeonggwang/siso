"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SectionShell } from "@/components/sections/section-shell";
import { caregiverConcerns } from "@/data/caregiver-concerns";

export function CaregiverConcernsSection() {
  return (
    <SectionShell
      id="concerns"
      title={<>시소는 아이의 <span className="text-[var(--siso-mint)]">다양한 어려움</span>을 함께합니다.</>}
      description="진단명보다, 지금의 삶과 참여를 기준으로 함께 살펴봅니다."
      className="bg-white/70"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caregiverConcerns.map((item, idx) => {
          const Icon = item.Icon;
          return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.28,
              delay: idx * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-[24px] border border-[#E2E8F0]/90 bg-white p-6 shadow-soft transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--siso-mint)_14%,white)] text-[var(--siso-text)] transition-colors duration-300 group-hover:bg-[color-mix(in_srgb,var(--siso-mint)_22%,white)]">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--siso-text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--siso-muted)]">
                {item.subtitle}
              </p>
              <span className="mt-5 text-sm font-medium text-[var(--siso-mint)] group-hover:underline">
                자세히 보기
              </span>
            </Link>
          </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
