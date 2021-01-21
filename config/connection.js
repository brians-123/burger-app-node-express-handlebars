// const { createConnection } = require("mysql");

const { createConnection } = require("mysql");

//require mysql
mysql = require("mysql");

//create a connection with the sql database
//commenting this out as deploying to Heroku
// connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "@nother_$equel1",
//   database: "burgers_db",
// });

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@nother_$equel1",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) {
    console.log("error connecting" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export the connection for other files
module.exports = connection;
