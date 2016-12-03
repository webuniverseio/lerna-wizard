'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var inquirer = require('inquirer');
module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(command) {
        var _ref2, independentMode;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return inquirer.prompt([{
                            type: 'confirm',
                            name: 'independentMode',
                            message: 'Increment package versions independently of each other?',
                            default: true
                        }]);

                    case 2:
                        _ref2 = _context.sent;
                        independentMode = _ref2.independentMode;

                        if (!independentMode) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', command + ' --independent');

                    case 6:
                        return _context.abrupt('return', command);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();