const BaseSQLModel = require("./baseSQLModel");

// Create a new class for a specific table
class GameModel extends BaseSQLModel {
  constructor() {
    super("gameitems"); //table 'products'
  }

  speak() {
    console.log("Hello!");
  }

  //check if there is a record of todoItems in the database?
  // if there is no todoItems record, call setinitialItems() to define intial
  async defineInitialItems() {
    const results = await this.findAll()
      .then((results) => {
        if (results[0] == undefined) {
          this.setinitialItems();
        } else {
          //console.log("All todoItems:", results);
        }
      })
      .catch((error) => {
        console.error("Error retrieving users:", error);
      });

    return results;
  }

  async setinitialItems() {
    const item1 = {
      name: "Game title 1",
      price: 123,
    };
    const item2 = {
      name: "Game title 2",
      price: 456,
    };
    const item3 = {
      name: "Game title 3",
      price: 789,
    };
    const item4 = {
      name: "Game title 4",
      price: 789,
    };

    const defaultItems = [item1, item2, item3, item4];

    defaultItems.forEach((item) =>
      this.create(item)
        .then((insertId) => {
          console.log("New user created with ID:", insertId);
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        })
    );
  }

  async getGameName() {
    const results = await this.findByColumn("name");

    return results;
  }
  async getAllGames() {
    const results = await this.findAll();

    return results;
  }
}

const gamestoreDB = new GameModel();

module.exports = gamestoreDB;
