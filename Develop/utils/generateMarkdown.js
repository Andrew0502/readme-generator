// function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseText = "";

  return `# ${data.title}

  ![MIT License Badge](https://img.shields.io/badge/license-MIT-blue)
  ![GNU License Badge](https://img.shields.io/badge/license-GNU_GPLv3-blue)
  ![ISC License Badge](https://img.shields.io/badge/license-ISC-blue)
  ![Apache License Badge](https://img.shields.io/badge/license-Apache_2.0-blue)

  Delete Badges as appropriate.

## Description
  ${data.description}

## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licenses](#Licenses)
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Licenses
  This project is licensed under the ${data.license} license(s). for more information regarding licensing feel free to visit
  [choose a license](https://choosealicense.com/)

## Contributions
  ${data.contribution}

## Tests
  ${data.tests}

## Questions
  Please forward any questions to [${data.email}](${data.email}). Please refer to the code for this project and others at [${data.github}](${data.github}).

`;
}

module.exports = generateMarkdown;