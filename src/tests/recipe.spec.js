const app = require('../server')
const request = require('supertest')

describe('Test My Web App', () => {
    it('Should get all recipes', async () => {
        const res = await request(app).get('/recipes')

        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('description')
        // expect(res.body).toHaveProperty('cost')
        // expect(res.body).toHaveProperty('minutes')
        // expect(res.body).toHaveProperty('ingredients')
        // expect(res.body).toHaveProperty('image')
    })
})