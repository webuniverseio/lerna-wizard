const inquirer = require('inquirer');
module.exports = async function (command) {
    const {packageName} = await inquirer.prompt([{
        type: 'input',
        name: 'packageName',
        message: 'Specify a package or leave blank to get diff since the last release.',
        default: 'blank'
    }]);

    if (packageName !== 'blank') {
        return `${command} ${packageName}`;
    }
    return command;
};