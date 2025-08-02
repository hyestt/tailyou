package config

import "os"

type Config struct {
	DatabaseURL        string
	SupabaseURL        string
	SupabaseAnonKey    string
	SupabaseServiceKey string
	JWTSecret          string
	OpenAIKey          string
	StripeSecretKey    string
	StripeWebhookSecret string
}

func NewConfig() *Config {
	return &Config{
		DatabaseURL:        getEnv("DATABASE_URL", ""),
		SupabaseURL:        getEnv("SUPABASE_URL", ""),
		SupabaseAnonKey:    getEnv("SUPABASE_ANON_KEY", ""),
		SupabaseServiceKey: getEnv("SUPABASE_SERVICE_KEY", ""),
		JWTSecret:          getEnv("JWT_SECRET", ""),
		OpenAIKey:          getEnv("OPENAI_API_KEY", ""),
		StripeSecretKey:    getEnv("STRIPE_SECRET_KEY", ""),
		StripeWebhookSecret: getEnv("STRIPE_WEBHOOK_SECRET", ""),
	}
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}