const inquirer = require('inquirer');
module.exports = async function (command) {
    const {packageName} = await inquirer.prompt([{
        type: 'input',
        name: 'packageName',
        message: 'Specify a name for a new package',
        validate(val) {return !!val;}
    }]);

    return `${command} ${packageName}`;
};
