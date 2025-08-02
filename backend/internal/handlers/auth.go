package handlers

import (
	"net/http"
	"tailyou-backend/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/supabase-community/supabase-go"
	"gorm.io/gorm"
)

type AuthHandler struct {
	supabaseClient *supabase.Client
	db             *gorm.DB
}

func NewAuthHandler(supabaseClient *supabase.Client, db *gorm.DB) *AuthHandler {
	return &AuthHandler{
		supabaseClient: supabaseClient,
		db:             db,
	}
}

func (h *AuthHandler) GoogleLogin(c *gin.Context) {
	if h.supabaseClient == nil {
		c.JSON(http.StatusServiceUnavailable, gin.H{
			"error": "Authentication service not available",
			"note":  "Please configure Supabase credentials",
		})
		return
	}

	var req struct {
		AccessToken string `json:"access_token"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Verify the Google token with Supabase
	user, err := h.supabaseClient.Auth.SignInWithProvider(supabase.ProviderSignInOptions{
		Provider:   "google",
		Options:    map[string]interface{}{"access_token": req.AccessToken},
	})
	
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Failed to authenticate with Google"})
		return
	}

	// Create or update user in our database (if database is available)
	if h.db != nil {
		var dbUser models.User
		h.db.Where("google_id = ?", user.User.ID).First(&dbUser)
		
		if dbUser.ID == 0 {
			// Create new user
			dbUser = models.User{
				GoogleID: user.User.ID,
				Email:    user.User.Email,
				Name:     user.User.UserMetadata["full_name"].(string),
				Avatar:   user.User.UserMetadata["avatar_url"].(string),
			}
			h.db.Create(&dbUser)
		}

		c.JSON(http.StatusOK, gin.H{
			"user":         dbUser,
			"access_token": user.AccessToken,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"user": gin.H{
				"id":     user.User.ID,
				"email":  user.User.Email,
				"name":   user.User.UserMetadata["full_name"],
				"avatar": user.User.UserMetadata["avatar_url"],
			},
			"access_token": user.AccessToken,
		})
	}
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