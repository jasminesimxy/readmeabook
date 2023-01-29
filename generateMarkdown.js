// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
${data.installation}

## Contribution
${data.contribution}

## Questions

If you have anymore questions, you can contact me at: \
[Github Profile](https://github.com/${data.github}) \
[Email Address](${data.email})

## License
 
![badmath](https://img.shields.io/badge/license-${data.license}-blue.svg)
`;
}

module.exports = generateMarkdown;
