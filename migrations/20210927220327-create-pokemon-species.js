"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PokemonSpecies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      generation: {
        type: Sequelize.INTEGER,
      },
      evolves_from_species: {
        type: Sequelize.INTEGER,
      },
      evolution_chain: {
        type: Sequelize.INTEGER,
      },
      gender_rate: {
        type: Sequelize.INTEGER,
      },
      capture_rate: {
        type: Sequelize.INTEGER,
      },
      base_happiness: {
        type: Sequelize.INTEGER,
      },
      is_baby: {
        type: Sequelize.BOOLEAN,
      },
      hatch_counter: {
        type: Sequelize.INTEGER,
      },
      has_gender_differences: {
        type: Sequelize.BOOLEAN,
      },
      forms_switchable: {
        type: Sequelize.BOOLEAN,
      },
      is_legendary: {
        type: Sequelize.BOOLEAN,
      },
      is_mythical: {
        type: Sequelize.BOOLEAN,
      },
      order: {
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
    await queryInterface.dropTable("PokemonSpecies");
  },
};
