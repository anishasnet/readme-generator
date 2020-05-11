const generateReadme = (data) => {
    // Setting the name of the license so that the license name can be used in the url for the badge. Spaces have to be replaced with %20 in a url.
    let badgeLicense = data.license.replace(' ', '%20')
    // Setting a new license name so that it makes grammatical sense in a sentence.
    let inSentenceLicense;
    if (data.license == "None") {
        inSentenceLicense = 'no'
    } else {
        inSentenceLicense = "the " + data.license
    }

    // Creating the template for the README file.
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
// Exporting the generateReadme function to be used in index.js
module.exports = generateReadme;