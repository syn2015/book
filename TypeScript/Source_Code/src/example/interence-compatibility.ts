import { callbackify } from "util"

// 类型推论 ，类型兼容性

// let name = 'lili'
// name=123

// 多类型集合
const arrInter: (number | string)[] = [1, 'a']
// arrInter=[2,'b',false]

// 类型推论
window.onmousedown = (mouseEvent: any) => {
    console.log(mouseEvent)
}

// 类型兼容性，赋值的类型必须最低的符合要求，同时会深层次的检测是否符合要求
interface InfoInterface {
    name: string
}
let infos: InfoInterface
const b = { name: 'lili' }
const cc = { age: 18 }
const d = { name: 'lili', age: 18 }
infos = b
// infos=c
infos = d

// 函数的兼容性
const xxConst = (a: number) => 0
let yyConst = (_b: number, _c: string) => 0
// xxConst=yyConst
yyConst = xxConst

const arrs = [1, 2, 3]
arrs.forEach((item, index, array) => {
    console.log(item)
})
arrs.forEach((item) => {
    console.log(item)
})

// 参数类型的要求
const xxx = (a: number) => 0
const yyx = (_b: string) => 0
// xxx=yyx

// 可选参数和剩余参数
const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
    return callback(...arr)
}
const res = getSum([1, 2], (...args: number[]): number =>
    // reduce()两个两个的遍历元素，reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
    args.reduce((a, b) => a + b, 0)
)
console.log(res)
const res2 = getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3)
console.log('res2,', res2)
// 函数参数双向协变,禁止双向协变的选项：
let funcA = (arg: number | string): void => {

}
let funcB = (arg: number): void => { }
funcA = funcB
funcB = funcA

// 返回值类型

// let xturn=():(string|number)=>0
// let yturn=():string =>'a'
// let zturn=():boolean => false
// // yturn=xturn
// xturn=yturn
// yturn=zturn

// 函数重载,必须使用function定义
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string

function merge(arg1: any, arg2: any) {
    return arg1 + arg2
}
// merge('1,','2').length
function sumsum(arg1: number, arg2: number): number
function sumsum(arg1: any, arg2: any): any {
    return arg1 + arg2
}
// let func=merge
// func=sumsum

// 枚举
enum StatusEnum {
    on,
    off
}
let s = StatusEnum.on
s = 2
// s='0'

enum AnimalEnum {
    Dog,
    Cat
}
// enum是独立的，不能交叉使用
// s=AnimalEnum.Dog

// 类的兼容性，比较类等于比较实例的成员（constructor()函数中）
// class AnimalClass{
//     public static age:number
//     constructor(public name:string){}
// }
// class PeopleClass{
//     public static age:string
//     constructor(public name:string){}
// }
// class FoodTSClass{
//     constructor(public name:number){}
// }
// let animal:AnimalClass
// let people: PeopleClass
// let food:FoodTSClass
// animal=people
// // animal=food


// 类的private和protected
class ParentClass {
    private age: number
    // protected age:number

    constructor() { }
}
class ChildrenClass extends ParentClass {
    constructor() {
        super()
    }
}
class OtherClass {
    private age: number
    // protected age:number

    constructor() { }
}
// 子类可以赋值给父类
const children: ParentClass = new ChildrenClass()
// const other:ParentClass=new OtherClass()

// 接口当中没有定义声明，所以可以
interface Data<T> {
    // data:T
}
let data1:Data<number>
let data2:Data<string>
data1=data2