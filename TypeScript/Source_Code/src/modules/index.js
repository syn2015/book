//import 会优先导入，不会重复导入，会合并多次导入

// export是动态引入的
// import { time} from './b'
// setInterval(()=>{
//     console.log(time)
// },1000)


import {name as nameProp,age,info} from './c'
console.log(nameProp,age)
// nameProp='llll'
console.log(nameProp,age)
// 尝试修改变量age
// age=11


//可以修改对象
// info.name='haha'
// console.log(info)
// import func from './d'
// func()
// import {Function as func} from './d'

// func()
// import str from './d'
// console.log(str)


//提案新特性：动态加载
// const status=0
// if(status){
//     import('./a')
// }else{
//     import('./b')
// }

// ES6 * 
import * as infoa from './a.js'
console.log('a.js,',infoa)

//node模块
// nodejs遵循commonJS规范
// 一种内置模块
// 一种自定义模块
// exports

// module.exports
//require()引入
