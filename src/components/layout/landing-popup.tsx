"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { Popup } from "@/lib/supabase";

const STORAGE_KEY = "siso_popup_hidden_until";

function isSuppressed(): boolean {
  if (typeof window === "undefined") return false;
  const until = localStorage.getItem(STORAGE_KEY);
  if (!until) return false;
  return Date.now() < Number(until);
}

function suppressForToday(): void {
  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);
  localStorage.setItem(STORAGE_KEY, String(endOfToday.getTime()));
}

export function LandingPopup() {
  const [open, setOpen] = React.useState(false);
  const [popup, setPopup] = React.useState<Popup | null>(null);

  React.useEffect(() => {
    if (isSuppressed()) return;

    // Fetch active popup from Supabase via API route
    fetch("/api/popup")
      .then((r) => r.json())
      .then(({ popup: data }: { popup: Popup | null }) => {
        if (data) setPopup(data);
        const t = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(t);
      })
      .catch(() => {
        // Fallback: still show default popup on fetch error
        const t = setTimeout(() => setOpen(true), 600);
        return () => clearTimeout(t);
      });
  }, []);

  const close = () => setOpen(false);
  const handleHideToday = () => { suppressForToday(); close(); };

  // Title / body: use Supabase content when available, otherwise hardcoded default
  const title = popup?.title ?? "아이의 고민,\n함께 이야기해요.";
  const body = popup?.body ?? "초기상담은 부담 없이 시작할 수 있습니다.\n전화 한 통으로 방향을 잡아드립니다.";
  const ctaLabel = popup?.cta_label ?? null;
  const ctaHref = popup?.cta_href ?? null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 반투명 오버레이 */}
          <motion.div
            key="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#1E293B]/60 backdrop-blur-[3px]"
            onClick={close}
            aria-hidden
          />

          {/* 팝업 카드 */}
          <motion.div
            key="popup-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 z-[61] mx-auto max-w-md -translate-y-1/2 overflow-hidden rounded-[28px] bg-white shadow-[0_32px_80px_-16px_rgba(15,23,42,0.45)]"
          >
            {/* 상단 컬러 배너 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--siso-mint)] via-[#5BB9A8] to-[var(--siso-sky)] px-7 pb-8 pt-7">
              <div aria-hidden className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
              <div aria-hidden className="absolute -bottom-6 right-16 h-20 w-20 rounded-full bg-white/8" />

              <button
                type="button"
                onClick={close}
                aria-label="팝업 닫기"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/75">
                시소감각통합상담연구소
              </p>
              <h2
                id="popup-title"
                className="mt-2 whitespace-pre-line text-2xl font-black leading-snug tracking-tight text-white"
              >
                {title.split("\n").map((line, i) =>
                  i === 1 ? (
                    <React.Fragment key={i}>
                      <span className="text-[var(--siso-amber)]">{line}</span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>{line}{"\n"}</React.Fragment>
                  )
                )}
              </h2>
              <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-white/85">
                {body}
              </p>
            </div>

            {/* 본문 */}
            <div className="space-y-4 px-7 py-6">
              {/* 연락처 */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--siso-mint)_15%,white)]">
                    <Phone className="h-4 w-4 text-[var(--siso-mint)]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-[var(--siso-muted)]">상담안내</p>
                    <a
                      href={siteConfig.phoneTel}
                      className="text-lg font-bold tracking-tight text-[var(--siso-text)] transition-colors hover:text-[var(--siso-mint)]"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA 버튼들 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#FEE500] py-3.5 text-[14px] font-bold text-[#3A2A00] transition-[filter] hover:brightness-[1.04]"
                >
                  <MessageCircle className="h-4 w-4" />
                  카카오 상담
                </a>
                <a
                  href={ctaHref ?? "/apply"}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--siso-mint)] py-3.5 text-[14px] font-bold text-white transition-[filter] hover:brightness-[1.04]"
                >
                  {ctaLabel ?? "초기상담 신청"}
                </a>
              </div>
            </div>

            {/* 하단 푸터 */}
            <div className="flex items-center justify-between border-t border-[#F1F5F9] px-7 py-4">
              <button
                type="button"
                onClick={handleHideToday}
                className="text-[12px] text-[var(--siso-muted)] underline-offset-4 hover:text-[var(--siso-text)] hover:underline"
              >
                오늘 하루 보지 않기
              </button>
              <button
                type="button"
                onClick={close}
                className={cn(
                  "text-[12px] font-medium text-[var(--siso-muted)] underline-offset-4 hover:text-[var(--siso-text)] hover:underline",
                )}
              >
                닫기
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
