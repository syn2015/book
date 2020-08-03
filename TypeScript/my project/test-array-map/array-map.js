"use strict";
// const arrayMap=(array:any[],callback:(item:any,index:number,arr:any[])=>any):any[]=>{
//     let i=-1
//     const len=array.length
//     let resArray=[]
//     while(++i <len){
//         resArray.push(callback(array[i],i,array))
//     }
//     return resArray
// }
var arrayMap = function (array, callback) {
    var i = -1;
    var len = array.length;
    var resArray = [];
    while (++i < len) {
        resArray.push(callback(array[i], i, array));
    }
    return resArray;
};
module.exports = arrayMap;
