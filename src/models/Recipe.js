const { Model, DataTypes } = require("sequelize");

class Recipe extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        cost: DataTypes.FLOAT,
        minutes: DataTypes.INTEGER,
        ingredients: DataTypes.ARRAY(DataTypes.STRING),
        image: DataTypes.STRING,
      },
      { sequelize: connection }
    );
  }
}

module.exports = Recipe;
