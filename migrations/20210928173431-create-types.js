"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Types", {
      typesId: {
        allowNull: false,
        autoIncrement: true,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Types");
  },
};
