'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({
    pokemonName: DataTypes.STRING,
    speciesId: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    baseExperience: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    isDefault: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};