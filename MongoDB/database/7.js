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
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入title'],
        minlength: [2, 'title不小于2'],
        maxlength: [5, 'title不大于5'],
        trim: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: {
            values: ['html', 'javascript', 'css', 'node.js'],
            message: '不符合列举值'
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length > 4
            },
            message: '传入的值不符合验证规则'
        }
    }
});
//集合规则创建集合构造函数
const Post = mongoose.model('Post', postSchema)
Post.create({
        title: 'aa',
        age: 60,
        category: 'java',
        author: 'bd'
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        //错误对象
        const err = error.errors;

        for (var attr in err) {
            //打印错误信息
            console.log(err[attr]['message']);
        }
    })