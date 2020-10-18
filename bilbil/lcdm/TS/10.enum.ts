// 不需要等号
enum Days{sun,mon,tue,wed,thu,fri,sat};
console.log(Days)
console.log("=======================================================")

console.dir(Days)
// 
console.log("取值：")
console.log("=======================================================")
console.log('取出索引：',Days['sun'])
console.log('取出对象：',Days[0])

let dayIndex:Days=Days.sun;
console.log('定义索引：',dayIndex);
let dayObject:Days[]=[Days.sun,Days.mon];
console.log('定义新数组，类型为Days枚举',dayObject);

