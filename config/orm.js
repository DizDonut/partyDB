var mysql = require("./connection.js");
var inquirer = require("inquirer");

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

  findParties: function(selectType, table, pName){
    var queryStr = "SELECT ?? FROM ?? WHERE party_name ?";
    mysql.query(queryStr, [selectType, table, pName], function(err, data){
      if (err) {
        console.log("Error: " + err);
      }
      console.log(data);
    });
  },

  findClients: function(table, colToSearch, val){
    var queryStr = "SELECT * FROM ?? WHERE ?? = ?";
    mysql.query(queryStr, [table, colToSearch, val], function(err, data){
      if (err) {
        console.log("Error: " + err);
      }
      console.log(data);
    })
  }

};

module.exports = orm;
