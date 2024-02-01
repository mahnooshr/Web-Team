package main

import (
	"math"
	"math/rand"
	"time"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {
	// Create a router with default middleware
	router := gin.Default()

	// Register a handler function for the /api/ path
	router.GET("/api/", handler)

	// Run the router on port 8080
	router.Run(":8080")
}

func extractParam(c *gin.Context, param string, defaultValue int) int {
	value, err := strconv.Atoi(c.Query(param))
	if err != nil || value <= 0 {
		return defaultValue
	}
	return value
}

func handler(c *gin.Context) {
	// Extract n and k using the function with defaults
	n := extractParam(c, "n", 2) // Default to 2 if not present in query parameters
	k := extractParam(c, "k", 1) // Default to 1 if not present in query parameters

	rand.Seed(time.Now().UnixNano())
	number := rand.Intn(int(math.Pow10(n))) // generate a random n-digit number

	for number/int(math.Pow10(n-k)) != 0 { // check if the number starts with k zeros
		number = rand.Intn(int(math.Pow10(n))) // if not, generate a new number
	}

	// Write the number to the response as a string, padded with zeros if needed
	c.String(200, "%0*d\n", n, number)
}
