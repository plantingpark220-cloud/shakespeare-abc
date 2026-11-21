# 莎士比亞詞彙 A–Z

每個字母一個莎士比亞劇本裡的詞彙，附音標、中文、劇本金句與中譯、出處、小知識和一張配圖。
發音使用瀏覽器內建的英式英語語音，不需要音檔。

## 資料夾內容

```
index.html        網頁
styles.css        版面樣式
app.js            程式（換卡、朗讀）
words.js          所有文字資料與圖片路徑
素材清單.csv      每個詞的資料與圖片提示詞（給你查閱與生圖用，網站不會讀它）
assets/images/    26 張 jpg 配圖
```

## 本機測試

把整個資料夾解壓縮，雙擊 `index.html` 即可。請用 Chrome、Edge 或 Safari。

## 修改文字

只改 `words.js`。每個詞有這些欄位：

| 欄位 | 說明 |
|---|---|
| `word` | 單字，「聽單字」會朗讀這個欄位 |
| `ipa` | 音標 |
| `zh` | 中文意思 |
| `quote` | 英文金句，「聽金句」會朗讀這個欄位 |
| `quoteZh` | 金句中譯 |
| `source` | 出處 |
| `fact` | 小知識 |
| `image` | 圖片路徑 |

改完存檔，重新整理網頁就會看到。注意不要刪掉引號、逗號與大括號。

## 更換圖片

目前的圖是程式生成的佔位圖。要換成自己的圖：

1. 用 `素材清單.csv` 裡的「圖片提示詞」到你的繪圖工具生成。
2. 存成 JPG，建議 1200×900（4:3），單張 300 KB 以下。
3. 檔名照 `words.js` 的 `image` 欄位，例如 `a-aroint.jpg`，放進 `assets/images/` 覆蓋舊檔。
4. 檔名全小寫；`trumpet-tongued` 的檔名是 `t-trumpettongued.jpg`。

## 上傳到 GitHub Pages

1. 登入 GitHub，點右上角「+」→ **New repository**，名稱用小寫英文（例如 `shakespeare-abc`），選 **Public**，按 **Create repository**。
2. 進入 repository，點 **Add file → Upload files**。
3. 把資料夾**裡面的內容**拖進去（`index.html`、`styles.css`、`app.js`、`words.js`、`素材清單.csv`、`README.md` 和 `assets` 資料夾），不要拖整個外層資料夾。`index.html` 必須在最外層。
4. 檔案數量較多時，若網頁上傳中斷，可分兩批：先傳程式檔與 `素材清單.csv`，再傳 `assets`。
5. 按 **Commit changes**。
6. 到 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
7. 等一兩分鐘，開啟 Pages 顯示的網址：`https://你的帳號.github.io/repository名稱/`。

## 上線後檢查

- 圖片有顯示（找不到時畫面會顯示預期的路徑）。
- 「聽單字」「聽金句」有英式英語聲音。
- 上一個、下一個、A～Z 選單可正常切換。
- 手機上版面正常。

## 常見問題

- **網址 404：** 檔名不是 `index.html`，或它不在最外層，或 Pages 還在部署。
- **圖片不見：** 檢查檔名與大小寫，GitHub Pages 會區分大小寫。
- **沒有聲音：** 語音由瀏覽器提供，換 Chrome、Edge 或 Safari；聲音因裝置而異。
- **更新後沒變：** 瀏覽器可能快取舊檔，按 Ctrl+Shift+R（Mac 為 Cmd+Shift+R）強制重新整理。
