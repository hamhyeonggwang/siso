import Link from "next/link";
import { Play } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { siteConfig, youtubeVideos } from "@/lib/site-config";

function YoutubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function VideoCard({ video }: { video: (typeof youtubeVideos)[number] }) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const url = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-[#EEF2F7]">
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
        {video.publishedAt ? (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
            {video.publishedAt}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <p className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--siso-text)] group-hover:text-[var(--siso-mint)]">
          {video.title}
        </p>
      </div>
    </a>
  );
}

export function SnsSection() {
  const latestVideos = youtubeVideos.slice(0, 3);

  return (
    <SectionShell
      id="sns"
      eyebrow="SNS"
      title="시소의 이야기를 영상으로 만나보세요"
      description="유튜브 채널의 최신 영상 3개를 모아 소개합니다."
      className="bg-[color-mix(in_srgb,var(--siso-amber)_10%,white)]"
    >
      {latestVideos.length > 0 ? (
        <>
          <div className="grid gap-5 md:grid-cols-3">
            {latestVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.youtubeUrl ? (
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
              >
                <YoutubeLogo className="h-4 w-4" />
                유튜브 채널
              </a>
            ) : null}
            {youtubeVideos.length > 3 ? (
              <Link
                href="/square/youtube"
                className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--siso-muted)] transition-colors hover:border-[var(--siso-mint)] hover:text-[var(--siso-mint)]"
              >
                영상 더 보기
              </Link>
            ) : null}
          </div>
        </>
      ) : (
        <div className="rounded-[24px] border border-white/90 bg-white/95 p-8 text-center shadow-soft">
          <p className="text-sm font-semibold text-[var(--siso-text)]">등록된 유튜브 영상이 없습니다.</p>
          <p className="mt-2 text-sm text-[var(--siso-muted)]">
            최신 영상 3개를 표시하려면 <code className="rounded bg-[#F1F5F9] px-1.5 py-0.5 text-xs">youtubeVideos</code>에 영상 ID를 추가하세요.
          </p>
        </div>
      )}
    </SectionShell>
  );
}
