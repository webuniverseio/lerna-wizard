'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('inquirer'),
    prompt = _require.prompt;

module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(command) {
        var _ref2, onlyExplicitUpdates;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return prompt([{
                            type: 'confirm',
                            name: 'onlyExplicitUpdates',
                            message: '\n            Bump versions only for packages that \n            have been updated explicitly rather than cross-dependencies?'.trim().replace(/\s+/g, ' '),
                            default: false
                        }]);

                    case 2:
                        _ref2 = _context.sent;
                        onlyExplicitUpdates = _ref2.onlyExplicitUpdates;

                        if (!onlyExplicitUpdates) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', command + ' --only-explicit-updates');

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