"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Types extends Model {
    static associate(models) {
      Types.belongsTo(models.Pokemon, {
        foreignKey: "pokemonId",
      });
    }
  }
  Types.init(
    {
      typesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      pokemonId: DataTypes.INTEGER,
      typeName: DataTypes.STRING,
      slot: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Types",
    }
  );
  return Types;
};
