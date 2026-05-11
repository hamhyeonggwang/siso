import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  ClipboardList,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Baby,
  Brain,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "상담 및 평가",
  description:
    "초기상담과 양육상담, 감각통합 및 작업치료 평가 서비스를 안내합니다. 시소감각통합상담연구소의 전문가가 아이와 가족의 이야기를 함께 듣습니다.",
};

/* ─── 상담 서비스 ─── */
const consultItems = [
  {
    title: "초기상담",
    Icon: MessageCircle,
    color: "bg-[color-mix(in_srgb,var(--siso-mint)_14%,white)]",
    iconColor: "text-[var(--siso-mint)]",
    desc: "처음 방문하시는 보호자를 위한 상담입니다. 아이의 발달과 일상생활, 가족의 걱정을 함께 들으며 이후 방향을 안내합니다.",
    detail: [
      "보호자 면담 (약 1시간)",
      "아이의 발달 및 행동 이해",
      "필요시 아동 관찰 1회 추가",
      "서비스 방향 안내 및 연계",
    ],
    time: "소요시간: 약 1시간",
  },
  {
    title: "양육상담",
    Icon: Users,
    color: "bg-[color-mix(in_srgb,var(--siso-sky)_20%,white)]",
    iconColor: "text-[#3B82F6]",
    desc: "아이의 행동이나 발달, 양육 과정에서 겪는 어려움에 대해 전문가와 함께 이야기합니다. 보호자의 언어로 풀어 드립니다.",
    detail: [
      "보호자 중심 상담",
      "가정 내 행동 이해 및 대응",
      "학교·기관 연계 방안 논의",
      "양육 전략 및 환경 조정",
    ],
    time: "소요시간: 약 1시간",
  },
];

/* ─── 평가 서비스 ─── */
const evalItems = [
  {
    title: "감각통합 평가",
    Icon: Activity,
    desc: "감각처리, 감각조절, 운동 계획 등 감각통합 기능을 표준화 검사와 관찰을 통해 평가합니다.",
  },
  {
    title: "발달 및 작업수행 평가",
    Icon: Brain,
    desc: "일상생활, 학교생활, 놀이 참여 등 작업수행 능력과 발달 수준을 종합적으로 평가합니다.",
  },
  {
    title: "아동 관찰",
    Icon: Baby,
    desc: "자연스러운 놀이 및 활동 상황에서 아이의 행동·감각·참여 패턴을 관찰합니다.",
  },
  {
    title: "종합 평가",
    Icon: ClipboardList,
    desc: "감각통합, 발달, 작업수행, 환경 요인을 통합하여 맞춤형 중재 계획을 수립하기 위한 종합 평가입니다.",
  },
];

/* ─── 서비스 절차 ─── */
const procedureA = [
  { num: "01", label: "상담문의·예약", desc: "전화 또는 홈페이지로 문의·예약" },
  { num: "02", label: "초기상담 및 평가", desc: "전문가 2인 · 보호자·아동 동시 진행 · 약 1시간" },
  { num: "03", label: "사례회의", desc: "팀 내 전문가 논의" },
  { num: "04", label: "서비스 시작", desc: "중재 프로그램 시작" },
  { num: "05", label: "결과상담", desc: "1개월 후 경과 공유" },
];

