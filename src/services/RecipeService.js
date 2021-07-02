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
        });

        return recipe;
    },
};
