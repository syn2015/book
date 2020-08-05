// const getFullName=({firstName,lastName})=>{
//     return `${firstName}-${lastName}`
// }

interface NameInfo{
    firstname:string,
    lastname:string
}
// const getFullName=({firstname,lastname}:NameInfo):string=>{
//     return `${firstname}-${lastname}`
// }
const getFullName=({firstname,lastname}:{firstname:string,lastname:string}):string=>{
    return `${firstname}-${lastname}`
}
getFullName({
    firstname:'haha',
    lastname:'lili'
})
// 多余属性
interface Vegetable{
    color?:string,
    type:string
}
const getVegetables=({color,type}:Vegetable)=>{
    return `A ${color ?(color +' '):''}${type}`
}
// 多余属性 处理1 (类型断言) 加入 {} as Vegetable
console.log(getVegetables({
    type:'tomato',
    color:'red',
    size:2
} as Vegetable))

// 多余属性 处理2 （索引签名） [prop:string]:any
// interface Vegetable{
//     color?:string,
//     type:string
//     [prop:string]:any
// }

// 多余属性 处理3 （类型兼容性）  作为一个对象赋值

const vegetableInfo={
    type:'tomato',
    color:'red',
    size:2
}
console.log(getVegetables(vegetableInfo))



//
// interface AddFunc{
//     (num1:number,num2:number)=>number
// }

// 类型别名
type AddFunc = (num1:number,num2:number) =>number
const addFunc:AddFunc=(n1,n2)=>n1+n2

// const addFunc:AddFunc=(n1,n2)=>`${n1},${n2}`

// 索引类型
// interface RoleDic{
//     [id:number]:string
// }
// const role1:RoleDic={
//     'a':'super_admin'
// }
interface RoleDic{
    [id:string]:string
}
const role2:RoleDic={
    a:'super_admin',
    1:'admin'
}
console.log('role2,',role2)

//
// const obj8={
//     123:'a',
//     '123':'b'
// }

// 接口的继承

interface Vegetables{
    color:string
}
interface Tomato extends Vegetables{
    radius:number,
    color:string
}
interface Carrot extends Vegetables{
    color:string,
    length:number
}
const tomato:Tomato={
    radius:1,
    color:'red'
}
const carrot:Carrot={
    length:2,
    color:'orange'
}

// 3.1之后支持为函数直接添加属性
interface CounterInt{
    ():void
    count:number
}
const getCounter= ():CounterInt =>{
    const c=()=>{c.count++}
    c.count=0
    return  c
}
const counter:CounterInt=getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)

