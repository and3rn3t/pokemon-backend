"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeEfficacy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeEfficacy.init(
    {
      damage_type_id: DataTypes.INTEGER,
      target_type_id: DataTypes.INTEGER,
      damage_factor: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TypeEfficacy",
    }
  );
  return TypeEfficacy;
};
