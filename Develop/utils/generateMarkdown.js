// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  if(data.license ==="MIT"){
    licenseText = "THis application is licensed under the MIT license..."
  } else if(data.license === "GNU GPLv3") {
    licenseText = "THis application is licensed under the GNU GPLv3 license..."
  } else if(data.license === "ISC") {
    licenseText = "THis application is licensed under the ISC license..."
  } else if(data.license === "Apache 2.0") {
    licenseText = "THis application is licensed under the Apache License 2.0 license..."

  return `# ${data.title}
## ${data.description}
##
##
##
${data.license}
MIT
${licenseText}
`;
}

module.exports = generateMarkdown;
