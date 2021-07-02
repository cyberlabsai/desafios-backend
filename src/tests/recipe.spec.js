const app = require('../server')
const request = require('supertest')

describe('Test My Web App', () => {
    beforeEach(async () => {
        await request(app)
            .post('/recipes')
            .send({
                name: 'Receita Inicial',
                description: 'Receita de Inicio',
                cost: 100.00,
                minutes: 60,
                ingredients: ['ovo', 'carne', 'leite', 'sal', 'açucar'],
                image: 'url here'
            })

    })

    it('Should get all recipes', async () => {
        const res = await request(app).get('/recipes')

        expect(res.statusCode).toEqual(200)
        
    })

    it('Should register a recipe', async () =>  {
        const response = await request(app)
            .post('/recipes')
            .send({
                name: 'Torta de Frango',
                description: 'Receita de torta de frango da família.',
                cost: 100.00,
                minutes: 60,
                ingredients: ['Frango Cozido', 'Trigo', 'Sal', 'Alho', 'Cebola'],
                image: 'url here'
            })

        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('description')
        expect(response.body).toHaveProperty('cost')
        expect(response.body).toHaveProperty('minutes')
        expect(response.body).toHaveProperty('ingredients')
        expect(response.body).toHaveProperty('image')  

        expect(response.statusCode).toEqual(201)

    })

    it('Should updates a recipe', async () =>  {
        const response = await request(app)
            .patch('/recipes/1')
            .send({
                name: 'Torta de Franco com AZEITE',
                description: 'Receita de torta de frango da família silva!.',
                cost: 153.00,
            })

        expect(response.body).toEqual('updated recipe successfully!')
        expect(response.statusCode).toEqual(200)

    })


    it('Should delete a recipe', async () =>  {
        const response = await request(app)
            .delete('/recipes/1')
            

        expect(response.body).toEqual('Recipe is deleted.')
        expect(response.statusCode).toEqual(200)

    })

    
})