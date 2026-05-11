import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { parentGuides } from "@/data/parent-guides";
import { siteConfig } from "@/lib/site-config";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return parentGuides.map((guide) => ({ slug: guide.id }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = parentGuides.find((item) => item.id === slug);
  if (!guide) {
    return {};
  }
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = parentGuides.find((item) => item.id === slug);

  if (!guide) {
    notFound();
  }

  return (
    <article className="border-b border-[#E5E7EB]/80 bg-white">
      <div className="mx-auto flex max-w-xl flex-col gap-8 px-4 py-14 md:px-6 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.06em] text-[#9CA3AF]">
            부모 가이드 · 읽는 시간 {guide.readTime}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827]">
            {guide.title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6B7280]">{guide.description}</p>
        </div>
        <p className="text-sm text-[#94A3B8]">
          전체 원문·자료는 상담 연계 후 제공됩니다 ·{" "}
          <Link className="font-medium text-[var(--siso-mint)]" href={siteConfig.emailMailto}>
            {siteConfig.email}
          </Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/#parent-guide" showArrow>
            가이드 목록
          </Button>
          <Button variant="secondary" href="/apply" showArrow>
            상담·접수
          </Button>
        </div>
      </div>
    </article>
  );
}
