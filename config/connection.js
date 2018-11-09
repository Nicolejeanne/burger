// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection;
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "12345sql",
  database: "burgers_db"
});
};

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("MySQL error connecting: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Export connection
module.exports = connection;
