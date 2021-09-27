"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PokemonMoves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonMoves.init(
    {
      pokemon_id: DataTypes.INTEGER,
      move_id: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonMoves",
    }
  );
  return PokemonMoves;
};
