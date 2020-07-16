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
//用户规则
const userSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true
   }
});
//文章规则
const postSchema = new mongoose.Schema({
   title:{
       type:String
   },
   author:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User'
   }
});
//集合规则创建集合构造函数
//文章集合
const Post = mongoose.model('Post', postSchema)
//用户集合
const User = mongoose.model('User', userSchema)
// User.create({name:'it'}).then(result=>{console.log(result)})
// Post.create({title:'123',author:'5e7ed737e07248379c96e969'}).then(result=>{console.log(result)})
Post.find().then(result=>{console.log(result)})
Post.find().populate('author').then(result=>{console.log(result)})

