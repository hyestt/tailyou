package handlers

import (
	"net/http"
	"strconv"
	"tailyou-backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type MemoryHandler struct {
	db *gorm.DB
}

func NewMemoryHandler(db *gorm.DB) *MemoryHandler {
	return &MemoryHandler{db: db}
}

func (h *MemoryHandler) CreateMemory(c *gin.Context) {
	var req models.Memory
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Verify pet ownership
	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	var pet models.Pet
	if err := h.db.Where("id = ? AND user_id = ?", req.PetID, user.ID).First(&pet).Error; err != nil {
		c.JSON(http.StatusForbidden, gin.H{"error": "Pet not found or access denied"})
		return
	}

	if err := h.db.Create(&req).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create memory"})
		return
	}

	c.JSON(http.StatusCreated, req)
}

func (h *MemoryHandler) GetPetMemories(c *gin.Context) {
	petID, err := strconv.ParseUint(c.Param("petId"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pet ID"})
		return
	}

	var memories []models.Memory
	h.db.Where("pet_id = ?", petID).Order("created_at DESC").Find(&memories)
	
	c.JSON(http.StatusOK, memories)
}

func (h *MemoryHandler) UpdateMemory(c *gin.Context) {
	memoryID, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid memory ID"})
		return
	}

	// Verify ownership through pet
	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	var memory models.Memory
	h.db.Preload("Pet").First(&memory, memoryID)
	
	if memory.Pet.UserID != user.ID {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	var updates models.Memory
	if err := c.ShouldBindJSON(&updates); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	h.db.Model(&memory).Updates(updates)
	c.JSON(http.StatusOK, memory)
}

func (h *MemoryHandler) DeleteMemory(c *gin.Context) {
	memoryID, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid memory ID"})
		return
	}

	// Verify ownership through pet
	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	var memory models.Memory
	h.db.Preload("Pet").First(&memory, memoryID)
	
	if memory.Pet.UserID != user.ID {
		c.JSON(http.StatusForbidden, gin.H{"error": "Access denied"})
		return
	}

	h.db.Delete(&memory)
	c.JSON(http.StatusOK, gin.H{"message": "Memory deleted successfully"})
}