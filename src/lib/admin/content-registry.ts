import type {
  ApplicationPayload,
  Assessment,
  CommunityPost,
  Course,
  Program,
} from "@/types/content";

/**
 * Mirrors Supabase tables declared in `supabase/schema.sql`.
 * Admin dashboards can import these keys for dynamic form builders.
 */
export type ContentEntity = "programs" | "assessments" | "courses" | "community" | "applications";

export const contentRegistry = {
  programs: {
    table: "programs",
    label: "Programs",
    dto: {} as Program,
    fields: [
      "slug",
      "title",
      "summary",
      "thumbnail_uri",
      "status",
      "age_groups",
      "categories",
      "tags",
      "intake_copy",
    ],
  },
  assessments: {
    table: "assessments",
    label: "Assessments",
    dto: {} as Assessment,
    fields: ["code", "title", "summary", "target_age", "estimated_time", "recommended_for", "category"],
  },
  courses: {
    table: "courses",
    label: "Courses",
    dto: {} as Course,
    fields: ["slug", "title", "format", "description", "date_label", "duration", "audience", "status"],
  },
  community: {
    table: "community_posts",
    label: "Community Posts",
    dto: {} as CommunityPost,
    fields: [
      "slug",
      "title",
      "excerpt",
      "body",
      "category",
      "tags",
      "hero_image_uri",
      "status",
      "published_on",
    ],
  },
  applications: {
    table: "applications",
    label: "Applications",
    dto: {} as ApplicationPayload,
    fields: [
      "type",
      "guardian_name",
      "child_name",
      "child_age",
      "concerns",
      "phone",
      "email",
      "preferred_schedule",
      "program_id",
    ],
  },
} satisfies Record<
  ContentEntity,
  { table: string; label: string; dto: unknown; fields: readonly string[] }
>;
