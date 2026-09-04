<div align="center">

# Nithees SJ — Portfolio

**A portfolio built like the platform it describes.**

Platform Engineer · multi-cloud infrastructure, Kubernetes, and Helm

[![Stack](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-f7df1e?logo=javascript&logoColor=black)](#the-engineering)
[![Build](https://img.shields.io/badge/build-not%20required-3ecf8e)](#run-it-locally)

</div>

---

## 00 · The concept

Every section speaks the language of delivery: the loader is a `helm upgrade --install`,
the career history is a `git log`, the metrics are a `git diff --stat`, the skills are a
tracked `stack.yaml`, the proof is an `ls -la`, and contact is a `ping`. The hero sky is
live telemetry — the actual night sky over Bengaluru, right now.

| # | Section | What it is |
|---|---------|------------|
| boot | Preloader | A Helm release — **Build → Test → Deploy → Release** — with progress ticker and status log |
| 01 | `whoami` | Identity card with 3D tilt + scan effect, manifesto, three operating principles |
| 02 | `git log --career` | Work history as release tags (`release/2025.07 — HEAD`) |
| 02a | `git diff --stat` | The numbers: 4 clouds at parity, 20+ charts, 30-minute provisioning, ₹80K/mo saved |
| 03 | `cat stack.yaml` | The toolchain as annotated YAML — hovering a card highlights its lines |
| 04 | `ls -la proof/` | Open-source maintainer work, Helm Doctor, education |
| 05 | `ping nithees` | Contact CTAs + terminal-style copy-to-clipboard email |

## 01 · The details worth zooming into

- **The hero sky is real.** A J2000 bright-star catalog (~70 stars, 15 constellations)
  converted from equatorial to horizontal coordinates using local sidereal time for
  12.9716° N, 77.5946° E — redrawn every 30 seconds, with a horizon compass and the
  occasional meteor.
- **A release, drawn live.** The hero git graph animates a feature branch through checks
  to a `v2.0 · deployed` tag — hover a commit to see its hash on the cursor.
- **Text decodes into place.** The name scrambles through glyphs and settles left-to-right.
- **Two themes.** Light "day shift" by default, dark one click away — a pre-paint boot
  script means zero flash, and the choice persists in `localStorage`.
- **A custom cursor** that labels interactive elements with their action (`open`, `copy`, `send`).

## 02 · The engineering

No framework. No build step. No `node_modules`.

| Layer | Choice |
|-------|--------|
| Markup | One semantic `index.html` |
| Styles | One hand-written stylesheet — CSS custom properties power both themes |
| Behavior | Three vanilla-JS files: `preloader.js`, `main.js`, `cursor.js` |
| Motion | Lenis smooth scroll via CDN — the only external dependency |
| Type | Space Grotesk + JetBrains Mono, self-hosted variable `woff2`, preloaded |
| Hosting | GitHub Pages, straight from `main` |

Accessibility and performance: `prefers-reduced-motion` honored throughout, canvas capped
at device-pixel-ratio and paused on hidden tabs, `IntersectionObserver` reveals, passive
listeners, skip-to-content link, ARIA roles, JSON-LD `Person`/`ProfilePage` graph, Open
Graph + Twitter cards, `robots.txt` + `sitemap.xml`.

## 03 · Repository layout

```
.
├── index.html                # the entire site — one page
├── CNAME                     # custom domain for GitHub Pages (nitheessj.me)
├── .github/workflows/
│   └── deploy.yml            # auto-deploy to GitHub Pages on push to main
├── req/
│   ├── css/styles.css        # tokens + every component, dark & light themes
│   ├── js/
│   │   ├── preloader.js      # boot sequence
│   │   ├── main.js           # nav · theme · clock · reveals · star-map canvas
│   │   └── cursor.js         # custom cursor with action labels
│   ├── fonts/                # self-hosted variable fonts (woff2)
│   └── img/                  # portrait + favicon set (incl. generator script)
├── robots.txt
└── sitemap.xml
```

## 04 · Run it locally

```bash
python3 -m http.server 8000    # or: npx serve
```

Open `http://localhost:8000`. (Serve rather than opening `index.html` directly so the
self-hosted fonts load in every browser.)

## 05 · Deployment

Hosted on **GitHub Pages** with a custom domain (`nitheessj.me`).

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml) via
GitHub Actions, which publishes the static files automatically — no build step required.

To deploy manually, go to **Actions → Deploy to GitHub Pages → Run workflow**.

## 06 · Notes

1. **Analytics** — none is wired up. Add your own IDs if you want them.
2. **Open Graph preview** — re-check the card after any change to `req/img/profile.jpg`.

## Credits

Design and front-end architecture adapted from
[aradhyapuneeth/aradhyapuneeth.github.io](https://github.com/aradhyapuneeth/aradhyapuneeth.github.io)
(MIT). All content, copy, and assets here are my own.

## License

[MIT](LICENSE)
