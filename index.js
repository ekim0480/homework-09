// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseChoices = [
    "1. PUBLIC DOMAIN: The most permissive.  Anyone can modify and use without any restrictions.",
    "2. PERMISSIVE: Contains minimal requirements about how the software can be modified or redistributed.  AKA 'Apache Style' or 'BSD Style'.",
    "3. LGPL: The 'GNU Lesser General Public License'.  Allows links to open source libraries.",
    "4. COPYLEFT: Reciprocal or restrictive licenses.  Allows modification of licensed code as long as the software is distributed under the same software license.",
    "5. PROPRIETARY: The most restrictive.  All rights reserved.  The software may not be modified or redistributed under any circumstances."
]

// array of questions
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a brief description of your project...",
    name: "description",
  },
  {
    type: "input",
    message: "Provide instructions on how to install your application...",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions on how to use your application...",
    name: "usage",
  },
  {
    type: "list",
    message: "Please choose a license type...",
    name: "license",
    choices: licenseChoices
  },
  {
    type: "input",
    message: "Contributing guidelines.  If allowed, please provide a description of how others may contribute user-generated content to the project...",
    name: "contributing",
  },
  {
    type: "input",
    message: "If available, please provide instructions on how any included tests can be run...",
    name: "tests",
  },
  {
    type: "input",
    message: "If present, please address some frequently asked questions...",
    name: "questions",
  }
];

// function to create the README
function writeToFile(dataString) {
  fs.writeFile("./READMETEST.md", dataString, function (err) {
    if (err) throw err;
    console.log("README successfully generated!");
  });
}

// function to run app
function init() {
  // console.log(licenseChoices)
  const data = {};  
  const getInputs = inquirer
    .prompt(questions)
    .then(function(res) {
        data.title = res.title;
        data.description = res.description;
        data.installation = res.installation;
        data.usage = res.usage;
        data.license = res.license;
        data.credits = res.credits;
        data.badges = res.badges;
        data.contributing = res.contributing;
        data.tests = res.tests;
        data.questions = res.questions
        const dataString = generateMarkdown(data);
        writeToFile(dataString);
  });
}

// initialize
init();
