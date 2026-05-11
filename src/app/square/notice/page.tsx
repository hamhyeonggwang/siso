import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { CommunityPost } from "@/lib/supabase";
import { PostList } from "@/components/square/post-list";

export const metadata: Metadata = { title: "공지사항" };
export const revalidate = 60;

export default async function Page() {
  const { data: posts } = supabase
    ? await supabase
        .from("community_posts")
        .select("id, slug, title, excerpt, category, tags, hero_image_uri, status, published_on")
        .eq("category", "notice")
        .in("status", ["published", "pinned"])
        .order("published_on", { ascending: false })
        .limit(50)
    : { data: null };

  return (
    <PostList
      title="공지사항"
      breadcrumb="공지사항"
      emptyMessage="등록된 공지사항이 없습니다."
      posts={(posts ?? []) as CommunityPost[]}
    />
  );
}
