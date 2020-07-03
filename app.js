const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const managerQuestions = [
    'What is your manager\'s name?',
    'What is your manager\'s ID number?',
    'What is your manager\'s email?',
    'What is your manager\'s office phone number?'
];
const engineerQuestions = [
    'What is the name of this engineer?',
    'What is this engineer\'s ID number?',
    'What is this engineer\'s email?',
    'What is this engineer\'s GitHub username?'
];
const internQuestions = [
    'What is this intern\'s name?',
    'What is this intern\'s ID number?',
    'What is this intern\'s email?',
    'What school did the intern attend?'
];

const employees = [];

const outputHtml = (path, data) => {
    fs.writeFile(path, render(data), (error) => {
        if (error) throw error;
        else (console.log('Success!'));
    });
};

const askUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: managerQuestions[0],
                name: 'managerName'
            },
            {
                type: 'input',
                message: managerQuestions[1],
                name: 'managerId'
            },
            {
                type: 'input',
                message: managerQuestions[2],
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: managerQuestions[3],
                name: 'managerOfficeNumber'
            },
        ]).then((data) => {
            let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
            let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            employees.push(manager);
            employees.push(engineer);
            employees.push(intern);
            console.log(employees);
            outputHtml(outputPath, employees);
        });
};
askUser();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
