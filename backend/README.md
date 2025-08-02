# Tailyou Backend API

寵物紀念應用 Tailyou 的後端 API 服務

## 本地開發

### 前置需求
- Go 1.16+
- PostgreSQL (或使用 Railway PostgreSQL)

### 安裝依賴
```bash
go mod tidy
```

### 環境設定
1. 複製環境變數檔案：
```bash
cp .env.example .env
```

2. 設定 `.env` 檔案中的環境變數：
- `DATABASE_URL`: PostgreSQL 連接字串
- `SUPABASE_URL`: Supabase 專案 URL
- `SUPABASE_ANON_KEY`: Supabase 匿名金鑰
- `SUPABASE_SERVICE_KEY`: Supabase 服務金鑰
- `OPENAI_API_KEY`: OpenAI API 金鑰
- `STRIPE_SECRET_KEY`: Stripe 密鑰

### 啟動開發伺服器
```bash
go run cmd/server/main.go
```

API 將在 `http://localhost:8080` 啟動

## Railway 部署

### 1. 建立 Railway 專案
1. 前往 [Railway.app](https://railway.app)
2. 連接你的 GitHub 帳號
3. 建立新專案並連接此 repository

### 2. 新增 PostgreSQL 資料庫
1. 在 Railway 專案中點擊 "New Service"
2. 選擇 "Database" -> "PostgreSQL"
3. 等待部署完成

### 3. 設定環境變數
在 Railway 專案中設定以下環境變數：
- `DATABASE_URL`: 會自動由 Railway PostgreSQL 提供
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` 
- `SUPABASE_SERVICE_KEY`
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `PORT`: 會自動由 Railway 設定

### 4. 部署
推送代碼到 GitHub，Railway 會自動部署。

## API 端點

### 健康檢查
- `GET /health` - 檢查 API 狀態

### 認證
- `POST /api/v1/auth/google` - Google 登入
- `POST /api/v1/auth/logout` - 登出
- `GET /api/v1/auth/me` - 取得當前用戶

### 寵物管理
- `POST /api/v1/pets` - 建立寵物檔案
- `GET /api/v1/pets` - 取得用戶的寵物
- `GET /api/v1/pets/:id` - 取得寵物詳情
- `PUT /api/v1/pets/:id` - 更新寵物資訊
- `DELETE /api/v1/pets/:id` - 刪除寵物

### 回憶管理
- `POST /api/v1/memories` - 建立回憶
- `GET /api/v1/memories/pet/:petId` - 取得寵物回憶
- `PUT /api/v1/memories/:id` - 更新回憶
- `DELETE /api/v1/memories/:id` - 刪除回憶

### AI 信件
- `POST /api/v1/letters` - 寫信給寵物
- `GET /api/v1/letters/pet/:petId` - 取得寵物信件

## 技術架構

- **框架**: Gin (Go)
- **資料庫**: PostgreSQL (GORM)
- **認證**: Supabase Auth
- **AI**: OpenAI GPT
- **部署**: Railway

## 資料庫模型

- `User`: 用戶資料
- `Pet`: 寵物資料  
- `Memory`: 回憶/時光軸
- `Letter`: AI 對話信件
- `Ritual`: 療癒儀式記錄
- `Comment`: 社群留言
- `Transaction`: 交易記錄