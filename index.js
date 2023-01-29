// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: ' Describe your project.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username ?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your installation steps ?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address ?',
      },
    {
      type: 'input',
      name: 'contribution',
      message: 'What should a user know if they want to contribute to the repo?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?', choices:
    ['MIT',
    'Apache2.0']
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo '
  }

];

inquirer
.prompt( questions
)

.then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
