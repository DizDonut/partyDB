var orm = require("./config/orm.js");
var inquirer = require("inquirer");

inquirer.prompt(
  {
    type: "list",
    message: "What do you want to do?\n",
    choices: ["See All Parties", "Find Parties By Party Name", "Parties by Client Name"],
    name: "choice"
  }
).then(function(answer){
  if (answer.choice === "See All Parties") {
    orm.selectAll("*", "parties");
  } else if (answer.choice === "Find Parties By Party Name") {
    inquirer.prompt(
      {
        type: "list",
        message: "Select a Party to View:\n",
        choices: ["Everybody Loves Raymond", "Big Bang Theory", "Top Gun", "Whiskey", "Cigar"],
        name: "choice"
      }
    ).then(function(answer){
      orm.findParties("*", "parties", answer.choice);
    }) //end inquirer prompt
  } else if (answer.choice === "Parties by Client Name"){
    orm.findClients("")
  }
})
