var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
// const questions 
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
      },
      {
        type: "checkbox",
        message: "What do you want in your table of contents?",
        name: "contents",
        choices: [
          "Title", 
          "Description", 
          "Table of Contents", 
          "Installation",
          "Usage",
          "License",
          "Contributions",
          "Tests",
          "Questions"
        ]
      },
      {
        type: "input",
        name: "installation",
        message: "How should your project be installed?"
      },
      {
        type: "checkbox",
        message: "What licenses do you want to use?",
        name: "contents",
        choices: [
          "Title", 
          "Description", 
          "Table of Contents", 
          "Installation",
          "Usage",
          "License",
          "Contributions",
          "Tests",
          "Questions"
        ]
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "license",
        choices: [
          "MIT",
          "GNU GPLv3",
          "ISC",
          "Apache 2.0",
        ]
      },
      {
        type: "input",
        name: "Contribution",
        message: "How should your project be installed?"
      },
    ]).then(function(data) { })
    

    // title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
