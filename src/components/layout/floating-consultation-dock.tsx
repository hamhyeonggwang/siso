"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FloatingConsultationDock() {
  const pathname = usePathname();
  if (pathname?.startsWith("/apply")) return null;

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:px-6",
      )}
    >
      <div className="pointer-events-auto flex w-full max-w-lg gap-2 rounded-full border border-[#E2E8F0]/90 bg-white/90 p-2 shadow-[0_-8px_40px_-16px_rgba(15,23,42,0.25)] backdrop-blur-xl md:max-w-md">
        <Link
          href={siteConfig.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 text-sm font-semibold text-[var(--siso-text)] transition-colors hover:border-[var(--siso-mint)]/40 hover:bg-[color-mix(in_srgb,var(--siso-mint)_8%,white)]"
        >
          <MessageCircle className="h-4 w-4 shrink-0 text-[#FEE500]" aria-hidden />
          카카오 상담
        </Link>
        <Link
          href="/apply"
          className="flex min-h-[3.25rem] flex-[1.15] items-center justify-center rounded-full bg-[var(--siso-mint)] px-4 text-sm font-semibold text-white shadow-sm transition-[filter,transform] hover:brightness-[1.03] active:scale-[0.99]"
        >
          초기상담 신청
        </Link>
      </div>
    </motion.div>
  );
}
