// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

let burger = {
all: function(cb) {
    orm.all("burgers", function(res) {
        cb(res);
    });
},
insertWhere: function(valOne, Valtwo, cb) {
    orm.insertWhere("burgers", valOne, Valtwo, function(res) {
        cb(res);
    });
},
updateOne: function(colToUpdate, WhatToSelect, cb) {
    orm.updateOne("burgers", colToUpdate, WhatToSelect, function(res) {
        cb(res);
    });
}
};

// Export the database functions for the controller.
module.exports = burger;