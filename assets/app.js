// inquirer module
const inquirer = require('inquirer')
// file system module
const fs = require('fs');

// inquierent prompts content!
inquirer

    .prompt([
        {
            type: 'input',
            message: 'Project title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },

        {
            type: 'input',
            message: 'Project description?',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'Process of installation for your app?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'instructions for?',
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'credits?',
            name: 'credits',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'Test Instructions?',
            name: 'testInstructions',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'list',
            message: 'what license are you using?',
            name: 'license',
            choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'Github Username?',
            name: 'github',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        },
        {
            type: 'input',
            message: 'Insert your e-mail?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'Insert a value' } },
        }
    ])

// README FORMAT PROMISE Function! 
    .then((data) => {
        const filename = 'README.md';
      
        const content = `
    # ${data.title}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Instruction Test](#Test-Instructions)
    * [License](#license)
    * [Questions](#Questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.instructions}
    
    ## Credits
    
    ${data.credits}

    ## Test-Instructions
    
   ${data.testInstructions}

    ## License
    
    This project is licensed under the ${data.license} license.
    
    ## Questions
    
    If you have any questions, please contact me:
    
    * GitHub: [@${data.github}](https://github.com/${data.github})
    * Email: ${data.email}
        `;

        fs.writeFile(filename, content, (err) =>
            err ? console.log(err) : console.log('README file generated successfully!')
        );
    })
    .catch((error) => {
        console.log(error);
    });


