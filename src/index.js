const wizard = require('./wizard');
const spawn = require('cross-spawn-promise');
module.exports = async function (options = {}) {
    let command = await wizard(options);
    let spawnArgs = [];
    [command, ...spawnArgs] = command.split(' ');
    await spawn(command, spawnArgs, {stdio: 'inherit'});
};