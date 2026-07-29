# SanqiMeijing.com

宜蘭冬山三奇美徑（宜蘭伯朗大道）的繁體中文景點網站。

## 技術

- Astro 7
- Tailwind CSS 4
- TypeScript
- pnpm
- Cloudflare Workers Static Assets
- 無資料庫、無登入、無 CMS

## 本機開發

```bash
corepack enable
pnpm install
pnpm dev
```

預設開發網址為 `http://localhost:4321`。

## 建置

```bash
pnpm build
pnpm preview
```

靜態輸出位於 `dist/`。

## 部署到 Cloudflare Worker

先登入 Wrangler：

```bash
pnpm wrangler login
```

部署：

```bash
pnpm deploy
```

`wrangler.jsonc` 已設定將 `dist/` 作為 Worker Static Assets。部署完成後，在 Cloudflare Dashboard 將 `SanqiMeijing.com` 與 `www.SanqiMeijing.com` 綁定至此 Worker，並將其中一個版本 301 轉址到主網域。

## 更新田況

編輯：

```text
src/data/site.ts
```

主要欄位：

```ts
export const fieldStatus = {
  title: '主要稻浪季已告一段落',
  description: '...',
  updatedAt: '2026-07-29',
  nextBestWindow: '...'
};
```

建議在 3–7 月每週確認一次；其餘月份每月確認一次即可。

## GA4

已加入：

```text
G-HXM22WWPKP
```

額外事件：

- `map_click`：點擊地圖導航

## 圖片

所有頁面圖片都存放在 `public/images/`，不使用第三方圖片熱鏈。實景影像來源為宜蘭縣政府與冬山鄉公所公開旅遊圖片，網站頁尾已標示來源。

## 網站內容

- 單頁景點首頁
- 當季田況
- 稻作季節時間軸
- 交通與停車
- 自製 SVG 簡易路線圖
- 拍照建議
- 半日遊路線
- 實景圖庫
- FAQ 與結構化資料
- 隱私權頁面
- 404、robots.txt、sitemap.xml

## Cloudflare 回應標頭與轉址

`public/_headers` 已設定基本安全標頭、GA4 所需 CSP 與圖片長效快取；`public/_redirects` 會將 `www.SanqiMeijing.com` 301 轉向主網域。
