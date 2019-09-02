const {prompt, __setAnswers} = require('inquirer');
const wizard = require('./wizard');
afterEach(function () {
    __setAnswers([]);
});

[{
    testName: 'lerna ls',
    answers: [{command: 'ls'}, {logLevel: 'info'}]
}, {
    testName: 'custom log level',
    answers: [{command: 'ls'}, {logLevel: 'silly'}]
}, {
    testName: 'clean',
    answers: [{command: 'clean'}, {logLevel: 'info'}]
}, {
    testName: 'bootstrap',
    answers: [{command: 'bootstrap'}, {packages: ''}, {logLevel: 'info'}]
}, {
    testName: 'bootstrap but ignore some packages',
    answers: [{command: 'bootstrap'}, {packages: 'component-*'}, {logLevel: 'info'}]
}, {
    testName: 'publish',
    answers: [{command: 'publish'}, {shouldCustomize: false}, {logLevel: 'info'}]
}, {
    testName: 'publish custom: confirm all, no inputs',
    answers: [
        {command: 'publish'},
        {shouldCustomize: true},
        {canary: true},
        {skipGit: true},
        {skipNpm: true},
        {yes: true},
        {npmTag: ''},
        {forcePublishPackages: ''},
        {repoVersion: ''},
        {logLevel: 'info'}
    ]
}, {
    testName: 'publish custom: only inputs',
    answers: [
        {command: 'publish'},
        {shouldCustomize: true},
        {canary: false},
        {skipGit: false},
        {skipNpm: false},
        {yes: false},
        {npmTag: 'custom'},
        {forcePublishPackages: 'pkg1,pkg2'},
        {repoVersion: '1.0.0'},
        {logLevel: 'info'}
    ]
}, {
    testName: 'publish custom: no inputs, no confirms',
    answers: [
        {command: 'publish'},
        {shouldCustomize: true},
        {canary: false},
        {skipGit: false},
        {skipNpm: false},
        {yes: false},
        {npmTag: ''},
        {forcePublishPackages: ''},
        {repoVersion: ''},
        {logLevel: 'info'}
    ]
}, {
    testName: 'updated',
    answers: [{command: 'updated'}, {logLevel: 'info'}]
}, {
    testName: 'import',
    answers: [{command: 'import'}, {externalRepoPath: 'path/to/package'}, {logLevel: 'info'}]
}, {
    testName: 'diff all',
    answers: [{command: 'diff'}, {packageName: 'blank'}, {logLevel: 'info'}]
}, {
    testName: 'diff package',
    answers: [{command: 'diff'}, {packageName: 'pkg1'}, {logLevel: 'info'}]
}, {
    testName: 'init',
    answers: [{command: 'init'}, {independentMode: false}, {logLevel: 'info'}]
}, {
    testName: 'init',
    answers: [{command: 'init'}, {independentMode: true}, {logLevel: 'info'}]
}, {
    testName: 'run',
    answers: [{command: 'run'}, {scriptName: 'test'}, {concurrency: '4'}, {scope: ''}, {logLevel: 'info'}]
}, {
    testName: 'run, custom inputs',
    answers: [{command: 'run'}, {scriptName: 'test'}, {concurrency: '1'}, {scope: 'component-*'}, {logLevel: 'info'}]
}, {
    testName: 'run, empty inputs',
    answers: [{command: 'run'}, {scriptName: 'test'}, {concurrency: 0}, {scope: ''}, {logLevel: 'info'}]
}, {
    testName: 'exec',
    answers: [{command: 'exec'}, {commandName: 'npm version'}, {concurrency: '4'}, {scope: ''}, {logLevel: 'info'}]
}, {
    testName: 'exec, custom inputs',
    answers: [{command: 'exec'}, {commandName: 'npm version'}, {concurrency: '1'}, {scope: 'component-*'}, {logLevel: 'info'}]
}, {
    testName: 'exec, empty inputs',
    answers: [{command: 'exec'}, {commandName: 'npm version'}, {concurrency: 0}, {scope: ''}, {logLevel: 'info'}]
}].forEach(({testName, answers}) => {
    test(testName, async () => {
        __setAnswers(answers);
        return wizard().then(result => {
            expect(result).toMatchSnapshot();
        });
    })
});