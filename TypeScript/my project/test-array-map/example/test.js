"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/array-map");
console.log(arrayMap([1, 2], function (item) {
    return item + 2;
}));
