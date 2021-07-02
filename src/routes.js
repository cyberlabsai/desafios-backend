const express = require('express')
const RecipeController = require('./controllers/RecipeController')
const router = express.Router()


router.post('/recipes', RecipeController.store)

module.exports = router