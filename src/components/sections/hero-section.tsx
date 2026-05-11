"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    key: "consult",
    title: "상담",
    titleEn: "Consultation",
    desc: "서비스를 시작하기 위한\n초기상담과 양육상담 소개",
    href: "/services/consultation",
    bg: "bg-[#F9A8A8]",
    textColor: "text-[#7A2020]",
    descColor: "text-[#8B3030]",
    btnColor: "bg-white text-[#B83030] hover:bg-white/90",
    illustration: (
      <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 select-none opacity-90 sm:h-44 sm:w-44">
        <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <rect x="40" y="90" width="120" height="8" rx="4" fill="#D4956A" opacity="0.85"/>
          <rect x="60" y="98" width="8" height="45" rx="4" fill="#D4956A" opacity="0.7"/>
          <rect x="112" y="98" width="8" height="45" rx="4" fill="#D4956A" opacity="0.7"/>
          <ellipse cx="120" cy="88" rx="16" ry="8" fill="#E8C4A0" opacity="0.9"/>
          <path d="M104 88 Q104 110 120 110 Q136 110 136 88" fill="#C8956A" opacity="0.8"/>
          <path d="M136 94 Q148 94 148 102 Q148 110 136 110" stroke="#C8956A" strokeWidth="3" fill="none" opacity="0.8"/>
          <ellipse cx="120" cy="88" rx="14" ry="6" fill="#8B4513" opacity="0.6"/>
          <ellipse cx="120" cy="112" rx="18" ry="4" fill="#E8C4A0" opacity="0.7"/>
          <circle cx="120" cy="80" r="3" fill="#FF8FA3" opacity="0.8"/>
          <circle cx="114" cy="76" r="2.5" fill="#FF8FA3" opacity="0.7"/>
          <circle cx="126" cy="76" r="2.5" fill="#FF8FA3" opacity="0.7"/>
        </svg>
      </div>
    ),
  },
  {
    key: "eval",
    title: "평가",
    titleEn: "Evaluation",
    desc: "시소에서 제공하는\n평가의 내용, 평가종류 소개",
    href: "/services/consultation",
    bg: "bg-[#7BC4A8]",
    textColor: "text-white",
    descColor: "text-white/85",
    btnColor: "bg-white text-[#3A7A60] hover:bg-white/90",
    illustration: (
      <div className="pointer-events-none absolute bottom-4 right-4 h-28 w-28 select-none opacity-85 sm:h-36 sm:w-36">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <polygon points="70,20 115,45 115,95 70,120 25,95 25,45" fill="#F4A040" opacity="0.9"/>
          <polygon points="70,20 115,45 70,70 25,45" fill="#F8C070" opacity="0.95"/>
          <polygon points="70,70 115,45 115,95 70,120" fill="#D4800A" opacity="0.85"/>
          <polygon points="70,70 25,45 25,95 70,120" fill="#E89020" opacity="0.8"/>
          <line x1="70" y1="20" x2="70" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          <line x1="25" y1="45" x2="70" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          <line x1="115" y1="45" x2="70" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        </svg>
      </div>
    ),
  },
  {
    key: "program",
    title: "지원 프로그램",
    titleEn: "Program",
    desc: "시소에서 제공하는\n다양한 서비스 프로그램 소개",
    href: "/services/programs",
    bg: "bg-[#F5E6A3]",
    textColor: "text-[#6B5A00]",
    descColor: "text-[#7A6800]",
    btnColor: "bg-white text-[#8B7000] hover:bg-white/90",
    illustration: (
      <div className="pointer-events-none absolute bottom-0 right-2 h-28 w-28 select-none opacity-90 sm:h-32 sm:w-32">
        <svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <ellipse cx="65" cy="80" rx="50" ry="28" fill="#89CDD8" opacity="0.85"/>
          <ellipse cx="65" cy="80" rx="40" ry="20" fill="#5BA8B8" opacity="0.7"/>
          <ellipse cx="65" cy="80" rx="28" ry="14" fill="#3A8898" opacity="0.6"/>
          <circle cx="45" cy="70" r="10" fill="#FDBCB4" opacity="0.9"/>
          <path d="M38 80 Q40 95 52 95 Q58 95 60 85" fill="#4A90D9" opacity="0.8"/>
          <path d="M36 65 Q45 55 54 65" fill="#5A3A1A" opacity="0.8"/>
        </svg>
      </div>
    ),
  },
  {
    key: "education",
    title: "교육 및 컨설팅",
    titleEn: "Education & Consulting",
    desc: "부모와 전문가를 위한\n교육 및 기관 컨설팅 소개",
    href: "/services/education",
    bg: "bg-[#C9B3E8]",
    textColor: "text-[#3A1A6B]",
    descColor: "text-[#4A2A7A]",
    btnColor: "bg-white text-[#5A2A8A] hover:bg-white/90",
    illustration: (
      <div className="pointer-events-none absolute bottom-2 right-2 h-24 w-24 select-none opacity-85 sm:h-28 sm:w-28">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <rect x="20" y="80" width="80" height="14" rx="3" fill="#F4A0C0" opacity="0.9"/>
          <rect x="24" y="66" width="72" height="14" rx="3" fill="#A0C4F4" opacity="0.9"/>
          <rect x="28" y="52" width="64" height="14" rx="3" fill="#A0F4C0" opacity="0.9"/>
          <rect x="32" y="38" width="56" height="14" rx="3" fill="#F4E0A0" opacity="0.9"/>
          <line x1="36" y1="38" x2="36" y2="52" stroke="white" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="52" x2="32" y2="66" stroke="white" strokeWidth="1.5" opacity="0.6"/>
          <line x1="28" y1="66" x2="28" y2="80" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      </div>
    ),
  },
] as const;

