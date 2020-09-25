// function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseText = "";
  
  
  // if(data.license.includes("MIT")){
  //   mitText = "This application is licensed under the MIT license..."
  //   licenseText.appendChild(mitText);
  // } 
  // if(data.license.includes("GNU GPLv3")) {
  //   gnuText = "This application is licensed under the GNU GPLv3 license..."
  //   licenseText.appendChild(gnuText);
  // } 
  // if(data.license.includes("ISC")) {
  //   iscText = "This application is licensed under the ISC license..."
  //   licenseText.appendChild(iscText)
  // } 
  // if(data.license.includes("Apache 2.0")) {
  //   apacheText = "This application is licensed under the Apache License 2.0 license..."
  //   licenseText.appendChild(apacheText)
  // }

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
  Please forward any questions to ${data.email}. Please refer to the code for this project and others at ${data.github}.

`;
}

module.exports = generateMarkdown;