//es5 
// function Food(){
//     this.type='food'
// }
// Food.prototype.getType=function(){
//     return this.type
// }
// function Vegetables(name){
//     this.name=name
// }
// Vegetables.prototype=new Food()
// const tomato=new Vegetables('tomato')
// console.log(tomato.getType())

//es6
// class Parent{
//     constructor(name){
//         this.name=name
//     }
//     getName(){
//         return this.name
//     }
//     static getNamesStatic(){
//         return this.name
//     }
// }
// class Child extends Parent{
//     constructor(name,age){
//         super(name)
//         this.age=age
//     }
// }
// const c=new Child('lili',18)
// console.log(c)
// console.log(c.getName())

// console.log(c instanceof Child) //true
// console.log(c instanceof Parent) //true
// // 子类可以继承父类的静态方法
// console.log(Child.getNamesStatic()) //child
// //Object.getPrototypeOf()获取构造函数的原型对象，获取父类
// console.log(Object.getPrototypeOf(Child)===Parent)

//super作为函数，代表父类的构造函数（仅能使用在constructor()）



//super作为对象
 //普通方法中，指向父类的原型对象，不是父类本身
//  class Parent{
//      constructor(){
//          this.type='parent'
//      }
//      getName(){
//          return this.type
//      }
//  }
//  Parent.getType=()=>{
//      return 'is parent'
//  }
//  class Child extends Parent{
//      constructor(){
//          //
//          super()
//          //代表父类的原型对象
//          console.log('constructor:'+super.getName())
//      }
//      getParentName(){
//          console.log('getParentName:'+super.getName())
//      }
//      getParentType(){
//          //getType()是父类自身的函数，super对象不能调用
//          console.log('getParentType:'+super.getType())
//      }
//  }
//  const c=new Child()
//  c.getName()
 // getType()是父类自身的函数
//  c.getType()
// c.getParentName()
// c.getParentType()

 //静态方法中，指向父类

//  class Parent{
//     constructor(){
//         this.type='parent'
//     }
//     getName(){
//         return this.type
//     }
// }
// Parent.getType=()=>{
//     return 'is parent'
// }
// class Child extends Parent{
//     constructor(){
//         super()
//         console.log('constructor:'+super.getName())
//     }
//     getParentName(){
//         console.log('getParentName:'+super.getName())
//     }
//     // 静态方法
//     static getParentType(){
//         // console.log('getParentType:'+super.getType())
//         console.log('getParentType:')
//     }
// }
// const c=new Child()
// c.getParentName()
// // c.getParentType()
// Child.getParentType()


//
// class Parent{
//     constructor(){
//         this.name='parent'
//     }
//     print(){
//         console.log(this.name)
//     }
// }

// class Child extends Parent{
//     constructor(){
//         super()
//         this.name='child'
//     }
//     childPrint(){
//         super.print()
//         //super只能作为函数或者对象来访问属性使用
//         // console.log(super)
//     }
// }
// const c=new Child()
// c.childPrint()

//prototype和__proto__

let objs=new Object()
console.log(objs.__proto__===Object.prototype)

// 子类的__proto__指向父类本身

// 子类的prorotype属性的__proto__指向父类的prototype属性
// 实例的_proto__属性的prorotype属性指向父类实例的__proto__

// 原生构造函数的继承 
// ES5的原生构造函数不能继承：Boolean，Number，String，Array，Date,Function,RegExp,Error,Object
// ES6的原生构造函数可以继承


class CustomArray extends Array{
    constructor(...args){
        super(...args)
    }
}
const arr=new CustomArray(3)
console.log('arr,',arr)
arr.fill('+')
console.log(arr)
console.log(arr.join('_'))

//ES5和ES6的继承
//ES5，先创建this然后将父类的属性和方法添加
//ES6，先从父类获取实例this，然后使用调用super把属性和方法加到this上

