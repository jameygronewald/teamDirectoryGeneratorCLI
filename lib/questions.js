const employeeRoleQuestion = [
    {
    type: 'list',
    message: 'Which type of employee would you like to input?',
    choices: ['engineer', 'intern'],
    name: 'role'
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
    {
        type: 'list',
        message: 'Would you like to input an additional employee',
        choices: ['yes', 'no'],
        name: 'confirm'
    }
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
    {
        type: 'list',
        message: 'Would you like to input an additional employee',
        choices: ['yes', 'no'],
        name: 'confirm'
    }
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
    {
        type: 'list',
        message: 'Would you like to input an additional employee',
        choices: ['yes', 'no'],
        name: 'confirm'
    }
];

module.exports = {
    employeeRoleQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions
};