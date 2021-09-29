"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    static associate(models) {
      Pokemon.belongsTo(models.PokemonSpecies, {
        foreignKey: "speciesId",
      });

      Pokemon.hasMany(models.Stats, {
        foreignKey: "pokemonId",
      });

      Pokemon.hasMany(models.Abilities, {
        foreignKey: "pokemonId",
      });

      Pokemon.hasMany(models.Moves, {
        foreignKey: "pokemonId",
      });

      Pokemon.hasMany(models.Types, {
        foreignKey: "pokemonId",
      });
    }
  }
  Pokemon.init(
    {
      id: DataTypes.INTEGER,
      pokemonId: DataTypes.INTEGER,
      pokemonName: DataTypes.STRING,
      speciesId: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      baseExperience: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
      isDefault: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
