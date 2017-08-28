var mysql = require("./connection.js");

var orm = {
  selectAll: function(selectType, table){
    var queryStr = "SELECT ?? FROM ?? ORDER BY party_cost DESC";
    mysql.query(queryStr, [selectType, table], function(err, data){
      if (err) {
        console.log("Error: " + err);
      }
      console.log(data);
    });
  },

  findParties: function(partyName){
    var queryStr = "SELECT * FROM parties WHERE party_name ??";
    mysql.query(queryStr, [party_name], function(err, data){
      if (err) {
        console.log("Error: " + err);
      }
      console.log(data);
    };
  }

};

module.exports = orm;
