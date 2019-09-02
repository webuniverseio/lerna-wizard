"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('@babel/polyfill');

var _require = require('inquirer'),
    prompt = _require.prompt;

module.exports =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var params,
      _params$commandChoice,
      commandChoiceFilter,
      _params$commandMessag,
      commandMessage,
      _ref2,
      command,
      result,
      getFlags,
      code,
      message,
      customFlags,
      _ref3,
      logLevel,
      _args = arguments;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _params$commandChoice = params.commandChoiceFilter, commandChoiceFilter = _params$commandChoice === void 0 ? function (x) {
            return x;
          } : _params$commandChoice, _params$commandMessag = params.commandMessage, commandMessage = _params$commandMessag === void 0 ? 'What do you want to do?' : _params$commandMessag;
          _context.next = 4;
          return prompt([{
            type: 'list',
            name: 'command',
            message: commandMessage,
            choices: [{
              value: "bootstrap",
              name: "[bootstrap] Link together local packages and npm install remaining package dependencies"
            }, {
              value: "publish",
              name: "[publish] Publish updated packages to npm"
            }, {
              value: "updated",
              name: "[updated] Check which packages have changed since the last release"
            }, {
              value: "create",
              name: "[create] Create a new lerna-managed package"
            }, {
              value: "import",
              name: "[import] Import a package with git history from an external repository"
            }, {
              value: "clean",
              name: "[clean] Remove the node_modules directory from all packages"
            }, {
              value: "diff",
              name: "[diff] Diff all packages or a single package since the last release"
            }, {
              value: "init",
              name: "[init] Initialize a lerna repo"
            }, {
              value: "run",
              name: "[run] Run npm script in each package"
            }, {
              value: "exec",
              name: "[exec] Run a command in each package"
            }, {
              value: "ls",
              name: "[ls] List all public packages"
            }].filter(commandChoiceFilter)
          }]);

        case 4:
          _ref2 = _context.sent;
          command = _ref2.command;
          result = command;
          _context.prev = 7;
          getFlags = require("./flags/".concat(command));
          _context.next = 16;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](7);
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
            message: "What level of logs to report? On failure, \n        all logs are written to lerna-debug.log in the current working directory.".trim().replace(/\s+/g, ' '),
            "default": 'info',
            choices: ['silent', 'error', 'warn', 'success', 'info', 'verbose', 'silly']
          }]);

        case 23:
          _ref3 = _context.sent;
          logLevel = _ref3.logLevel;

          if (logLevel !== 'info') {
            customFlags.push("--loglevel ".concat(logLevel));
          }

          if (customFlags.length) {
            result = "".concat(customFlags.join(' '), " ").concat(result);
          }

          return _context.abrupt("return", "lerna ".concat(result));

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[7, 11]]);
}));