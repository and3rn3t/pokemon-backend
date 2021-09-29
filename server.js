require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// MAIN
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

app.use("/api/pokemon", require("./controllers/pokemonController"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
