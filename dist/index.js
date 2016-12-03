'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wizard = require('./wizard');
var spawn = require('cross-spawn-promise');
module.exports = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var command, spawnArgs, _command$split, _command$split2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return wizard(options);

                    case 2:
                        command = _context.sent;
                        spawnArgs = [];
                        _command$split = command.split(' ');
                        _command$split2 = _toArray(_command$split);
                        command = _command$split2[0];
                        spawnArgs = _command$split2.slice(1);
                        _context.next = 10;
                        return spawn(command, spawnArgs, { stdio: 'inherit' });

                    case 10:
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