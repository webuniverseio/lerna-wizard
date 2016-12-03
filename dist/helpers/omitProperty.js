"use strict";

module.exports = function (property, obj) {
    return Object.keys(obj).reduce(function (memo, key) {
        if (key !== property) {
            memo[key] = obj[key];
        }
        return memo;
    }, {});
};