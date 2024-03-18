const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const gameItem = require("./model/gameItem");
const db = require("./config/db");
//const newItem = { name: "SE262!" };
//listItem.create(newItem);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  gameItem.defineInitialItems();
  const items = await gameItem.getAllGames();

  res.render("list", {
    newGameItems: items,
  });
});

app.post("/", async function (req, res) {
  console.log(req);
});

app.get("/game/:id", async function (req, res) {
  const gameInfo = await gameItem.findById(req.params.id);
  console.log(gameInfo);
  res.render("information-page/information-page", {
    gameInfo: gameInfo,
  });
});

app.listen("3000", () => {
  console.log("Server is running on Port 3000.");
});
