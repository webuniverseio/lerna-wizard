const {prompt} = require('inquirer');
module.exports = async function (command) {
    const {onlyExplicitUpdates} = await prompt([{
        type: 'confirm',
        name: 'onlyExplicitUpdates',
        message: `
            Bump versions only for packages that 
            have been updated explicitly rather than cross-dependencies?`.trim().replace(/\s+/g, ' '),
        default: false,
    }]);

    if (onlyExplicitUpdates) {
        return `${command} --only-explicit-updates`;
    }
    return command;
};