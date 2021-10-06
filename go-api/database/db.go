package database

import (
	"fmt"
	"os"
	"time"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

//Database struct
type Database struct {
	DB *gorm.DB
}

//New db : initialzies and returns mysql db
func NewDatabase() Database {
	USER := os.Getenv("DB_USER")
	PASS := os.Getenv("DB_PASSWORD")
	HOST := os.Getenv("DB_HOST")
	DBNAME := os.Getenv("DB_NAME")
	
	URL := fmt.Strintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local", USER, PASS,
	HOST, DBNAME)
	fmt.Println(URL)
	db, err := gorm.Open(mysql.Open(URL))

	if err != nil {
		panic("Failed to connect to database!")
	}
	fmt.Println("Datase connectionn established")
	return Database {
		DB: db,
	}
}
