import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import {
  programs,
  programFilterLabels,
} from "@/data/programs";

type ProgramDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: ProgramDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);
  if (!program) {
    return {};
  }
  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({ params }: ProgramDetailProps) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const statusLabel =
    program.status === "open" ? "접수 중" : program.status === "waitlist" ? "대기" : "초대";

  return (
    <article className="border-b border-[#E5E7EB]/80 bg-[#F8FAFC]/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-14 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.06em] text-[#9CA3AF]">
            프로그램
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] md:text-4xl">
            {program.title}
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[#6B7280]">
            {program.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {program.ageGroups.map((age) => (
              <Badge key={age} tone="navy">
                {programFilterLabels.age[age]}
              </Badge>
            ))}
            {program.categories.map((cat) => (
              <Badge key={cat}>{programFilterLabels.focus[cat]}</Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/apply?program=${program.slug}`} showArrow glass>
              이 과정 접수하기
            </Button>
            <Button variant="secondary" href="/#programs" glass>
              프로그램 목록
            </Button>
            <Button variant="ghost" href={siteConfig.emailMailto}>
              이메일 문의
            </Button>
          </div>
        </div>

        <aside className="w-full max-w-xs space-y-5 rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-sm lg:justify-self-end">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
              상태
            </p>
            <p className="mt-2 text-lg font-semibold text-[#111827]">{statusLabel}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-[#9CA3AF]">
              태그
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-medium text-[#374151]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/apply"
            className="inline-block text-sm font-medium text-[#1A2B4C] underline-offset-4 hover:underline"
          >
            먼저 상담만 받기
          </Link>
        </aside>
      </div>
    </article>
  );
}
