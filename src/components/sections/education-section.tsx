"use client";

import { motion } from "framer-motion";
import { GraduationCap, Mic, PanelsTopLeft, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/sections/section-shell";
import { courseFormatLabelKo, courses } from "@/data/courses";
import type { Course } from "@/types/content";

const formatIcons: Record<Course["format"], typeof Video> = {
  workshop: PanelsTopLeft,
  seminar: Mic,
  course: GraduationCap,
  clinical: Video,
};

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="전문가 교육"
      title="교육 일정과 모듈 안내입니다."
      description="워크숍, 세미나, 과정·케이스 스튜디오를 운영합니다."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((course, idx) => {
          const Icon = formatIcons[course.format];
          const statusLabel =
            course.status === "full"
              ? "마감"
              : course.status === "recording"
                ? "다시보기"
                : "접수 중";
          return (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-36px" }}
              transition={{
                duration: 0.26,
                delay: idx * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="flex h-full flex-col rounded-[22px] border border-[#E5E7EB] bg-[#FAFBFC] p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1A2B4C] text-[#E5E7EB]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium tracking-wide text-[#9CA3AF]">
                    {courseFormatLabelKo[course.format]}
                  </p>
                  <h3 className="text-[15px] font-semibold text-[#111827]">{course.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6B7280]">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <Badge tone="navy">{course.dateLabel}</Badge>
                <Badge>{course.duration}</Badge>
                <Badge tone="teal">{course.audience}</Badge>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#F1F5F9] pt-4">
                <span className="text-xs font-semibold text-[#1A2B4C]">{statusLabel}</span>
                <Button variant="card" href="/apply?type=education" showArrow motionInteractive={false}>
                  신청하기
                </Button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
