var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of your project?", //questions[1]
    "What is the description of your project?", //questions[2]
    "What do you want in your table of contents?", //questions[3]
    "How should your project be installed?", //questions[4]
    "How should your project be used?", //questions[5]
    "What license(s) are you using in this project?", //questions[6]
    "Who contributed to this project?", //questions[7]
    "What tests could someone run on this project?", //questions[8]
    "What questions do you have for this project?" // //questions[9]
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(error){
        if (error) throw error
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[1]
          },
          {
            type: "input",
            name: "description",
            message: questions[2]
          },
          {
            type: "checkbox",
            message: questions[3],
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
            message: questions[4]
          },
          {
            type: "input",
            name: "usage",
            message: questions[5]
          },
          {
            type: "list",
            message: questions[6],
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
            message: questions[7]
          },
          {
            type: "input",
            name: "tests",
            message: questions[8]
          },
          {
            type: "input",
            name: "questions",
            message: questions[9]
          },
    
        ]).then(function(data) { 
            console.log(responses);
            const markDown = generateMarkdown(response);
            writeToFile("generatedReadme.md", markDown)
        });
}


// function call to initialize program
init();
