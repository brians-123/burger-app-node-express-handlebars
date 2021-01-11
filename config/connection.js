const { createConnection } = require("mysql");

//require mysql
mysql = require("mysql");

//create a connection with the sql database
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@nother_$equel1",
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.log("error connecting" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export the connection for other files
module.exports = connection;
