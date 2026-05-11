"use client";

import { motion } from "framer-motion";
import { Building2, Presentation, Users, Boxes, Link2, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/sections/section-shell";
import { siteConfig } from "@/lib/site-config";

const items = [
  {
    title: "학교 협력",
    body: "교실·급식·쉬는 시간 등 참여 장면을 중심으로 협력안을 제안합니다.",
    Icon: Building2,
  },
  {
    title: "교사 교육",
    body: "감각 부담과 참여 촉진을 주제로 짧은 워크숍 형태로 맞춥니다.",
    Icon: Presentation,
  },
  {
    title: "사례회의",
    body: "기관 간 언어를 맞추며 다음 한 걸음을 합의합니다.",
    Icon: Users,
  },
  {
    title: "감각환경 자문",
    body: "교실·복도·놀이공간의 자극과 회복 균형을 함께 봅니다.",
    Icon: Boxes,
  },
  {
    title: "보호자 연계",
    body: "학교에서의 변화가 가정과 이어지도록 메시지를 정리합니다.",
    Icon: Link2,
  },
  {
    title: "교육 컨설팅",
    body: "학년·단위별 목표에 맞춘 연간·학기 단위 설계를 지원합니다.",
    Icon: GraduationCap,
  },
] as const;

export function InstitutionPartnershipSection() {
  return (
    <SectionShell
      id="institution"
      eyebrow="학교 · 기관 협력"
      title="현장과 가정이 같은 방향을 보도록"
      description="학교와 복지기관을 위한 협력 메뉴입니다. 톤은 조금 더 프로페셔널하게, 센터 전체 감성과는 맞춥니다."
      className="border-b border-[#E2E8F0]/80 bg-[#F8FAFC]"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((row, idx) => {
          const RowIcon = row.Icon;
          return (
          <motion.div
            key={row.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.26, delay: idx * 0.04 }}
            className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 shadow-soft"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900/[0.06] text-[#1E293B]">
                <RowIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--siso-text)]">{row.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--siso-muted)]">{row.body}</p>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/apply" showArrow glass>
          협력 문의
        </Button>
        <Button variant="secondary" glass href={siteConfig.emailMailto}>
          기관용 메일
        </Button>
      </div>
    </SectionShell>
  );
}
