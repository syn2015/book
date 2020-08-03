// const arrayMap=(array:any[],callback:(item:any,index:number,arr:any[])=>any):any[]=>{
//     let i=-1
//     const len=array.length
//     let resArray=[]
//     while(++i <len){
//         resArray.push(callback(array[i],i,array))
//     }
//     return resArray
// }
const arrayMap=<T,U>(array:T[],callback:(item:T,index:number,arr:ReadonlyArray<T>)=>U):U[]=>{
    let i=-1
    const len=array.length
    let resArray=[]
    while(++i <len){
        resArray.push(callback(array[i],i,array))
    }
    return resArray
}

export =arrayMap