require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// MAIN
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

app.use("/api/pokemon", require("./controllers/pokemonController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
