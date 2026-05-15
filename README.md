# 南湖大山 四天三夜 · 團隊網站

《冰河.圈谷.帝王之山》團隊行前靜態網站 + Claude Agent Skills。

**本機預覽：** `python3 -m http.server 8080` → http://localhost:8080

**GitHub Pages：** push 到 `main` 後，於 repo **Settings → Pages** 選 **GitHub Actions** 來源。網址：`https://<username>.github.io/hike-nanhu-4/`

**出發倒數：** 編輯 `js/main.js` 的 `DEPARTURE_ISO`。

---

## Claude 技能包

給 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 使用。

## 三份技能

| 技能 | 路徑 | 用途 |
|------|------|------|
| **領隊嚮導** | `.claude/skills/nanhu-hike-leader/SKILL.md` | 以專業領隊身份帶隊、回答行程/安全/裝備 |
| **行程內容母本** | `.claude/skills/nanhu-trip-content/` | 建站與文案的單一資料來源（含 `trip-content.md`） |
| **GitHub Pages 建站** | `.claude/skills/nanhu-github-pages/SKILL.md` | 指示 Claude Code 建立並部署 github.io 靜態網站 |

## 資料來源

- [行前說明 PDF](https://drive.google.com/file/d/1q-XJV7dfy6TD45XrHoxujE6jUtfNvxj5/view)
- [荒野旅人 · 商品頁](https://travelwildtw.com/item/pd64a6817d91d0d)

## 使用方式

在專案根目錄對 Claude Code 說：

1. **行前準備：** 「用 nanhu-hike-leader 幫我寫出發前簡報大綱」
2. **建站：** 「依照 nanhu-github-pages，用 trip-content 建一個 GitHub Pages 團隊網站」

技能會自動被 Claude Code 讀取（`.claude/skills/`）。

## Cursor 使用者

若要在 Cursor 使用，可將三個資料夾複製到專案 `.cursor/skills/`（結構相同，皆含 `SKILL.md`）。
