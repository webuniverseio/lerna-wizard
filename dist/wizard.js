'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');

var _require = require('inquirer'),
    prompt = _require.prompt;

module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _params$commandChoice, commandChoiceFilter, _params$commandMessag, commandMessage, _ref2, command, result, getFlags, code, message, customFlags, _ref3, logLevel;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _params$commandChoice = params.commandChoiceFilter, commandChoiceFilter = _params$commandChoice === undefined ? function (x) {
                            return x;
                        } : _params$commandChoice, _params$commandMessag = params.commandMessage, commandMessage = _params$commandMessag === undefined ? 'What do you want to do?' : _params$commandMessag;
                        _context.next = 3;
                        return prompt([{
                            type: 'list',
                            name: 'command',
                            message: commandMessage,
                            choices: [{
                                value: 'bootstrap',
                                name: '[bootstrap] Link together local packages and npm install remaining package dependencies'
                            }, { value: 'publish', name: '[publish] Publish updated packages to npm' }, { value: 'updated', name: '[updated] Check which packages have changed since the last release' }, { value: 'import', name: '[import] Import a package with git history from an external repository' }, { value: 'clean', name: '[clean] Remove the node_modules directory from all packages' }, { value: 'diff', name: '[diff] Diff all packages or a single package since the last release' }, { value: 'init', name: '[init] Initialize a lerna repo' }, { value: 'run', name: '[run] Run npm script in each package' }, { value: 'exec', name: '[exec] Run a command in each package' }, { value: 'ls', name: '[ls] List all public packages' }].filter(commandChoiceFilter)
                        }]);

                    case 3:
                        _ref2 = _context.sent;
                        command = _ref2.command;
                        result = command;
                        getFlags = void 0;
                        _context.prev = 7;

                        getFlags = require('./flags/' + command);
                        _context.next = 16;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](7);
                        code = _context.t0.code, message = _context.t0.message;

                        if (code === 'MODULE_NOT_FOUND' && message.includes('./flags/')) {
                            _context.next = 16;
                            break;
                        }

                        throw _context.t0;

                    case 16:
                        if (!getFlags) {
                            _context.next = 20;
                            break;
                        }

                        _context.next = 19;
                        return getFlags(command);

                    case 19:
                        result = _context.sent;

                    case 20:
                        customFlags = [];
                        _context.next = 23;
                        return prompt([{
                            type: 'list',
                            name: 'logLevel',
                            message: 'What level of logs to report? On failure, \n        all logs are written to lerna-debug.log in the current working directory.'.trim().replace(/\s+/g, ' '),
                            default: 'info',
                            choices: ['silent', 'error', 'warn', 'success', 'info', 'verbose', 'silly']
                        }]);

                    case 23:
                        _ref3 = _context.sent;
                        logLevel = _ref3.logLevel;

                        if (logLevel !== 'info') {
                            customFlags.push('--loglevel ' + logLevel);
                        }
                        if (customFlags.length) {
                            result = customFlags.join(' ') + ' ' + result;
                        }

                        return _context.abrupt('return', 'lerna ' + result);

                    case 28:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[7, 11]]);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();