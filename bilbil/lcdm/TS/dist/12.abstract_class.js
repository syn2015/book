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
// 抽象类：abstract class,定义抽象类和抽象方法，不能实现抽象类（new)
var Animalabstract = /** @class */ (function () {
    function Animalabstract() {
        this.name = name;
    }
    return Animalabstract;
}());
//
var Catabstract = /** @class */ (function (_super) {
    __extends(Catabstract, _super);
    function Catabstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catabstract.prototype.sayHi = function () {
        console.log('catabstract');
    };
    return Catabstract;
}(Animalabstract));
var catab = new Catabstract();
// 门的抽象类：
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
//继承Door，Door实现接口
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.open = function () {
        console.log('open');
    };
    SecurityDoor.prototype.alert = function () {
        console.log('alert');
    };
    return SecurityDoor;
}(Door));
