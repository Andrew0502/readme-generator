var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions =
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
        type: "input",
        name: "usage",
        message: "How should your project be used?"
      },
      {
        type: "list",
        message: "What license(s) are you using in this project?",
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
        message: "Who contributed to this project?"
      },
      {
        type: "input",
        name: "tests",
        message: "What tests could someone run on this project?"
      },
      {
        type: "input",
        name: "questions",
        message: "What questions do you have for this project?"
      },


    ]).then(function(data) { 
        const markDown = generateMarkdown(response);
        writeToFile("ReadMe2.md", markDown)
    });


// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(error){
        if (error) throw error
    })
}

// function to initialize program
function init() {

}


// function call to initialize program
init();
