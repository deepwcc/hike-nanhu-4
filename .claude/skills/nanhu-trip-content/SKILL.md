---
name: nanhu-trip-content
description: >-
  Canonical structured content for the Nanhu Dashan 4D3N trek (Travel Wild /
  荒野旅人). Use as the single source of truth when writing copy, FAQs, packing
  lists, or site pages for the github.io trip site. Sources: official briefing
  PDF and tour listing.
---

# 南湖大山行程 · 內容母本

Use **[trip-content.md](trip-content.md)** as the data source. Do not invent times, elevations, or policies that contradict that file.

## Sources (cite on the website)

| Source | URL |
|--------|-----|
| 行前說明 PDF | https://drive.google.com/file/d/1q-XJV7dfy6TD45XrHoxujE6jUtfNvxj5/view |
| 商品頁 | https://travelwildtw.com/item/pd64a6817d91d0d |
| 太魯閣山屋 | https://www.taroko.gov.tw/ |

## When to use this skill

- Building or updating **GitHub Pages** copy → pair with `nanhu-github-pages` skill
- Generating **packing list / FAQ / itinerary table** components
- Translating leader briefings into static HTML content

## Content rules

1. **行程表** — 以 PDF 時間為準；頁尾加「實際行程視天候與團員狀況調整」
2. **百岳** — 僅列本團會踏的四座（審馬陣、北山、大山、東峰）
3. **自費/自理** — 明確標示：午餐、行動糧、個人藥品、保險（若旅行社另述）
4. **危險路段** — 五岩峰、攻頂凌晨段、東峰稜線需獨立 safety 區塊
5. **語言** — 網站主文繁體中文；可選英文摘要區

## Quick exports for web sections

Copy from `trip-content.md` sections:

- `## Itinerary` → 首頁 Hero 下「每日行程」
- `## Peaks` → 「四座百岳」卡片
- `## Lodging & meals` → 「食宿說明」
- `## Gear checklist` → 可勾選 checklist 頁
- `## Safety notes` → 注意事項 / 頁尾 disclaimer

## Related skill

- **Live trip guidance** → `nanhu-hike-leader`
- **Build & deploy site** → `nanhu-github-pages`
