const inquirer = require('inquirer');
module.exports = async function (command) {
    const {packages} = await inquirer.prompt([{
        type: 'input',
        name: 'packages',
        message: 'Exclude a subset of packages when running the bootstrap command? Takes glob, for example: component-*',
        default: false
    }]);

    if (packages) {
        return `${command} --ignore ${packages}`;
    }
    return command;
};