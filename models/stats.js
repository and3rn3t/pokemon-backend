'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stats.init({
    pokemonId: DataTypes.INTEGER,
    statName: DataTypes.STRING,
    baseStat: DataTypes.INTEGER,
    effort: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stats',
  });
  return Stats;
};