require('@babel/polyfill');
const {prompt} = require('inquirer');
module.exports = async function (params = {}) {
    const {
        commandChoiceFilter = x => x,
        commandMessage = 'What do you want to do?'
    } = params;
    const {command} = await prompt([
        {
            type: 'list',
            name: 'command',
            message: commandMessage,
            choices: [
                {
                    value: `bootstrap`,
                    name: `[bootstrap] Link together local packages and npm install remaining package dependencies`
                },
                {value: `publish`, name: `[publish] Publish updated packages to npm`},
                {value: `updated`, name: `[updated] Check which packages have changed since the last release`},
                {value: `create`, name: `[create] Create a new lerna-managed package`},
                {value: `import`, name: `[import] Import a package with git history from an external repository`},
                {value: `clean`, name: `[clean] Remove the node_modules directory from all packages`},
                {value: `diff`, name: `[diff] Diff all packages or a single package since the last release`},
                {value: `init`, name: `[init] Initialize a lerna repo`},
                {value: `run`, name: `[run] Run npm script in each package`},
                {value: `exec`, name: `[exec] Run a command in each package`},
                {value: `ls`, name: `[ls] List all public packages`},
            ].filter(commandChoiceFilter),
        }
    ]);

    let result = command;
    let getFlags;
    try {
        getFlags = require(`./flags/${command}`);
    } catch (ex) {
        const {code, message} = ex;
        if (!(code === 'MODULE_NOT_FOUND' && message.includes('./flags/'))) {
            throw ex;
        }
    }
    if (getFlags) {
        result = await getFlags(command);
    }

    const customFlags = [];
    const {logLevel} = await prompt([{
        type: 'list',
        name: 'logLevel',
        message: `What level of logs to report? On failure, 
        all logs are written to lerna-debug.log in the current working directory.`.trim().replace(/\s+/g, ' '),
        default: 'info',
        choices: [
            'silent',
            'error',
            'warn',
            'success',
            'info',
            'verbose',
            'silly',
        ]
    }]);
    if (logLevel !== 'info') {
        customFlags.push(`--loglevel ${logLevel}`);
    }
    if (customFlags.length) {
        result = `${customFlags.join(' ')} ${result}`;
    }

    return `lerna ${result}`;
};
