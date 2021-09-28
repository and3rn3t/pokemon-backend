"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MoveDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      moveId: {
        type: Sequelize.INTEGER,
      },
      moveName: {
        type: Sequelize.STRING,
      },
      power: {
        type: Sequelize.INTEGER,
      },
      pp: {
        type: Sequelize.INTEGER,
      },
      accuracy: {
        type: Sequelize.INTEGER,
      },
      priority: {
        type: Sequelize.INTEGER,
      },
      targetName: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MoveDetails");
  },
};
