// import 和 export
// export导出的是接口，不是具体的值

// 错误示例
// export 'lili'
// const nameexport='lili'
// export nameexport
 
let name='lili'
let age=18
let address='beijing'
// 解构赋值导出
export{name,age,address}

// export导出函数和对象
export function func() {

}
export class A{}

// //
// function func1(){}
// class B{}
// const b=''
// 定义别名并导出
// export{
//     func1 as Function1,
//     B as ClassB,
//     b as StringB,
//     b as String
// }

document.title='lili'
