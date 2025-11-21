package handlers

import (
	"encoding/json"
	"net/http"
	"shopping-app/internal/database"
	"shopping-app/internal/models"

	"golang.org/x/crypto/bcrypt"
)

func AdminSignup(w http.ResponseWriter, r *http.Request) {
	var admin models.Admin
	if err := json.NewDecoder(r.Body).Decode(&admin); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(admin.PasswordHash), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Failed to hash password", http.StatusInternalServerError)
		return
	}

	query := "INSERT INTO admins (username, password_hash) VALUES ($1, $2) RETURNING id"
	err = database.DB.QueryRow(query, admin.Username, string(hashedPassword)).Scan(&admin.ID)
	if err != nil {
		http.Error(w, "Failed to create admin", http.StatusInternalServerError)
		return
	}

	admin.PasswordHash = "" // Don't send password back
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(admin)
}

func AdminLogin(w http.ResponseWriter, r *http.Request) {
	// Admin login logic here
	w.Write([]byte("Admin Login Endpoint"))
}

func UserSignup(w http.ResponseWriter, r *http.Request) {
	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.PasswordHash), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Failed to hash password", http.StatusInternalServerError)
		return
	}

	query := "INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id"
	err = database.DB.QueryRow(query, user.Username, string(hashedPassword), user.Email).Scan(&user.ID)
	if err != nil {
		http.Error(w, "Failed to create user", http.StatusInternalServerError)
		return
	}

	user.PasswordHash = "" // Don't send password back
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

func UserLogin(w http.ResponseWriter, r *http.Request) {
	// User login logic here
	w.Write([]byte("User Login Endpoint"))
}
