"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MoveDetails extends Model {
    static associate(models) {
      MoveDetails.belongsTo(models.Moves, {
        foreignKey: "moveId",
      });
    }
  }
  MoveDetails.init(
    {
      moveId: DataTypes.INTEGER,
      moveName: DataTypes.STRING,
      power: DataTypes.INTEGER,
      pp: DataTypes.INTEGER,
      accuracy: DataTypes.INTEGER,
      priority: DataTypes.INTEGER,
      targetName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MoveDetails",
    }
  );
  return MoveDetails;
};
