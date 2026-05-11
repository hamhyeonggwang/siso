import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Returns null when env vars are not configured (e.g. local dev without .env.local)
export const supabase: SupabaseClient | null =
  url && anon ? createClient(url, anon) : null;

export type Popup = {
  id: string;
  title: string;
  body: string | null;
  cta_label: string | null;
  cta_href: string | null;
};

export type CommunityPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string | null;
  category: string;
  tags: string[];
  hero_image_uri: string | null;
  status: "published" | "pinned" | "draft";
  published_on: string;
};
