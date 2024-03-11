const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const listItem = require("./model/listItem");
//const db = require("./config/db");
//const newItem = { name: "SE262!" };
//listItem.create(newItem);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  //listItem.defineInitialItems();
  //const items = await listItem.getAllTodoItems();

  res.render("list", {
    /*listTitle: "Today",
    newListItems: items,*/
  });
});
/*
app.post("/delete", async function (req, res) {
  const result = await listItem
    .delete(req.body.checkbox)
    .then(() => {
      console.log("delete success");
    })
    .then(() => {
      res.redirect("/");
    });
});*/

app.listen("3000", () => {
  console.log("Server is running on Port 3000.");
});
