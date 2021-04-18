//Included packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileS = util.promisify(fs.writeSync);
//Created an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your current project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will the project be used?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who contributed on this project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install?'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions?'
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your GitHub user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'list',
      name: 'license',
      message: "Which license did you use?",
      choices: [
        "MIT",
        "ISC",
        "None"
      ]
    }]);
}

//Created a function to write README file
function writeToSync(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//Created a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => {
      writeToSync('README.md', generateMarkdown({ ...answers }));
      console.log('Successfully wrote to README.md');
    })
    .catch((err) => console.error(err))

}


init();
