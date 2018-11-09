// Import the MySQL connection object
var connection = require("./connection.js");

// Create the ORM object to perform SQL queries
var orm = {
  // Function that returns all table entries
  all: function(tableInput, cb) {
    // Construct the query string that returns all rows from the target table
    var queryString = "SELECT * FROM ??";

    // Perform the database query
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;

      // return results
      console.log(result);
      cb(result);
    });
  },
  // Function that insert a single table entry
  insertWhere: function(tableInput, valOne, valTwo) {
    // Construct the query string that inserts a single row into the target table
    var queryString = "INSERT INTO ?? VALUES (?, ?)";
    console.log(queryString);

    // Perform the database query
    connection.query(queryString, [tableInput, valOne, valTwo], function(err, result) {
      if (err) throw err;

       // return results
      console.log(result);
      cb(result);
    });
  },
  // Function that updates a single table entry
  updateOne: function(tableInput, colToUpdate, whatToSelect, cb) {
    // Construct the query string that updates a single entry in the target table
    var queryString = "UPDATE ?? SET ? TO ?";
    console.log(queryString);

    // Perform the database query
    connection.query(queryString, [tableInput, colToUpdate, whatToSelect], function(err, result) {
      if (err) throw err;

       // return results
      console.log(result);
      cb(result);
    });
  }
};

// Export the orm object for use in other modules
module.exports = orm;
