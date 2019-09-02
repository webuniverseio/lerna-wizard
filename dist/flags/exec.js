"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('inquirer'),
    prompt = _require.prompt;

var omitProperty = require('../helpers/omitProperty');

module.exports =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(command) {
    var _ref2, commandName, customFlags, inputPrompts, _i, _inputPrompts, promptOptions, createFlag, options, _ref3, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prompt([{
              type: 'input',
              name: 'commandName',
              message: 'Enter command that you want to execute',
              validate: function validate(value) {
                return !!value;
              }
            }]);

          case 2:
            _ref2 = _context.sent;
            commandName = _ref2.commandName;
            customFlags = [];
            inputPrompts = [{
              type: 'input',
              name: 'concurrency',
              message: 'How many threads to use when Lerna parallelizes the tasks (defaults to 4)',
              "default": '4',
              filter: function filter(val) {
                if (['0', '4'].includes(val)) {
                  return 0;
                }

                return Number(val);
              },
              createFlag: function createFlag(input) {
                return "--concurrency ".concat(input);
              }
            }, {
              type: 'input',
              name: 'scope',
              message: "\n        Scope a command to a subset of packages?\n        Specify glob, for example: toolbar-*.\n        Leave blank to skip this step.".trim().replace(/\s+/g, ' '),
              createFlag: function createFlag(input) {
                return "--scope ".concat(input);
              }
            }];
            _i = 0, _inputPrompts = inputPrompts;

          case 7:
            if (!(_i < _inputPrompts.length)) {
              _context.next = 19;
              break;
            }

            promptOptions = _inputPrompts[_i];
            createFlag = promptOptions.createFlag;
            options = omitProperty('createFlag', promptOptions);
            _context.next = 13;
            return prompt([options]);

          case 13:
            _ref3 = _context.sent;
            result = _ref3[promptOptions.name];

            if (result) {
              customFlags.push(createFlag(result));
            }

          case 16:
            _i++;
            _context.next = 7;
            break;

          case 19:
            if (!customFlags.length) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", "".concat(command, " ").concat(customFlags.join(' '), " -- ").concat(commandName));

          case 21:
            return _context.abrupt("return", "".concat(command, " -- ").concat(commandName));

          case 22:
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