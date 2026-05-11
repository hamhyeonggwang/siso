import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import type { CommunityPost } from "@/lib/supabase";
import { PostList } from "@/components/square/post-list";

export const metadata: Metadata = { title: "소식" };
export const revalidate = 60;

export default async function Page() {
  const { data: posts } = supabase
    ? await supabase
        .from("community_posts")
        .select("id, slug, title, excerpt, category, tags, hero_image_uri, status, published_on")
        .eq("category", "news")
        .in("status", ["published", "pinned"])
        .order("published_on", { ascending: false })
        .limit(50)
    : { data: null };

  return (
    <PostList
      title="소식"
      breadcrumb="소식"
      emptyMessage="등록된 소식이 없습니다."
      posts={(posts ?? []) as CommunityPost[]}
    />
  );
}
