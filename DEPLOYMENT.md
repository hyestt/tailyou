# Tailyou 部署指南

## 快速部署步驟

### 1. 前端部署到 Vercel

1. 推送代碼到 GitHub
2. 前往 [vercel.com](https://vercel.com)
3. 點擊「Import Project」
4. 選擇你的 GitHub repository
5. 設定環境變數：
   - `VITE_SUPABASE_URL`: https://etvjqqfktbkdnirndmzw.supabase.co
   - `VITE_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

### 2. 後端部署到 Railway

1. 前往 [railway.app](https://railway.app)
2. 點擊「New Project」
3. 選擇「Deploy from GitHub repo」
4. 選擇你的 repository
5. 設定 Root Directory 為 `backend`
6. 設定環境變數：
   - `DATABASE_URL`: 你的 Supabase 資料庫 URL
   - `SUPABASE_URL`: https://etvjqqfktbkdnirndmzw.supabase.co
   - `SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - `SUPABASE_SERVICE_KEY`: 你的 service key

### 3. 更新 Google OAuth 設定

在 Google Cloud Console 中添加生產環境的 redirect URL：
- `https://etvjqqfktbkdnirndmzw.supabase.co/auth/v1/callback`
- `https://your-vercel-app.vercel.app/auth/callback`

### 4. 更新 Supabase 設定

在 Supabase Dashboard → Authentication → URL Configuration：
- Site URL: `https://your-vercel-app.vercel.app`
- Redirect URLs: 
  - `https://your-vercel-app.vercel.app/auth/callback`
  - `http://localhost:3000/auth/callback` (開發用)

## 測試部署

1. 訪問你的 Vercel 應用 URL
2. 測試 Google 登入功能
3. 檢查後端 API：`https://your-railway-app.railway.app/health`

## 故障排除

### 常見問題：

1. **Google 登入失敗**
   - 檢查 Google OAuth redirect URLs
   - 確認 Supabase Site URL 設定正確

2. **後端 API 連接失敗**
   - 檢查 Railway 環境變數
   - 查看 Railway 部署日誌

3. **資料庫連接失敗**
   - 確認 Supabase DATABASE_URL 正確
   - 檢查是否使用了 Pooler 連接

## 完成後的 URL 結構

- **前端**: https://tailyou.vercel.app
- **後端 API**: https://tailyou-backend.railway.app
- **健康檢查**: https://tailyou-backend.railway.app/health