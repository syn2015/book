// 合并接口
// interface InfoInter{
//     name:string
// }
// interface InfoInter{
//     age:number
// }
// let infoInter:InfoInter
// infoInter={
//     name:'lili',
//     age:18
// }

// 合并接口 定义非函数成员，命名不重复

// interface InfoInter{
//     name:string
// }
// interface InfoInter{
//     name:number
// }
// let infoInter:InfoInter
// infoInter={
//     // name:'lili',
//    name:'haha'
// }

// 接口里的函数成员，声明合并以后，同名函数视为重载
interface InfoInter {
    name: string,
    // 同名函数
    getRes(input:string):number
}
interface InfoInter {
    name: string,
    // 同名函数
    getRes(input:number):string
}
let infoInter: InfoInter
infoInter = {
    name: 'lili',
    getRes(text:any):any{
        if(typeof text==='string'){return text.length}
        else{return String(text)}
    },
}
console.log(infoInter.getRes('123'))


// 同名命名空间
// namespace Validations{
//     // export后，同名命名空间合并后可以访问
//    export const numberReg=/^[0-9]+$/
//     // const numberReg=/^[0-9]+$/
//     export const checkNumber=()=>{}
// }
// namespace Validations{
//     console.log(numberReg)
//     export const checkLetter=()=>{}
// }

// 命名空间和类合并：类的定义必须在命名空间之前，合并后，相当于在类的基础上添加静态的命名空间里导出的属性

class Validations{
    constructor(){}
    public checkType(){}
}
namespace Validations{
    export const numberReg=/^[0-9]+$/
}
console.dir(Validations.numberReg)

// 命名空间和函数合并：函数的定义放在命名空间之前

function countUp(){
    countUp.count++
}
namespace countUp{
    export let count=0
}
console.log(countUp.count)
countUp()
console.log(countUp.count)
countUp()
console.log(countUp.count)

// 命名空间和枚举合并：枚举定义和命名空间定义没有定义先后的规定

enum Colors{
    red,
    green,
    blue
}
namespace Colors{
    export const yellow=3
}
console.log(Colors)


