import type { Metadata } from "next";
import Link from "next/link";
import { Play } from "lucide-react";

function YoutubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import { youtubeVideos, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "유튜브",
  description: "시소감각통합상담연구소 유튜브 채널 영상 모음",
};

export default function YoutubePage() {
  return (
    <div className="min-h-screen bg-[var(--siso-bg)]">
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]" aria-label="breadcrumb">
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <Link href="/square" className="hover:text-[var(--siso-mint)]">시소광장</Link>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">유튜브</span>
          </nav>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)] md:text-4xl">
                유튜브 채널
              </h1>
              <p className="mt-2 text-[15px] text-[var(--siso-muted)]">
                감각통합, 육아 정보, 시소 활동을 영상으로 만나보세요.
              </p>
            </div>
            {siteConfig.youtubeUrl && (
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF0000] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
              >
                <YoutubeLogo className="h-4 w-4" />
                채널 구독
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        {youtubeVideos.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0F0]">
              <YoutubeLogo className="h-8 w-8 text-[#FF0000]" />
            </span>
            <p className="text-lg font-semibold text-[var(--siso-text)]">등록된 영상이 없습니다.</p>
            <p className="max-w-sm text-sm text-[var(--siso-muted)]">
              <code className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-xs">src/lib/site-config.ts</code>의<br />
              <code className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-xs">youtubeVideos</code> 배열에 영상 ID를 추가하세요.
            </p>
            {siteConfig.youtubeUrl && (
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
              >
                <YoutubeLogo className="h-4 w-4" />
                유튜브 채널 바로가기
              </a>
            )}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {youtubeVideos.map((video) => {
              const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              const url = `https://www.youtube.com/watch?v=${video.id}`;
              return (
                <a
                  key={video.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-[#E2E8F0]/70 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#EEF2F7]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] shadow-lg">
                        <Play className="h-5 w-5 fill-white text-white" />
                      </span>
                    </div>
                    {video.publishedAt && (
                      <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] text-white">
                        {video.publishedAt}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--siso-text)] group-hover:text-[var(--siso-mint)]">
                      {video.title}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
