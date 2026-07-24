-- Run this in Supabase Studio -> SQL Editor.
-- Creates the two tables the portfolio needs and locks them down with RLS.

-- 1. PROJECTS: publicly readable, managed by you from Supabase Studio.
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tags text[] not null default '{}',
  github_url text,
  demo_url text,
  image_url text,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table projects enable row level security;

-- Anyone can read projects (needed for the public portfolio page).
create policy "Public can read projects"
  on projects for select
  using (true);

-- No insert/update/delete policy is created for anon —
-- manage rows yourself from Supabase Studio (Table Editor),
-- or add an authenticated-only policy later for an admin panel.

-- 2. MESSAGES: write-only from the site, readable only by you.
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table messages enable row level security;

-- Anyone (anon) can submit a message via the contact form...
create policy "Public can insert messages"
  on messages for insert
  with check (true);

-- ...but nobody can read them back through the public anon key.
-- View submissions in Supabase Studio -> Table Editor (uses your
-- dashboard login, which bypasses RLS) instead.

-- Optional: seed a couple of rows so the Projects section has content
-- immediately. Delete/edit these from Table Editor whenever you like.
insert into projects (title, description, tags, github_url, featured, sort_order)
values
  (
    'Goniaa',
    'AI-powered fashion e-commerce ecosystem — storefront, AI Brand Manager dashboard, and mobile app.',
    array['Next.js 15', 'TypeScript', 'Supabase', 'Groq API', 'Expo'],
    null,
    true,
    0
  ),
  (
    'Blood Smear Classification',
    'Medical image classification on the AneRBC dataset — custom CNNs and transfer learning with Grad-CAM explainability.',
    array['PyTorch', 'CNN', 'Transfer Learning'],
    'https://github.com/nimraa9090/ANN-DL-PRJ',
    true,
    1
  );
