const mysql = require("mysql2");

let config = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "todolistdb",
};

module.exports = mysql.createConnection(config);
/* .then(() => console.log("Database is connected"))
  .catch((e) => console.log(e));*/
