"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var wizard = require('./wizard');

var spawn = require('cross-spawn-promise');

module.exports =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var options,
      command,
      spawnArgs,
      _command$split,
      _command$split2,
      _args = arguments;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _context.next = 3;
          return wizard(options);

        case 3:
          command = _context.sent;
          spawnArgs = [];
          _command$split = command.split(' ');
          _command$split2 = _toArray(_command$split);
          command = _command$split2[0];
          spawnArgs = _command$split2.slice(1);
          _context.next = 11;
          return spawn(command, spawnArgs, {
            stdio: 'inherit'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));