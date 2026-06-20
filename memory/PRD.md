# Scania Heavy Trucks — Landing Page PRD

## Original Problem Statement
Build a landing page: Scania Tungbil. Tones in "dueblå" (dove blue) or slightly darker; black as contrast color. Focus on Scania's history and owners. Include images and the most important trucks produced. Focus on EV truck production and what will happen the next 5 years.

## User Choices
- 1A — Static landing page (no backend functionality)
- 2B — English content
- 3A — All sections (Hero, History, Owners, Iconic Trucks, EV, Future 5yr, Contact)
- 4A — Stock images (Pexels / Unsplash)

## Architecture
- React 19 + Tailwind 3 + Framer Motion + Lucide Icons
- Pure static frontend; backend not used
- Composed of small section components under `/app/frontend/src/components/scania/`
- Routing: single page at `/` rendering `Landing.jsx`
- Fonts: Cabinet Grotesk (Fontshare) + IBM Plex Sans (Google)

## Design System
Archetype 4 — Swiss & High-Contrast.
Palette: `#587187` (dove blue), `#3B4E5E` (dove blue dark), `#0B0E12` (ink), `#F2F5F8` (paper), pure black contrast.

## What's Implemented (Iteration 1 — Dec 2025)
- Sticky transparent → glassmorphism nav with mobile hamburger
- Hero with cinematic truck image + bold Cabinet Grotesk type ("Built for the Long Haul")
- Marquee strip (V8 POWER · SÖDERTÄLJE · GRIFFIN MARK · …)
- 10-step vertical history timeline (1891 → 2024) with sticky archive image
- Dove-blue stats strip (Founded · Employees · Annual production · V8 power)
- Ownership chapters: Wallenberg → Saab-Scania → VW listing → TRATON
- Interactive Iconic Trucks selector (6 models: L51, LB140, R-Series, T-Cab, S-Series, 40R BEV)
- EV Production section with 4 capability cards + 40R BEV figure (624 kWh / 550 km / 45 min)
- 2026 → 2030 future roadmap (5 milestones)
- Contact section with 4 channel cards + primary CTA mailto
- Footer with brand + nav + copyright

## Environment Fix Applied
- `/app/frontend/craco.config.js` — added compat shim translating react-scripts 5's v4 dev-server hooks (`onBefore/onAfterSetupMiddleware`, `https`) to webpack-dev-server v5 API. Pre-existing tooling issue, not related to product features.

## Testing
- iteration_1.json: 100% of frontend acceptance criteria passed. Zero console errors. All data-testids verified.

## Prioritized Backlog
- P1: Add real Scania-branded press images (currently generic stock)
- P2: Contact form with backend persistence (currently mailto only)
- P2: i18n — add Norwegian (bokmål) toggle since the original brief was Norwegian
- P3: Interactive 1891–2030 horizontal scroll timeline as alternative view
- P3: SEO meta + Open Graph card

