<<<<<<< HEAD
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
=======
const generateMarkdown = data => {
  return `
# ${data.title}


# Description
${data.description}

# Table of Contents
1. Description
2. Installation
3. Usage
4. License
5. Contributing
6.Tests
7. Questions 

# Install
${data.installation}

# Usage
${data.usage}

# License
This project is licensed under the ${data.license} license.

# Contributing
${data.contributing}

#Tests
${data.tests}

# Questions
>>>>>>> f4e6990fce4961d36e1280e5c72bd0ed1c9edcca
For questions about the project, feel free to contact me via my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
`;
};

module.exports = generateMarkdown;