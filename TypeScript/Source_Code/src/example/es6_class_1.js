// console.log('es6')
// class Point {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     getPosition() {
//         return `${this.x}-${this.y}`
//     }
// }
// const p1 = new Point(1, 2)
// console.log(p1)
// console.log(p1.getPosition())
// console.log(p1 instanceof Point)  //true
// console.log(p1.hasOwnProperty('x')) //true
// console.log(p1.hasOwnProperty('getPosition')) //false
// console.log(p1.__proto__.hasOwnProperty('getPosition')) //true

// get set 修饰变量的同名函数
// var info={
//     _age:18,
//     set age(newValue){
//         if(newValue>18){
//             console.log('大于18')
//         }else{
//             console.log('小于18')
//         }
//     },
//     get age(){
//         console.log('get age 并且返回了age的值')
//         return this._age
//     }
// }
// console.log('info.age,',info.age)
// info.age=17
// info.age=19
//
// class Info{
//     constructor(age){
//         this._age=age
//     }
//     set age(newAge){
//         console.log('new age is :'+newAge)
//         this._age=newAge
//     }
//     get age(){
//         return this._age
//     }
// }
// const infos=new Info(18)
// infos.age=17
// console.log(infos.age)


// 定义class方式
// class Infos {
//     constructor() {}
// }
// const Infos = class {
//     constructor() {}
// }
// const testinfo = new Infos()

//
// function testFunc(){

// }
// console.log(testFunc.name)
//  class Point{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     getPosition(){
//         return `${this.x}-${this.y}`
//     }
//     static getClassName(){
//         return Point.name
//     }
// }
// const p=new Point(1,2)
// console.log(p.getPosition())
// console.log(Point.getClassName)

// es6中的函数的name属性是函数的名称
//  class Point{
//     constructor(x,y){
//         this.x=x
//         this.y=y
//     }
//     getPosition(){
//         return `${this.x}-${this.y}`
//     }
//     static getClassName(){
//         return Point.name
//     }
// }
// const p=new Point(1,2)
// // console.log('p.getClassName,',p.getClassName())
// console.log('Point.getClassName,',Point.getClassName())

//es6静态属性和静态方法 ，实例不能继承。仅类自身可以调用
// class Point{
//     constructor(){
//         this.x=0
//     }
// }
// 这里是class的静态属性，不能被实例继承
// Point.y=2
// const p=new Point()
// console.log(p.x)

// console.log(p.y)

//私有方法和属性
// class Point{
//     func1(){

//     }
//     //——命名，表示为私有方法
//     _func2(){

//     }

// }

// 实现一个私有方法
const _func2=()=>{}
// class Point{
//     //封装模块，不暴露
//     func1(){
//         _func2.call(this)

//     }

// }
// const p=new Point()
// p._func2()

//symbol实现私有方法

//a.js
// const func1 = Symbol('func1')
// export default class Point {
//     static[func1]() {

//     }
// }
// //b.js
// import Point from './a.js'
// const p = new Point()
// console.log(p) //无法打印

// 新提案中，#实现私有属性
// class Point{
//     #ownProp=12
// }

// ES5 new.target 表示构造函数
function Point(){
    console.log(new.target)

}
const p=new Point()
const p2=Point()
 // ES6
// class Point {
//     constructor() {
//         console.log(new.target)
//     }
// }
// const p3 = new Point()

// class Parent{
//     constructor(){
//         console.log(new.target)
//         // if(new.target===Parent){
//         //     throw new Error('在父类中不能实例化')
//         // }
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super()
//     }
// }
// const c=new Child()