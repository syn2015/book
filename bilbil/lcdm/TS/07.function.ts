//js
// 函数声明
function sum(x, y) {
    return x + y;
}
// 函数表达式
let mySum = function (x, y) {
    return x + y
}

//TS
function sumTS(x:number,y:number):number{
    return x+y;
}
let sumTScript=function (x:number,y:number):number {
    return x+y;
}
let sumTtypeScript=(x:number,y:number):number=>{
    return x+y;
}
sumTS(1,2);
// sumTS(1,true)
// 参数的数量同样有显示
// sumTS(1,2,3);

