var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project.?"
      },
      {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: [
          "HTML", 
          "CSS", 
          "JavaScript", 
          "MySQL"
        ]
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
          "email",
          "phone",
          "telekinesis"
        ]
      }
    ].then(function(data) { })
    

    // title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
