// import name=require('./c')
// console.log(name)

// // 引入1
// import moment from 'moment'
// // 引入2
// import * as momentAS from 'moment'
// console.log(moment)
// console.log(momentAS)
// // 引入3 import ... require() 是兼容export default和module.exports
// import momentReq=require('moment')
// console.log(momentReq)

// 引入命名空间
// ///<reference path="space.ts"/>
// let isLetter=Valitation.checkLetter('abc')
// console.log(isLetter)


// import 创建别名
namespace Shapes{
    export namespace Polygons{
        export class Triangle{}
        export class Squaire{}
    }
}
// import创建别名，
import Polygons=Shapes.Polygons
let triangle=new Polygons.Triangle()

// 模块导入   / 根目录  ./ 当前目录  ../ 上一级目录
// TS模块解析策略：node和classic；tsconfig.json文件中"moduleResolation":"node",
// node,是commonJS模式
// classic，是ES6的amd模式

// 模块解析，tsconfig.json文件中，baseUrl字段()和paths字段（路径映射），rootDirs字段(路径列表，编译时统一被放入到文件夹中)，typeRoots字段()



