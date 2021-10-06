package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"example/mock-data/database"
)

func main() {
	router := gin.Default()

	router.GET("/", func(context *gin.Context) {
		database.LoadEnv()
		database.NewDatabase()
		context.JSON(http.StatusOK, gin.H{"data": "Hello Wolrd !"})
	})
	router.Run(":8000")
}
