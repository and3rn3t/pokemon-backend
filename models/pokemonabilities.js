"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PokemonAbilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonAbilities.init(
    {
      pokemon_id: DataTypes.INTEGER,
      ability_id: DataTypes.INTEGER,
      is_hidden: DataTypes.BOOLEAN,
      slot: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonAbilities",
    }
  );
  return PokemonAbilities;
};
