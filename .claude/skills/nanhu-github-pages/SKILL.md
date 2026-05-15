---
name: nanhu-github-pages
description: >-
  Builds and deploys a static GitHub Pages site for the Nanhu Dashan 4D3N hike
  team. Use when the user asks to create the trip website, github.io pages,
  itinerary pages, packing checklist UI, or deploy to GitHub Pages.
---

# 南湖大山 · GitHub Pages 建站

Build a **static, mobile-first** team site for this trek. Content must come from [nanhu-trip-content/trip-content.md](../nanhu-trip-content/trip-content.md)—do not hallucinate schedule or safety text.

Live guide persona (optional chat widget copy): `nanhu-hike-leader` skill.

## Goal

Single-repo site published at:

`https://<github-username>.github.io/<repo-name>/`

Example repo name: `hike-nanhu-4` or `nanhu-2026`.

## Tech stack (default)

| Layer | Choice | Why |
|-------|--------|-----|
| Site generator | **Plain HTML + CSS** or **Vite + vanilla** | Zero backend; fast on Pages |
| Deploy | `gh-pages` branch or `/docs` on `main` | GitHub Pages native |
| Fonts | system-ui or Google Noto Sans TC | 繁中可讀 |
| Icons | inline SVG or lucide CDN | 離線友好 |

Use React/Vue only if the user explicitly asks.

## Repository setup

```bash
cd hike-nanhu-4
git init
gh repo create hike-nanhu-4 --public --source=. --remote=origin
```

Enable Pages: **Settings → Pages → Source**: `Deploy from branch` → `gh-pages` `/ (root)` **or** `main` `/docs`.

## Required pages

| Route | Purpose |
|-------|---------|
| `/` | Hero、行程摘要、倒數/出發日、CTA 連到各頁 |
| `/itinerary.html` | 四天時間表（可展開各日） |
| `/peaks.html` | 四座百岳卡片 + 北峰/五岩峰說明 |
| `/gear.html` | 必備清單（localStorage 勾選持久化） |
| `/safety.html` | 注意事項 1–10 + PDF/官網連結 |
| `/about.html` | 團名、領隊聯絡 placeholder、免責聲明 |

## Design direction

- **Palette:** 山系 — 深松绿 `#1b4332`、晨雾灰 `#f1f3f5`、日出琥珀 `#e9c46a`、岩灰文字 `#212529`
- **Typography:** 標題粗體、內文 16–18px、表格在小螢幕改卡片
- **Hero:** 南湖圈谷或主峰圖（可用 placeholder + `alt` 文字；若無授權圖則用 CSS 漸層 + 山形 SVG）
- **Accessibility:** 對比 ≥ 4.5:1、`lang="zh-Hant"`、表格 `scope`

## Content integration

1. Read `../nanhu-trip-content/trip-content.md`
2. Map sections → HTML partials or JSON `data/trip.json` if using a tiny build step
3. Footer on every page:

```html
<p class="disclaimer">
  實際行程視天候與團員狀況調整。資料來源：
  <a href="https://drive.google.com/file/d/1q-XJV7dfy6TD45XrHoxujE6jUtfNvxj5/view">行前說明</a>、
  <a href="https://travelwildtw.com/item/pd64a6817d91d0d">荒野旅人</a>。
</p>
```

## Suggested file layout

```
/
├── index.html
├── itinerary.html
├── peaks.html
├── gear.html
├── safety.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── gear-checklist.js
├── data/
│   └── trip.json          # optional: generated from trip-content.md
└── .github/workflows/
    └── pages.yml          # optional: Actions deploy
```

## GitHub Actions deploy (optional)

If not using `/docs` manual push, add `.github/workflows/pages.yml`:

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - uses: actions/deploy-pages@v4
```

For static files at repo root, set `path` to the folder containing `index.html`.

**Base URL:** If project site (not user site), set in HTML:

```html
<base href="/hike-nanhu-4/">
```

Or use relative links only (`./itinerary.html`).

## Gear checklist JS (minimal)

- Load checklist items from embedded JSON or `<template>` in `gear.html`
- `localStorage` key: `nanhu-gear-v1`
- Sections: 登山裝備 / 衣物 / 個人 / 出發前檢查（頭燈三項）

## Build workflow for Claude Code

When the user says "build the website":

1. Confirm GitHub username + repo name + Pages type (user vs project)
2. Scaffold HTML/CSS from `trip-content.md`
3. Implement all **Required pages**
4. `git add` → commit → `git push`
5. If Actions: verify Pages URL in repo Settings
6. Return the live URL and a short test checklist:
   - [ ] Mobile 375px layout
   - [ ] All internal links work with base path
   - [ ] External PDF/tour links open
   - [ ] Gear checklist persists after refresh

## Do not

- Store API keys or personal phone numbers without user consent
- Claim official National Park endorsement
- Omit the weather/disclaimer line
- Replace 兩截式雨衣 / 頭燈 / 睡墊 必備 with softer wording

## Related skills

- Content: `nanhu-trip-content`
- In-trip Q&A tone: `nanhu-hike-leader`
