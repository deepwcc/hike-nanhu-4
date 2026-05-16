# 南湖大山 四天三夜 · 團隊網站

《冰河.圈谷.帝王之山》團隊行前靜態網站。

**本機預覽：** `python3 -m http.server 8080` → http://localhost:8080

**GitHub Pages：** push 到 `main` 後，於 repo **Settings → Pages** 選 **GitHub Actions** 來源。網址：`https://<username>.github.io/hike-nanhu-4/`

---

## 頁面

| 檔案 | 內容 |
|------|------|
| `index.html` | 首頁（出發倒數、路線概覽） |
| `itinerary.html` | 四日行程 + 高度剖面圖 |
| `maps.html` | 離線地圖 & GPX 下載（四段 GPX） |
| `peaks.html` | 百岳介紹（南湖大山、南湖北峰、南湖東峰、馬比杉山） |
| `gear.html` | 裝備清單（互動勾選） |
| `safety.html` | 安全須知 |
| `training.html` | 體能訓練建議 |

## 資源

| 路徑 | 內容 |
|------|------|
| `data/gpx/` | `day1.gpx` – `day4.gpx`（實際 GPS 軌跡，2025/10/05–07） |
| `data/gear.json` | 裝備清單資料 |
| `css/style.css` | 全站樣式 |
| `js/main.js` | 導覽列、倒數計時 |
| `js/gear-checklist.js` | 裝備勾選互動 |
| `img/nanhu-all.jpg` | 首頁橫幅照片 |

