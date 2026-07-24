# Nimra — Portfolio

Next.js 15 + TypeScript + Tailwind + Supabase. Site static-first hai —
Supabase setup na bhi karo to fallback data ke sath chal jayega. Supabase
connect karne se Projects section live database se aayega, aur contact
form messages table me save hoga.

## Setup (local)

1. Dependencies install karo:
   ```
   npm install
   ```

2. `.env.local.example` ko copy karke `.env.local` bana lo, aur apni
   Supabase keys daal do (neeche step 3 dekho keys kahan se milengi):
   ```
   cp .env.local.example .env.local
   ```

3. Supabase project banao (agar nahi bana hua):
   - https://supabase.com pe free account/project bana lo
   - Project Settings -> API -> `Project URL` aur `anon public` key copy
     karo, `.env.local` me paste kar do
   - SQL Editor me `supabase/schema.sql` ka pura content paste karke run
     kar do — yeh `projects` aur `messages` tables bana dega, RLS ke
     sath, aur 2 seed projects bhi add kar dega

4. Dev server chalao:
   ```
   npm run dev
   ```
   http://localhost:3000 pe dekh lo.

## Projects manage karna (bina code chede)

Supabase Studio -> Table Editor -> `projects` table me jaake naya row
add karo (title, description, tags array, github_url, featured,
sort_order). Site next load pe automatically show kar dega — koi
redeploy nahi chahiye.

## Contact form ke messages dekhna

Supabase Studio -> Table Editor -> `messages` table. Yeh anon key se
readable nahi hai (security ke liye), sirf dashboard login se dikhega.

## Apni photo add karna

`public/images/` me apni photo daal do, phir jahan chaho `next/image`
se reference kar lo (e.g. Hero ya About section me).

## Deploy (Vercel)

1. Is folder ko GitHub pe push karo
2. Vercel pe "New Project" -> repo import karo
3. Environment Variables me `NEXT_PUBLIC_SUPABASE_URL` aur
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` add karo (same jo `.env.local` me hain)
4. Deploy — done

## Structure

```
app/
  page.tsx          -> main page, Supabase se projects fetch karta hai
  api/contact/       -> contact form ka POST endpoint
components/          -> Hero, About, Projects, Skills, Contact, Footer
lib/
  supabase.ts        -> Supabase client + Project type
  fallback-projects.ts -> agar DB empty ho to yeh data dikhta hai
supabase/schema.sql   -> database schema, RLS policies, seed data
```
