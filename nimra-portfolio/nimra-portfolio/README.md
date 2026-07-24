# Nimra — Portfolio

Next.js 15 + TypeScript + Tailwind. Fully static — no database, no backend,
no monthly costs. Everything lives in the code, so it deploys free on
Vercel forever.

## Setup (local)

1. Install dependencies:
   ```
   npm install
   ```

2. Run the dev server:
   ```
   npm run dev
   ```
   Open http://localhost:3000

## Editing content

Everything is plain data in the code — no dashboard needed:

- **Projects** → `lib/projects.ts`: edit the array (title, description,
  tags, GitHub link) to add/remove/reorder projects.
- **About / facts** → `components/About.tsx`
- **Skills / certifications** → `components/Skills.tsx`
- **Contact email** → `components/Contact.tsx`, change the `email` const.
- **Hero copy** → `components/Hero.tsx`

Save the file, the site updates on next `npm run dev` reload or next
deploy — no redeploy pipeline to babysit.

## Deploy (Vercel — free tier)

1. Push this folder to a new GitHub repo (keep it separate from your
   coursework/notebooks repo).
2. On vercel.com → "New Project" → import that repo.
3. No environment variables needed. Deploy.

## Structure

```
app/
  page.tsx          -> main page, imports static project data
components/          -> Hero, About, Projects, Skills, Contact, Footer
lib/
  projects.ts        -> all project content lives here
```
