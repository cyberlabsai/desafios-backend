const RecipeService = require('../services/RecipeService')


module.exports = {
    async index(_, res) {
        try {
            const recipes = await RecipeService.index()

            return res.status(200).json(recipes)
        } catch (error) {
            return res.status(500).json(`Internal Server Error ${error}`)
            
        }
    },

    async getById (req, res) {
        try {
            const { id } = req.params

            if(!id)
                return res.status(400).json('Bad Request: id is required.')

            const recipe  = await RecipeService.getById(id)

            return res.status(200).json(recipe)

        } catch (error) {
            return res.status(500).json(`Internal Server Error ${error}`)
            
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params
            const { name, description, cost} = req.body

            if(!id)
                return res.status(400).json('Bad Request: id is required.')
            if(!name)
                return res.status(400).json('Bad Request: name is required.')
            if(!description)
                return res.status(400).json('Bad Request: description is required.')
            if(!cost)
                return res.status(400).json('Bad Request: cost is required.')

            const updatedRecipe = await RecipeService.update(id, name, description, cost)

            if(!updatedRecipe) return res.status(500).json(`Internal Server Error`)

            return res.status(200).json("updated recipe successfully!")
        } catch (error) {
            return res.status(500).json(`Internal Server Error ${error}`)
            
        }

    },

    async store(req, res) {
        try {
            const { name, description, cost, minutes, ingredients, image } = req.body;


            if(!name)
                return res.status(400).json('Bad Request: name is required.')
            if(!description)
                return res.status(400).json('Bad Request: description is required.')
            if(!cost)
                return res.status(400).json('Bad Request: cost is required.')
            if(!minutes)
                return res.status(400).json('Bad Request: minutes is required.')
            if(!ingredients)
                return res.status(400).json('Bad Request: ingredients is required.')
            

            const recipe = await RecipeService.store(name, description, cost, minutes, ingredients, image)


            return res.status(201).json(recipe)
        } catch (error) {
            return res.status(500).json(`Internal Server Error ${error}`)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params

            if(!id)
                return res.status(400).json('Bad Request: id is required.')

            await RecipeService.delete(id)

            return res.status(200).json('Recipe is deleted.')
            
        } catch (error) {
            return res.status(500).json(`Internal Server Error ${error}`)
        }

    }


};
