import Link from "next/link";
import { Play } from "lucide-react";
import { youtubeVideos, siteConfig } from "@/lib/site-config";

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
}

export function YoutubeSection() {
  if (youtubeVideos.length === 0) return null;

  return (
    <section className="border-t border-[#E2E8F0]/60 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-[#FF0000] uppercase">
              YouTube
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[var(--siso-text)] md:text-3xl">
              시소 유튜브 채널
            </h2>
            <p className="mt-1.5 text-[14px] text-[var(--siso-muted)]">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {youtubeVideos.slice(0, 8).map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        {youtubeVideos.length > 8 && (
          <div className="mt-8 text-center">
            <Link
              href="/square/youtube"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-6 py-2.5 text-sm font-semibold text-[var(--siso-muted)] transition-colors hover:border-[var(--siso-mint)] hover:text-[var(--siso-mint)]"
            >
              영상 더 보기
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
