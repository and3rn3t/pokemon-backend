"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Abilities extends Model {
    static associate(models) {
      Abilities.belongsTo(models.Pokemon, {
        foreignKey: "pokemonId",
      });
    }
  }
  Abilities.init(
    {
      pokemonId: DataTypes.INTEGER,
      abilityName: DataTypes.STRING,
      isHidden: DataTypes.BOOLEAN,
      slot: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Abilities",
    }
  );
  return Abilities;
};
