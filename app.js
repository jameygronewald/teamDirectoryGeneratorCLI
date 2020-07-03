const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require('./lib/questions');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employees = [];

const outputHtml = (path, data) => {
    fs.writeFile(path, render(data), (error) => {
        if (error) throw error;
        else (console.log('Success!'));
    });
};

const askUser = () => {
    inquirer.prompt(questions.employeeRoleQuestion).then((data) => {
        switch(data.role) {
            case 'manager':
                inquirer.prompt(questions.managerQuestions).then((data) => {
                    let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
                    employees.push(manager);
                    if (data.confirm ==='yes') {
                        askUser();
                    } else {
                        outputHtml(outputPath, employees);
                    }
                });
                break;
            case 'engineer':
                inquirer.prompt(questions.engineerQuestions).then((data) => {
                    let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                    employees.push(engineer);
                    if (data.confirm ==='yes') {
                        askUser();
                    } else {
                        outputHtml(outputPath, employees);
                    }
                });
                break;
            case 'intern':
                inquirer.prompt(questions.internQuestions).then((data) => {
                    let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                    employees.push(intern);
                    if (data.confirm ==='yes') {
                        askUser();
                    } else {
                        outputHtml(outputPath, employees);
                    }
                });
                break;
        };
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