"use client";

import { motion } from "framer-motion";
import {
  Hand,
  HeartHandshake,
  Link2,
  School,
  UsersRound,
  Waves,
} from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { coreValues } from "@/data/core-values";
import type { CoreValue } from "@/types/content";

const icons: Record<CoreValue["icon"], typeof Waves> = {
  waves: Waves,
  hand: Hand,
  users: UsersRound,
  heart: HeartHandshake,
  school: School,
  link: Link2,
};

export function CoreValuesSection() {
  return (
    <SectionShell eyebrow="집중 영역" title="함께 지키는 기준입니다.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((item, idx) => {
          const Icon = icons[item.icon];
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.26,
                delay: idx * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="group flex flex-col rounded-[22px] border border-[#E5E7EB]/85 bg-white/90 px-5 py-5 shadow-sm"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1A2B4C]/5 text-[#1A2B4C] transition-colors duration-300 group-hover:bg-[#2DD4BF]/15">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#6B7280]">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
