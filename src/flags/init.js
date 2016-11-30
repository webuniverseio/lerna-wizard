const inquirer = require('inquirer');
module.exports = async function (command) {
    const {independentMode} = await inquirer.prompt([{
        type: 'confirm',
        name: 'independentMode',
        message: 'Increment package versions independently of each other?',
        default: true
    }]);

    if (independentMode) {
        return `${command} --independent`;
    }
    return command;
};