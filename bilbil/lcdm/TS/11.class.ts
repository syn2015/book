// class,object,oop,encapsulation,inheritance,getter&setter,modifiers,abstract class,interfaces
// es6 class
class Animal {
    public name;
    constructor(name) {
        this.name=name;

    }
    sayHi(){
        return `my name is ${this.name}`;
    }
}
let aanimal=new Animal('jack');
console.log(aanimal.sayHi());// my name is jack;
//  inheritance animal class
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的constructor(name);
        console.log(this.name)
    }
    sayHi(){
        return 'meow,'+super.sayHi();// 调用父类的sayhi()
    }
}
let canimal=new Cat("tom");// tom
console.log(canimal.sayHi()); // meow, my name is tom

// 使用static修饰的方法是静态方法，不需要实例化，直接通过类来调用。实例化以后再调用静态类会出现编译错误

// typescript,access modifiers:public,private,protected;
// typescript 编译后的代码中，没有限制private属性再外部的可访问性

// 参数属性：定义类的属性的同时给属性赋值；readonly，只读属性

