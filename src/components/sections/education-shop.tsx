"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Users, BookOpen, MessageSquare, Handshake, Lightbulb } from "lucide-react";

const categories = [
  { key: "parent", label: "부모 교육", icon: BookOpen, color: "#F59E0B", bg: "bg-[#FFFBEB]", text: "text-[#B45309]", badge: "bg-[#FEF3C7] text-[#92400E]" },
  { key: "expert", label: "전문가 교육", icon: Users, color: "#3B82F6", bg: "bg-[#EEF6FF]", text: "text-[#1D4ED8]", badge: "bg-[#DBEAFE] text-[#1E40AF]" },
  { key: "consult", label: "전문가 협업 및 컨설팅", icon: Handshake, color: "#8B5CF6", bg: "bg-[#F5F3FF]", text: "text-[#6D28D9]", badge: "bg-[#EDE9FE] text-[#5B21B6]" },
  { key: "coaching", label: "자문 & 코칭", icon: Lightbulb, color: "#10B981", bg: "bg-[#F0FDF4]", text: "text-[#065F46]", badge: "bg-[#DCFCE7] text-[#14532D]" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

type CourseCard = {
  id: string;
  category: CategoryKey;
  title: string;
  subtitle: string;
  desc: string;
  format: string;
  duration: string;
  audience: string;
  level: "입문" | "중급" | "심화" | "전 수준";
  gradientFrom: string;
  gradientTo: string;
};

const courses: CourseCard[] = [
  // 부모 교육
  {
    id: "pe1",
    category: "parent",
    title: "감각통합 이해하기",
    subtitle: "부모를 위한 기초 과정",
    desc: "우리 아이의 감각 처리 방식을 이해하고, 가정에서 바로 적용할 수 있는 환경 조성과 상호작용 전략을 배웁니다.",
    format: "워크숍",
    duration: "3시간",
    audience: "보호자",
    level: "입문",
    gradientFrom: "#FEF3C7",
    gradientTo: "#FDE68A",
  },
  {
    id: "pe2",
    category: "parent",
    title: "일상 루틴 코칭",
    subtitle: "아침·취침·식사 루틴 만들기",
    desc: "감각에 민감한 아이를 위한 아침 준비·식사·취침 루틴을 구조화하고, 전환 어려움을 줄이는 실전 전략을 다룹니다.",
    format: "소그룹 과정",
    duration: "4주 (주 1회)",
    audience: "보호자",
    level: "입문",
    gradientFrom: "#FDE68A",
    gradientTo: "#FCD34D",
  },
  {
    id: "pe3",
    category: "parent",
    title: "공동조절과 부모 코칭",
    subtitle: "아이와 함께 감정 조절하기",
    desc: "아이의 조절 어려움 순간에 부모가 어떻게 함께 조절 파트너가 될 수 있는지, 공동조절의 원리와 실제 기술을 연습합니다.",
    format: "세미나",
    duration: "2.5시간",
    audience: "보호자",
    level: "중급",
    gradientFrom: "#FFEDD5",
    gradientTo: "#FED7AA",
  },
  {
    id: "pe4",
    category: "parent",
    title: "학교 생활 지원 전략",
    subtitle: "교실·학교 환경 대비",
    desc: "입학·전학 등 학교 환경 변화에 적응하는 방법, 담임 교사와 소통하는 전략, 숙제·등교 거부를 다루는 방법을 배웁니다.",
    format: "워크숍",
    duration: "3시간",
    audience: "보호자",
    level: "입문",
    gradientFrom: "#FEF9C3",
    gradientTo: "#FEF08A",
  },

  // 전문가 교육
  {
    id: "ee1",
    category: "expert",
    title: "감각통합 이론과 실제",
    subtitle: "SI 기초 집중 과정",
    desc: "감각통합 이론의 핵심 개념과 임상 적용 원칙을 체계적으로 다루는 전문가 집중 과정입니다. OT·PT·교사 등 관련 직군 대상.",
    format: "집중 과정",
    duration: "2일 (16시간)",
    audience: "OT · PT · 특수교사",
    level: "입문",
    gradientFrom: "#DBEAFE",
    gradientTo: "#BFDBFE",
  },
  {
    id: "ee2",
    category: "expert",
    title: "평가 결과를 중재로 연결하기",
    subtitle: "임상 추론 심화 과정",
    desc: "감각통합 평가 결과를 해석하고 이를 구체적인 중재 목표·전략으로 연결하는 임상 추론 능력을 강화합니다.",
    format: "세미나",
    duration: "6시간",
    audience: "OT · 임상가",
    level: "심화",
    gradientFrom: "#BFDBFE",
    gradientTo: "#93C5FD",
  },
  {
    id: "ee3",
    category: "expert",
    title: "교사를 위한 감각 지원",
    subtitle: "교실 속 감각 전략",
    desc: "통합 학급·특수학급 교사를 위한 감각 친화적 교실 환경 조성, 수업 중 조절 지원, 개별 학생 지원 전략을 다룹니다.",
    format: "워크숍",
    duration: "4시간",
    audience: "교사 · 보조인력",
    level: "입문",
    gradientFrom: "#E0F2FE",
    gradientTo: "#BAE6FD",
  },
  {
    id: "ee4",
    category: "expert",
    title: "발달 작업치료 심화 과정",
    subtitle: "작업수행 분석과 중재",
    desc: "아동의 작업수행을 분석하고 일상 활동·학업 참여를 증진하는 발달 OT 심화 전략을 배웁니다.",
    format: "집중 과정",
    duration: "1일 (8시간)",
    audience: "OT",
    level: "심화",
    gradientFrom: "#CCFBF1",
    gradientTo: "#A7F3D0",
  },

  // 전문가 협업 및 컨설팅
  {
    id: "co1",
    category: "consult",
    title: "기관 감각환경 컨설팅",
    subtitle: "어린이집·학교 대상",
    desc: "어린이집, 유치원, 학교 환경의 감각적 특성을 분석하고 아동 친화적 환경으로 수정하는 방안을 제안합니다.",
    format: "기관 컨설팅",
    duration: "반일 (현장 방문)",
    audience: "기관 관리자 · 교사",
    level: "전 수준",
    gradientFrom: "#EDE9FE",
    gradientTo: "#DDD6FE",
  },
  {
    id: "co2",
    category: "consult",
    title: "다학제 팀 케이스 협의",
    subtitle: "팀 기반 사례 분석",
    desc: "OT·교사·복지사·의료진이 함께 참여하는 케이스 협의 세션입니다. 시소 치료사가 감각통합 관점의 의견을 제공합니다.",
    format: "케이스 협의",
    duration: "2시간 / 건",
    audience: "다학제 팀",
    level: "전 수준",
    gradientFrom: "#DDD6FE",
    gradientTo: "#C4B5FD",
  },
  {
    id: "co3",
    category: "consult",
    title: "교사·보조인력 현장 자문",
    subtitle: "교실 내 행동 지원",
    desc: "특정 아동의 교실 내 어려움(갑작스러운 행동·감각 회피·과잉 반응)에 대한 현장 관찰과 즉각적 지원 전략을 제공합니다.",
    format: "현장 자문",
    duration: "2시간 (현장 포함)",
    audience: "교사 · 보조인력",
    level: "전 수준",
    gradientFrom: "#F3E8FF",
    gradientTo: "#E9D5FF",
  },
  {
    id: "co4",
    category: "consult",
    title: "기관 프로그램 개발 자문",
    subtitle: "감각통합 기반 프로그램 설계",
    desc: "복지관·치료센터·학교 등이 감각통합 기반 프로그램을 자체적으로 운영할 수 있도록 설계·개발을 지원합니다.",
    format: "자문 패키지",
    duration: "협의",
    audience: "기관 · 팀",
    level: "전 수준",
    gradientFrom: "#FAE8FF",
    gradientTo: "#F0ABFC",
  },

  // 자문 & 코칭
  {
    id: "ck1",
    category: "coaching",
    title: "1:1 임상 슈퍼비전",
    subtitle: "치료사 개인 역량 강화",
    desc: "현장에서 다루기 어려운 케이스를 시소 전문 치료사와 1:1로 분석하고 중재 방향을 함께 설정합니다. OT·PT 대상.",
    format: "1:1 슈퍼비전",
    duration: "50분 / 회",
    audience: "OT · PT",
    level: "전 수준",
    gradientFrom: "#D1FAE5",
    gradientTo: "#A7F3D0",
  },
  {
    id: "ck2",
    category: "coaching",
    title: "부모 자문 코칭",
    subtitle: "지속 관리 코칭 패키지",
    desc: "정기적인 부모 코칭을 통해 가정에서의 지원 전략을 점검하고 새로운 목표를 설정합니다. 치료 종결 후 관리에도 적합합니다.",
    format: "화상 코칭",
    duration: "30분 / 회",
    audience: "보호자",
    level: "전 수준",
    gradientFrom: "#ECFDF5",
    gradientTo: "#D1FAE5",
  },
  {
    id: "ck3",
    category: "coaching",
    title: "진로·직업 자문",
    subtitle: "청소년·성인 전환 지원",
    desc: "감각 처리 어려움이 있는 청소년·청년의 진학·취업·자립 계획 수립을 위한 전문 자문 서비스입니다.",
    format: "자문",
    duration: "50분 / 회",
    audience: "청소년 · 보호자",
    level: "전 수준",
    gradientFrom: "#F0FDF4",
    gradientTo: "#DCFCE7",
  },
  {
    id: "ck4",
    category: "coaching",
    title: "온라인 Q&A 상담",
    subtitle: "전문가 직접 답변",
    desc: "시소 치료사에게 직접 질문하는 온라인 Q&A 서비스입니다. 평가 결과 해석, 가정 전략, 서비스 선택 등 무엇이든 물어보세요.",
    format: "비동기 문답",
    duration: "48시간 내 답변",
    audience: "보호자 · 전문가",
    level: "전 수준",
    gradientFrom: "#F7FEE7",
    gradientTo: "#ECFCCB",
  },
];

const levelColor: Record<CourseCard["level"], string> = {
  입문: "bg-blue-100 text-blue-700",
  중급: "bg-amber-100 text-amber-700",
  심화: "bg-red-100 text-red-700",
  "전 수준": "bg-slate-100 text-slate-600",
};

function CourseCardUI({ course, cat }: { course: CourseCard; cat: (typeof categories)[number] }) {
  const Icon = cat.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0]/70 bg-white shadow-sm transition-[transform,shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* 썸네일 영역 */}
      <div
        className="relative flex h-32 items-end px-5 pb-4"
        style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm">
          <Icon className="h-5 w-5" style={{ color: cat.color }} />
        </span>
        <span className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${levelColor[course.level]}`}>
          {course.level}
        </span>
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-1 flex-col p-5">
        <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-bold ${cat.badge}`}>
          {cat.label}
        </span>
        <h3 className="mt-2 text-[15px] font-black leading-snug tracking-tight text-[var(--siso-text)]">
          {course.title}
        </h3>
        <p className="text-[12px] font-semibold text-[var(--siso-muted)]">{course.subtitle}</p>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--siso-muted)]">
          {course.desc}
        </p>

        {/* 메타 정보 */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[#F1F5F9] pt-3">
          <span className="flex items-center gap-1 text-[11px] text-[var(--siso-muted)]">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[var(--siso-muted)]">
            <Users className="h-3 w-3" />
            {course.audience}
          </span>
          <span className="ml-auto rounded-full bg-[#F8FAFC] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--siso-text)]">
            {course.format}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/apply?type=program&focus=${course.id}`}
          className={[
            "mt-4 flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-[13px] font-bold transition-opacity hover:opacity-85",
            cat.badge,
          ].join(" ")}
        >
          접수하기
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export function EducationShop() {
  const [active, setActive] = React.useState<CategoryKey | "all">("all");

  const filtered = active === "all" ? courses : courses.filter((c) => c.category === active);

  return (
    <div className="min-h-screen bg-[var(--siso-bg)]">
      {/* 헤더 */}
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <Link href="/services" className="hover:text-[var(--siso-mint)]">서비스 안내</Link>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">교육 및 컨설팅</span>
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)] md:text-4xl">
                교육 및 컨설팅
              </h1>
              <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
                부모와 전문가를 위한 시소의 교육·협업·코칭 서비스
              </p>
            </div>
            <Link
              href="/apply?type=program"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--siso-mint)] px-5 py-2.5 text-sm font-bold text-white transition-[filter] hover:brightness-105"
            >
              교육 문의하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 카테고리 탭 */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActive("all")}
              className={[
                "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                active === "all"
                  ? "bg-[var(--siso-text)] text-white"
                  : "bg-[#F1F5F9] text-[var(--siso-muted)] hover:bg-[#E2E8F0]",
              ].join(" ")}
            >
              전체 ({courses.length})
            </button>
            {categories.map((cat) => {
              const count = courses.filter((c) => c.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActive(cat.key)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                    active === cat.key
                      ? `${cat.bg} ${cat.text}`
                      : "bg-[#F1F5F9] text-[var(--siso-muted)] hover:bg-[#E2E8F0]",
                  ].join(" ")}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--siso-muted)]">
            {filtered.length}개의 프로그램
          </p>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map((course) => {
              const cat = categories.find((c) => c.key === course.category)!;
              return <CourseCardUI key={course.id} course={course} cat={cat} />;
            })}
          </motion.div>
        </AnimatePresence>

        {/* 하단 문의 배너 */}
        <div className="mt-12 rounded-[24px] border border-[#E2E8F0]/80 bg-white p-8 text-center shadow-sm">
          <MessageSquare className="mx-auto h-8 w-8 text-[var(--siso-mint)]" />
          <h2 className="mt-3 text-lg font-black text-[var(--siso-text)]">
            원하는 과정이 없으신가요?
          </h2>
          <p className="mt-2 text-[14px] text-[var(--siso-muted)]">
            단체·기관 맞춤 교육, 비정기 특강, 해외 연수 연계 등 다양한 형태로 운영 가능합니다.
          </p>
          <Link
            href="/apply?type=consultation"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[var(--siso-mint)] px-6 py-2.5 text-sm font-bold text-white transition-[filter] hover:brightness-105"
          >
            맞춤 문의하기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
