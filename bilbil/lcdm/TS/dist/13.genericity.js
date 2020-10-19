//genericity class
// 调用的类型决定了输出的类型
function createArray(length, value, value2) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var createArray2 = function createArray(length, value, value2) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
