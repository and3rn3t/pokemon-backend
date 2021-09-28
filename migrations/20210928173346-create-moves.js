"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Moves", {
      pokemonMovesId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pokemonId: {
        type: Sequelize.INTEGER,
      },
      moveId: {
        type: Sequelize.INTEGER,
      },
      level: {
        type: Sequelize.INTEGER,
      },
      order: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Moves");
  },
};
