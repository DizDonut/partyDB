require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "parties_db"
});

connection.connect(function(err){
  if (err){
    console.log("Error: " + err);
    return;
  }
  // console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
