const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('success')
    })
    .catch((err) => {
        console.log('field：' + err)
    })
//创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});
//集合规则创建集合构造函数
const User = mongoose.model('User', userSchema)
// User.find({_id:'5c09f267aeb04b22f8460968'}).then(result=>console.log(result));
// User.findOne({_id:'5c09f267aeb04b22f8460968'}).then(result=>console.log(result));
// User.findOne({age:25}).then(result=>console.log(result));
//User.find({age:{$gt:20,$lt:40}}).then(result=>{console.log(result)})
// User.find({hobbies:{$in:['敲代码']}}).then(result=>{console.log(result)})

// User.find().select('name email').then(result=>{console.log(result)})
// User.find().sort('age').then(result=>{console.log(result)})
// User.find().skip(2).limit(2).then(result => {
//     console.log(result)
// })
// User.find().then(result => {
//     console.log(result)
// })
User.findOneAddDelete({_id:'XXXXXXXX'}).then(result=>{console.log(result)})