-- SISO reference schema for Supabase Postgres
-- Pair with Row Level Security tuned for public forms + admin service role.

create extension if not exists "pgcrypto";

-- Core enumerations mirror `src/types/content.ts`
create type program_status as enum ('open', 'waitlist', 'invite_only');
create type course_status as enum ('upcoming', 'full', 'recording');
create type community_status as enum ('published', 'pinned', 'draft');
create type application_type as enum ('consultation', 'program', 'waitlist');

create table programs (
  id uuid primary key default gen_random_uuid (),
  slug text not null unique,
  title text not null,
  summary text not null,
  thumbnail_uri text,
  status program_status not null default 'open',
  age_groups text[] not null check (cardinality(age_groups) > 0),
  categories text[] not null check (cardinality(categories) > 0),
  tags text[] not null default '{}',
  intake_copy text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table assessments (
  id uuid primary key default gen_random_uuid (),
  code text not null unique,
  title text not null,
  summary text not null,
  target_age text not null,
  estimated_time text not null,
  recommended_for text[] not null default '{}',
  category text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table courses (
  id uuid primary key default gen_random_uuid (),
  slug text not null unique,
  title text not null,
  format text not null,
  description text not null,
  date_label text not null,
  duration text not null,
  audience text not null,
  status course_status not null default 'upcoming',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table community_posts (
  id uuid primary key default gen_random_uuid (),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  body text,
  category text not null,
  tags text[] not null default '{}',
  hero_image_uri text,
  status community_status not null default 'published',
  published_on date not null default (now() at time zone 'utc'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table applications (
  id uuid primary key default gen_random_uuid (),
  type application_type not null,
  guardian_name text not null,
  child_name text not null,
  child_age text not null,
  concerns text not null,
  phone text not null,
  email text not null check (email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  preferred_schedule text not null,
  program_id uuid references programs (id) on delete set null,
  source text default 'web',
  inserted_by text default 'anonymous',
  consent_version text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index applications_created_at_idx on applications (created_at desc);
create index applications_program_id_idx on applications (program_id);

alter table programs enable row level security;
alter table assessments enable row level security;
alter table courses enable row level security;
alter table community_posts enable row level security;
alter table applications enable row level security;

-- Anonymous insert for marketing site applications (tighten origin checks in Edge Functions)
create policy applications_public_insert
  on applications for insert
  with check (true);

-- ── Popups ────────────────────────────────────────────────────────────────────
-- Managed from Supabase dashboard. Only one row should have active=true at a time.
create table popups (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  body         text,
  cta_label    text,
  cta_href     text,
  active       boolean not null default false,
  starts_at    timestamptz,
  ends_at      timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table popups enable row level security;

-- Public can read only active popups within their time window
create policy popups_public_read
  on popups for select
  using (
    active = true
    and (starts_at is null or starts_at <= now())
    and (ends_at   is null or ends_at   >= now())
  );

-- ── community_posts public read ────────────────────────────────────────────────
create policy community_posts_public_read
  on community_posts for select
  using (status in ('published', 'pinned'));

create index community_posts_category_idx on community_posts (category, published_on desc);

-- ── Read policies should be admin/service-role only in production ──────────────
create policy programs_public_read
  on programs for select using (true);
