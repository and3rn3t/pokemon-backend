"use strict";

const { Model } = require("sequelize");
const Pokemon = require("./pokemon");

module.exports = (sequelize, DataTypes) => {
  class PokemonSpecies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PokemonSpecies.hasMany(models.Pokemon, {
        foreignKey: "speciesId",
      });
    }
  }
  PokemonSpecies.init(
    {
      speciesName: DataTypes.STRING,
      generation: DataTypes.INTEGER,
      evolvesFromSpecies: DataTypes.INTEGER,
      evolutionChain: DataTypes.INTEGER,
      genderRate: DataTypes.INTEGER,
      captureRate: DataTypes.INTEGER,
      baseHappiness: DataTypes.INTEGER,
      isBaby: DataTypes.BOOLEAN,
      hatchCounter: DataTypes.INTEGER,
      hasGenderDifferences: DataTypes.BOOLEAN,
      formsSwitchable: DataTypes.BOOLEAN,
      isLegendary: DataTypes.BOOLEAN,
      isMythical: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PokemonSpecies",
    }
  );
  return PokemonSpecies;
};
