"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    static associate(models) {
      Stats.belongsTo(models.Pokemon, {
        foreignKey: "pokemonId",
      });
    }
  }
  Stats.init(
    {
      pokemonId: DataTypes.INTEGER,
      statName: DataTypes.STRING,
      baseStat: DataTypes.INTEGER,
      effort: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stats",
    }
  );
  return Stats;
};
