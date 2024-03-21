const BaseSQLModel = require("./baseSQLModel");

// Create a new class for a specific table
class CategoryModel extends BaseSQLModel {
  constructor() {
    super("category"); //table 'products'
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
      product_name: "Game title 1",
      product_price: 123,
    };
    const item2 = {
      product_name: "Game title 2",
      product_price: 456,
    };
    const item3 = {
      product_name: "Game title 3",
      product_price: 789,
    };
    const item4 = {
      product_name: "Game title 4",
      product_price: 789,
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

  async getCategoryName() {
    const results = await this.findByColumn("category_name");

    return results;
  }
  /*
  async findById() {
    const results = await this.findByKey("product_id", "product_id");
    return results;
  }*/

  async addNewProduct() {}

  async deleteCategoryById(req) {
    console.log(req);
  }
  async getAllCategory() {
    const results = await this.findAll();

    return results;
  }
}

const categoryDB = new CategoryModel();

module.exports = categoryDB;
