interface Dog{
    name:string,
    color:string,
    isRegister:boolean
}
//实现Dog接口
let dog:Dog={
    name:'foller',
    color:'bandian',
    isRegister:true,
    // 错误实例
    // sound:Function(){
    //     console.log('sound')
    // }
}
interface Cat{
    name:string,
    color:string,
    // 接口的可选属性
    isRegister?:boolean
}
//实现Dog接口
let cat:Cat={
    name:'foller',
    color:'bandian',
    // 可选属性
    // isRegister:true,
    // 错误实例
    // sound:Function(){
    //     console.log('sound')
}
// 任意属性
interface Person {
    name:string,
    color:string,
    [propName:string]:any
}
// 实现
let person:Person={
    name:'foller',
    color:'yellow',
    hellow:{},
    //或者
    pername:{}
}
 