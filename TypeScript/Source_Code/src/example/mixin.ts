
// 对象的混入
// interface ObjectA{
//     a:string
// }
// interface ObjectB{
//     b:string
// }

// let Aa:ObjectA={
//     a:'a'
// }
// let Bb:ObjectB={
//     b:'b'
// }

// let Ab=Object.assign(Aa,Bb)
// console.log('Ab,',Ab)

// 类的混入

// class AA{funcA(){console.log('here')}}
// class BB{funcB(){}}

// const mixins=(target,from)=>{
//     Object.getOwnPropertyNames(from).forEach(key=>{
//         console.log(key)
//         target[key]=from[key]
//     })
// }
// mixins(BB.prototype,AA.prototype)
// const b=new BB()
// console.log(b)
// b.funcA()

//
class ClassAa{
    public isA:boolean
    public funcA(){}
}
class ClassBb{
    public isB:boolean
    public funcB(){}
}
class ClassAB implements ClassAa,ClassBb{
    public isA:boolean=false
    public isB:boolean=false
    public funcA:()=>void
    public funcB:()=>void
    constructor(){}
}

function mixins(base:any,from:any[]){
    from.forEach(fromItem=>{
        // 原型对象上的属性
        Object.getOwnPropertyNames(fromItem.prototype).forEach(key=>{
            console.log(key)
            base.prototype[key]=fromItem.prototype[key]
        })
    })
}

mixins(ClassAa,[ClassAa,ClassBb])
const ab=new ClassAB()
console.log('ab,',ab)
