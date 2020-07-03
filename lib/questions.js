const employeeTypeQuestion = [
    {
    type: 'list',
    message: 'Which type of employee would you like to input?',
    choices: ['manager', 'engineer', 'intern'],
    name: 'type'
    }
];
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your manager\'s name?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is your manager\'s ID number?',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'What is your manager\'s email?',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is your manager\'s office phone number?',
        name: 'managerOfficeNumber'
    },
];
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of this engineer?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s ID number?',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s email?',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s GitHub username?',
        name: 'engineerGithub'
    },
];
const internQuestions = [
    {
        type: 'input',
        message: 'What is this intern\'s name?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is this intern\'s ID number?',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'What is this intern\'s email?',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'What school did the intern attend?',
        name: 'internSchool'
    },
];

module.exports = {
    employeeTypeQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions
};