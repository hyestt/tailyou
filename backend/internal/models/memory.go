package models

import (
	"time"
	"gorm.io/gorm"
)

type Memory struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	PetID     uint           `json:"pet_id"`
	Type      string         `json:"type"` // photo, video, text
	Content   string         `json:"content"`
	MediaURL  string         `json:"media_url"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	Pet Pet `json:"pet,omitempty"`
}