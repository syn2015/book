// 布尔类型
// let bool:boolean= false
let bool:boolean
bool =true
// bool=123

// number类型

let Num:number =123
// Num='123'
// 依次是二进制，八进制，十六进制
Num=0b1111011
Num=0o173
Num=0x7b

// 字符串
let str:string
str='abc'
str="abc"
str=`${Num}`
console.log('str是：',str)

// 数组写法一
let arr:number[]
arr=[5,2]
// 数组写法二
let arr1:Array<number>
arr1=[1,2]

// 联合类型,string或number联合数组
let arr3:(string|number)[]
// 要么是string类型或number类型的数组
// let arr3:string|number[]
arr3=[5,'1']

// 元祖类型,固定长度固定位置固定类型
// 2.6版本前，越界元素可以是列举的类型之一
let tuple:[string,number,boolean]
// tuple=[2,true,'1']
tuple=['1',2,true]

// 枚举值

enum Roles{
    SUPER_ADMIN,
    ADMIN=9,
    USER
}
console.log(Roles)

// any类型，任何类型
let any:any
any=1
any='1'
any=true
// 数组元素可以是any类型
const any2:any[]=[1,'a']

// void类型，无类型，可以赋值给void为undefined或null
// // "noImplicitAny": true
const consoleText=(Text:string):void=>{
    console.log(Text);
   // return void
}
consoleText('123')
let v:void
v=undefined
// "strictNullChecks": true
// v=null



// null和undefined只能赋值给自身类型
let u:undefined
u=undefined
// u=null
let n:null
n=null
// n=undefined


// never类型，永远不存在的类型，任何类型的子类型（never可以赋值给任何类型，never除了自身没有子类型）
// 例如，抛错的函数，死循环
// const errorFunc=(message:string):never=>{
//     throw new Error(message)
// }

// const infiniteFunc=():never=>{
//     while(true){}
// }

// let neverVariable=(()=>{
//     while(true){}
// })()
// neverVariable=123


// object类型，存储内存的地址引用
let obj={
    name:'nnnn'
}
let obj2=obj
obj2.name='NNNN'
console.log('obj,',obj)

function getObject(obj:object):void{
    console.log(obj)
}
getObject(obj2)

// 类型断言

// const getlength= (target:string|Number) :Number=>{
//     if(target.length || target.length===0){
//         return target.length
//     }else{
//         return target.toString().length
//     }
// }
//
// 类型断言写法1：<string>target
// 类型断言写法2：(target as string) jsx的写法
// 自定义类型保护
const getlength= (target:string|Number) :Number=>{
    if((target as string).length || (target as string).length===0){
        return (target as string).length
    }else{
        return target.toString().length
    }
}
console.log('getlenght(),',getlength('爱情'))

//

