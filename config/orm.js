var connection = require("./connection.js");

var orm = {
  all: function(whatToSelect, tableInput, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertWhere: function(tableInput, valOne, valTwo) {
    var queryString = "INSERT INTO ?? VALUES (?, ?)";
    console.log(queryString);

    connection.query(queryString, [tableInput, valOne, valTwo], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, colToUpdate, whatToSelect) {
    var queryString = "UPDATE ?? SET ? TO ?";
    console.log(queryString);

    connection.query(queryString, [tableInput, colToUpdate, whatToSelect], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
