"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      minutes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('recipes');
  },
};
