// DEPENDENCIES
// neccessary npm packages
var express = require("express");

// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server

// Tells node to create an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTER
// The below points our server to a series of "route" files
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// LISTENER
// The below code effectively "starts" the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });