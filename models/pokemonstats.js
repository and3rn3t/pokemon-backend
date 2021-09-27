"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PokemonStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonStats.init(
    {
      pokemon_id: DataTypes.INTEGER,
      stat_id: DataTypes.INTEGER,
      base_stat: DataTypes.INTEGER,
      effort: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonStats",
    }
  );
  return PokemonStats;
};
