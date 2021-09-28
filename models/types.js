'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Types.init({
    pokemonId: DataTypes.INTEGER,
    typeName: DataTypes.STRING,
    slot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Types',
  });
  return Types;
};