var keys = require("keys");


module.exports = objectFilter;


function objectFilter(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        results = {},
        key, value;

    while (i++ < il) {
        key = objectKeys[i];
        value = object[key];

        if (callback(value, key, object)) {
            results[key] = value;
        }
    }

    return results;
}
