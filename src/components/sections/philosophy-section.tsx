"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-[#E2E8F0]/80 bg-[color-mix(in_srgb,var(--siso-mint)_6%,white)] py-14 md:py-[4.5rem]"
    >
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-muted)]">
            센터 철학
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-[var(--siso-text)] md:text-[1.75rem]">
            아이를 문제 중심으로
            <span className="mt-1 block text-balance text-[var(--siso-mint)]">구분하지 않습니다.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--siso-muted)] md:text-base">
            진단명보다 지금의 삶과 참여를 먼저 듣습니다. 감각, 행동, 학교생활, 놀이, 관계, 일상의
            어려움을 나누며—보호자의 언어로 정리하고, 다음 한 걸음을 함께 밟습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
