"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="voices"
      eyebrow="보호자 이야기"
      title="말로만 듣는 치료가 아니라, 일상의 변화를 이야기합니다"
      className="bg-[color-mix(in_srgb,var(--siso-amber)_10%,white)]"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.28, delay: idx * 0.05 }}
            className="relative flex flex-col rounded-[24px] border border-white/90 bg-white/95 p-6 shadow-soft"
          >
            <Quote
              className="absolute right-5 top-5 h-8 w-8 text-[color-mix(in_srgb,var(--siso-mint)_25%,transparent)]"
              aria-hidden
            />
            <figcaption className="text-[11px] font-semibold uppercase tracking-wider text-[var(--siso-muted)]">
              {t.tag}
            </figcaption>
            <blockquote className="relative z-10 mt-4 text-[15px] leading-relaxed text-[var(--siso-text)]">
              “{t.quote}”
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  );
}
