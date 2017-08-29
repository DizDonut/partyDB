var orm = require("./config/orm.js");
var inquirer = require("inquirer");

inquirer.prompt(
  {
    type: "list",
    message: "What do you want to do?\n",
    choices: ["See All Parties", "Find Parties By Party Name"],
    name: "choice"
  }
).then(function(answer){
  if (answer.choice === "See All Parties") {
    orm.selectAll("*", "parties");
  } else if (answer.choice === "Find Parties By Party Name") {
    orm.findParties("*", "parties", "")
  }
})
