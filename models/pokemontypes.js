"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PokemonTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonTypes.init(
    {
      pokemon_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      slot: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonTypes",
    }
  );
  return PokemonTypes;
};
