# TUNITY Engineering

A premium corporate website for **TUNITY Engineering**, a multidisciplinary engineering firm combining structural engineering, BIM, architecture, web development and digital transformation.

Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. Fully bilingual (French default / English), with a navy & electric-blue design system.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **i18n:** Custom React Context + dictionary system (no external library)

## Getting Started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command         | Description                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the development server              |
| `npm run build` | Create an optimized production build      |
| `npm run start` | Run the production build locally          |
| `npm run lint`  | Run ESLint checks                         |

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Home
│   ├── about/                # About
│   ├── expertises/           # Expertises
│   ├── projects/             # Projects (with category filtering)
│   ├── careers/               # Careers
│   │   └── jobs/              # Open positions (with department filtering)
│   ├── contact/               # Contact
│   ├── layout.tsx            # Root layout (fonts, providers, Navbar/Footer)
│   └── not-found.tsx         # 404 page
├── components/
│   ├── sections/             # Composite page sections (Hero-adjacent, CTA, PageHeader, ...)
│   ├── graphics/              # Decorative SVG illustrations (BIM/technical patterns)
│   └── *.tsx                 # Reusable UI components (Navbar, Footer, cards, forms, ...)
├── data/                     # Bilingual content (expertises, projects, jobs, reviews, partners)
├── lib/
│   └── i18n/                  # Language context + FR/EN dictionary
└── lib/utils.ts               # Shared helpers
```

## Internationalization

The site defaults to **French** with an **English** toggle in the navbar. All UI copy and content data live in `src/lib/i18n/dictionary.ts` and the bilingual `src/data/*.ts` files. The selected language persists in `localStorage` and updates `<html lang>`.

## Design System

- **Colors:** navy (`navy-*`) and electric blue (`electric-*`) palettes defined in `tailwind.config.ts`
- **Typography:** Inter (body) and Space Grotesk (display/headings) via `next/font`
- **Assets:** brand logo and hero imagery live in `public/`

## Deployment

This is a standard Next.js app and can be deployed on [Vercel](https://vercel.com/) or any Node.js hosting environment:

```bash
npm run build
npm run start
```
