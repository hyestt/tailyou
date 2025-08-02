package models

import (
	"time"
	"gorm.io/gorm"
)

type Ritual struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	PetID     uint           `json:"pet_id"`
	Type      string         `json:"type"` // candle, flower, incense
	Message   string         `json:"message"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	Pet Pet `json:"pet,omitempty"`
}