# Supabase 設置指南

## 1. 建立 Supabase 專案

1. 前往 [app.supabase.com](https://app.supabase.com)
2. 註冊或登入帳號
3. 點擊「New project」
4. 填寫專案資訊：
   - Project name: `tailyou`
   - Database Password: 設定一個強密碼
   - Region: 選擇離你最近的區域
5. 點擊「Create new project」

## 2. 設置 Google OAuth

1. 在 Supabase Dashboard 左側選單中點擊「Authentication」
2. 點擊「Providers」標籤
3. 找到「Google」並點擊展開
4. 啟用 Google provider
5. 你需要從 Google Cloud Console 獲取：
   - Client ID
   - Client Secret

### Google Cloud Console 設置

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案或選擇現有專案
3. 啟用 Google+ API
4. 前往「認證」→「建立認證」→「OAuth 用戶端 ID」
5. 設定：
   - 應用程式類型：Web 應用程式
   - 授權的重新導向 URI：
     - `https://[YOUR_SUPABASE_PROJECT_ID].supabase.co/auth/v1/callback`
     - `http://localhost:3000/auth/callback` (本地開發)
6. 複製 Client ID 和 Client Secret 到 Supabase

## 3. 獲取專案憑證

在 Supabase Dashboard：

1. 點擊「Settings」→「API」
2. 記錄以下資訊：
   - Project URL：這是你的 `SUPABASE_URL`
   - anon public：這是你的 `SUPABASE_ANON_KEY`
   - service_role：這是你的 `SUPABASE_SERVICE_KEY`

3. 點擊「Settings」→「Database」
4. 在「Connection string」區塊，選擇「URI」標籤
5. 複製連接字串，這是你的 `DATABASE_URL`

## 4. 設定環境變數

### 前端 (.env)
```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 後端 (backend/.env)
```env
# Supabase Configuration
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key

# Database Configuration
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:5432/postgres

# Other configurations
PORT=8080
GIN_MODE=debug
OPENAI_API_KEY=your_openai_key
STRIPE_SECRET_KEY=your_stripe_key
```

## 5. 建立資料表

在 Supabase Dashboard 的 SQL Editor 中執行以下 SQL：

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    google_id TEXT UNIQUE,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    avatar TEXT,
    subscription_type TEXT DEFAULT 'free',
    subscription_end TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Pets table
CREATE TABLE public.pets (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES public.users(id),
    name TEXT NOT NULL,
    photo TEXT,
    birth_date DATE,
    death_date DATE,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Memories table
CREATE TABLE public.memories (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES public.pets(id),
    type TEXT,
    content TEXT,
    media_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Letters table
CREATE TABLE public.letters (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES public.pets(id),
    user_letter TEXT,
    ai_response TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Rituals table
CREATE TABLE public.rituals (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES public.pets(id),
    type TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Comments table
CREATE TABLE public.comments (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES public.pets(id),
    user_id UUID REFERENCES public.users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE public.transactions (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES public.users(id),
    type TEXT,
    amount DECIMAL(10,2),
    currency TEXT DEFAULT 'USD',
    stripe_id TEXT,
    status TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.letters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rituals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Users can only read their own data
CREATE POLICY "Users can read own data" ON public.users
    FOR SELECT USING (auth.uid() = id);

-- Users can only read their own pets
CREATE POLICY "Users can CRUD own pets" ON public.pets
    FOR ALL USING (auth.uid() = user_id);

-- Public pets can be read by anyone
CREATE POLICY "Public pets can be read by anyone" ON public.pets
    FOR SELECT USING (is_public = true);
```

## 6. 測試連接

1. 啟動後端：
   ```bash
   cd backend
   go run cmd/server/main.go
   ```

2. 訪問健康檢查端點：
   ```bash
   curl http://localhost:8080/health
   ```

3. 啟動前端：
   ```bash
   npm run dev
   ```

4. 測試 Google 登入功能

## 完成！

現在你的 Tailyou 應用已經完全使用 Supabase 作為後端服務，包含：
- Google OAuth 認證
- PostgreSQL 資料庫
- 即時資料同步能力
- 檔案儲存（可使用 Supabase Storage）