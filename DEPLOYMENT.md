# Scania Tungbil — Deployment Guide

## 1. Push to GitHub (meetmax-NO/scania)

From Emergent's preview UI:

1. Click the **"Save to GitHub"** button in the Emergent top bar (or "Push to GitHub" in some versions).
2. Authorize the Emergent GitHub App on the **meetmax-NO** organisation if you haven't already (Emergent needs `repo` scope on that org).
3. In the dialog:
   - **Organisation / owner**: `meetmax-NO`
   - **Repository name**: `scania`
   - **Visibility**: Private or Public (your call)
   - **Branch**: `main`
4. Confirm. Emergent will create the repo and push the full `/app` tree (frontend, backend, vercel.json) in one commit.

If "Save to GitHub" is not visible, open the Profile menu → **GitHub integration** → connect, then retry.

## 2. Deploy to Vercel

The repo will contain a `vercel.json` at the root that already configures everything for a frontend-only deploy.

### Vercel project setup

1. Go to https://vercel.com/new → **Import Git Repository** → select `meetmax-NO/scania`.
2. **Framework Preset**: `Other` (let `vercel.json` drive it).
3. **Root Directory**: leave as `.` (root). `vercel.json` will `cd frontend` itself.
4. **Build & Output settings**: leave them — Vercel will read from `vercel.json`:
   - Build command: `cd frontend && yarn install --frozen-lockfile && yarn build`
   - Output: `frontend/build`
   - Install: skipped at root
5. **Environment Variables**: none required (the site is fully static — no backend calls).
   - Optional: `REACT_APP_BACKEND_URL=https://your-future-api.example.com` if you later wire up the contact form to a backend.
6. Click **Deploy**.

First deploy takes ~90 s. After it's live Vercel gives you `https://scania-meetmax.vercel.app` (rename in project settings).

### What's in vercel.json

- **SPA rewrites** — every path falls back to `index.html` so React Router works.
- **Immutable caching** for `/static/*` (CRA hashed bundles) and `/scania/*` (the 8 truck images).
- **Security headers**: nosniff, frame-options, referrer-policy, permissions-policy.
- **Clean URLs**: `/contact` instead of `/contact.html` (irrelevant for SPA but doesn't hurt).

## 3. Backend (currently unused)

The FastAPI backend in `/app/backend` is not deployed by this `vercel.json` — the landing page is fully static. If you later add a contact form or newsletter, you have two options:

- Move the relevant endpoint into `frontend/api/*.js` (Vercel serverless functions, Node) — simplest.
- Deploy the FastAPI app separately to Railway/Render/Fly.io and point `REACT_APP_BACKEND_URL` at it.

## 4. Custom domain

Vercel project → **Settings → Domains** → add `scania.meetmax.no` (or whatever you own). Vercel gives you DNS records to put in your domain registrar.
