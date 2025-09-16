# Vinayak Portfolio

A Next.js 14 + Tailwind CSS portfolio.

## Prerequisites
- Node.js 18+ (Node 22 works)
- pnpm (via Corepack)

## Setup
```bash
corepack enable
pnpm install
pnpm dev
```
Open http://localhost:3000

## Build & Start
```bash
pnpm build
pnpm start
```

## Deploy (Vercel)
- Push to GitHub
- Import in Vercel (framework: Next.js)
- Default settings are fine

## Scripts
- `pnpm dev`: start dev server
- `pnpm build`: production build
- `pnpm start`: run production server

## Notes
- TailwindCSS v4 configured via `@tailwindcss/postcss` in `postcss.config.mjs`
- Static assets in `public/`
- Update components in `components/` and pages in `app/`
