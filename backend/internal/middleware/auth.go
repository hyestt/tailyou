package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/supabase-community/supabase-go"
)

func AuthRequired(supabaseClient *supabase.Client) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header required"})
			c.Abort()
			return
		}

		tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
		
		// Verify token with Supabase
		user, err := supabaseClient.Auth.User(c.Request.Context(), tokenString)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		// Set user info in context
		c.Set("user_id", user.ID)
		c.Set("user_email", user.Email)
		c.Next()
	}
}