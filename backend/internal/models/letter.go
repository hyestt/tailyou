package models

import (
	"time"
	"gorm.io/gorm"
)

type Letter struct {
	ID         uint           `gorm:"primaryKey" json:"id"`
	PetID      uint           `json:"pet_id"`
	UserLetter string         `json:"user_letter"`
	AIResponse string         `json:"ai_response"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
	DeletedAt  gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	Pet Pet `json:"pet,omitempty"`
}