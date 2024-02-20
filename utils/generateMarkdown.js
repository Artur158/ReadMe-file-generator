const generateLicenseBadge = license => {
  return license !== 'None' ? `![License](https://img.shields.io/badge/license-${license}-blue.svg)` : '';
};

const generateMarkdown = data => {
  return `
# ${data.title}

${generateLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, feel free to contact me via my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
`;
};

module.exports = generateMarkdown;