object-filter
=======

creates a new object with all elements that pass the test implemented by the provided function.


```javascript
var objectFilter = require("@nathanfaucett/object-filter");


objectFilter({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key) {
        return key === "b";
    }
) === {
    b: "b"
};
```
