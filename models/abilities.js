'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Abilities.init({
    pokemonId: DataTypes.INTEGER,
    abilityName: DataTypes.STRING,
    isHidden: DataTypes.BOOLEAN,
    slot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Abilities',
  });
  return Abilities;
};