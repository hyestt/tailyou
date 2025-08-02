package config

import (
	"github.com/supabase-community/supabase-go"
)

func InitSupabase(url, serviceKey string) *supabase.Client {
	if url == "" || serviceKey == "" {
		// Return nil if credentials are not provided
		return nil
	}
	client, err := supabase.NewClient(url, serviceKey, nil)
	if err != nil {
		panic("Failed to initialize Supabase client: " + err.Error())
	}
	return client
}