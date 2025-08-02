package models

import (
	"time"
	"gorm.io/gorm"
)

type Comment struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	PetID     uint           `json:"pet_id"`
	UserID    uint           `json:"user_id"`
	Content   string         `gorm:"not null" json:"content"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	Pet  Pet  `json:"pet,omitempty"`
	User User `json:"user,omitempty"`
}