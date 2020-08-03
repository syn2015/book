// TS类
// class Point {
//     x: number
//     y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     getPosition() {
//         return `${this.x},${this.y}`
//     }
// }

// const point=new Point(1,2)
// console.log(point)

// class Parent{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
// }
// class Child extends Parent{
//     constructor(name:string){
//         super(name)
//     }
// }

// 三个修饰符
// public 公共的
// private 私有的，类的外部无法访问

// class Parent{
//     private age:number
//     constructor(age:number){
//         this.age=age
//     }
// }
// const p=new Parent(18)
// console.log(p)
// // console.log(p.age)
// // Parent类的内部才可以访问
// // console.log(Parent.age)
// class Child extends Parent{
//     constructor(age:number){
//         super(age)
//         // Parent类的内部才可以访问
//         // console.log(super.age)
//     }
// }

// protected 受保护的
class Parent{
    protected age:number
    constructor(age:number){
        // protected 修饰constructor 只能通过继承来实现
    // protected   constructor(age:number){
        this.age=age
    }
    protected getAge(){
        console.log(this.age)
    }
}
const p=new Parent(19)

class Child extends Parent{

    constructor(age:number){
        super(age)
        // TS中 super只能访问基类的public和protected的方法，不能访问public和protected的属性
        // console.log(super.age)
        //
        super.getAge()
    }
}
const child=new Child(19)

// readonly 只读属性
class UserInfo{
   public  readonly name:string
   constructor(name:string){
       this.name=name
   }
}
const userInfo=new UserInfo('lili')
console.log('userInfo.name,',userInfo.name)
console.log('UserInfo.name,',UserInfo.name)
console.log(userInfo)
// userInfo.name='haha'

// 参数属性,是为constructor函数中的参数前加修饰符.表明属性的类型同时把属性添加到实例上

// class AClass{
//     constructor(public name:string){}
// }

// const aclass=new AClass('lili')
// console.log('aclass.name,',aclass.name)

// 静态属性，实例不会继承静态属性和方法

class ParentStatic {
    public static age: number = 18
    // private static age: number = 18
    public static getAge() {
        return ParentStatic.age
    }
    constructor() { }
}
const pStatic = new ParentStatic()
// console.log(pStatic.age)
// console.log(pStatic.getAge())
console.log(ParentStatic.age)
console.log(ParentStatic.getAge())

// 可选属性
// class Info{
//     public name:string
//     public age?:number
//     constructor(name:string,age?:number,public sex?:string){
//         // constructor(name:string,age?:number, sex?:string){
//         this.name=name
//         this.age=age
//     }
// }
// const info1=new Info('lili')
// const info22=new Info('lili',18)
// console.log("info22,",info22)

// 存取函数
class Info{
    public name:string
    public age?:number
    private _infoStr: string
    constructor(name:string,age?:number,public sex?:string){
        this.name=name
        this.age=age
    }
    get InfoStr(){
        return `${this.name}:${this.age}`
    }
    set InfoStr(value){
        console.log(`setter:${value}`)
        this._infoStr=value
    }
}
// const info11=new Info('lili')
// const info21=new Info('lili',18)
const info4=new Info('lili',18,'man')
// console.log(info21)

// info4.infoStr='lili:18'
console.log(info4.InfoStr)

// 抽象类,只能继承不能实现
// abstract class People {
//     constructor(public name: string) { }
//     public abstract printName(): void
// }
// // const p1=new People()

// class Man extends People {
//     constructor(name: string){
//         super(name)
//         this.name=name
//     }
//     public printName(){
//         console.log(this.name)
//     }
// }
// const m=new Man('lili')
// m.printName()

// abstract 可以修饰属性和读取器；set函数不能标记返回值类型;get函数需要参数类型和返回值类型
// abstract class People{
//     abstract _name:string
//     abstract get insideName():string
//     abstract set insideName(value:string)
// }
// class PP extends People{
//     public _name:string
//     public insideName:string
// }
class People{
    constructor(public name:string){}
}
let pp=new People('lili')
class Animal{
    constructor(public name:string){}
}
pp=new Animal('haha')

// 接口
interface FoodInterface{
    type:string
}
// 类实现接口implements；static修饰以后，只能由类的内部访问。实例不能继承
class FoodClass implements FoodInterface{
     public  type: string;
}

//
class A{
    // protected，只能在继承类的子类中访问
    protected name:string
}
interface I extends A{}

// class BB implements I{
//     public name:string
// }

class B extends A implements I{
    public name:string
}

// 
const create = <T>(c: new () => T): T => {
    return new c()
}
class Infos {
    public age!: number
    constructor(){
        this.age=18
    }
}
console.log(create<Infos>(Infos))
console.log(create<Infos>(Infos).age)
// console.log(create<Infos>(Infos).name)