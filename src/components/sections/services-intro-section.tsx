"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, HandHeart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/sections/section-shell";

const services = [
  {
    title: "상담",
    body: "아이와 가족의 이야기를 함께 듣고 이해합니다.",
    Icon: MessageCircle,
    cta: { label: "자세히 보기", href: "/apply" },
    illustrationColors: ["#67C5B8", "#A9D6E5"],
    illustrationBg: "from-[#f0fdf9] to-[#e0f7f4]",
  },
  {
    title: "평가",
    body: "감각, 행동, 발달, 환경을 다양한 관점에서 평가합니다.",
    Icon: ClipboardList,
    cta: { label: "자세히 보기", href: "/#assessments" },
    illustrationColors: ["#A9D6E5", "#67C5B8"],
    illustrationBg: "from-[#f0f8ff] to-[#dff0fa]",
  },
  {
    title: "맞춤형 지원",
    body: "아이와 가족, 학교와 함께 맞춤형 계획을 세웁니다.",
    Icon: HandHeart,
    cta: { label: "자세히 보기", href: "/#programs" },
    illustrationColors: ["#FFD166", "#67C5B8"],
    illustrationBg: "from-[#fffbf0] to-[#fff3d0]",
  },
] as const;

export function ServicesIntroSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="함께하는 지원"
      title="상담에서 일상 참여까지, 한 흐름으로"
      description="아이를 문제 유형으로 나누지 않고, 지금의 참여와 관계를 기준으로 단계를 밟습니다."
      className="bg-[color-mix(in_srgb,var(--siso-sky)_10%,var(--siso-bg))]"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((s, idx) => {
          const SIcon = s.Icon;
          return (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.3,
              delay: idx * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col rounded-[24px] border border-white/80 bg-white/95 shadow-soft overflow-hidden"
          >
            {/* 일러스트 영역 */}
            <div className={`relative h-44 bg-gradient-to-br ${s.illustrationBg} flex items-end justify-end overflow-hidden`}>
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${s.illustrationColors[0]}55, transparent 55%), radial-gradient(circle at 75% 25%, ${s.illustrationColors[1]}44, transparent 50%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <SIcon className="h-20 w-20 opacity-[0.12] text-[var(--siso-text)]" strokeWidth={1} aria-hidden />
              </div>
            </div>
            {/* 텍스트 영역 */}
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--siso-text)]">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--siso-muted)]">
                {s.body}
              </p>
              <div className="mt-6">
                <Button variant="ghost" size="sm" href={s.cta.href} showArrow>
                  {s.cta.label}
                </Button>
              </div>
            </div>
          </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
