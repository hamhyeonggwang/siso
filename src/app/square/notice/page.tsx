import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "공지사항" };

export default function Page() {
  return (
    <div className="min-h-[60vh] bg-[var(--siso-bg)]">
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <span>시소광장</span>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">공지사항</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)]">공지사항</h1>
          <p className="mt-3 text-[15px] text-[var(--siso-muted)]">콘텐츠를 준비 중입니다.</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 lg:px-8">
        <div className="mx-auto max-w-sm rounded-[24px] border border-[#E2E8F0]/90 bg-white p-10 shadow-soft">
          <p className="text-[var(--siso-muted)]">해당 페이지의 콘텐츠를 준비 중입니다.</p>
          <div className="mt-6">
            <Button href="/" variant="secondary" glass>홈으로 돌아가기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
