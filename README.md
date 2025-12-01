# 🎄 Wikipedia Advent Calendar

A responsive, Christmas-themed landing page and interactive Advent calendar built with **Next.js 16**, **App Router**, and **TailwindCSS**. Each of the 24 “doors” unlocks automatically based on the visitor’s local time and links directly to a curated Wikipedia article. A ConvertKit-powered signup form lets readers subscribe to the daily newsletter drop.

## ✨ Highlights

- Local-time door unlocking logic with an archive toggle for pre/post season viewing.
- Animated 3D-style Advent doors, responsive grid, and frosted glass hero section.
- JSON-driven content in `src/data/articles.json` so editors can update the calendar without touching components.
- Accessible markup (ARIA labels, focus styles, alt text) plus SEO metadata + Open Graph image.
- ConvertKit email capture form (works with any hosted form ID) and Vercel-ready deployment.

## 🚀 Getting started

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## 🔐 Configure ConvertKit

1. Create (or reuse) a ConvertKit form.
2. Copy its numeric Form ID from the form’s embed URL: `https://app.convertkit.com/forms/<ID>/editor`.
3. Create `.env.local` in the project root and add:

```
NEXT_PUBLIC_CONVERTKIT_FORM_ID=<your_form_id>
```

Restart `npm run dev` so the new environment variable is picked up. Without this value, the form stays disabled with a helper message.

## 🗂️ Manage calendar content

- Edit `src/data/articles.json` to change titles, summaries, links, or optional images (`public/images/` contains simple SVG badges you can reuse).
- Each entry requires `day`, `title`, `summary`, and a valid Wikipedia `link`.
- Add new assets to `public/images` and reference them via `/images/<file>.svg`.

## 📅 How unlocking works

- Doors unlock when the visitor’s device reaches December `day <= 24`.
- After December 24, all doors remain open for the rest of the year.
- Outside of December, visitors can tap **“Preview entire calendar”** to read the archive.

## 📦 Deploy on Vercel

1. Push the repository to GitHub/GitLab.
2. Create a new Vercel project and import the repo.
3. Add the `NEXT_PUBLIC_CONVERTKIT_FORM_ID` environment variable in the Vercel dashboard.
4. Deploy. The default `next.config.ts` works out of the box (no custom server code required).

## 🛠️ Tech stack

- Next.js 16 (App Router, `next/font`, React Server Components)
- TailwindCSS 3.4 + custom CSS for door animations
- TypeScript
- ConvertKit HTML form integration
- Custom OG image generated via Pillow

Enjoy sharing Christmas trivia one door at a time! 🎁
