"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Stats", {
      statsId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pokemonId: {
        type: Sequelize.INTEGER,
      },
      statName: {
        type: Sequelize.STRING,
      },
      baseStat: {
        type: Sequelize.INTEGER,
      },
      effort: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Stats");
  },
};
