"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/sections/section-shell";
import { communityCategoryLabels, communityPosts } from "@/data/community";
import type { CommunityPost } from "@/types/content";
import { cn } from "@/lib/utils";

const categories: Array<CommunityPost["category"] | "all"> = [
  "all",
  "notice",
  "recruitment",
  "parent_education",
  "review",
  "story",
];

function CommunityThumb({ hint }: { hint: string }) {
  return (
    <div className="relative h-[7.25rem] overflow-hidden rounded-[18px] border border-[#E5E7EB]/80 bg-gradient-to-br from-[#1A2B4C]/12 via-white to-[#2DD4BF]/12">
      <div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(26,43,76,0.32), transparent 45%), radial-gradient(circle at 90% 10%, rgba(45,212,191,0.28), transparent 45%)",
        }}
      />
      <p className="absolute inset-0 grid place-items-center px-4 text-center text-[11px] font-medium text-[#1A2B4C]/40">
        {hint}
      </p>
    </div>
  );
}

export function CommunitySection() {
  const [filter, setFilter] = React.useState<(typeof categories)[number]>("all");

  const items =
    filter === "all"
      ? communityPosts
      : communityPosts.filter((post) => post.category === filter);

  return (
    <SectionShell id="community" eyebrow="소식" title="공지부터 후기·스토리까지.">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-normal transition-all duration-200",
              filter === cat
                ? "border-[#1A2B4C] bg-[#1A2B4C] text-white shadow-sm"
                : "border-transparent bg-white/95 text-[#6B7280]",
            )}
          >
            {cat === "all" ? "전체" : communityCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {items.map((post) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="flex h-full flex-col rounded-[22px] border border-[#E5E7EB]/80 bg-white p-4 shadow-sm"
            >
              <CommunityThumb hint={post.imageHint} />
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge tone="teal">{communityCategoryLabels[post.category]}</Badge>
                {post.tags[0] ? (
                  <span className="text-[11px] font-medium text-[#9CA3AF]">
                    #{post.tags[0]}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 text-[15px] font-semibold text-[#111827]">{post.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{post.excerpt}</p>
              <p className="mt-auto pt-4 text-[11px] font-medium tracking-wide text-[#CBD5E1]">
                {post.date.replace(/-/g, ".")}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
