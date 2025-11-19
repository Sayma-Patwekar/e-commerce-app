package main

import (
	"log"
	"os"

	"shopsmart-backend/database"
	"shopsmart-backend/models"

	"github.com/joho/godotenv"
)

func main() {

	// Load .env
	err := godotenv.Load()
	if err != nil {
		log.Println("⚠️ No .env file found")
	}

	// Make sure JWT secret exists
	if os.Getenv("JWT_SECRET") == "" {
		log.Fatal("❌ JWT_SECRET is missing in .env")
	}

	// Connect DB
	database.ConnectDB()

	// Auto-migrate
	database.DB.AutoMigrate(
		&models.Product{},
		&models.User{},
	)

	r := SetupRouter()

	r.Run(":8080")
}
