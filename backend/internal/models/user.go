package models

import (
	"time"
	"gorm.io/gorm"
)

type User struct {
	ID               uint           `gorm:"primaryKey" json:"id"`
	GoogleID         string         `gorm:"uniqueIndex" json:"google_id"`
	Email            string         `gorm:"uniqueIndex;not null" json:"email"`
	Name             string         `json:"name"`
	Avatar           string         `json:"avatar"`
	SubscriptionType string         `gorm:"default:'free'" json:"subscription_type"`
	SubscriptionEnd  *time.Time     `json:"subscription_end"`
	CreatedAt        time.Time      `json:"created_at"`
	UpdatedAt        time.Time      `json:"updated_at"`
	DeletedAt        gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	Pets         []Pet         `json:"pets,omitempty"`
	Comments     []Comment     `json:"comments,omitempty"`
	Transactions []Transaction `json:"transactions,omitempty"`
}