/*
    缓存代理
 */

var mult = function () {
  console.log('开始计算乘积')
  var a = 1
  for (var i = 0, l = arguments.length; i < l; i++) {
    a *= arguments[i]
  }
  console.log(a)
  return a
}

var proxyMult = (function () {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = mult.apply(this, arguments)
  }
})()

proxyMult(1, 2, 3, 4)
proxyMult(1, 2, 3, 4)