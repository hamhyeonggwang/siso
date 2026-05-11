import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, Bus, Train, Car } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "오시는 길" };

const mapLinks = [
  {
    label: "카카오맵",
    href: "https://map.kakao.com/link/search/서울특별시 마포구 서강로 9길 56 송우빌딩",
    className: "bg-[#FEE500] text-[#3A1A00]",
  },
  {
    label: "네이버지도",
    href: "https://map.naver.com/v5/search/서울특별시 마포구 서강로 9길 56 송우빌딩",
    className: "bg-[#03C75A] text-white",
  },
  {
    label: "Google 지도",
    href: "https://maps.google.com/?q=서울특별시+마포구+서강로+9길+56+송우빌딩",
    className: "bg-white border border-[#E2E8F0] text-[#1E293B]",
  },
];

const hours = [
  { day: "평일", time: "오전 9:30 ~ 12:00 · 오후 13:30 ~ 18:30" },
  { day: "토요일", time: "오전 9:00 ~ 13:00 (점심시간 무휴)" },
  { day: "일요일·공휴일", time: "휴무" },
];

const transit = [
  {
    Icon: Train,
    label: "지하철",
    detail: "6호선 광흥창역 2번 출구 도보 5분\n2호선 홍대입구역 도보 15분 또는 버스 이용",
  },
  {
    Icon: Bus,
    label: "버스",
    detail: "서강로 정류장 하차 (7011, 7016, 마포05 등)\n송우빌딩 5층",
  },
  {
    Icon: Car,
    label: "자가용",
    detail: "서울특별시 마포구 서강로 9길 56 송우빌딩\n건물 인근 유료 주차 가능",
  },
];

export default function DirectionsPage() {
  return (
    <div className="min-h-screen bg-[var(--siso-bg)]">
      {/* 헤더 */}
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <Link href="/about" className="hover:text-[var(--siso-mint)]">시소소개</Link>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">오시는 길</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)] md:text-4xl">오시는 길</h1>
          <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
            {siteConfig.addressLine}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-6 lg:px-8">

        {/* 지도 + 주소·지도앱 버튼 */}
        <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0]/80 bg-white shadow-sm">
          <div className="h-72 w-full overflow-hidden bg-[#EEF2F7] sm:h-96">
            <iframe
              src="https://map.kakao.com/link/embed/서울특별시 마포구 서강로 9길 56 송우빌딩"
              title="시소감각통합상담연구소 위치"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--siso-mint)]" />
              <div>
                <p className="font-semibold text-[var(--siso-text)]">{siteConfig.addressLine}</p>
                <p className="mt-0.5 text-sm text-[var(--siso-muted)]">송우빌딩 5층</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mapLinks.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-opacity hover:opacity-85 ${m.className}`}
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 운영시간 */}
          <div className="rounded-[20px] border border-[#E2E8F0]/80 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--siso-mint)_14%,white)]">
                <Clock className="h-4 w-4 text-[var(--siso-mint)]" />
              </span>
              <h2 className="text-lg font-black text-[var(--siso-text)]">운영 시간</h2>
            </div>
            <dl className="space-y-3">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex items-start gap-3">
                  <dt className="w-24 shrink-0 text-sm font-semibold text-[var(--siso-text)]">{day}</dt>
                  <dd className="text-sm text-[var(--siso-muted)]">{time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-center gap-2 border-t border-[#F1F5F9] pt-5">
              <Phone className="h-4 w-4 text-[var(--siso-mint)]" />
              <a
                href={siteConfig.phoneTel}
                className="text-lg font-bold text-[var(--siso-text)] transition-colors hover:text-[var(--siso-mint)]"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* 교통편 */}
          <div className="rounded-[20px] border border-[#E2E8F0]/80 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-black text-[var(--siso-text)]">교통편 안내</h2>
            <ul className="space-y-5">
              {transit.map(({ Icon, label, detail }) => (
                <li key={label} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9]">
                    <Icon className="h-4 w-4 text-[var(--siso-muted)]" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--siso-text)]">{label}</p>
                    <p className="mt-0.5 whitespace-pre-line text-sm text-[var(--siso-muted)]">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
