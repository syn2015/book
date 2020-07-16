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
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
//集合规则创建集合构造函数
const Course = mongoose.model('Course', courseSchema)
//按照Schema函数的规则插入数据对象
const course = new Course({
    name: 'node.js基础',
    author: 'teacherNo1',
    isPublished: true
});
//保存到集合
course.save();
//创建文档的方法2
//配置对象和回调函数
Course.create({
    name: 'javascript base',
    author: 'teacherNo2',
    isPublish: true
}, (err, doc) => {
    //错误对象
    console.log(err);
    //插入的文档
    console.log(doc);
})