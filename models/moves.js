"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Moves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Moves.init(
    {
      name: DataTypes.STRING,
      power: DataTypes.INTEGER,
      pp: DataTypes.INTEGER,
      accuracy: DataTypes.INTEGER,
      priority: DataTypes.INTEGER,
      target_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Moves",
    }
  );
  return Moves;
};
