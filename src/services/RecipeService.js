const { index } = require("../controllers/RecipeController");
const Recipe = require("../models/Recipe");

module.exports = {

    async index() {
        const recipes = await Recipe.findAll()

        return recipes
    },

    async store(name, description, cost, minutes, ingredients, image) {
        const recipe = await Recipe.create({
        name,
        description,
        cost,
        minutes,
        ingredients,
        image,
        })

        return recipe
    },

    async update(id, name, description, cost){

        const updatedRecipe = await Recipe.update({name, description, cost}, { where: {id}})

        return updatedRecipe
    },

    async delete(id) {
        const deletedRecipe = await Recipe.destroy({ where: { id }})

        return deletedRecipe
    }
};
