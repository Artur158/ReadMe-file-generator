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
For questions about the project, feel free to contact me via my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
`;
};

module.exports = generateMarkdown;
