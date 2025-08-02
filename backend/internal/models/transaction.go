package models

import (
	"time"
	"gorm.io/gorm"
)

type Transaction struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	UserID    uint           `json:"user_id"`
	Type      string         `json:"type"` // subscription, virtual_gift
	Amount    float64        `json:"amount"`
	Currency  string         `gorm:"default:'USD'" json:"currency"`
	StripeID  string         `json:"stripe_id"`
	Status    string         `json:"status"` // pending, completed, failed
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
	
	// Relations
	User User `json:"user,omitempty"`
}