"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PokemonSpecies", {
      speciesId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      speciesName: {
        type: Sequelize.STRING,
      },
      generation: {
        type: Sequelize.INTEGER,
      },
      evolvesFromSpecies: {
        type: Sequelize.INTEGER,
      },
      evolutionChain: {
        type: Sequelize.INTEGER,
      },
      genderRate: {
        type: Sequelize.INTEGER,
      },
      captureRate: {
        type: Sequelize.INTEGER,
      },
      baseHappiness: {
        type: Sequelize.INTEGER,
      },
      isBaby: {
        type: Sequelize.BOOLEAN,
      },
      hatchCounter: {
        type: Sequelize.INTEGER,
      },
      hasGenderDifferences: {
        type: Sequelize.BOOLEAN,
      },
      formsSwitchable: {
        type: Sequelize.BOOLEAN,
      },
      isLegendary: {
        type: Sequelize.BOOLEAN,
      },
      isMythical: {
        type: Sequelize.BOOLEAN,
      },
      order: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PokemonSpecies");
  },
};
