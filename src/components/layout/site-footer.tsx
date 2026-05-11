import Link from "next/link";
import { MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoImage } from "@/components/ui/logo-image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const hasHours = Boolean(siteConfig.hours?.trim());

  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-0 overflow-hidden rounded-[24px] border border-[#E2E8F0]/90 shadow-soft md:grid-cols-[1fr_auto_auto]">
          {/* 위치·운영 정보 */}
          <div className="bg-white p-8 space-y-4">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--siso-muted)]">
              오시는 길 · 운영 안내
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-[var(--siso-text)]">
              {siteConfig.organizationName}
            </h2>
            <dl className="space-y-2.5 text-sm text-[var(--siso-muted)]">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--siso-mint)]" aria-hidden />
                <dd>{siteConfig.addressLine}</dd>
              </div>
              {hasHours ? (
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--siso-mint)]" aria-hidden />
                  <dd>{siteConfig.hours}</dd>
                </div>
              ) : null}
            </dl>
            <Button variant="secondary" size="sm" href="/#map" glass>
              오시는 길 안내
            </Button>
          </div>

          {/* 전화번호 강조 */}
          <div className="flex flex-col items-start justify-center gap-2 border-t border-[#E2E8F0]/80 bg-[color-mix(in_srgb,var(--siso-sky)_8%,white)] px-8 py-8 md:border-l md:border-t-0">
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--siso-muted)]">
              상담문의
            </p>
            <a
              href={siteConfig.phoneTel}
              className="text-2xl font-bold tracking-tight text-[var(--siso-text)] transition-colors hover:text-[var(--siso-mint)]"
            >
              {siteConfig.phoneDisplay}
            </a>
            <dl className="mt-1 space-y-1 text-xs text-[var(--siso-muted)]">
              {siteConfig.faxDisplay && (
                <div className="flex gap-1.5">
                  <dt className="shrink-0 font-medium">팩스</dt>
                  <dd>{siteConfig.faxDisplay}</dd>
                </div>
              )}
              <div className="flex gap-1.5">
                <dt className="shrink-0 font-medium">이메일</dt>
                <dd>
                  <a href={siteConfig.emailMailto} className="hover:underline underline-offset-4">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="shrink-0 font-medium">사업자번호</dt>
                <dd>{siteConfig.businessNumber}</dd>
              </div>
            </dl>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col gap-3 border-t border-[#E2E8F0]/80 bg-[color-mix(in_srgb,var(--siso-amber)_8%,white)] px-8 py-8 md:border-l md:border-t-0">
            <Button
              href={siteConfig.kakaoChannelUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="secondary"
              className="w-full min-w-[10rem]"
              glass
              leadingIcon={<MessageCircle className="h-4 w-4 text-[#FEE500]" aria-hidden />}
            >
              카카오 상담하기
            </Button>
            <Button
              href="/apply"
              className="w-full"
              glass
              leadingIcon={<CalendarCheck className="h-4 w-4" aria-hidden />}
            >
              초기상담 신청하기
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-b border-[#F1F5F9] pb-8 text-sm">
          <a
            className="text-[var(--siso-muted)] underline-offset-4 hover:text-[var(--siso-mint)] hover:underline"
            href={siteConfig.legal.privacy}
            rel="noreferrer"
            target="_blank"
          >
            개인정보 취급방침
          </a>
          <span className="text-[#CBD5E1]" aria-hidden>
            |
          </span>
          <a
            className="text-[var(--siso-muted)] underline-offset-4 hover:text-[var(--siso-mint)] hover:underline"
            href={siteConfig.legal.terms}
            rel="noreferrer"
            target="_blank"
          >
            이용약관
          </a>
          <span className="text-[#CBD5E1]" aria-hidden>
            |
          </span>
          <a
            className="text-[var(--siso-muted)] underline-offset-4 hover:text-[var(--siso-mint)] hover:underline"
            href={siteConfig.legal.emailRefusal}
            rel="noreferrer"
            target="_blank"
          >
            이메일무단수집거부
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <LogoImage className="h-10 w-auto object-contain" />
            <div>
              <div className="text-sm font-semibold text-[var(--siso-text)]">
                {siteConfig.organizationName}
              </div>
              <p className="mt-1 max-w-md text-sm text-[var(--siso-muted)]">
                대표 : {siteConfig.representatives}
                &nbsp;|&nbsp;
                {siteConfig.brandTagline}
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--siso-muted)]">
            <li>
              <Link className="hover:text-[var(--siso-mint)]" href="/#concerns">
                보호자 안내
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--siso-mint)]" href="/#programs">
                프로그램
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--siso-mint)]" href="/#institution">
                기관 협력
              </Link>
            </li>
            <li>
              <Link className="hover:text-[var(--siso-mint)]" href="/apply">
                상담·접수
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--siso-mint)]"
                href="https://www.sisochild.com/html/"
                rel="noreferrer"
                target="_blank"
              >
                이전 홈페이지
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#F1F5F9] py-5">
        <p className="px-4 text-center text-[11px] leading-relaxed text-[var(--siso-muted)]">
          {siteConfig.copyrightLine}
        </p>
      </div>
    </footer>
  );
}
