"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var inquirer = require('inquirer');

module.exports =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(command) {
    var _ref2, packages;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return inquirer.prompt([{
              type: 'input',
              name: 'packages',
              message: 'Exclude a subset of packages when running the bootstrap command? Takes glob, for example: component-*',
              "default": false
            }]);

          case 2:
            _ref2 = _context.sent;
            packages = _ref2.packages;

            if (!packages) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", "".concat(command, " --ignore ").concat(packages));

          case 6:
            return _context.abrupt("return", command);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();