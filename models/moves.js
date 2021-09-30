"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Moves extends Model {
    static associate(models) {
      Moves.belongsTo(models.Pokemon, {
        foreignKey: "pokemonId",
      });
      Moves.hasOne(models.MoveDetails, {
        foreignKey: "moveId",
      });
    }
  }
  Moves.init(
    {
      pokemonMovesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      pokemonId: DataTypes.INTEGER,
      moveId: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Moves",
    }
  );
  return Moves;
};
