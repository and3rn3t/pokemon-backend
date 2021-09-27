"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PokemonSpecies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PokemonSpecies.init(
    {
      name: DataTypes.STRING,
      generation: DataTypes.INTEGER,
      evolves_from_species: DataTypes.INTEGER,
      evolution_chain: DataTypes.INTEGER,
      gender_rate: DataTypes.INTEGER,
      capture_rate: DataTypes.INTEGER,
      base_happiness: DataTypes.INTEGER,
      is_baby: DataTypes.BOOLEAN,
      hatch_counter: DataTypes.INTEGER,
      has_gender_differences: DataTypes.BOOLEAN,
      forms_switchable: DataTypes.BOOLEAN,
      is_legendary: DataTypes.BOOLEAN,
      is_mythical: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonSpecies",
    }
  );
  return PokemonSpecies;
};
