"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/sections/section-shell";
import { parentGuides } from "@/data/parent-guides";

export function ParentGuideSection() {
  return (
    <SectionShell
      id="parent-guide"
      eyebrow="부모 가이드"
      title="바쁜 보호자를 위한 짧은 글입니다."
      className="bg-gradient-to-br from-[#F8FAFC] to-[#E0FDF9]/35"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {parentGuides.map((guide, idx) => (
          <motion.article
            key={guide.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.26,
              delay: idx * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -2 }}
            className="flex flex-col rounded-[22px] border border-white/70 bg-white/90 px-5 py-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0FDF9]">
                <BookOpen className="h-3.5 w-3.5 text-[#1A2B4C]" aria-hidden />
              </span>
              <span className="text-[11px] font-medium text-[#9CA3AF]">{guide.readTime}</span>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold text-[#111827]">{guide.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{guide.description}</p>
            <div className="mt-5">
              <Button variant="secondary" size="sm" href={`/guides/${guide.id}`} showArrow glass>
                읽기
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
