const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Recipe = require('../models/Recipe')

const connection = new Sequelize(dbConfig)

Recipe.init(connection)

module.exports = connection