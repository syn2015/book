// let animal:Cat|Dog;
function isDog(animal) {
    // 类型断言：设置为确定的
    // 限制：联合类型可以断言为其中之一
    //      父类可以断言为子类
    //      任何类型可以断言为父类
    //      any可以断言为任何类型
    if (animal.swim) {
        return true;
    }
    else {
        return false;
    }
}
