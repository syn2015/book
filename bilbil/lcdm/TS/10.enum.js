// 不需要等号
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
;
console.log(Days);
console.log("=======================================================");
console.dir(Days);
// 
console.log("取值：");
console.log("=======================================================");
console.log('取出索引：', Days['sun']);
console.log('取出对象：', Days[0]);
var dayIndex = Days.sun;
console.log(dayIndex);
var dayObject = [Days.sun, Days.mon];
console.log(dayObject);
