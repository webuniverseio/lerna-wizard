const inquirer = require('inquirer');
module.exports = async function (command) {
    const {externalRepoPath} = await inquirer.prompt([{
        type: 'input',
        name: 'externalRepoPath',
        message: 'Specify a path for package to be imported into packages/directory-name',
        validate(val) {return !!val;}
    }]);

    return `${command} ${externalRepoPath}`;
};