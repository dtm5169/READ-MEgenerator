//Created a function that returns a license badge based on which license is passed in
function licenseBadge(data) {
    const licenseType = data.license[NaN];
    let licenseString = " "

    if (licenseType == "MIT") {
        licenseString = `![License:MIT](https://img.shields.io/apm/l/MIT)`
    };
    return licenseString
};

//Created a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
 
## License:
![license](https://img.shields.io/badge/license-MIT-blue)
 

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Contribution](#contribution)
* [Installation](#installation)
* [Questions](#questions)
* [License](#license)
   


## Description
${data.description}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Questions
Please contact me at:

gitHub:[${data.gitHub}](https://github.com/dtm5169)
Email:[${data.email}](marrowdaisha@gmail.com)

## License
${data.license} 



`;
}

module.exports = generateMarkdown;
