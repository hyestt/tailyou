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
		log.Fatal("Failed to connect to database:", err)
	}

	// Initialize Supabase client
	supabaseClient := config.InitSupabase(cfg.SupabaseURL, cfg.SupabaseServiceKey)

	// Setup Gin router
	r := gin.Default()

	// Apply middlewares
	r.Use(middleware.CORS())
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// Initialize handlers
	authHandler := handlers.NewAuthHandler(supabaseClient, db)
	petHandler := handlers.NewPetHandler(db)
	memoryHandler := handlers.NewMemoryHandler(db)
	letterHandler := handlers.NewLetterHandler(db, cfg.OpenAIKey)

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		status := "ok"
		dbStatus := "not connected"
		authStatus := "not configured"
		
		if db != nil {
			dbStatus = "connected"
		}
		if supabaseClient != nil {
			authStatus = "configured"
		}
		
		c.JSON(200, gin.H{
			"status":     status,
			"message":    "Tailyou Backend API is running",
			"database":   dbStatus,
			"auth":       authStatus,
		})
	})

	// Setup routes
	api := r.Group("/api/v1")
	{
		// Auth routes
		api.POST("/auth/google", authHandler.GoogleLogin)
		api.POST("/auth/logout", middleware.AuthRequired(supabaseClient), authHandler.Logout)
		api.GET("/auth/me", middleware.AuthRequired(supabaseClient), authHandler.GetCurrentUser)

		// Pet routes
		pets := api.Group("/pets", middleware.AuthRequired(supabaseClient))
		{
			pets.POST("", petHandler.CreatePet)
			pets.GET("", petHandler.GetUserPets)
			pets.GET("/:id", petHandler.GetPet)
			pets.PUT("/:id", petHandler.UpdatePet)
			pets.DELETE("/:id", petHandler.DeletePet)
		}

		// Memory routes
		memories := api.Group("/memories", middleware.AuthRequired(supabaseClient))
		{
			memories.POST("", memoryHandler.CreateMemory)
			memories.GET("/pet/:petId", memoryHandler.GetPetMemories)
			memories.PUT("/:id", memoryHandler.UpdateMemory)
			memories.DELETE("/:id", memoryHandler.DeleteMemory)
		}

		// Letter routes
		letters := api.Group("/letters", middleware.AuthRequired(supabaseClient))
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

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}