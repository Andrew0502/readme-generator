var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    "What is the title of your project?", //questions[0]
    "What is the description of your project?", //questions[1]
    "What do you want in your table of contents?", //questions[2]
    "How should your project be installed?", //questions[3]
    "How should your project be used?", //questions[4]
    "What license are you using in this project?", //questions[5]
    "How could someone contribute to this project?", //questions[6]
    "What tests could someone run on this project?", //questions[7]
    "Please enter your email.", //questions[8]
    "please enter your GitHub username." //question[9]
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(error){
        if (error) throw error
    })
}

// function to initialize program
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
          },
          {
            type: "input",
            name: "description",
            message: questions[1]
          },
          // {
          //   type: "checkbox",
          //   message: questions[2],
          //   name: "contents",
          //   choices: [ 
          //     "Installation",
          //     "Usage",
          //     "License",
          //     "Contributions",
          //     "Tests",
          //     "Questions"
          //   ]
          // },
          {
            type: "input",
            name: "installation",
            message: questions[3]
          },
          {
            type: "input",
            name: "usage",
            message: questions[4]
          },
          {
            type: "checkbox",
            message: questions[5],
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
            name: "contribution",
            message: questions[6]
          },
          {
            type: "input",
            name: "tests",
            message: questions[7]
          },
          {
            type: "input",
            name: "email",
            message: questions[8]
          },
          {
            type: "input",
            name: "github",
            message: questions[9]
          }
    
        ]).then(function(data) { 
            const markDown = generateMarkdown(data);

            return writeFileAsync("generatedReadme.md", markDown)
            
        })
        .then(function() {
          console.log("Successfully wrote to generatedReadme.md");
        })
        .catch(function(err) {
          console.log(err);
        });
}


// function call to initialize program
init();
