package main

import (
	"log"
	"os"
	"tailyou-backend/config"
	"tailyou-backend/internal/handlers"
	"tailyou-backend/internal/middleware"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Initialize configuration
	cfg := config.NewConfig()

	// Initialize database
	db, err := config.InitDB(cfg.DatabaseURL)
	if err != nil {
		log.Printf("Database connection failed: %v", err)
		log.Println("Starting server without database connection")
		db = nil
	} else {
		log.Println("Database connected successfully")
	}

	// Supabase client not needed for simplified backend

	// Setup Gin router
	r := gin.Default()

	// Apply middlewares
	r.Use(middleware.CORS())
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// Initialize handlers
	authHandler := handlers.NewAuthHandler(db)
	petHandler := handlers.NewPetHandler(db)
	memoryHandler := handlers.NewMemoryHandler(db)
	letterHandler := handlers.NewLetterHandler(db, cfg.OpenAIKey)

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		status := "ok"
		dbStatus := "not connected"
		
		if db != nil {
			dbStatus = "connected"
		}
		
		c.JSON(200, gin.H{
			"status":   status,
			"message":  "Tailyou Backend API is running",
			"database": dbStatus,
		})
	})

	// Setup routes
	api := r.Group("/api/v1")
	{
		// Auth routes (public)
		api.POST("/auth/google", authHandler.GoogleLogin)
		api.POST("/auth/logout", authHandler.Logout)
		api.GET("/auth/me", middleware.AuthRequired(), authHandler.GetCurrentUser)

		// Pet routes (protected)
		pets := api.Group("/pets", middleware.AuthRequired())
		{
			pets.POST("", petHandler.CreatePet)
			pets.GET("", petHandler.GetUserPets)
			pets.GET("/:id", petHandler.GetPet)
			pets.PUT("/:id", petHandler.UpdatePet)
			pets.DELETE("/:id", petHandler.DeletePet)
		}

		// Memory routes (protected)
		memories := api.Group("/memories", middleware.AuthRequired())
		{
			memories.POST("", memoryHandler.CreateMemory)
			memories.GET("/pet/:petId", memoryHandler.GetPetMemories)
			memories.PUT("/:id", memoryHandler.UpdateMemory)
			memories.DELETE("/:id", memoryHandler.DeleteMemory)
		}

		// Letter routes (protected)
		letters := api.Group("/letters", middleware.AuthRequired())
		{
			letters.POST("", letterHandler.WriteLetter)
			letters.GET("/pet/:petId", letterHandler.GetPetLetters)
		}
	}

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Tailyou Backend Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}