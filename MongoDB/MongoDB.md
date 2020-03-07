# 数据库

![](MongoDB.png)

# MongoDB

 MongoDB compass 图形化界面

# 相关概念

## database

mongoDB可以建立多个数据库

## collection []

集合，一组数据的集合，理解为JS中的数组

## document {}

文档，一条具体的数据，理解为JS中的对象

## field 

字段，文档中属性的名称，理解为JS中的对象的属性

## Mongoose第三方包

1. 安装 ：**npm i mongoose** 
2. 启动mongoDB,**net start mongoDB**

## 数据库连接

1. **27017是mongoDB的默认端口**

2. 不用显式的创建数据库，会自动创建

   - mongoose.connect('**mongodb://localhost/playground**')

   ```javascript
   const mongoose=require('mongoose');
   mongoose.connect('mongodb://localhost/playground',{useNewUrlParser:true})
   		.then(()=>{console.log('success')})
   		.catch((err)=>{console.log('field：'+err)})
   
   ```

![](useNewUrlParser.png)

​	错误提示的解决

```javascript
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser:true})//补充新的解析器
```

​	



## 创建集合

1. 对集合设定规则,Schema函数

   - String首字母大写

   ``````javascript
   const courseSchema=new mongoose.Schema({
   	name:String,
       author:String,
       isPublished:Boolean
   })
   ``````

   

2. 创建集合，将mongoose.Schema构造函数的实例即可创建集合。

   - model函数
   - 集合首字母大写（数据库里的名称式小写+S形式）
   - **没有创建文档的情况下，默认不会创建数据库和集合**

   ``````javascript
   const Course=mongoose.model('Course',courseSchema)
   ``````

## 创建文档

1. 实际上是向集合中插入数据

   - 创建集合实例

   - 调用实例对象下的save方法将数据保存到数据库中

   - _id 是数据库的默认创建的唯一标识

     ```javascript
     const Coure=mongoose.model('Course',courseSchema)// 创建集合
     //按照Schema函数的规则插入数据对象
     const course=new Course({
         name:'node.js基础',
         author:'teacherNo1',
         isPublished:true
     });
     //保存到集合
   course.save();
     ```
     
   - **hobbies:[String]形式的规则表示数组的元素都是字符串**

2. 创建文档的另一种方式集合对象的create函数，**create(配置对象，callback)**

   ``````javascript
   //创建集合
   const Course=mongoose.model('Course',courseSchema)
   //配置对象和回调函数
   Course.create({name:'javascript base',author:'teacherNo2',isPublish:true},(err,doc)=>{
   	//错误对象
   	console.log(err);
   	//插入的文档
   	console.log(doc);
   })
   ``````

   

3. MongoDB中，两种接收异步API:

   - **create函数返回promise对象；**
   - 回调函数实现异步API

   ``````javascript
   Course.create({name:'javascript base',author:'teacherNo3',isPublish:true})
   		.then(doc=>console.log(doc))
   		.catch(err=>console.log(err))
   ``````

   

## 数据库导入数据

1. 命令    **mongoimport  -d  数据库名称  -c  集合名称  --file  要导入的数据文件**
   - 配置系统变量Path     C:\Program Files\MongoDB\Server\4.2\bin

## 查询文档

1. 根据条件查找文档，

   - **条件对象为空则查找所有文档.**find()返回文档的集合，**即返回数组**

   - **find({条件对象}),返回数组或空数组**
   - **findOne(条件对象)，默认返回当前文档的第一条文档**。**返回一个对象**

   ``````javascript
   Course.find().then(result=>console.log(result));
   ``````

   

