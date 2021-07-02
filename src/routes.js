const express = require('express')
const RecipeController = require('./controllers/RecipeController')
const router = express.Router()

router.get('/recipes', RecipeController.index)
router.post('/recipes', RecipeController.store)

module.exports = router