# Jobayer Hossan — Portfolio

A premium, dark-themed portfolio for a Video Editor & Motion Designer, built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata, JSON-LD
    page.tsx           # Assembles all sections
    globals.css         # Design tokens (Tailwind v4 @theme), signature timeline-ruler motif
    robots.ts            # robots.txt route
    sitemap.ts             # sitemap.xml route
  components/
    sections/             # One component per page section (Hero, About, Services, ...)
    ui/                    # Reusable primitives (Button, Reveal, SkillBar, AnimatedCounter, ...)
  lib/
    data.ts                # All editable content — name, services, portfolio items, testimonials, stats
    types.ts                # Shared TypeScript types
```

## Editing content

Almost everything you'll want to change lives in `src/lib/data.ts`:

- `PERSONAL` — name, location, email, social links
- `SERVICES` — the 8 service cards
- `SKILLS` — skill bars grouped by category
- `PORTFOLIO_ITEMS` — the 8 sample projects (swap `thumbnail` gradient classes for real images/video — see below)
- `TIMELINE` — experience timeline entries
- `TESTIMONIALS` — client reviews
- `STATS` — the animated counters

## Swapping in real project thumbnails

Portfolio cards currently use gradient placeholders (`thumbnail: "from-cyan-500/30 to-violet-600/30"`) so the site runs with zero external assets. To use real media:

1. Add images to `public/images/portfolio/`.
2. In `src/components/sections/Portfolio.tsx`, replace the gradient `div` with a Next.js `<Image>` component pointing at your file.
3. Do the same in `PortfolioModal.tsx` for the preview, and swap the play-button overlay for an embedded video player if you want autoplay previews.

## Contact form

The form in `Contact.tsx` currently simulates a submission. Wire the `handleSubmit` function to a real email/CRM endpoint (e.g. Resend, Formspree, or a custom API route) before going live.

## SEO

- Metadata, Open Graph, and Twitter cards are set in `layout.tsx`.
- JSON-LD `Person` structured data is injected in the `<body>`.
- `robots.ts` and `sitemap.ts` generate `/robots.txt` and `/sitemap.xml`.
- Update `SITE_URL` in `layout.tsx` and the URL in `sitemap.ts` to your real domain before deploying.
- Add a real Open Graph image at `public/images/og-cover.jpg` (1200×630).

## Accessibility & performance

- Visible focus states via `:focus-visible`.
- `prefers-reduced-motion` is respected globally in `globals.css`.
- Fonts load via `next/font` (self-hosted, no layout shift).
- All animations are GPU-friendly (`transform`/`opacity`) and scroll-triggered with `viewport={{ once: true }}` to avoid replay cost.

## Deploying

This is a standard Next.js 15 App Router project — deploys cleanly to Vercel, Netlify, or any Node host. No environment variables are required for the base site.
