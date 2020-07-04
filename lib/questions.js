const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailRegex)) {
        return 'You must enter a valid email address.'
    };
    return true
};

const employeeRoleQuestion = [
    {
    type: 'list',
    message: 'Which type of employee would you like to input?',
    choices: ['manager', 'engineer', 'intern'],
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
        name: 'managerEmail',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What is your manager\'s office phone number?',
        name: 'managerOfficeNumber'
    },
    {
        type: 'confirm',
        message: 'Would you like to input an additional employee',
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
        name: 'engineerEmail',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What is this engineer\'s GitHub username?',
        name: 'engineerGithub'
    },
    {
        type: 'confirm',
        message: 'Would you like to input an additional employee',
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
        name: 'internEmail',
        validate: validateEmail
    },
    {
        type: 'input',
        message: 'What school did the intern attend?',
        name: 'internSchool'
    },
    {
        type: 'confirm',
        message: 'Would you like to input an additional employee',
        name: 'confirm'
    }
];

module.exports = {
    employeeRoleQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions
};