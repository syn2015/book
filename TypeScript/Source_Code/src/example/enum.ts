// 默认从0开始,可以是number和string类型
// enum Status{
//     Uploading,
//     Success,
//     Failed
// }
// console.log(Status.Uploading)
// // console.log(Status['Success'])
// console.log(Status.Success)
// enum Status{
//     Uploading,
//     Success=2,
//     Failed
// }
// const test=1
// const getInfo=()=>{
//     return 2
// }
// enum Status{
//     Uploading,
//     Success=getInfo(),
//     Failed=5
// }
// console.log(Status.Uploading)
// console.log(Status.Success)
// console.log(Status.Failed)
// // console.log(Status['Success'])
// console.log(Status)

// 字符串枚举值
enum MEssage{
    Error='Sorry ,error',
    Success='Yes,Success',
    Failed=Error
}
console.log(MEssage.Error)
console.log(MEssage.Failed)
console.log(MEssage)

// 异构枚举,既包含number又包含string
enum Result{
    Failed=0,
    Success='success'
}

enum enumAnimals{
    Dog=1,
    Cat=2
}
// 枚举作为类型来使用
interface Dog{
    type:enumAnimals.Dog
}
const enumdog:Dog={
    type:enumAnimals.Dog
}
//
enum Start{
    Off,
    On
}
// 枚举作为类型来使用
interface Lights{
    status:Start
}
// const light:Lights={
//     status:Animals.Dog
// }

// enum作为编译为JS对象（真实存在的）
const enum Animals{
    Dog=1
}
const dog=Animals.Dog
// 编译后的结果：var dog = 1 /* Dog */;
