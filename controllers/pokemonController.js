const express = require("express");
const router = express.Router();

const PokemonModel = require("../models").Pokemon;

// GET ALL POKEMON
router.get("/", async (req, res) => {
  let pokemons = await PokemonModel.findAll();
  res.json({ pokemons });
});

// GET SPECIFIC POKEMON
router.get("/:id", async (req, res) => {
  let pokemon = await PokemonModel.findByPk(req.params.id, {
    include: [
      {
        model: PokemonModel,
        attributes: ["pokemonName", "height", "weight", "baseExperience"],
      },
    ],
  });
  res.json({ pokemon });
});

module.exports = router;
