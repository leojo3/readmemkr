import inquirer from 'inquirer';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of project:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Usage Instructions:',
            name: 'usage',

        },
        {
            type: 'input',
            message: 'Contributing Instructions:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Tests:',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT', 'GPLv3'] 

        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'github'

        },
        {
            type: 'input',
            message: 'Email address',
            name: 'email',
        },

])
.then (response => {

const template = `
# ${response.title}
license badge

## Description
${response.description}

## Table of Contents 
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributing](#Contributing)

[Tests](#Tests)

[Questions](#Questions)


## Installation
${response.install}

## Usage
${response.usage}

## License
The license is ${response.license }

## Contributing 
${response.contributing}

## Tests
${response.tests}

## Questions

### Creator's Contact Info:

[GitHub Profile](https://github.com/${response.github})

[Email](mailto:${response.email})

`
fs.writeFile('READMEtest.md', template, err =>
    err ? console.error("Oops!", err) : console.log("Done!")
)
});