2. 匹配大于 小于

   - $gt表示大于

     ```javascript
     Course.find({age:{$gt:20,$lt:40}}).then(result=>{console.log(result)})
     ```

     

   - $lt表示小于

   - $gte表示大于等于

   - $lte表示小于等于

   - $eq表示等于

   - **$in表示包含**

     ```javascript
     Course.find({hobbies:{$in:['敲代码']}}).then(result=>{console.log(result)})
     ```

     
     
   - $ne != (不等于)

   - $nin !in (not in)

     
     
     

   - **select（'条件字段1   条件字段2'）**

     ``````javascript
     Course.find().select('name email').then(result=>{console.log(result)})
     ``````

     

   - select(**'条件字段1  条件字段2   -字段名称'**)   -短杠前缀的字段会被忽略

     ``````javascript
     Course.find().select('name email -_id').then(result=>{console.log(result)});
     ``````

     

   - sourt(**' 排序字段'**)排序，sort(**'-排序字段'**) -短杆前缀的字段会倒序排列

     ``````javascript
     Course.find().sort('age').then(result=>{console.log(result)})
     //降序排列
     Course.find().sort('-age').then(result=>{console.log(result)})
     ``````

   - skip(指定跳过的数据数量）limit(指定限制查询的数量) 

     ```javascript
     Course.find().skip(2).limit(2).then(result=>{console.log(result)})
     ```

     

## 删除文档

1. 删除单个**findOneAndDelete({条件字段对象})**，**返回删除的文档对象**

   - 如果匹配了多个文档**，将会删除第一个匹配的文档**

   ``````javascript
   Course.findOneAddDelete({_id:'XXXXXXXX'}).then(result=>{console.log(result)})
   ``````

   

2. 删除多个deleteMany({条件对象})

   - <font color='red' >deleteMany()条件对象为空时，默认会删除当前集合下的所有文档。</font>
   - 返回值是对象：**{n:删除文档的数量，ok:删除状态码}**

   ``````javascript
   Course.deleteMany({}).then(result=>{console.log(result)})
   ``````

   


## 更新文档

1. 更新单个  **updateOne({条件对象}，{要修改成的对象}）**

   - 返回值对象：**{n:查找的数量，nModified:更新的文档数量, ok:更新状态码}**

     ``````javascript
     Course.updateOne({name:'李四'},{name:'王五'}).then(result=>{console.lgo(result)})
     ``````

     

2. 更新多个  **updateMany({条件对象}，{要修改成的对象}）**

   - **条件对象为{},表示更新所有的文档**
   - 返回值对象：**{n:查找的数量，nModified:更新的文档数量, ok:更新状态码}**

   ```javascript
   Course.updateMany({}，{name:'王五'}).then(result=>{console.log(result)})
   ```

## mongoose验证

1. 创建集合规则时，可以设置当前字段的验证规则，验证失败则输入插入失败

2. **required:true** 必传字段

   - required:[true,'自定义错误消息]

3. minlength:[数字,'自定义错误消息']

4. maxlength：[数字，‘自定义错误消息’]

5. trim：true  , 去两端空格

6. min：[] 

7. max: []

8. default字段，表示默认值

9. enum:**[列举值]**，表示列举值

   - 另一种形式

     ``````javascript
     enum:{
         values:[列举值],
         message:'自定义错误消息'
     }
     ``````

     

10. **自定义验证规则validate**

    - message,表示自定义错误信息。

    - catch函数中，参数err可以捕获自定义错误信息

    - 循环遍历参数err对象，可以捕获所有错误信息

      ``````javascript
      js
      ``````

      

## 集合关联

1. 使用id对集合进行关联

   - 

   ``````javascript
   
   ``````

   

2. 使用populate方法进行关联集合查询

   ```javascript
   
   ```

   

3. 增删改查

   ``````javascript
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
   const http=require('http');
   const url=require('url');
   const querystring=require('querystring');
   const mongoose=require('mongoose')
   //数据库连接：27017是默认的端口
   mongoose.connect('mongoDB://localhost:27017/playground',{useNewUrlParser:true})
   	.then(()=>{console.log('mongoDB success')})
   	.catch(()=>{console.log('mongoDB failed')})
   //创建集合规则
   const userSchema=new mongoose.Schema({
       
   });
   //创建集合，返回集合构造函数。User集合在数据库中显示为：Users
   const User=mongoose.model('User',userSchema);
   
   //创建服务器
   const app=http.createServer();
   //为服务器对象添加请求事件
   app.on('require', async (req,res)=>{
       const method=req.method;
       const {pathname,query}=url.parse(req.url,true);
       if(method=='GET'){
           if(pathname=='/list'){
               //查询数据保存在users变量中
              let users= await User.find();
               
               let list=` 
   					此处是页面上半部的HTML代码
   					
   					`;
               users.forEach((item)=>{
                   list+=`
   					tr代码的上半部
   					`;
                   item.hobbies.forEach(itemChild=>{
                       list+=`<span>${itemChild}</span>`
                   })
                   list+=`
   					tr代码的下半部
   					`;
               })
               list+=`
   					此处是页面下半部的HTML代码
   					`;
               res.end(list);
           }else if(pathname=='/add'){
               let add=`此处是/add的页面代码`;
               res.end(add)
           }else if(pathname=='/modify'){
               await User.findOne({_id:query.id})
               let hobbies=['爱好1','爱好2']
               
               
               let modify=`此处是/modify页面代码的上半部分`;
               hobbies.forEach(item=>{
                   //
                  let isHobby= user.hobbies.includes(item);
                   if(isHobby){
                       modify+=`
   							<label class="checkout-inline">
   								<input type='checkbox' value='${item}' name='hobbies'                                   checkout > 
   								${item}
   							</label>
   							`;
                   }else{
                       modify+=`
   	                       <label class="checkout-inline">
   								<input type='checkbox' value='${item}' name='hobbies'                                   checkout > 
   								${item}
   							</label>
   							`;
                       
                   }
                  
                   
               })
               modify+=`此处是/modify页面代码的下半部分`
               res.end(modify);
           } else if(pathname=='/remove'){
              await User.findOneAndDelete({_id:query._id})
               res.writeHead(301,{
                   Location:'/list'
               })
               res.end();
                       
           }
       }else if(method=='POST'){
           if(pathname=='/add'){
               //接收提交信息
               let formData='';
               req.on('data',param=>{
                   formData+=param;
               })
               req.on('end', async ()=>{
                   let user=querystring.parse(formData)
                    //接收信息添加到数据库
                   await User.create(user);
                   //页面重定向
                   res.writeHead(301,{
                       Location:'/list'
                   });
                   res.end();
                   
               })
           }else if(pathname=='/modify'){
               //既有get,又有post请求
               let formData='';
               req.on('data',param=>{
                   formData+=param;
               })
               req.on('end',async()=>{
                   let user=querystring.parse(formDat)
                   await User.updateOne({_id:query.id},user);
                   res.writeHead(301,{
                       Location:'/list'
                   });
                   res.end();
               })
           }
       }
       
       
   })
   
   ``````

   

   - 命令：**mongoimport -d playground -c users --file ./user.json**   导入数据

   - res.writeHead()可以重定向到指定页面 **状态码：301**

     ``````javascript
     res.writeHead(301,{
     	Location:'/list'
     })
     ``````

     

4. 改进：model文件夹

   index文件

   ``````javascript
   
   ``````

   user文件

   ``````javascript
   js
   ``````

   

#  模板引擎

1. **模板引擎是node第三方模块**

2. **art-template模板引擎**，腾讯出品

   - **npm i art-template**

   - **const  template=require('art-template');**

   - **const html=template('模板路径',数据);**

   - **返回值是拼接完成的html**

     ``````javascript
     const path=require('path');
     const template=require('art-template')
     const views=path.join(__dirname,'views','index.art');
     const html=template(views,{
         name:'张三',
         age:'20'
     })
     console.log(html);
     ``````

     

## 模板语法

1. 支持 标准语法和原始语法

   - 标准语法，让模板**更容易读写**。**{{数据}}**
   - 原始语法，具有**强大的逻辑处理能力** **<%=数据%>**

2. 输出

   **标准输出 {{ 数据}} ，原始输出，<%= 数据%>**

   ```javascript
   //标准语法
   <h2>{{value}}</h2>
   <h2>{{a?b:c}}</h2>
   <h2>{{a+b}}</h2>
   
   //原始语法
   <h2><%= value%></h2>
   <h2><%= a?b:c%></h2>
   <h2><%=a+b%></h2>
   ```

   **开启解析html代码：**

   ​	标准语法，加上@前缀  ； 原始语法,等号=改为-短杠

   ```html
   //标准语法，加上@前缀
   <h2>{{@content}}</h2>
   //原始语法,等号=改为-短杠
   <h2>
       <%- content%>
   </h2>
   ```

   

3. 条件判断

   ``````html
   //标准语法
   {{if 判断条件}}  ...显示内容...{{/if}}
   {{if 判断条件1}} 显示内容1  {{else if 判断条件2}}  显示内容2{{/if}}
   //原始语法
   <%if(value){%> 
       显示内容 
   <% }%>
       
   <%if(value1){%> 
       显示内容1 
   <%} else if(value2){%> 
       显示内容2 
   <% }else {%>
      显示内容3
   <%}%>
   ``````

   

   标准语法，

   ```html
   {{if age>20 }}
    年龄大于20
   {{else if age<15 }}
    年龄小于15
   {{else }}
     年龄不符合要求
   {{/if}}
   
   
   ```

   原始语法

   ```javascript
   <% if( age>18) {%> 
       年龄大于18
   
   <%} else if(age <15){%>
       年龄小于15
   <% } else {%>
       年龄不符合要求
   <% }%>
       
   ```

   

4. 循环

   **标准语法，{{each 数据}}  {{/each}}**

   - ​	**$index是当前索引，$value是当前值**

   ```html
   <ul>
       {{each users}}
       	<li>
               {{$value.name}}
               {{$value.age}}
               {{$value.sex}}
       	</li>
       {{/each}}
   </ul>
   
   ```

   **原始语法，<% for (){%>  <%}%>**

   ```html
   <ul>
       <% for(var i=0;i<users.length;i++){ %>
           <li>
               <%=users[i].name %>
               <%=users[i].age%>
                <%=users[i].sex%>
       	</li>
       <% } %>
   </ul>
   ```

   

5. 子模版

   - 将**公共区块抽离到单独的文件中**

   - 标准语法 :  **{{include '模板路径'}}，单标记;include后有空格**

     `````html
     {{include './header.art'}}
     `````

     

   - 原始语法 ：**<%include('模板路径')%>,include 是一个函数**

     ``````html
     <% include('./header.art') %>
     ``````

     

6. 模板继承

   ![template-inherit](template-inherit.png)

   - **模板继承可以将网站HTML骨架抽离到单独的文件中，其他页面模板可以继承骨架文件**

   - **block标记，预留位置。根据名称来区分不同的block标记。是一个双标签**

   - **extend 标记来继承模板**

     layout.art文件

     ``````html
     <head>
         {{block 'link'}} {{/block}}
     </head>
     <body>
         {{block 'content'}} {{/block}}
     </body>
     ``````

     继承的文件

     ```html
     //继承骨架
     {{extend './common/layout.art'}}
     
     //填充content的block标记
     {{block 'content'}}
     <p>
         {{msg}}
     </p>
     {{/block}}
     
     //填充link的block标记
     {{block 'link'}}
     <link rel='stylesheet' type='text/css' href='./main.css'/>
     {{/block}}
     ```

     

7. 模板配置

   - 导入变量

     **template.defaults.imports.变量名=变量值;**

     ```javascript
     //安装时间模块   npm i dateformat ,导入const dateFormat=require('dateformat')
     //dateFormat(时间,'时间的格式')
     const template=require('art-template')
     const path=require('path');
     const dateFormat=require('dateformat');
     
     const views=path.join(__dirname,'views','index.art');
     //导入模板变量
     template.defaults.imports.dateFormat=dateFormat
     const html=template(views,{
         time:new Date()
     })
     console.log(html);
     
     ```

     ```javascript
     //调用变量
     {{dateFormat(time,'yyyy-mm-dd')}}// 显示 ‘2019-10-10’
     ```

     

   - 配置根目录

     **template.defaults.root=模板目录**

     配置模板后缀:     **template.defaults.extname='.art';**

     ``````javascript
     //安装时间模块   npm i dateformat ,导入const dateFormat=require('dateformat')
     //dateFormat(时间,'时间的格式')
     const template=require('art-template')
     const path=require('path');
     const dateFormat=require('dateformat');
     //设置模板的根目录
     template.defaults.root=path.join(__dirname,'views');
     //导入模板变量
     template.defaults.imports.dateFormat=dateFormat
     //设置模板后缀
     template.defaults.extname='.art';
     //设置模板后缀以后，模板的名称可以省略.art或指定为其他后缀
     const html=template('模板的名称',{
         time:new Date()
     })
     console.log(html);
     
     ``````

     

8. 档案管理

   - 

9. 

