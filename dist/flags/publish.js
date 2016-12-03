'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('inquirer'),
    prompt = _require.prompt;

var omitProperty = require('../helpers/omitProperty');

module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(command) {
        var _ref2, shouldCustomize, customFlags, confirmPrompts, inputPrompts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, promptOptions, flagToAdd, options, _ref3, result, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _promptOptions, createFlag, _options, _ref4;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return prompt([{
                            type: 'confirm',
                            name: 'shouldCustomize',
                            message: 'Would you like to customize publishing?',
                            default: false
                        }]);

                    case 2:
                        _ref2 = _context.sent;
                        shouldCustomize = _ref2.shouldCustomize;

                        if (!shouldCustomize) {
                            _context.next = 73;
                            break;
                        }

                        customFlags = [];
                        confirmPrompts = [{
                            type: 'confirm',
                            name: 'canary',
                            message: '\n            Publish packages in a more granular way (per commit)? Before publishing to npm,\n            it creates the new version tag by taking the current version and appending the current git sha \n            (ex: 1.0.0-alpha.81e3b443).'.trim().replace(/\s+/g, ' '),
                            default: false,
                            flagToAdd: '--canary'
                        }, {
                            type: 'confirm',
                            name: 'skipGit',
                            message: '\n            Publish to npm without running any of the git commands \n            (skip committing, tagging, and pushing git changes)?'.trim().replace(/\s+/g, ' '),
                            default: false,
                            flagToAdd: '--skip-git'
                        }, {
                            type: 'confirm',
                            name: 'skipNpm',
                            message: '\n            Update all package.json package versions and dependency versions, \n            but not actually publish the packages to npm?'.trim().replace(/\s+/g, ' '),
                            default: false,
                            flagToAdd: '--skip-npm'
                        }, {
                            type: 'confirm',
                            name: 'yes',
                            message: '\n            Skip all confirmation prompts?'.trim().replace(/\s+/g, ' '),
                            default: false,
                            flagToAdd: '--yes'
                        }, {
                            type: 'confirm',
                            name: 'onlyExplicitUpdates',
                            message: '\n            Bump versions only for packages that \n            have been updated explicitly rather than cross-dependencies?'.trim().replace(/\s+/g, ' '),
                            default: false,
                            flagToAdd: '--only-explicit-updates'
                        }];
                        inputPrompts = [{
                            type: 'input',
                            name: 'npmTag',
                            message: 'Publish to npm with custom npm dist-tag (defaults to latest)?',
                            createFlag: function createFlag(input) {
                                return '--npm-tag ' + input;
                            }
                        }, {
                            type: 'input',
                            name: 'forcePublishPackages',
                            message: '\n            Force publish the specified packages? \n            Leave blank to skip this step. \n            Specify comma-separated list of packages or use * for all'.trim().replace(/\s+/g, ' '),
                            createFlag: function createFlag(input) {
                                return '--force-publish ' + input;
                            }
                        }, {
                            type: 'input',
                            name: 'repoVersion',
                            message: '\n            Skip the version selection prompt and use the specified version? \n            Useful for bypassing the user input prompt if you already know which version to publish.\n            Leave blank to skip this step.'.trim().replace(/\s+/g, ' '),
                            createFlag: function createFlag(input) {
                                return '--repo-version ' + input;
                            }
                        }];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 11;
                        _iterator = confirmPrompts[Symbol.iterator]();

                    case 13:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 25;
                            break;
                        }

                        promptOptions = _step.value;
                        flagToAdd = promptOptions.flagToAdd;
                        options = omitProperty('flagToAdd', promptOptions);
                        _context.next = 19;
                        return prompt([options]);

                    case 19:
                        _ref3 = _context.sent;
                        result = _ref3[promptOptions.name];

                        if (result) {
                            customFlags.push(flagToAdd);
                        }

                    case 22:
                        _iteratorNormalCompletion = true;
                        _context.next = 13;
                        break;

                    case 25:
                        _context.next = 31;
                        break;

                    case 27:
                        _context.prev = 27;
                        _context.t0 = _context['catch'](11);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 31:
                        _context.prev = 31;
                        _context.prev = 32;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 34:
                        _context.prev = 34;

                        if (!_didIteratorError) {
                            _context.next = 37;
                            break;
                        }

                        throw _iteratorError;

                    case 37:
                        return _context.finish(34);

                    case 38:
                        return _context.finish(31);

                    case 39:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 42;
                        _iterator2 = inputPrompts[Symbol.iterator]();

                    case 44:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context.next = 56;
                            break;
                        }

                        _promptOptions = _step2.value;
                        createFlag = _promptOptions.createFlag;
                        _options = omitProperty('createFlag', _promptOptions);
                        _context.next = 50;
                        return prompt([_options]);

                    case 50:
                        _ref4 = _context.sent;
                        result = _ref4[_promptOptions.name];

                        if (result) {
                            customFlags.push(createFlag(result));
                        }

                    case 53:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 44;
                        break;

                    case 56:
                        _context.next = 62;
                        break;

                    case 58:
                        _context.prev = 58;
                        _context.t1 = _context['catch'](42);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t1;

                    case 62:
                        _context.prev = 62;
                        _context.prev = 63;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 65:
                        _context.prev = 65;

                        if (!_didIteratorError2) {
                            _context.next = 68;
                            break;
                        }

                        throw _iteratorError2;

                    case 68:
                        return _context.finish(65);

                    case 69:
                        return _context.finish(62);

                    case 70:
                        if (!customFlags.length) {
                            _context.next = 72;
                            break;
                        }

                        return _context.abrupt('return', command + ' ' + customFlags.join(' '));

                    case 72:
                        return _context.abrupt('return', command);

                    case 73:
                        return _context.abrupt('return', command);

                    case 74:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[11, 27, 31, 39], [32,, 34, 38], [42, 58, 62, 70], [63,, 65, 69]]);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();