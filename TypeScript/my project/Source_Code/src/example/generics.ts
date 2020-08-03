console.log('generic');

const getArray = (value: any, times: number = 5) => {
    return new Array(times).fill(value)
}
console.log(getArray(5))
// console.log(getArray(1,2).map(item=>item.length))

// const getArrayT=<T>(value:T,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
// console.log('getArrayT,',getArrayT<string>("123",4).map(item=>item.length))

// 两个泛型变量T,U, 返回元祖类型 [T,U]
const getArrayTU = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
    return new Array(times).fill([param1, param2])
}
console.log(getArrayTU(1, 'a', 3))

getArrayTU(1, 'a', 3).forEach((item) => {
    console.log('item,',item)
    console.log(item[0])
    console.log(item[1])
})

// 泛型定义函数类型
// const getArrayT:<T>(arg:T,times:number)=>T[]
// getArrayT=(arg:any,times:number)=>{
//     return new Array(times).fill(arg)
// }
// getArrayT(123,3).map((item)=>item.length)

type GetArray=<T>(arg:T,times:number)=>T[]
let getArrayGet:GetArray=(arg:any,times:number)=>{
    return new Array(times).fill(arg)
}
//
interface GetArrayT<T>{
    (arg:T,times:number):T[],
    array:T[]
}

// 泛型约束

const getArrayTTArr=<T>(arg:T,times):T[]=>{
    return new Array(times).fill(arg)
}
console.log('getArrayTTArr,',getArrayTTArr([1,2,3],4))


// T类型继承了length属性，必须包含length属性
interface ValueWithLength{
    length:number
}

const getArrayTT=<T extends ValueWithLength>(arg:T,times):T[]=>{
    return new Array(times).fill(arg)
}
getArrayTT([1,2,3],4)
getArrayTT('123',3)
getArrayTT({
    length:2,
},3)


// 类型参数, keyof 索引类型

const getPropsobject=(object,propName)=>{
    return object[propName]
}
const objsobjct={
    a:'a',
    b:'b'
}
console.log('getPropsobject,',getPropsobject(objsobjct,'a'))
console.log('getPropsobject,',getPropsobject(objsobjct,'c'))


const getProps=<T,K extends keyof T>(object:T,propName:K)=>{
    return object[propName]
}
const objs={
    a:'a',
    b:'b'
}
getProps(objs,'a')
// getProps(objs,'c')
// getProps(objs,a)
