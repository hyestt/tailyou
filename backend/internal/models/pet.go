package models

import (
	"time"
	"gorm.io/gorm"
)

type Pet struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	UserID      uint           `json:"user_id"`
	Name        string         `gorm:"not null" json:"name"`
	Photo       string         `json:"photo"`
	BirthDate   *time.Time     `json:"birth_date"`
	DeathDate   *time.Time     `json:"death_date"`
	Description string         `json:"description"`
	IsPublic    bool           `gorm:"default:false" json:"is_public"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	User     User      `json:"user,omitempty"`
	Memories []Memory  `json:"memories,omitempty"`
	Letters  []Letter  `json:"letters,omitempty"`
	Rituals  []Ritual  `json:"rituals,omitempty"`
	Comments []Comment `json:"comments,omitempty"`
}