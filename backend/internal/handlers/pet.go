package handlers

import (
	"net/http"
	"strconv"
	"tailyou-backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type PetHandler struct {
	db *gorm.DB
}

func NewPetHandler(db *gorm.DB) *PetHandler {
	return &PetHandler{db: db}
}

func (h *PetHandler) CreatePet(c *gin.Context) {
	userID := c.GetString("user_id")
	
	var req models.Pet
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get user's internal ID
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)
	
	req.UserID = user.ID
	
	if err := h.db.Create(&req).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create pet"})
		return
	}

	c.JSON(http.StatusCreated, req)
}

func (h *PetHandler) GetUserPets(c *gin.Context) {
	userID := c.GetString("user_id")
	
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)
	
	var pets []models.Pet
	h.db.Where("user_id = ?", user.ID).Find(&pets)
	
	c.JSON(http.StatusOK, pets)
}

func (h *PetHandler) GetPet(c *gin.Context) {
	petID, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pet ID"})
		return
	}

	var pet models.Pet
	if err := h.db.Preload("Memories").Preload("Letters").First(&pet, petID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	c.JSON(http.StatusOK, pet)
}

func (h *PetHandler) UpdatePet(c *gin.Context) {
	petID, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pet ID"})
		return
	}

	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	var pet models.Pet
	if err := h.db.Where("id = ? AND user_id = ?", petID, user.ID).First(&pet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	var updates models.Pet
	if err := c.ShouldBindJSON(&updates); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	h.db.Model(&pet).Updates(updates)
	c.JSON(http.StatusOK, pet)
}

func (h *PetHandler) DeletePet(c *gin.Context) {
	petID, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pet ID"})
		return
	}

	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	result := h.db.Where("id = ? AND user_id = ?", petID, user.ID).Delete(&models.Pet{})
	if result.RowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Pet deleted successfully"})
}