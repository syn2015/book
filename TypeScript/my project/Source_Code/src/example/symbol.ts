// symbol,独一无二的值
const symbol=Symbol()
console.log(symbol)
const symbol2=Symbol()
console.log(symbol2)
//
// console.log(symbol === symbol2)

const s3=Symbol('sym')
console.log(s3)
const s4=Symbol('sym')
console.log(s4)
// console.log(s3 === s4)

// const s5=Symbol({a:1})
// console.log(s5)


// symbol类型不能和number做运算，可以转换为string或Boolean

// s4+1
console.log(s4.toString())
console.log(Boolean(s4))

// symbol作为属性名，访问方式对象[symbol的属性名]
let prop ='name'
const objname={
    name:'lili',
    [`my${prop}is`]:'lili'
}
console.log('objname,',objname)

const s5=Symbol('name')
const info2={
    [s5]:'lili',
    age:18
}
console.log('info2,',info2)
// 访问symbol属性名的方式
console.log('symbol访问，',info2[s5])

// 无法打印出symbol的属性名，包括Object.keys(对象),for...in 循环，Object.getOwnPropertyNames(对象),JSON.stringify(js数组或对象)
for (const key in info2) {
    if (info2.hasOwnProperty(key)) {
       console.log('info2的属性，',key)
    }
}
console.log('Object.keys()方式，',Object.keys(info2))

console.log('Object.getOwnPropertyNames()方式，',Object.getOwnPropertyNames(info2))
console.log('JSON.stringify(),',JSON.stringify(info2))

// 可以访问到Symbol作为属性名的，Object.getOwnPropertySymbols(对象)和Reflect.ownKeys(对象)

console.log('Object.getOwnPropertySymbols(),',Object.getOwnPropertySymbols(info2))

console.log('Reflect.ownKeys(),',Reflect.ownKeys(info2))

//

// Symbol.for()
// Symbol.keyFor(),获取symbol的标识


const s8=Symbol.for('lili')
const s9=Symbol.for('lili')
//  console.log(s8 === s9)
// console 下 s8 === s9  返回true
console.log('Symbol.keyFor(),',Symbol.keyFor(s8))


// ES6，11个内置的symbol值，指向JS内部的属性和方法
// instanceof 判断时，指向Symbol.hasInstance
// Symbol.hasInstance
const objHas={
    [Symbol.hasInstance] (otherObj: any){
        console.log(otherObj)
    }
}

console.log({a:'a'} instanceof (objHas as any) )
// 可读写的Boolean值
// Symbol.isConcatSpreadable
let arrArr=[1,2]
console.log([].concat(arrArr, [3,4]))
console.log(arrArr[Symbol.isConcatSpreadable])
arrArr[Symbol.isConcatSpreadable]=false
console.log([].concat(arrArr,[3,4]))
console.log(arrArr[Symbol.isConcatSpreadable])


//
class C extends Array{
    constructor(...args){
        super(...args)
    }
    static get [Symbol.species](){
        return Array
    }
    getName(){
        return 'lili'
    }
}
const c=new C(1,2,3)
const a=c.map(item=>item+1)
console.log('a,',a)
console.log(a instanceof C)
console.log(a instanceof Array)

// Symbol.match
// Symbol.replace Symbol.search Symbol.split

let objMatch={
    [Symbol.match](string){
        console.log(string.length)
    },
    [Symbol.split] (string){
        console.log('split,',string.length)
    }
}
'abcde'.match(objMatch as RegExp)
'abcde'.split(objMatch as RegExp)

// Symbol.iterator
let obj4:unknown={
    [Symbol.toPrimitive] (type){
        console.log(type)
    }
}
// const res=(obj4 as number)++
const res=`abc${obj4}`

// Symbol.toStringTag
let obj5={
    // [Symbol.toStringTag]:'lili'
    get [Symbol.toStringTag](){
        return 'lili'
    }
}

console.log(obj5.toString())

// Symbol.unscopables
// const obj6={
//     a:'a',
//     b:'b'
// }
// with(obj6){
//     console.log(obj6)
//     console.log(a)
//     console.log(b)
// }

//
console.log(Array.prototype[Symbol.unscopables])
