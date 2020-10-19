//genericity class
// 调用的类型决定了输出的类型
function createArray<T,U>(length:number,value:T,value2:U):Array<T|U> {
    let result:T[]=[];
    for (let i = 0; i < length; i++) {
         result[i] = value;
        
    }
    return result;
}
interface CreateArrayFn{
    <T>(length,number,value:T):Array<T>;
}
let createArray2:CreateArrayFn=function createArray<T,U>(length:number,value:T,value2:U):Array<T|U> {
    let result:T[]=[];
    for (let i = 0; i < length; i++) {
         result[i] = value;
        
    }
    return result;
}