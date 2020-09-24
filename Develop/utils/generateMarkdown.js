// function to generate markdown for README
function generateMarkdown(data) {
  let descriptionText = "";
  let contentsText = "";
  let installationText = "";
  let usageText = "";
  let licenseText = "";
  let contributionText = "";
  let testsText = "";
  let questionsText = "";
  

  if(data.license === "MIT"){
    licenseText = "This application is licensed under the MIT license..."
  } else if(data.license === "GNU GPLv3") {
    licenseText = "This application is licensed under the GNU GPLv3 license..."
  } else if(data.license === "ISC") {
    licenseText = "This application is licensed under the ISC license..."
  } else if(data.license === "Apache 2.0") {
    licenseText = "This application is licensed under the Apache License 2.0 license..."
  }

  return `# ${data.title}
## Description
  ${data.description}
## Table of Contents
  ${data.contents}
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Licenses
  ${data.license}
  ${licenseText}
## Contributions
  ${data.contribution}
## Tests
  ${data.tests}
## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
