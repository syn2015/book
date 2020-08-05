// 定义：是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上(不能用于声明文件)。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
// 开启装饰器  "experimentalDecorators": true
// 引用多个装饰器顺序：先从上往下定义，调用顺序是先下再往上
// function setProp() {
//     return  (target) =>{ }
// }
// @setProp()
// @setName()
// @setAge()
// target

// 装饰器工厂
// function setName(){
//     console.log('get setName')
//     return (target)=>{
//         console.log('setName')
//     }
// }

// function setAge(){
//     console.log('get setAge')
//     return (target)=>{
//         console.log('setAge')
//     }
// }
// // // 使用装饰器工厂
// @setName()
// @setAge()
// class ClassDec{

// }

// 装饰器求值：类装饰器，当作函数被调用，参数为被修饰的类

// let sign = null
// function setName(name: string) {
//     return (target: new () => any) => {
//     // 类装饰器，当作函数被调用，参数为被修饰的类
//         sign = target
//         // target.name 返回类的名称
//         console.log(target.name)
//     }
// }
// // 应用装饰器
// @setName('lili')
// class ClassDec {
//     constructor() { }
// }

// console.log(sign === ClassDec)
// console.log(sign === ClassDec.prototype.constructor)

// //
function addName(constructor: new () => any) {
    constructor.prototype.name = 'lili'
}

@addName
class ClassD { }
const d = new ClassD()
// console.log(d.name)
// 定义同名接口使用声明合并来解决d.name属性
interface ClassD {
    name: string
}
console.log(d.name)

//

function classDescorator<T extends new (...args: any[]) => {}>(target: T) {
    return class extends target {
        public newProperty = 'new property'
        public hello = 'override'
    }
}
// @classDecorator
class GreeterClass {
    public property = 'property'
    public hello: string
    constructor(m: string) {
        this.hello = m
    }
}
console.log(new GreeterClass('world'))


// 方法装饰器, 三个参数：
// configurable 可配置
// writeable 可写
// enumerable 可枚举
// Object.defineProperty()方法修改上述参数

interface ObjWithAnyKeys{
    [key:string]:any
}
let obj12:ObjWithAnyKeys={}
Object.defineProperty(obj12,'name',{
    value:'lili',
    writable:false,
    configurable:true,
    enumerable:true
})
console.log(obj12.name)
obj12.name='test'
console.log(obj12)

//
// function enumerable(bool:boolean){
//     return (target:any,propertyName:string,descriptor:PropertyDecorator){
//         console.log(target,propertyName)
//         descriptor.enumerable=bool
//     }
// }
// class ClassF{
//     constructor(public age:number){}
//     @enumerable(false){
//         return this.age
//     }
// }
// const classF=new ClassF(18)
// console.log(classF)

// for(const key in classF){
// console.log(key)
// }

// function enumerable(bool:boolean){
//     return(target:any,propertyName:string,descriptor:PropertyDecorator)=>{
//         descriptor.enumerable=bool
//     }
// }
// class ClassG{
//     private _name:string
//     constructor(name:string){
//         this._name=name
//     }
//     @enumerable(false)
//     get name(){
//         return this._name
//     }
//     set name(name){
//         this._name=name
//     }
// }
// const classG=new ClassG('lili')
// for(const key in classG){
//     console.log(key)
// }

// //
// function printPropertyName(target:any,propertyName:string){
//     console.log(propertyName)
// }
// class ClassH{
//     @printPropertyName
//     public name:string
// }

// function required(target:any,propertyName:string,index:number){
//     console.log(`修饰的是${propertyName}的第${index+1}个参数`)
// }
// class ClassI{
//     public name:string='lili'
//     public age:number=18
//     public getInfo(prefix:string,@required infoType:string):any{
//         return prefix+ ''+ this[infoType]
//     }
// }
// interface ClassI{
//     [key:string]:string|number|Function
// }
// const classI=new ClassI()
// classI.getInfo('hihi','age')