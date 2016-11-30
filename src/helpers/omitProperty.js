module.exports = function (property, obj) {
    return Object.keys(obj).reduce((memo, key) => {
        if (key !== property) {
            memo[key] = obj[key];
        }
        return memo;
    }, {});
};