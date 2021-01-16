//require the express npm package
const express = require("express");

const connection = require("./config/connection");
//is this needed in the server js file?
var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
// if not heroku, use port 8080 ---changing to 8000 so i can use another for testing
const PORT = process.env.PORT || 8000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
