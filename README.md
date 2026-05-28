# June 2026 — Family Trip

Side-by-side travel plans for two families (11 travellers, 4 parents, June 7-15 2026): **Sikkim & Darjeeling** vs **Kerala**. Real prices, day-by-day walkthrough, calendar view, embedded Google Maps routes, and a transparent budget breakdown.

Built mobile-first with Next.js 16 (App Router), Tailwind 4, framer-motion, and lucide-react. Deployed on Vercel.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Routes

- `/` — home with both destinations side by side
- `/plan/sikkim` and `/plan/kerala` — day-by-day walkthrough
- `/plan/[slug]/calendar` — monthly grid + vertical timeline
- `/plan/[slug]/overview` — flights, cars, weather, budget

## Editing the plans

All trip content lives in `src/lib/plans/sikkim.ts` and `src/lib/plans/kerala.ts`. Edit prices, days, attractions, hotels — types in `src/lib/types.ts`.

## Photo fix script

`node scripts/fix-photos.mjs` — rewrites stale Wikipedia thumb URLs into `Special:FilePath` redirects.
