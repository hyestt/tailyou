package config

import (
	"log"
	"tailyou-backend/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB(databaseURL string) (*gorm.DB, error) {
	if databaseURL == "" || databaseURL == "your_supabase_database_url" {
		log.Println("Warning: DATABASE_URL not set, running without database")
		return nil, nil
	}
	
	db, err := gorm.Open(postgres.Open(databaseURL), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	// Auto migrate models
	err = db.AutoMigrate(
		&models.User{},
		&models.Pet{},
		&models.Memory{},
		&models.Letter{},
		&models.Ritual{},
		&models.Comment{},
		&models.Transaction{},
	)
	if err != nil {
		return nil, err
	}

	return db, nil
}