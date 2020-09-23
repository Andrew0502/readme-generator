// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  if(data.license ==="MIT"){
    licenseText = "THis application is licensed under the MIT license..."
  }

  return `# ${data.title}
##
###
####
${data.license}
MIT
${licenseText}
`;
}

module.exports = generateMarkdown;
