package handlers

import "net/http"

func AdminSignup(w http.ResponseWriter, r *http.Request) {
	// Admin signup logic here
	w.Write([]byte("Admin Signup Endpoint"))
}

func AdminLogin(w http.ResponseWriter, r *http.Request) {
	// Admin login logic here
	w.Write([]byte("Admin Login Endpoint"))
}

func UserSignup(w http.ResponseWriter, r *http.Request) {
	// User signup logic here
	w.Write([]byte("User Signup Endpoint"))
}

func UserLogin(w http.ResponseWriter, r *http.Request) {
	// User login logic here
	w.Write([]byte("User Login Endpoint"))
}
