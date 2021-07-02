const express = require('express')
const RecipeController = require('./controllers/RecipeController')
const router = express.Router()

router.get('/recipes', RecipeController.index)
router.get('/recipes/:id', RecipeController.getById)
router.post('/recipes', RecipeController.store)
router.patch('/recipes/:id', RecipeController.update)
router.delete('/recipes/:id', RecipeController.delete)



module.exports = router