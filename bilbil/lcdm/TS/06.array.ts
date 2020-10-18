// 定义数组类型：数字
// 定义方式1：数据类型[]
let arr:number[]=[1,2];

// 错误实例：赋值和插入都需要遵循
// arr.push('1');
// 定义方式2：Array<数据类型> 类似泛型方式
let arrArr:Array<number>=[1,2,3];
// 定义方式3：  interface 接口名称{ }类似接口方式
interface NumberArray{
    [index:number]:number
}
// 实现接口
let arrInterface:NumberArray=[1,2,3];
// let arrInterfaceerror:NumberArray=[1,2,3,'4'];