// 导出接口
export interface FuncInterface{
    name:string
    (arg:number):string
}
// 导出类
export class ClassC{
    constructor(){}
}
class ClassD{
    constructor(){}
}
export {ClassD}
// 定义别名并导出
export {ClassD as ClassNameD}
export * from './b'