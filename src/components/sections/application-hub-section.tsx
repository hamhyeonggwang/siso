"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const steps = ["둘러보기", "작성하기", "확인"];

export function ApplicationHubSection() {
  return (
    <section id="apply" className="scroll-mt-28 border-b border-[#E5E7EB]/80">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-[4.5rem] lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="text-[11px] font-semibold tracking-[0.06em] text-[#9CA3AF]">
              상담·접수
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827] md:text-3xl">
              한 번의 문의 양식으로 시작합니다.
            </h2>
            <p className="mt-3 text-sm text-[#6B7280]">상담 · 프로그램 · 대기 등록.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/apply" showArrow glass>
                상담·접수
              </Button>
              <Button variant="secondary" glass href="/#programs">
                프로그램
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.28, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2 rounded-[22px] border border-[#E5E7EB] bg-white px-5 py-5 shadow-sm"
          >
            {steps.map((label, idx) => (
              <div key={label} className="flex items-center gap-2">
                {idx > 0 ? (
                  <span className="hidden text-[#E5E7EB] sm:inline" aria-hidden>
                    |
                  </span>
                ) : null}
                <div className="min-w-[4.5rem] text-center sm:text-left">
                  <span className="block text-[10px] font-semibold text-[#9CA3AF]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-[#111827]">{label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
