# Sweet Tea & Saturdays — Vercel Demo

Modern farmhouse landing page using Next.js 14 + Tailwind.

## Quick Start

```bash
# 1) Install
npm install

# 2) Run locally
npm run dev
# visit http://localhost:3000

# 3) Build & run prod
npm run build
npm start
```

## Deploy to Vercel (recommended)

1. Create a new GitHub repo, push this project.
2. Go to https://vercel.com/new and import the repo.
3. Use defaults. Framework: **Next.js**. Build command: `next build`. Output: `.next`.
4. Click **Deploy**. Your preview URL will be ready in ~60 seconds.

### Optional: Connect your domain
- In Vercel → Project → **Settings → Domains**, add `sweetteaandsaturdays.com`.
- In GoDaddy DNS: point `www` (CNAME) to the Vercel target shown; set apex (A/ALIAS) per Vercel instructions.

## Where to edit

- **app/page.jsx** — main landing page (hero, collections, featured, About, email, Coming Soon sections).
- **app/globals.css** — Tailwind + color variables.
- **tailwind.config.js** — fonts (Playfair Display + Nunito Sans configured).

## Feature flags

Coming Soon sections are enabled by default:

```js
const features = {
  bowKits: 'coming-soon',
  teamInspired: 'coming-soon',
};
```

- Set to `false` to hide completely.
- Later set to `true` to show real products/collections.
