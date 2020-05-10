const fs = require('fs')
const inquirer = require('inquirer')
const generateReadme = require('./src/readme-template.js')
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'user',
            message: 'What is your GitHub username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project\'s name?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter your project's description")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log("Please enter your project's license")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'commandDependencies',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
            validate: commandDependenciesInput => {
                if (commandDependenciesInput) {
                    return true;
                } else {
                    console.log("Please enter the command to run to install dependencies")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'commandTests',
            message: 'What command should be run to run tests?',
            suffix: '',
            validate: commandTestsInput => {
                if (commandTestsInput) {
                    return true;
                } else {
                    console.log("Please enter the command to run tests")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userRepoInfo',
            message: 'What does the user need to know about using the repo?',
            validate: userRepoInput => {
                if (userRepoInput) {
                    return true;
                } else {
                    console.log("Please enter the information for the user to know about using the repo")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributingRepoInfo',
            message: 'What does the user need to know about contributing to the repo?',
            validate: contributingRepoInfoInput => {
                if (contributingRepoInfoInput) {
                    return true;
                } else {
                    console.log("Please enter information needed about contributing to the repo")
                    return false;
                }
            }
        }
    ])
}

questions().then(answers => 
    fs.writeFile('./README.md', generateReadme(answers), err => {
        if (err) throw new Error(err);
        console.log('README.md file created !')
    })
)