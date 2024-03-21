const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const gameItem = require("./model/gameItem");
const db = require("./config/db");
const Authen = require("./controllers/authen");

const UserDB = require("./model/userModel");

const session = require("express-session");
const mysqlStore = require("express-mysql-session")(session);
//const newItem = { name: "SE262!" };
//listItem.create(newItem);
app.use(express.static("public"));
const options = db.config;
options.createDataBaseTable = true;
const sessionStore = new mysqlStore(options);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(
  session({
    store: sessionStore,
    secret: "jklfsodifjsktnwjasdp465dd",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 360000,
      sameSite: true,
      httpOnly: true,
      secure: false,
    },
  })
);

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  gameItem.defineInitialItems();
  const items = await gameItem.getAllGames();
  console.log(items);
  res.render("list", {
    newGameItems: items,
  });
  console.log("session-/: ", req.sessionID);
});

app.post("/", async function (req, res) {
  //console.log(req);
});

app.get("/game/:product_id", async function (req, res) {
  //console.log(req);
  const gameInfo = await gameItem.findByKey(
    "product_id",
    req.params.product_id
  );
  console.log(gameInfo);
  res.render("information-page/information-page", {
    gameInfo: gameInfo,
  });
});

app.get("/contact-us", async function (req, res) {
  res.render("contact-page/contact-page");
});

app.listen("3000", () => {
  console.log("Server is running on Port 3000.");
});
