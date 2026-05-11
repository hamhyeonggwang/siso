import type { Metadata } from "next";
import Link from "next/link";
import {
  User,
  Users,
  Zap,
  Tent,
  Home,
  School,
  Wifi,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "지원프로그램",
  description: "시소감각통합상담연구소의 다양한 지원 프로그램을 소개합니다.",
};

const programs = [
  {
    key: "individual",
    icon: User,
    color: "bg-[#EEF6FF]",
    iconColor: "text-[#3B82F6]",
    badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
    title: "개별 프로그램",
    titleEn: "Individual Program",
    desc: "치료사와 1:1로 진행하는 맞춤형 감각통합 및 작업수행 지원 프로그램입니다. 아이의 고유한 감각 프로파일과 생활 목표에 맞춰 회기를 구성합니다.",
    points: [
      "아동의 감각·운동 발달 수준 기반 개별 목표 설정",
      "주 1~2회 50분 개별 세션",
      "보호자 코칭 및 가정 연계 활동 제공",
    ],
    badge: "1:1 맞춤",
    href: "/apply?type=consultation&focus=individual",
  },
  {
    key: "pair-group",
    icon: Users,
    color: "bg-[#F0FDF4]",
    iconColor: "text-[#22C55E]",
    badgeColor: "bg-[#DCFCE7] text-[#15803D]",
    title: "짝·그룹 프로그램",
    titleEn: "Pair & Group Program",
    desc: "2~4명의 소그룹에서 또래와 함께 감각 조절, 사회 참여, 공동 놀이 기술을 자연스럽게 연습합니다. 치료사가 그룹 내 상호작용을 세밀하게 지원합니다.",
    points: [
      "2~4인 소그룹 구성 (발달 수준 고려)",
      "또래 상호작용·차례 기다리기·협동 과제",
      "그룹 내 자기조절 전략 습득",
    ],
    badge: "소그룹",
    href: "/apply?type=consultation&focus=group",
  },
  {
    key: "intensive",
    icon: Zap,
    color: "bg-[#FFFBEB]",
    iconColor: "text-[#F59E0B]",
    badgeColor: "bg-[#FEF3C7] text-[#B45309]",
    title: "집중 프로그램",
    titleEn: "Intensive Program",
    desc: "단기간에 집중적으로 목표 기술을 향상시키는 프로그램입니다. 방학이나 전환기(입학·진급)에 집중적으로 진행하여 빠른 변화를 경험할 수 있습니다.",
    points: [
      "2~4주 집중 일정 (주 3~5회)",
      "입학·전학 등 전환기 적응 지원",
      "다학제 팀 협업으로 목표 효율 극대화",
    ],
    badge: "단기 집중",
    href: "/apply?type=consultation&focus=intensive",
  },
  {
    key: "camp",
    icon: Tent,
    color: "bg-[#FFF7F0]",
    iconColor: "text-[#F97316]",
    badgeColor: "bg-[#FFEDD5] text-[#C2410C]",
    title: "생활 캠프 프로그램",
    titleEn: "Life Camp Program",
    desc: "방학 중 진행되는 체험 중심 캠프로, 일상 생활 기술과 사회 참여를 실제 환경에서 연습합니다. 또래와 함께 활동하며 자신감과 독립 기술을 키웁니다.",
    points: [
      "여름·겨울 방학 집중 캠프 운영",
      "요리·이동·지역사회 참여 등 생활 기술",
      "오전 4시간 소그룹 진행 (정원 6~8명)",
    ],
    badge: "방학 캠프",
    href: "/apply?type=consultation&focus=camp",
  },
] as const;

const visitPrograms = [
  {
    key: "home-visit",
    icon: Home,
    color: "bg-[#F5F3FF]",
    iconColor: "text-[#8B5CF6]",
    badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
    title: "가정 방문 지원",
    titleEn: "Home Visit",
    desc: "치료사가 직접 가정을 방문하여 가정 환경에서의 감각 조절, 일상 루틴, 수면·식사 등 생활 기술을 지원합니다. 보호자 코칭이 함께 이루어집니다.",
    points: [
      "가정 환경 맥락에서의 자연스러운 중재",
      "수면·식사·위생 등 일상 루틴 지원",
      "보호자 실시간 코칭 및 환경 수정 제안",
    ],
    badge: "가정 방문",
    href: "/apply?type=consultation&focus=home-visit",
  },
  {
    key: "school-visit",
    icon: School,
    color: "bg-[#FDF4FF]",
    iconColor: "text-[#A855F7]",
    badgeColor: "bg-[#FAE8FF] text-[#7E22CE]",
    title: "유치원(어린이집) & 학교 방문 지원",
    titleEn: "School / Kindergarten Visit",
    desc: "치료사가 아이의 교육 기관을 방문하여 교실 환경에서 참여를 지원합니다. 담임 교사·보조 교사와 협업하여 지속적인 지원 전략을 수립합니다.",
    points: [
      "교실 참여·전환 활동·쉬는 시간 지원",
      "교사 대상 관찰 기록·지원 전략 코칭",
      "개별화교육계획(IEP) 연계 협력",
    ],
    badge: "기관 방문",
    href: "/apply?type=consultation&focus=school-visit",
  },
] as const;

