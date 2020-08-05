// T&U 交叉类型
const mergeFunc=<T,U>(arg1:T,arg2:U):T&U=>{
    let res={} as T&U
    res=Object.assign(arg1,arg2)
    return res
}
console.log(mergeFunc)
console.log(mergeFunc({a:'a'},{b:'b'}))


// 联合类型 type1|type2|type3
const getLengthFunc=(content:string|number):number=>{
    if(typeof content==='string'){
        return content.length
    }else{
        return content.toString().length
    }
}
// console.log(getLengthFunc(false))

// 类型保护，类型断言
const valueList = [123, 'abc']
const getRandomValue = () => {
    // 0-10之间的数字
    const number = Math.random() * 10
    if (number < 5) return valueList[0]
    else { return valueList[1] }
}
const item = getRandomValue()
console.log('getRandomValue,',item)

// 使用类型保护，适用于复杂类型判断
function isString(value:number|string):value is string{
    return typeof value==='string'
}
if(isString(item)){
    console.log(item.length)
}else{
    console.log(item.toFixed())
}
// 使用类型断言

// if((item as string ).length){
//     console.log((item as string).length)
// }else{
//     console.log((item as number).toFixed())
// }

// typeof类型保护
// typeof 仅仅适用于===或！==情况，不适用于(typeof item).includes('string')是错误的
// typeof适用于 string ,number,boolean,symbol中的一种
// includes('包含的字符串')方法，字符串的包含方法
if(typeof item==='string'){
    console.log(item.length)
}else{
    console.log(item.toFixed())
}

// instanceof 类型保护
class CreatedByClass1{
    public age=18
    constructor(){}
}
class CreatedByClass2{
    public name='lili'
    constructor(){}
}
function getRandomItem(){
    return Math.random()<0.5?new CreatedByClass1():new CreatedByClass2()
}
const item1=getRandomItem()
if(item1 instanceof CreatedByClass1){
    console.log('CreatedByClass1,',item1.age)
}else{
    console.log('CreatedByClass2,',item1.name)
}

// null和undefined,是任何类型的子类型
// let values='123'
// values=undefined

// string|undefined string|null

const sumFunc=(x:number,y?:number)=>{
    return x+(y||0)
}

const getlengthFunction=(value:string|null):number=>{
    // if(value===null){return 0}
    // else{return value.length}
    // 效果等同于以上两句
    return (value||'').length
}
// 类型断言，！取反
function getSplicedStr(num:number|null):string{
    function getRes(prefix:string){
        return prefix+num!.toFixed().toString()
    }
    num=num||0.1
    return getRes('lili-')
}
console.log(getSplicedStr(1.2))

// 类型别名 type定义
type TypeString=string
// let str2:string
// let str3:TypeString
type PositionType<T>={x:T,y:T}
const position1:PositionType<number>={
    x:1,
    y:-1
}
const position2:PositionType<string>={
    x:'left',
    y:'right'
}
// 类型由本身类型决定，形成一个树状解构
type ChildSs<T>={
    current:T,
    child?:ChildSs<T>
}
// 一个嵌套解构
let ccc:ChildSs<string>={
    current:'first',
    child:{
        current:'second',
        child:{
            current:'third'
        }
    }
}

// 只能在对象属性中引用类型别名自身
// type ChildSs=ChildSs[]

// 为接口使用类型别名，不可以使用extends和implement
type Alias={
    num:number
}
interface Interface{
    num:number
}
let _alias:Interface={
    num:123
}
const _interface:Interface={
    num:321
}
_alias=_interface

// 字面量类型：数字和字符串
type Name='lili'
// const name1:Name='hhh'


type Direction='north'|'east'|'south'|'west'
function getDirectionFirstLetter(direction:Direction){
    return direction.substr(0,1)
}
console.log(getDirectionFirstLetter('north'))

type Age=18
interface InfoInterface{
    name:string
    age:Age
}
const _info:InfoInterface={
    name:'lili',
    age:18
}

// 枚举成员类型，作为类型的枚举符合三个条件：不带初始值的枚举成员，值为字符串字面量，值是数值字面量可以带有负号


// 可辨识高级联合要素，
// 要素1，有普通的单例类型属性，作为辨识特征(kind属性)

// 要素2，一个类型别名包含了哪些类型的联合
interface Square{
    kind:'square'
    size:number
}
interface Rectangle{
    kind:'rectangle'
    height:number,
    width:number
}
interface Circle{
    kind:'circle'
    radius:number
}
type Shape=Square|Rectangle|Circle
function getArea(s:Shape){
    switch(s.kind){
        // 通过case值，辨识出可以访问的值
        case 'square':return s.size *s.size;break;
        case 'rectangle':return s.height*s.width;break;
        // ES7 语法 ** 幂运算
        case 'circle':return Math.PI* s.radius **2;break;
    }
}
// getArea()

// 两种完整性检查
// "strictNullChecks": true, 选项开启
function getAreaNumber(s:Shape):number{
    switch(s.kind){
        case 'square':return s.size *s.size;break;
        case 'rectangle':return s.height*s.width;break;
        // ES7 语法 ** 幂运算
        case 'circle':return Math.PI* s.radius **2
    }
}
// 定义函数
function assertNever(value:never):never{
    throw new Error('Unexpected object:'+value)
}
function getAreaNever(s:Shape):number{
    switch(s.kind){
        case 'square':return s.size *s.size;break;
        case 'rectangle':return s.height*s.width;break;
        // ES7 语法 ** 幂运算
        case 'circle':return Math.PI* s.radius **2
        default :return assertNever(s)
    }
}




