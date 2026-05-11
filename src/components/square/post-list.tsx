import Link from "next/link";
import { Pin } from "lucide-react";
import type { CommunityPost } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  breadcrumb: string;
  emptyMessage: string;
  posts: CommunityPost[];
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostList({ title, breadcrumb, emptyMessage, posts }: Props) {
  return (
    <div className="min-h-[60vh] bg-[var(--siso-bg)]">
      {/* 헤더 */}
      <div className="border-b border-[#E2E8F0]/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <nav
            className="mb-4 flex items-center gap-1.5 text-[12px] text-[var(--siso-muted)]"
            aria-label="breadcrumb"
          >
            <Link href="/" className="hover:text-[var(--siso-mint)]">홈</Link>
            <span aria-hidden>›</span>
            <span>시소광장</span>
            <span aria-hidden>›</span>
            <span className="font-semibold text-[var(--siso-text)]">{breadcrumb}</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight text-[var(--siso-text)]">{title}</h1>
        </div>
      </div>

      {/* 목록 */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-sm rounded-[24px] border border-[#E2E8F0]/90 bg-white p-10 text-center shadow-soft">
            <p className="text-[var(--siso-muted)]">{emptyMessage}</p>
            <div className="mt-6">
              <Button href="/" variant="secondary" glass>홈으로 돌아가기</Button>
            </div>
          </div>
        ) : (
          <ul className="divide-y divide-[#F1F5F9] rounded-[20px] border border-[#E2E8F0]/80 bg-white overflow-hidden">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/square/post/${post.slug}`}
                  className="flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[#F8FAFC] group"
                >
                  {post.status === "pinned" && (
                    <span className="mt-0.5 shrink-0">
                      <Pin className="h-4 w-4 text-[var(--siso-mint)]" />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p
                      className={[
                        "truncate text-[15px] font-semibold text-[var(--siso-text)] group-hover:text-[var(--siso-mint)] transition-colors",
                        post.status === "pinned" ? "text-[var(--siso-mint)]" : "",
                      ].join(" ")}
                    >
                      {post.title}
                    </p>
                    {post.excerpt && (
                      <p className="mt-1 truncate text-[13px] text-[var(--siso-muted)]">
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-[11px] font-medium text-[var(--siso-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time
                    dateTime={post.published_on}
                    className="shrink-0 text-[12px] text-[var(--siso-muted)]"
                  >
                    {formatDate(post.published_on)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