const remoteProgram = {
  key: "remote",
  icon: Wifi,
  color: "bg-[#F0FDFA]",
  iconColor: "text-[var(--siso-mint)]",
  badgeColor: "bg-[#CCFBF1] text-[#0D6E5A]",
  title: "원격 지원 서비스",
  titleEn: "Telehealth / Remote Support",
  desc: "거리·이동의 제약 없이 비대면으로 받는 코칭, 부모 상담, 자문 서비스입니다. 화상 플랫폼을 통해 평가 결과 상담, 가정 코칭, 기관 자문을 진행합니다.",
  points: [
    "초기 상담·결과 상담 비대면 가능",
    "부모 감각 코칭·루틴 지도 (화상)",
    "지방·해외 거주 가족 대상 지원 가능",
  ],
  badge: "비대면",
  href: "/apply?type=consultation&focus=remote",
};

function ProgramCard({
  program,
  wide = false,
}: {
  program: (typeof programs)[number] | typeof remoteProgram | (typeof visitPrograms)[number];
  wide?: boolean;
}) {
  const Icon = program.icon;
  return (
    <div
      className={[
        "group flex flex-col rounded-[22px] border border-[#E2E8F0]/70 bg-white p-6 shadow-sm transition-[transform,shadow] duration-300 hover:-translate-y-1 hover:shadow-lg",
        wide ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${program.color}`}>
          <Icon className={`h-5 w-5 ${program.iconColor}`} />
        </span>
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${program.badgeColor}`}>
          {program.badge}
        </span>
      </div>
      <div className="mt-4 flex-1">
        <h3 className="text-lg font-black tracking-tight text-[var(--siso-text)]">
          {program.title}
          <span className="ml-2 text-xs font-semibold text-[var(--siso-muted)]">{program.titleEn}</span>
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--siso-muted)]">{program.desc}</p>
        <ul className="mt-4 space-y-2">
          {program.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2 text-[13px] text-[var(--siso-text)]">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${program.iconColor}`} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <Link
          href={program.href}
          className={[
            "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-colors",
            program.badgeColor,
            "hover:opacity-80",
          ].join(" ")}
        >
          문의하기
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
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
            <span className="font-semibold text-[var(--siso-text)]">지원프로그램</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)] md:text-4xl">
            지원 프로그램
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--siso-muted)]">
            아이의 발달 수준, 생활 환경, 가족의 목표에 따라 적합한 프로그램을 선택하세요.
            모든 프로그램은 초기 상담 후 연결됩니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 space-y-12">

        {/* 기본 프로그램 4종 */}
        <section>
          <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-[var(--siso-mint)] uppercase">
            Core Programs
          </p>
          <h2 className="text-xl font-black tracking-tight text-[var(--siso-text)]">
            기본 지원 프로그램
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <ProgramCard key={p.key} program={p} />
            ))}
          </div>
        </section>

        {/* 방문 지원 */}
        <section>
          <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-[#8B5CF6] uppercase">
            Outreach
          </p>
          <h2 className="text-xl font-black tracking-tight text-[var(--siso-text)]">
            방문 지원
          </h2>
          <p className="mt-1 text-[14px] text-[var(--siso-muted)]">
            치료사가 아이가 생활하는 공간으로 찾아갑니다.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {visitPrograms.map((p) => (
              <ProgramCard key={p.key} program={p} />
            ))}
          </div>
        </section>

        {/* 원격 지원 */}
        <section>
          <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-[var(--siso-mint)] uppercase">
            Telehealth
          </p>
          <h2 className="text-xl font-black tracking-tight text-[var(--siso-text)]">
            원격 지원 서비스
          </h2>
          <div className="mt-6 max-w-2xl">
            <ProgramCard program={remoteProgram} wide />
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="rounded-[24px] bg-gradient-to-br from-[var(--siso-mint)] to-[var(--siso-sky)] px-8 py-10 text-white">
          <h2 className="text-xl font-black tracking-tight">
            어떤 프로그램이 맞을지 모르겠다면?
          </h2>
          <p className="mt-2 text-[14px] text-white/80">
            초기 상담을 통해 아이에게 가장 적합한 프로그램을 함께 찾아드립니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/apply" glass showArrow className="bg-white text-[var(--siso-mint)] hover:bg-white/90">
              초기상담 신청
            </Button>
            <Button
              href="https://pf.kakao.com/_xnKxmxb"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              glass
              className="border-white/30 text-white hover:bg-white/10"
            >
              카카오로 문의
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
