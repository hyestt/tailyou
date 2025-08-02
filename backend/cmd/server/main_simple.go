package main

import (
	"log"
	"os"
	"tailyou-backend/internal/middleware"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Setup Gin router
	r := gin.Default()

	// Apply middlewares
	r.Use(middleware.CORS())
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "ok",
			"message": "Tailyou Backend API is running",
		})
	})

	// Setup basic routes
	api := r.Group("/api/v1")
	{
		// Test auth route
		api.POST("/auth/google", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "Google auth endpoint (mock)",
				"note": "Please setup Supabase to enable actual authentication",
			})
		})

		// Test pet routes
		api.GET("/pets", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"pets": []interface{}{},
				"message": "No pets found (database not connected)",
			})
		})
	}

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	log.Printf("Health check: http://localhost:%s/health", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}