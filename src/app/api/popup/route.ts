import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const revalidate = 60; // cache 60s

export async function GET() {
  if (!supabase) return NextResponse.json({ popup: null });

  const { data, error } = await supabase
    .from("popups")
    .select("id, title, body, cta_label, cta_href")
    .eq("active", true)
    .or("starts_at.is.null,starts_at.lte.now()")
    .or("ends_at.is.null,ends_at.gte.now()")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return NextResponse.json({ popup: null });
  return NextResponse.json({ popup: data });
}
