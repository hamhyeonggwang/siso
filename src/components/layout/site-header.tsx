"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "시소소개",
    href: "/about",
    items: [
      { label: "인사말", href: "/about/greeting" },
      { label: "연혁", href: "/about/history" },
      { label: "시소사람들", href: "/about/people" },
      { label: "오시는 길", href: "/about/directions" },
    ],
  },
  {
    label: "서비스 안내",
    href: "/services",
    items: [
      { label: "상담 및 평가", href: "/services/consultation" },
      { label: "지원프로그램", href: "/services/programs" },
      { label: "교육 및 컨설팅", href: "/services/education" },
    ],
  },
  {
    label: "시소광장",
    href: "/square",
    items: [
      { label: "공지사항", href: "/square/notice" },
      { label: "소식", href: "/square/news" },
      { label: "자료실", href: "/square/archive" },
    ],
  },
] as const;

function LogoMark() {
  const [loaded, setLoaded] = React.useState(false);
  const [errored, setErrored] = React.useState(false);
  const showImage = loaded && !errored;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="시소감각통합상담연구소 로고"
        width={80}
        height={44}
        className={showImage ? "h-11 w-auto object-contain" : "sr-only"}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
      {!showImage && (
        <span className="flex shrink-0 flex-col items-center justify-center leading-none">
          <span className="text-[1.35rem] font-black leading-none tracking-tight text-[var(--siso-mint)]">시소</span>
          <span className="-mt-0.5 text-[1.1rem] font-black leading-none tracking-tight text-[var(--siso-text)]">소</span>
        </span>
      )}
      <span className="hidden flex-col leading-none sm:flex">
        <span className="text-[13px] font-bold leading-snug tracking-tight text-[var(--siso-text)]">
          시소감각통합상담연구소
        </span>
      </span>
    </>
  );
}

/* 데스크탑 드롭다운 아이템 */
function NavDropdown({
  group,
  pathname,
}: {
  group: (typeof navGroups)[number];
  pathname: string;
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = pathname.startsWith(group.href);

  // 외부 클릭 닫기
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-0.5 rounded-full px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-[var(--siso-mint)]"
            : "text-[var(--siso-muted)] hover:bg-[color-mix(in_srgb,var(--siso-mint)_10%,white)] hover:text-[var(--siso-text)]",
        )}
      >
        {group.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 mt-1 min-w-[10rem] overflow-hidden rounded-2xl border border-[#E2E8F0]/80 bg-white/95 py-1.5 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-[color-mix(in_srgb,var(--siso-mint)_10%,white)] text-[var(--siso-mint)]"
                    : "text-[var(--siso-text)] hover:bg-[#F8FAFC] hover:text-[var(--siso-mint)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [expandedGroup, setExpandedGroup] = React.useState<string | null>(null);
  const pathname = usePathname();

  // 라우트 변경 시 모바일 메뉴 닫기
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/70 bg-white/85 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 md:px-6 lg:px-8">
        {/* 로고 */}
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <LogoMark />
        </Link>

        {/* 데스크탑 내비게이션 */}
        <nav className="hidden items-center justify-center gap-0.5 lg:flex lg:flex-1" aria-label="주 메뉴">
          {navGroups.map((group) => (
            <NavDropdown key={group.href} group={group} pathname={pathname} />
          ))}
        </nav>

        {/* 우측 버튼 */}
        <div className="flex items-center gap-2">
          <Button size="sm" href="/apply" showArrow glass className="hidden sm:inline-flex">
            상담문의
          </Button>
          <Button size="sm" href="/apply" className="sm:hidden">
            상담
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-[var(--siso-text)] shadow-sm lg:hidden",
              open && "border-[var(--siso-mint)]/45",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E2E8F0]/80 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
              {navGroups.map((group) => (
                <div key={group.href} className="border-b border-[#F1F5F9] last:border-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-semibold text-[var(--siso-text)] hover:bg-[#F8FAFC]"
                    onClick={() =>
                      setExpandedGroup((prev) => (prev === group.href ? null : group.href))
                    }
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-[var(--siso-muted)] transition-transform duration-200",
                        expandedGroup === group.href && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {expandedGroup === group.href && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden pl-3"
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                              pathname === item.href
                                ? "text-[var(--siso-mint)]"
                                : "text-[var(--siso-muted)] hover:text-[var(--siso-text)]",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-3 pb-2">
                <Button href="/apply" showArrow className="w-full">
                  상담문의 · 초기상담
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
