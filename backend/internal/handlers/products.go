package handlers

import "net/http"

func GetAllProducts(w http.ResponseWriter, r *http.Request) {
	// Logic to get all products
	w.Write([]byte("Get All Products Endpoint"))
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	// Logic to get a single product by ID
	w.Write([]byte("Get Product Endpoint"))
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	// Logic to create a new product
	w.Write([]byte("Create Product Endpoint"))
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	// Logic to update a product
	w.Write([]byte("Update Product Endpoint"))
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	// Logic to delete a product
	w.Write([]byte("Delete Product Endpoint"))
}
