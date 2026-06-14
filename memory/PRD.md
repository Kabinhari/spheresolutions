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
- [x] Sticky glass header w/ desktop + mobile nav, custom SVG sphere logo, dark footer w/ wordmark.
- [x] Services: 6 blocks (architecture, migration, integration, cloud, support, QA) with outcomes/CTAs.
- [x] Contact form: client + server validation, honeypot, DB storage, success/toast states.
- [x] SEO meta tags, OG tags, page title.
- [x] Tested: backend 10/10, frontend 20/20 (testing agent iteration_1).

## Backlog
- **P1**: Wire real email (Resend/SendGrid) for enquiry notifications + user auto-reply.
- **P1**: Replace placeholder contact details + real Calendly link.
- **P2**: Insights/Blog, case studies, careers page, analytics, admin panel for content.
- **P2**: Embed Calendly inline widget on Contact page.

## Next Tasks
- Collect real contact details, Calendly link, and email service key from client to move off placeholders.
