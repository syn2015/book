// es5
function addes5(arg1:number,arg2:number):number{
    return arg1+arg2
}
// es6
const addes6=(arg1:number,arg2:number)=>arg1+arg2

//
let add:(x:number,y:number)=>number
let arg3=3

add=(arg1:number,arg2:number):number=>arg1 + arg2+arg3



// 接口函数
type Add = (x:number,y:number) =>number

// type isString=string
// let addFuncType: Add
// addFuncType=(arg1:number,arg2:number)=>arg1+arg2

// 可选参数，在TS中必须在其他参数的最后面；在JS中，可选参数传参时，需要undefined占位
let addFuncType
addFuncType=(arg1:number,arg2:number)=>arg1+arg2
// addFuncType=(arg1,arg2,arg3)=>arg1+arg2+(arg3?arg3:0)
type AddFunction=(arg1:number,arg2:number,arg3?:number)=>number
let addFunction:AddFunction
addFunction=(x:number,y:number)=>x+y
addFunction=(x:number,y:number,z:number)=>x+y+z

// 参数默认值
let addFunctionXY=(x:number,y:number =3)=>x+y
// addFunctionXY(1,'3')
// console.log(addFunctionXY(1))

// slice方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
// function handleData(){
//     if(arguments.length===1){
//         return arguments[0]*2
//     }else if(arguments.length===2){
//         return arguments[0]*arguments[1]
//     }else {
//
//         return Array.prototype.slice.apply(arguments).join('_')
//     }
// }

// TS中参数
// const handleData=(arg1:number,...args:number[])=>{
//     // ...
// }
let objFun={
    a:'a',
    b:'b'
}
let obj2Fun={
    c:'c',
    ...objFun
}
console.log('obj2Fun,',obj2Fun)

// 函数的重载,只能使用function定义;同名函数有不同的参数和返回值
function handleData(x:string):string[]
function handleData(x:number):number[]
// 函数实体
function handleData(x:any) {
    if(typeof x==='string'){
        return x.split('')
    }else {
        return x.toString().split('').map(item=>Number(item))
    }
}
handleData('abc')
handleData(123)