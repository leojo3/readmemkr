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

let badge = '';

//user input to select a badge, uses https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for the badges
// could easily be expanded to allow for other licenses, currently has the two best open source licenses for software
// and the two strongly reccomened by Github themselves

    if (response.license = 'GPLv3') {badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'};
    if (response.license = 'MIT'){badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'};
    


//Table of contents links WORK ON GITHUB - don't work in VSCode preview

const template = `
# ${response.title}
${badge}

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
This project is licenesed under the terms of the ${response.license} license.

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