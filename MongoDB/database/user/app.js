//搭建网站服务器，实现客户端与服务区的同行
//连接数据库，创建用户集合，向集合中插入文档
//访问/list时候，查询所有信息
//实现路由功能，呈现列表页面
//查询数据库，展示数据
//访问/add时候，呈现表单页面，并实现添加用户信息功能
//访问/modify时候，呈现修改页面，并实现修改功能
//增加路由，呈现页面：传递ID，查询信息并展示
//实现修改功能: post请求，指定提交地址和请求方式；接收ID，查找数据库并修改.
//访问/remove，呈现用户删除功能

//将用户信息和表格HTML进行拼接，将拼接结果相应回客户端
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const mongoose = require('mongoose')
//数据库连接：27017是默认的端口
mongoose.connect('mongoDB://localhost:27017/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('mongoDB success')
    })
    .catch(() => {
        console.log('mongoDB failed')
    })
//创建集合规则
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    age:{
        type:Number,
        min:18,
        max:80
    },
    password:String,
    email:String,
    hobbies:[String]
});
//创建集合，返回集合构造函数。User集合在数据库中显示为：Users
const User = mongoose.model('User', userSchema);

//创建服务器
const app = http.createServer();
//为服务器对象添加请求事件
app.on('require', async (req, res) => {
    const method = req.method;
    //处理req.url参数为对象
    const {
        pathname,
        query
    } = url.parse(req.url, true);
    if (method == 'GET') {
        if (pathname == '/list') {
            //查询数据保存在users变量中
            let users = await User.find();

            let list = ` 
					此处是页面上半部的HTML代码
					
					`;
            users.forEach((item) => {
                list += `
					tr代码的上半部
					`;
                item.hobbies.forEach(itemChild => {
                    list += `<span>${itemChild}</span>`
                })
                list += `
					tr代码的下半部
					`;
            })
            list += `
					此处是页面下半部的HTML代码
					`;
            res.end(list);
        } else if (pathname == '/add') {
            let add = `此处是/add的页面代码`;
            res.end(add)
        } else if (pathname == '/modify') {
            await User.findOne({
                _id: query.id
            })
            let hobbies = ['爱好1', '爱好2']


            let modify = `此处是/modify页面代码的上半部分`;
            hobbies.forEach(item => {
                //
                let isHobby = user.hobbies.includes(item);
                if (isHobby) {
                    modify += `
							<label class="checkout-inline">
								<input type='checkbox' value='${item}' name='hobbies'                                   checkout > 
								${item}
							</label>
							`;
                } else {
                    modify += `
	                       <label class="checkout-inline">
								<input type='checkbox' value='${item}' name='hobbies'                                   checkout > 
								${item}
							</label>
							`;

                }


            })
            modify += `此处是/modify页面代码的下半部分`
            res.end(modify);
        } else if (pathname == '/remove') {
            await User.findOneAndDelete({
                _id: query._id
            })
            res.writeHead(301, {
                Location: '/list'
            })
            res.end();

        }
    } else if (method == 'POST') {
        if (pathname == '/add') {
            //接收提交信息
            let formData = '';
            req.on('data', param => {
                formData += param;
            })
            req.on('end', async () => {
                let user = querystring.parse(formData)
                //接收信息添加到数据库
                await User.create(user);
                //页面重定向
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();

            })
        } else if (pathname == '/modify') {
            //既有get,又有post请求
            let formData = '';
            req.on('data', param => {
                formData += param;
            })
            req.on('end', async () => {
                let user = querystring.parse(formDat)
                await User.updateOne({
                    _id: query.id
                }, user);
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            })
        }
    }


})