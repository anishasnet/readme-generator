const generateReadme = (data) => {
    let badgeLicense = data.license.replace(' ', '%20')
    let inSentenceLicense;
    if (data.license == "None") {
        inSentenceLicense = 'no'
    } else {
        inSentenceLicense = "the " + data.license
    }
    return `
# ${data.title}
![GitHub License](http://img.shields.io/badge/license-${badgeLicense}-blue)


## Description
${data.description}



## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install neccesary dependencies, run the following command:

\`\`\`
${data.commandDependencies}
\`\`\`

## Usage

${data.userRepoInfo}

## License

This project is under ${inSentenceLicense} license.

## Contributing

${data.contributingRepoInfo}

## Tests

To run tests on the project, use the following command:

\`\`\`
${data.commandTests}
\`\`\`

## Questions

For any further questions please email ${data.email}. You can find more of my work at [${data.user}](https://github.com/${data.user}).
    `;
}

module.exports = generateReadme;