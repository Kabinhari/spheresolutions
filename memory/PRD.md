# Sphere IT Solution — Product Requirements (PRD)

## Original Problem Statement
Production-ready corporate B2B marketing website for **Sphere IT Solution**, a Temenos T24 / Transact
consulting firm serving banks and financial institutions. Light professional theme, classic corporate
blue, premium 3D fintech visuals. Pages: Home, About, Why Us, Services, Contact. Visitors convert via a
contact form. Tech: React + FastAPI + MongoDB.

## User Choices (locked)
- Email notifications: PLACEHOLDER for now (store enquiries in MongoDB only).
- Contact details (email/phone/offices): professional placeholders.
- Calendly link: placeholder button (`#`).
- Logo + visuals: custom SVG Sphere logo + AI/3D fintech imagery.
- Brand color: classic corporate blue (#0A438C).
- Simple static marketing site; conversion = contact form.

## Architecture
- **Frontend**: React (CRA + craco, `@/` alias), Tailwind, shadcn/ui, framer-motion, lucide-react.
  - Pages: Home, About, WhyUs, Services, Contact. Shared: Layout, Header, Footer, Logo, Reveal, CTABanner.
  - Fonts: Outfit (headings) + Manrope (body).
- **Backend**: FastAPI, `/api` prefix. Endpoints: `/api/`, `/api/services`, `POST /api/contact`, `GET /api/contact`.
  - Pydantic validation + honeypot spam protection. Stored in MongoDB `contacts` collection.
- **DB**: MongoDB via MONGO_URL / DB_NAME.

## User Personas
- CIOs/CTOs/enterprise architects, core banking program managers, digital transformation leaders at banks/FIs.

## Implemented (2026-06)
- [x] 5 responsive pages with light premium corporate design + 3D visuals.
- [x] Sticky glass header w/ desktop + mobile nav, custom SVG sphere logo, dark footer w/ `sphereit` watermark.
- [x] Services: 7 blocks (incl. T24/Temenos Development) in a sticky-stacking deck with outcomes/CTAs.
- [x] FULLY STATIC build: HashRouter routing + `homepage: "."` (relative assets) for GitHub Pages.
- [x] Contact form submits client-side to **Web3Forms** (no backend). Honeypot `botcheck`, client validation, success/toast states. Key in `REACT_APP_WEB3FORMS_KEY`.
- [x] SEO meta tags, OG tags, page title.

## Deployment (GitHub Pages)
- `cd frontend && yarn build` → publish `build/` to the `gh-pages` branch (or repo Pages source).
- HashRouter + relative paths mean it works under any `username.github.io/repo/` subpath without 404s.
- Enquiries are emailed to the address registered on the Web3Forms access key.
- NOTE: FastAPI backend (`server.py`) is now UNUSED — the site is frontend-only/static.

## Backlog
- **P1**: Wire real email (Resend/SendGrid) for enquiry notifications + user auto-reply.
- **P1**: Replace placeholder contact details + real Calendly link.
- **P2**: Insights/Blog, case studies, careers page, analytics, admin panel for content.
- **P2**: Embed Calendly inline widget on Contact page.

## Next Tasks
- Collect real contact details, Calendly link, and email service key from client to move off placeholders.
