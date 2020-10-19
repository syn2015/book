var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class,object,oop,encapsulation,inheritance,getter&setter,modifiers,abstract class,interfaces
// es6 class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "my name is " + this.name;
    };
    return Animal;
}());
var aanimal = new Animal('jack');
console.log(aanimal.sayHi()); // my name is jack;
//  inheritance animal class
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'meow,' + _super.prototype.sayHi.call(this); // 调用父类的sayhi()
    };
    return Cat;
}(Animal));
var canimal = new Cat("tom"); // tom
console.log(canimal.sayHi()); // meow, my name is tom
// 使用static修饰的方法是静态方法，不需要实例化，直接通过类来调用。实例化以后再调用静态类会出现编译错误
// typescript,access modifiers:public,private,protected;
// typescript 编译后的代码中，没有限制private属性再外部的可访问性
// 参数属性：定义类的属性的同时给属性赋值；readonly，只读属性