const procedureB = [
  { num: "01", label: "평가 의뢰", desc: "기관·학교·보호자 직접 의뢰" },
  { num: "02", label: "상담 및 평가", desc: "약 1시간 30분~2시간 소요" },
  { num: "03", label: "결과 분석", desc: "전문가 팀 분석" },
  { num: "04", label: "결과상담", desc: "평가 결과 및 방향 안내" },
  { num: "05", label: "서비스 시작/종료", desc: "필요에 따라 연계 또는 종결" },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-[var(--siso-bg)]">
      {/* 페이지 헤더 */}
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          {/* 브레드크럼 */}
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <span>서비스 안내</span>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">상담 및 평가</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)] md:text-4xl">
            상담 및 평가
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--siso-muted)]">
            아이와 가족의 이야기를 먼저 듣습니다. 진단명보다 지금의 삶과 참여를 기준으로,
            함께 방향을 찾아갑니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 space-y-16">

        {/* ── 상담 서비스 ── */}
        <section>
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-mint)]">CONSULTATION</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[var(--siso-text)] md:text-3xl">
              상담 서비스
            </h2>
            <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
              전문용어 대신 보호자의 언어로 이야기합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {consultItems.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[#E2E8F0]/90 bg-white p-7 shadow-soft"
                >
                  <span className={`inline-grid h-12 w-12 place-items-center rounded-2xl ${item.color}`}>
                    <Icon className={`h-6 w-6 ${item.iconColor}`} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[var(--siso-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--siso-muted)]">{item.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {item.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[13px] text-[var(--siso-text)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--siso-mint)]" strokeWidth={2} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1.5 text-[12px] font-medium text-[var(--siso-muted)]">
                    <Clock className="h-3.5 w-3.5" />
                    {item.time}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 평가 서비스 ── */}
        <section>
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-mint)]">EVALUATION</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[var(--siso-text)] md:text-3xl">
              평가 서비스
            </h2>
            <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
              감각·발달·작업수행을 다각도로 살펴보며 아이의 강점과 어려움을 파악합니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {evalItems.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#E2E8F0]/90 bg-white p-6 shadow-soft"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--siso-mint)_12%,white)]">
                    <Icon className="h-5 w-5 text-[var(--siso-mint)]" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-[var(--siso-text)]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--siso-muted)]">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-[13px] text-[var(--siso-muted)]">
            * 평가 소요시간: 약 1시간 30분 ~ 2시간 (종합 평가 기준)
          </p>
        </section>

        {/* ── 서비스 절차 ── */}
        <section>
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-mint)]">PROCEDURE</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[var(--siso-text)] md:text-3xl">
              서비스 절차 안내
            </h2>
            <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
              두 가지 경로로 시작할 수 있습니다. 상황에 맞게 선택해 주세요.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* 경로 A */}
            <div className="rounded-[24px] border border-[var(--siso-mint)]/30 bg-[color-mix(in_srgb,var(--siso-mint)_6%,white)] p-7">
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-full bg-[var(--siso-mint)] px-3 py-1 text-[12px] font-bold text-white">
                  경로 A
                </span>
                <span className="text-[14px] font-semibold text-[var(--siso-text)]">서비스 의뢰</span>
              </div>
              <ol className="space-y-4">
                {procedureA.map((step, i) => (
                  <li key={step.num} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--siso-mint)] text-[12px] font-bold text-white">
                        {step.num}
                      </span>
                      {i < procedureA.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-[var(--siso-mint)]/30" style={{ minHeight: "1rem" }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-[14px] font-bold text-[var(--siso-text)]">{step.label}</p>
                      <p className="mt-0.5 text-[12px] text-[var(--siso-muted)]">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* 경로 B */}
            <div className="rounded-[24px] border border-[var(--siso-sky)]/40 bg-[color-mix(in_srgb,var(--siso-sky)_10%,white)] p-7">
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-full bg-[var(--siso-sky)] px-3 py-1 text-[12px] font-bold text-[#1E3A5F]">
                  경로 B
                </span>
                <span className="text-[14px] font-semibold text-[var(--siso-text)]">평가 의뢰</span>
              </div>
              <ol className="space-y-4">
                {procedureB.map((step, i) => (
                  <li key={step.num} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--siso-sky)] text-[12px] font-bold text-[#1E3A5F]">
                        {step.num}
                      </span>
                      {i < procedureB.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-[var(--siso-sky)]/40" style={{ minHeight: "1rem" }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-[14px] font-bold text-[var(--siso-text)]">{step.label}</p>
                      <p className="mt-0.5 text-[12px] text-[var(--siso-muted)]">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 운영시간 & CTA ── */}
        <section className="rounded-[24px] border border-[#E2E8F0]/90 bg-white p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-[var(--siso-text)]">운영 시간</h2>
              <dl className="space-y-2 text-[14px]">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-[var(--siso-text)]">평일</dt>
                  <dd className="text-[var(--siso-muted)]">오전 9:30 ~ 12:00, 오후 13:30 ~ 18:30</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-[var(--siso-text)]">토요일</dt>
                  <dd className="text-[var(--siso-muted)]">오전 9:00 ~ 13:00 (점심시간 무휴)</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-[var(--siso-text)]">일요일·공휴일</dt>
                  <dd className="text-[var(--siso-muted)]">휴무</dd>
                </div>
              </dl>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 text-[var(--siso-mint)]" />
                <a
                  href={siteConfig.phoneTel}
                  className="text-lg font-bold text-[var(--siso-text)] transition-colors hover:text-[var(--siso-mint)]"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/apply" showArrow glass className="w-full">
                초기상담 신청하기
              </Button>
              <Button
                variant="secondary"
                href={siteConfig.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                glass
                className="w-full"
              >
                카카오로 문의하기
              </Button>
              <p className="text-center text-[12px] text-[var(--siso-muted)]">
                부담 없이 먼저 연락 주세요. 방향을 함께 잡아드립니다.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
