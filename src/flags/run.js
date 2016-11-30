const {prompt} = require('inquirer');
const omitProperty = require('../helpers/omitProperty');

module.exports = async function (command) {
    const {scriptName} = await prompt([{
        type: 'input',
        name: 'scriptName',
        message: 'Enter script name that you want to execute',
        validate(value) {return !!value},
    }]);

    const customFlags = [];
    const inputPrompts = [{
        type: 'input',
        name: 'concurrency',
        message: 'How many threads to use when Lerna parallelizes the tasks (defaults to 4)',
        default: '4',
        filter: function(val) {
            if (['0', '4'].includes(val)) {
                return 0;
            }
            return Number(val);
        },
        createFlag(input) {return `--concurrency ${input}`}
    }, {
        type: 'input',
        name: 'scope',
        message: `
        Scope a command to a subset of packages?
        Specify glob, for example: toolbar-*.
        Leave blank to skip this step.`.trim().replace(/\s+/g, ' '),
        createFlag(input) {return `--scope ${input}`}
    }];

    for (const promptOptions of inputPrompts) {
        const {createFlag} = promptOptions;
        const options = omitProperty('createFlag', promptOptions);
        const {[promptOptions.name]: result} = await prompt([options]);
        if (result) {
            customFlags.push(createFlag(result));
        }
    }

    if (customFlags.length) {
        return `${command} ${customFlags.join(' ')} ${scriptName}`;
    }

    return `${command} ${scriptName}`;
};