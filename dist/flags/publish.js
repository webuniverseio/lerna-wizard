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
    var _ref2, shouldCustomize, customFlags, confirmPrompts, inputPrompts, _i, _confirmPrompts, promptOptions, flagToAdd, options, _ref3, result, _i2, _inputPrompts, _promptOptions, createFlag, _options, _ref4;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prompt([{
              type: 'confirm',
              name: 'shouldCustomize',
              message: 'Would you like to customize publishing?',
              "default": false
            }]);

          case 2:
            _ref2 = _context.sent;
            shouldCustomize = _ref2.shouldCustomize;

            if (!shouldCustomize) {
              _context.next = 37;
              break;
            }

            customFlags = [];
            confirmPrompts = [{
              type: 'confirm',
              name: 'canary',
              message: "\n            Publish packages in a more granular way (per commit)? Before publishing to npm,\n            it creates the new version tag by taking the current version and appending the current git sha \n            (ex: 1.0.0-alpha.81e3b443).".trim().replace(/\s+/g, ' '),
              "default": false,
              flagToAdd: '--canary'
            }, {
              type: 'confirm',
              name: 'skipGit',
              message: "\n            Publish to npm without running any of the git commands \n            (skip committing, tagging, and pushing git changes)?".trim().replace(/\s+/g, ' '),
              "default": false,
              flagToAdd: '--skip-git'
            }, {
              type: 'confirm',
              name: 'skipNpm',
              message: "\n            Update all package.json package versions and dependency versions, \n            but not actually publish the packages to npm?".trim().replace(/\s+/g, ' '),
              "default": false,
              flagToAdd: '--skip-npm'
            }, {
              type: 'confirm',
              name: 'yes',
              message: "\n            Skip all confirmation prompts?".trim().replace(/\s+/g, ' '),
              "default": false,
              flagToAdd: '--yes'
            }];
            inputPrompts = [{
              type: 'input',
              name: 'npmTag',
              message: 'Publish to npm with custom npm dist-tag (defaults to latest)?',
              createFlag: function createFlag(input) {
                return "--npm-tag ".concat(input);
              }
            }, {
              type: 'input',
              name: 'forcePublishPackages',
              message: "\n            Force publish the specified packages? \n            Leave blank to skip this step. \n            Specify comma-separated list of packages or use * for all".trim().replace(/\s+/g, ' '),
              createFlag: function createFlag(input) {
                return "--force-publish ".concat(input);
              }
            }, {
              type: 'input',
              name: 'repoVersion',
              message: "\n            Skip the version selection prompt and use the specified version? \n            Useful for bypassing the user input prompt if you already know which version to publish.\n            Leave blank to skip this step.".trim().replace(/\s+/g, ' '),
              createFlag: function createFlag(input) {
                return "--repo-version ".concat(input);
              }
            }];
            _i = 0, _confirmPrompts = confirmPrompts;

          case 9:
            if (!(_i < _confirmPrompts.length)) {
              _context.next = 21;
              break;
            }

            promptOptions = _confirmPrompts[_i];
            flagToAdd = promptOptions.flagToAdd;
            options = omitProperty('flagToAdd', promptOptions);
            _context.next = 15;
            return prompt([options]);

          case 15:
            _ref3 = _context.sent;
            result = _ref3[promptOptions.name];

            if (result) {
              customFlags.push(flagToAdd);
            }

          case 18:
            _i++;
            _context.next = 9;
            break;

          case 21:
            _i2 = 0, _inputPrompts = inputPrompts;

          case 22:
            if (!(_i2 < _inputPrompts.length)) {
              _context.next = 34;
              break;
            }

            _promptOptions = _inputPrompts[_i2];
            createFlag = _promptOptions.createFlag;
            _options = omitProperty('createFlag', _promptOptions);
            _context.next = 28;
            return prompt([_options]);

          case 28:
            _ref4 = _context.sent;
            result = _ref4[_promptOptions.name];

            if (result) {
              customFlags.push(createFlag(result));
            }

          case 31:
            _i2++;
            _context.next = 22;
            break;

          case 34:
            if (!customFlags.length) {
              _context.next = 36;
              break;
            }

            return _context.abrupt("return", "".concat(command, " ").concat(customFlags.join(' ')));

          case 36:
            return _context.abrupt("return", command);

          case 37:
            return _context.abrupt("return", command);

          case 38:
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