package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"tailyou-backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type LetterHandler struct {
	db        *gorm.DB
	openAIKey string
}

func NewLetterHandler(db *gorm.DB, openAIKey string) *LetterHandler {
	return &LetterHandler{
		db:        db,
		openAIKey: openAIKey,
	}
}

func (h *LetterHandler) WriteLetter(c *gin.Context) {
	var req struct {
		PetID      uint   `json:"pet_id"`
		UserLetter string `json:"user_letter"`
	}

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

	// Generate AI response
	aiResponse, err := h.generateAIResponse(pet, req.UserLetter)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate AI response"})
		return
	}

	letter := models.Letter{
		PetID:      req.PetID,
		UserLetter: req.UserLetter,
		AIResponse: aiResponse,
	}

	if err := h.db.Create(&letter).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save letter"})
		return
	}

	c.JSON(http.StatusCreated, letter)
}

func (h *LetterHandler) GetPetLetters(c *gin.Context) {
	petID, err := strconv.ParseUint(c.Param("petId"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid pet ID"})
		return
	}

	// Verify pet ownership
	userID := c.GetString("user_id")
	var user models.User
	h.db.Where("google_id = ?", userID).First(&user)

	var pet models.Pet
	if err := h.db.Where("id = ? AND user_id = ?", petID, user.ID).First(&pet).Error; err != nil {
		c.JSON(http.StatusForbidden, gin.H{"error": "Pet not found or access denied"})
		return
	}

	var letters []models.Letter
	h.db.Where("pet_id = ?", petID).Order("created_at DESC").Find(&letters)
	
	c.JSON(http.StatusOK, letters)
}

func (h *LetterHandler) generateAIResponse(pet models.Pet, userLetter string) (string, error) {
	prompt := fmt.Sprintf(`You are writing a letter as %s, a beloved pet who has passed away. 
The pet's owner has written you this letter: "%s"
Write a warm, comforting response from the pet's perspective, acknowledging their love and memories. 
Keep it under 200 words. Be gentle and reassuring.`, pet.Name, userLetter)

	requestBody, _ := json.Marshal(map[string]interface{}{
		"model": "gpt-3.5-turbo",
		"messages": []map[string]string{
			{
				"role":    "system",
				"content": "You are a compassionate AI helping people cope with pet loss by writing letters from their pet's perspective.",
			},
			{
				"role":    "user",
				"content": prompt,
			},
		},
		"max_tokens":  300,
		"temperature": 0.7,
	})

	req, _ := http.NewRequest("POST", "https://api.openai.com/v1/chat/completions", bytes.NewBuffer(requestBody))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+h.openAIKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var result struct {
		Choices []struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", err
	}

	if len(result.Choices) > 0 {
		return result.Choices[0].Message.Content, nil
	}

	return "我永遠愛你，謝謝你給我的美好回憶。", nil
}