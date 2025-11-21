package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"shopping-app/internal/database"
	"shopping-app/internal/handlers"

	gohandlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Get database credentials from environment variables
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbSSLMode := os.Getenv("DB_SSLMODE")

	// Initialize the database connection
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s", dbHost, dbPort, dbUser, dbPassword, dbName, dbSSLMode)
	database.InitDB(connStr)

	r := mux.NewRouter()

	// API routes
	api := r.PathPrefix("/api").Subrouter()

	// Admin routes
	api.HandleFunc("/admin/signup", handlers.AdminSignup).Methods("POST")
	api.HandleFunc("/admin/login", handlers.AdminLogin).Methods("POST")
	api.HandleFunc("/admin/products", handlers.GetAllProducts).Methods("GET")
	api.HandleFunc("/admin/products", handlers.CreateProduct).Methods("POST")
	api.HandleFunc("/admin/products/{id}", handlers.GetProduct).Methods("GET")
	api.HandleFunc("/admin/products/{id}", handlers.UpdateProduct).Methods("PUT")
	api.HandleFunc("/admin/products/{id}", handlers.DeleteProduct).Methods("DELETE")
	api.HandleFunc("/admin/users", handlers.GetAllUsers).Methods("GET")
	api.HandleFunc("/admin/users/{id}", handlers.UpdateUser).Methods("PUT")
	api.HandleFunc("/admin/users/{id}", handlers.DeleteUser).Methods("DELETE")

	// User routes
	api.HandleFunc("/user/signup", handlers.UserSignup).Methods("POST")
	api.HandleFunc("/user/login", handlers.UserLogin).Methods("POST")
	api.HandleFunc("/products", handlers.GetAllProducts).Methods("GET")

	// CORS middleware
	corsHandler := gohandlers.CORS(
		gohandlers.AllowedOrigins([]string{"http://localhost:3000"}),
		gohandlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		gohandlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)

	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", corsHandler(r)))
}
