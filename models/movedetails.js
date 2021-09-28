'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoveDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MoveDetails.init({
    moveId: DataTypes.INTEGER,
    moveName: DataTypes.STRING,
    power: DataTypes.INTEGER,
    pp: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    targetName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MoveDetails',
  });
  return MoveDetails;
};