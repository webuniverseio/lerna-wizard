'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');
_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return require('../')({
                        commandMessage: 'What do you want to do?',
                        commandChoiceFilter: function commandChoiceFilter(_ref2) {
                            var value = _ref2.value;

                            return value; //!['ls', 'updated'].includes(value);
                        }
                    });

                case 3:
                    _context.next = 9;
                    break;

                case 5:
                    _context.prev = 5;
                    _context.t0 = _context['catch'](0);

                    console.error(_context.t0);
                    process.exit(1);

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this, [[0, 5]]);
}))();