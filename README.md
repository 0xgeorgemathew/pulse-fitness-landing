# PULSE — Fitness App Landing Page

> **Train like you mean it.**

An energetic, dark-mode landing page for a fictional fitness app called **PULSE**.
Built with [Astro](https://astro.build) and deployed to **Cloudflare Workers** via the
`@astrojs/cloudflare` adapter.

🌐 **Live:** https://pulse-fitness.mathew.workers.dev
📦 **Repo:** https://github.com/0xgeorgemathew/pulse-fitness-landing

![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro&logoColor=white)
![Deployed on Cloudflare Workers](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-F38020?logo=cloudflare&logoColor=white)

## ✨ Features

- **Bold dark-mode design** with an electric lime / hot orange / pink / cyan palette.
- **Animated hero** with a floating phone mockup, pulsing live-class chip, and stats strip.
- **Workout preview cards** — filterable by category (Strength, HIIT, Cardio, Boxing,
  Yoga, Mobility) with intensity bars, duration, calories, and move previews.
- **Live progress-tracking demo** — an interactive dashboard with:
  - A weekly activity bar chart that toggles between Calories and Minutes.
  - Animated goal rings that count up when scrolled into view.
  - A streak card.
- **Trainer profiles** — four coaches with credentials, specialties, and experience.
- **Three-tier subscription CTAs** (Starter / Pulse Pro / Elite) with a highlighted plan.
- **Sticky glassy navbar**, mobile burger menu, scroll-reveal animations,
  `prefers-reduced-motion` support, and a fully responsive layout.
- Zero runtime framework dependencies — vanilla JS for interactivity.

## 🧱 Tech Stack

| Layer       | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Astro 7 (static output, prerendered)                |
| Adapter     | `@astrojs/cloudflare` v14                           |
| Styling     | Hand-written CSS (scoped per component + design tokens) |
| Interactivity | Vanilla `<script>` (filtering, chart toggle, count-up, reveal) |
| Fonts       | Inter via Google Fonts                              |
| Deploy      | Cloudflare Workers (`wrangler deploy`)              |

## 🚀 Getting Started

```sh
# install deps
npm install

# start the dev server (http://localhost:4321)
npm run dev

# build the production site to ./dist
npm run build

# preview the production build locally
npm run preview
```

## ☁️ Deploying to Cloudflare Workers

This project is configured for Cloudflare Workers via `wrangler.jsonc`.

```sh
# one-time: authenticate (opens a browser)
npx wrangler login

# build + deploy in one step
npm run deploy
```

`npm run deploy` runs `astro build` then `wrangler deploy`, which uploads the
prerendered assets and the Worker entrypoint to Cloudflare's edge.

## 📁 Project Structure

```text
├── public/
│   └── favicon.svg              # PULSE pulse-line mark
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # sticky glassy nav + mobile menu
│   │   ├── Hero.astro           # headline, phone mockup, stats strip
│   │   ├── Workouts.astro       # filterable workout preview cards
│   │   ├── ProgressDashboard.astro  # interactive chart + goal rings
│   │   ├── Coaches.astro        # trainer profiles
│   │   ├── Pricing.astro        # subscription tiers + CTAs
│   │   ├── FinalCTA.astro       # closing call-to-action band
│   │   └── Footer.astro         # link columns + social
│   ├── data/
│   │   └── site.ts              # all content: workouts, coaches, plans, demo data
│   ├── layouts/
│   │   └── Layout.astro         # <head>, meta, fonts
│   ├── pages/
│   │   └── index.astro          # assembles all sections
│   └── styles/
│       └── global.css           # design tokens + base styles
├── astro.config.mjs             # static output + cloudflare adapter
├── wrangler.jsonc               # Cloudflare Worker config
└── package.json
```

## 🎨 Design Notes

- Palette is driven by CSS custom properties in `src/styles/global.css`
  (`--lime`, `--orange`, `--pink`, `--blue` on a near-black `#08080b` ground).
- Each workout/coach card carries its own `--accent` so color is data-driven.
- All animations respect `prefers-reduced-motion`.

## 📄 License

MIT — this is a demo/portfolio project. "PULSE", the coaches, and stats are fictional.
