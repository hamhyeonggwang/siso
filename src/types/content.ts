/**
 * Shared content shapes for frontend + future Supabase tables.
 * Admin dashboard can reuse these contracts for CRUD validation.
 */

export type ProgramAgeGroup =
  | "preschool"
  | "lower_elementary"
  | "upper_elementary"
  | "teen";

export type ProgramCategory =
  | "group"
  | "individual"
  | "social_skills"
  | "self_regulation"
  | "school_participation";

export type ProgramStatus = "open" | "waitlist" | "invite_only";

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  thumbnailHint: string;
  ageGroups: ProgramAgeGroup[];
  categories: ProgramCategory[];
  tags: string[];
  status: ProgramStatus;
}

export type AssessmentCategory =
  | "sensory"
  | "motor"
  | "perception"
  | "executive"
  | "participation";

export interface Assessment {
  id: string;
  name: string;
  summary: string;
  targetAge: string;
  estimatedTime: string;
  recommendedFor: string[];
  category: AssessmentCategory;
}

export type CourseFormat = "workshop" | "seminar" | "course" | "clinical";

export type CourseStatus = "upcoming" | "full" | "recording";

export interface Course {
  id: string;
  title: string;
  format: CourseFormat;
  description: string;
  dateLabel: string;
  duration: string;
  audience: string;
  status: CourseStatus;
}

export type CommunityCategory =
  | "notice"
  | "recruitment"
  | "parent_education"
  | "review"
  | "story";

export type CommunityStatus = "published" | "pinned" | "draft";

export interface CommunityPost {
  id: string;
  title: string;
  excerpt: string;
  category: CommunityCategory;
  tags: string[];
  date: string;
  status: CommunityStatus;
  imageHint: string;
}

export type ApplicationType =
  | "consultation"
  | "program"
  | "waitlist";

export interface ApplicationPayload {
  type: ApplicationType;
  guardianName: string;
  childName: string;
  childAge: string;
  concerns: string;
  phone: string;
  email: string;
  preferredSchedule: string;
  programId?: string;
}

export interface ParentGuideTopic {
  id: string;
  title: string;
  description: string;
  readTime: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}
