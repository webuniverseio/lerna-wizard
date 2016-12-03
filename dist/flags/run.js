'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('inquirer'),
    prompt = _require.prompt;

var omitProperty = require('../helpers/omitProperty');

module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(command) {
        var _ref2, scriptName, customFlags, inputPrompts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, promptOptions, createFlag, options, _ref3, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return prompt([{
                            type: 'input',
                            name: 'scriptName',
                            message: 'Enter script name that you want to execute',
                            validate: function validate(value) {
                                return !!value;
                            }
                        }]);

                    case 2:
                        _ref2 = _context.sent;
                        scriptName = _ref2.scriptName;
                        customFlags = [];
                        inputPrompts = [{
                            type: 'input',
                            name: 'concurrency',
                            message: 'How many threads to use when Lerna parallelizes the tasks (defaults to 4)',
                            default: '4',
                            filter: function filter(val) {
                                if (['0', '4'].includes(val)) {
                                    return 0;
                                }
                                return Number(val);
                            },
                            createFlag: function createFlag(input) {
                                return '--concurrency ' + input;
                            }
                        }, {
                            type: 'input',
                            name: 'scope',
                            message: '\n        Scope a command to a subset of packages?\n        Specify glob, for example: toolbar-*.\n        Leave blank to skip this step.'.trim().replace(/\s+/g, ' '),
                            createFlag: function createFlag(input) {
                                return '--scope ' + input;
                            }
                        }];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 9;
                        _iterator = inputPrompts[Symbol.iterator]();

                    case 11:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 23;
                            break;
                        }

                        promptOptions = _step.value;
                        createFlag = promptOptions.createFlag;
                        options = omitProperty('createFlag', promptOptions);
                        _context.next = 17;
                        return prompt([options]);

                    case 17:
                        _ref3 = _context.sent;
                        result = _ref3[promptOptions.name];

                        if (result) {
                            customFlags.push(createFlag(result));
                        }

                    case 20:
                        _iteratorNormalCompletion = true;
                        _context.next = 11;
                        break;

                    case 23:
                        _context.next = 29;
                        break;

                    case 25:
                        _context.prev = 25;
                        _context.t0 = _context['catch'](9);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 29:
                        _context.prev = 29;
                        _context.prev = 30;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 32:
                        _context.prev = 32;

                        if (!_didIteratorError) {
                            _context.next = 35;
                            break;
                        }

                        throw _iteratorError;

                    case 35:
                        return _context.finish(32);

                    case 36:
                        return _context.finish(29);

                    case 37:
                        if (!customFlags.length) {
                            _context.next = 39;
                            break;
                        }

                        return _context.abrupt('return', command + ' ' + customFlags.join(' ') + ' ' + scriptName);

                    case 39:
                        return _context.abrupt('return', command + ' ' + scriptName);

                    case 40:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[9, 25, 29, 37], [30,, 32, 36]]);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();