export function HeroSection() {
  return (
    <section className="border-b border-[#E2E8F0]/80 bg-[#F5F0E8] py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* 상단 로고/태그라인 + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
          className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-muted)]">
              시소감각통합상담연구소
            </p>
            <h1 className="mt-1 text-[2rem] font-black leading-tight tracking-tight text-[var(--siso-text)] sm:text-[2.4rem]">
              <span className="text-[var(--siso-mint)]">Si</span>SO
            </h1>
            <p className="mt-0.5 text-[12px] font-medium leading-snug text-[var(--siso-muted)]">
              Sensory Integration toward Social and Occupational being
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button href="/apply" size="sm" showArrow glass>
              초기상담 신청
            </Button>
            <Button
              variant="secondary"
              size="sm"
              href={siteConfig.kakaoChannelUrl}
              rel="noopener noreferrer"
              target="_blank"
              glass
            >
              카카오 상담
            </Button>
          </div>
        </motion.div>

        {/* 벤토 그리드
            lg: [평가(tall, row1-2)] [상담(wide, row1)] [상담(wide, row1)]
                [평가(tall, row1-2)] [지원프로그램(row2)]  [교육&컨설팅(row2)]
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 평가 — 왼쪽 tall (lg: col1, rowspan2) */}
          <ServiceCard
            service={services[1]}
            className="sm:row-span-1 lg:row-span-2"
            delay={0.02}
          />
          {/* 상담 — 오른쪽 상단 wide (lg: col2-3, row1) */}
          <ServiceCard
            service={services[0]}
            className="sm:col-span-1 lg:col-span-2"
            delay={0.04}
          />
          {/* 지원 프로그램 */}
          <ServiceCard service={services[2]} delay={0.06} />
          {/* 교육 및 컨설팅 */}
          <ServiceCard service={services[3]} delay={0.08} />
        </div>

        {/* 스크롤 유도 아이콘 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-6 flex justify-center"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[11px] font-medium tracking-widest text-[var(--siso-muted)] opacity-60">
              SCROLL
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--siso-muted)] opacity-50">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

function ServiceCard({
  service,
  className = "",
  delay = 0,
}: {
  service: Service;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay, ease }}
      className={className}
    >
      <Link
        href={service.href}
        className={[
          "group relative flex min-h-[200px] flex-col overflow-hidden rounded-[22px] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl",
          service.bg,
        ].join(" ")}
        style={{ height: "100%" }}
      >
        <div className="relative z-10">
          <h2 className={`text-xl font-black tracking-tight sm:text-2xl ${service.textColor}`}>
            {service.title}
            <span className="ml-2 text-sm font-semibold opacity-70">{service.titleEn}</span>
          </h2>
          <p className={`mt-3 whitespace-pre-line text-[14px] font-semibold leading-snug ${service.descColor}`}>
            {service.desc}
          </p>
          <div
            className={[
              "mt-5 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold shadow-sm",
              "transition-transform duration-200 group-hover:translate-x-0.5",
              service.btnColor,
            ].join(" ")}
          >
            자세히 보기
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
        {service.illustration}
      </Link>
    </motion.div>
  );
}
