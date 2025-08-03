package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type AuthHandler struct {
	db *gorm.DB
}

func NewAuthHandler(db *gorm.DB) *AuthHandler {
	return &AuthHandler{
		db: db,
	}
}

func (h *AuthHandler) GoogleLogin(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Google authentication handled by Supabase on frontend",
		"note":    "Backend API is ready for authenticated requests",
	})
}

func (h *AuthHandler) Logout(c *gin.Context) {
	// Supabase handles token invalidation client-side
	c.JSON(http.StatusOK, gin.H{"message": "Logged out successfully"})
}

func (h *AuthHandler) GetCurrentUser(c *gin.Context) {
	userID := c.GetString("user_id")
	
	var user models.User
	if err := h.db.Where("google_id = ?", userID).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.JSON(http.StatusOK, user)
}