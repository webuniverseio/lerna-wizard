const {prompt} = require('inquirer');
const omitProperty = require('../helpers/omitProperty');

module.exports = async function (command) {
    const {shouldCustomize} = await prompt([{
        type: 'confirm',
        name: 'shouldCustomize',
        message: 'Would you like to customize publishing?',
        default: false,
    }]);

    if (shouldCustomize) {
        const customFlags = [];
        const confirmPrompts = [{
            type: 'confirm',
            name: 'canary',
            message: `
            Publish packages in a more granular way (per commit)? Before publishing to npm,
            it creates the new version tag by taking the current version and appending the current git sha 
            (ex: 1.0.0-alpha.81e3b443).`.trim().replace(/\s+/g, ' '),
            default: false,
            flagToAdd: '--canary'
        }, {
            type: 'confirm',
            name: 'skipGit',
            message: `
            Publish to npm without running any of the git commands 
            (skip committing, tagging, and pushing git changes)?`.trim().replace(/\s+/g, ' '),
            default: false,
            flagToAdd: '--skip-git'
        }, {
            type: 'confirm',
            name: 'skipNpm',
            message: `
            Update all package.json package versions and dependency versions, 
            but not actually publish the packages to npm?`.trim().replace(/\s+/g, ' '),
            default: false,
            flagToAdd: '--skip-npm'
        }, {
            type: 'confirm',
            name: 'yes',
            message: `
            Skip all confirmation prompts?`.trim().replace(/\s+/g, ' '),
            default: false,
            flagToAdd: '--yes'
        }, {
            type: 'confirm',
            name: 'onlyExplicitUpdates',
            message: `
            Bump versions only for packages that 
            have been updated explicitly rather than cross-dependencies?`.trim().replace(/\s+/g, ' '),
            default: false,
            flagToAdd: '--only-explicit-updates'
        }];
        const inputPrompts = [{
            type: 'input',
            name: 'npmTag',
            message: 'Publish to npm with custom npm dist-tag (defaults to latest)?',
            createFlag(input) {return `--npm-tag ${input}`}
        }, {
            type: 'input',
            name: 'forcePublishPackages',
            message: `
            Force publish the specified packages? 
            Leave blank to skip this step. 
            Specify comma-separated list of packages or use * for all`.trim().replace(/\s+/g, ' '),
            createFlag(input) {return `--force-publish ${input}`}
        }, {
            type: 'input',
            name: 'repoVersion',
            message: `
            Skip the version selection prompt and use the specified version? 
            Useful for bypassing the user input prompt if you already know which version to publish.
            Leave blank to skip this step.`.trim().replace(/\s+/g, ' '),
            createFlag(input) {return `--repo-version ${input}`}
        }];

        for (const promptOptions of confirmPrompts) {
            const {flagToAdd} = promptOptions;
            const options = omitProperty('flagToAdd', promptOptions);
            const {[promptOptions.name]: result} = await prompt([options]);
            if (result) {
                customFlags.push(flagToAdd);
            }
        }

        for (const promptOptions of inputPrompts) {
            const {createFlag} = promptOptions;
            const options = omitProperty('createFlag', promptOptions);
            const {[promptOptions.name]: result} = await prompt([options]);
            if (result) {
                customFlags.push(createFlag(result));
            }
        }

        if (customFlags.length) {
            return `${command} ${customFlags.join(' ')}`;
        }

        return command;
    }

    return command;
};