"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Types", {
      typesId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pokemonId: {
        type: Sequelize.INTEGER,
      },
      typeName: {
        type: Sequelize.STRING,
      },
      slot: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Types");
  },
};
