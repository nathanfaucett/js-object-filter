var tape = require("tape"),
    objectFilter = require("..");


tape("objectFilter(object, callback) creates a new object with all elements that pass the test implemented by the provided function", function(assert) {
    assert.deepEquals(
        objectFilter({
            a: "a",
            b: "b",
            c: "c"
        }, function(value) {
            return value === "b";
        }), {
            b: "b"
        }
    );
    assert.end();
});
