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
                    if (data.managerName === '' || data.managerId === '' || data.managerEmail === '' || data.managerOfficeNumber === '') {
                        console.log('*****YOU MUST ENTER A VALUE FOR EACH QUESTION; PLEASE RE-ENTER INFO FOR THE LAST MANAGER.*****');
                        askUser();                        
                    } else {
                        let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
                        employees.push(manager);
                        if (data.confirm) {
                            askUser();
                        } else {
                            outputHtml(outputPath, employees);
                        }
                    }
                });
                break;
            case 'engineer':
                inquirer.prompt(questions.engineerQuestions).then((data) => {
                    if (data.engineerName === '' || data.engineerId === '' || data.engineerEmail === '' || data.engineerGithub === '') {
                        console.log('*****YOU MUST ENTER A VALUE FOR EACH QUESTION; PLEASE RE-ENTER INFO FOR THE LAST ENGINEER.*****');
                        askUser(); 
                    } else {
                        let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                        employees.push(engineer);
                        if (data.confirm) {
                            askUser();
                        } else {
                            outputHtml(outputPath, employees);
                        }
                    }
                });
                break;
            case 'intern':
                inquirer.prompt(questions.internQuestions).then((data) => {
                    if (data.internName === '' || data.internId === '' || data.internEmail === '' || data.internOfficeNumber === '') {
                        console.log('*****YOU MUST ENTER A VALUE FOR EACH QUESTION; PLEASE RE-ENTER INFO FOR THE LAST INTERN.*****');
                        askUser(); 
                    } else {
                        let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                        employees.push(intern);
                        if (data.confirm) {
                            askUser();
                        } else {
                            outputHtml(outputPath, employees);
                        }
                    }
                });
                break;
        };
    });
};
askUser();