const express = require("express");
const router = express.Router();

const Pokemon = require("../models").Pokemon;
const PokemonSpecies = require("../models").PokemonSpecies;
const Stats = require("../models/").Stats;
const Types = require("../models").Types;
const Abilities = require("../models").Abilities;

// GET ALL POKEMON
router.get("/", async (req, res) => {
  let pokemons = await Pokemon.findAll({
    include: [
      {
        model: PokemonSpecies,
        attributes: [
          "generation",
          "genderRate",
          "captureRate",
          "baseHappiness",
          "isBaby",
          "hasGenderDifferences",
          "formsSwitchable",
          "isLegendary",
          "isMythical",
        ],
      },
      { model: Types, attributes: ["typeName", "slot"] },
      { model: Abilities, attributes: ["abilityName", "isHidden", "slot"] },
      { model: Stats, attributes: ["statName", "baseStat", "effort"] },
    ],
  });
  res.json({ pokemons });
});

// GET A SPECIFIC POKEMON
router.get("/:id", async (req, res) => {
  let pokemon = await Pokemon.findByPk(req.params.id, {
    include: [
      {
        model: PokemonSpecies,
        attributes: [
          "generation",
          "genderRate",
          "captureRate",
          "baseHappiness",
          "isBaby",
          "hasGenderDifferences",
          "formsSwitchable",
          "isLegendary",
          "isMythical",
        ],
      },
      { model: Types, attributes: ["typeName", "slot"] },
      { model: Abilities, attributes: ["abilityName", "isHidden", "slot"] },
      { model: Stats, attributes: ["statName", "baseStat", "effort"] },
    ],
  });
  res.json({ pokemon });
});

module.exports = router;
