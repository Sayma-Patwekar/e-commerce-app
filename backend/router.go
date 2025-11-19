package main

import (
	"shopsmart-backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Auth routes
	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)

	// Product routes
	r.GET("/products", controllers.GetProducts)
	r.POST("/products", controllers.CreateProduct)

	return r
}
