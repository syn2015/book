# 前置知识之Node

```javascript
npm list 当前目录下的安装包
npm install moudlename
npm update moudlename
npm uninstall moudlename
npm init
npm help
npm set global=true或false 设定安装模式。npm get global 查看当前安装模式
```



# 前置知识之Express

3. express-generator
   - npm i express-generator -g
2. supervisor
   - npm i supervisor -g
   - 启动 supervisor ./bin/www

# 前置知识之Mockjs

1. Mock.js，模拟数据生成器，**帮助前端独立于后端进行开发，帮助编写单元测试**
2. 提供的模拟功能
   - **根据数据模板生成模拟数据**
   - **模拟Ajax请求，生成并返回模拟数据**
   - **基于HTML模板生成模拟数据**
3. 使用场景：**IP，随机数，图片，地址，分页显示**

# Node集成Mockjs

1. 安装 **npm i mockjs**

   - app.js

   ``````javascript
   
   // 使用 Mock
   var Mock = require('mockjs')
   var data = Mock.mock({
       // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
       'list|1-10': [{
           // 属性 id 是一个自增数，起始值为 1，每次增 1
           'id|+1': 1
       }]
   })
   // 输出结果
   console.log(JSON.stringify(data, null, 4))
   
   ``````

   - 使用express 生成命令创建express项目

   - 在express中整合mockjs

     - 将mockjs组件打包至express项目中

     - **npm i mockjs --save**-dev

       ``````javascript
       
       // router.get('/mockjs', function(req, res, next) {
     //   var Mock=require('mockjs')
       //   var data=Mock.mock({
     //     'list|1-10':[{
       //       'id|+1':1
       //     }]
       //   })
       //   var ret=JSON.stringify(data,null,4);
       //   console.log(ret)
       //   res.render('index', { title: 'Express mockjs' });
       // });
       
       // router.get('/mockjsapi', function(req, res, next) {
       //   var Mock=require('mockjs')
       //   var data=Mock.mock({
       //     'list|1-10':[{
       //       'id|+1':1
       //     }]
       //   })
       //   var ret=JSON.stringify(data,null,4);
       //   console.log(ret)
       //   res.send(ret);
       // });
       ``````
     
       
     
       
     

   


# Mockj语法

## 数据模板定义 DTD Data Template Definition

1. **数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：**

   - *属性名* 和 *生成规则* 之间用竖线 `|` 分隔。

   - 生成规则是可选的

     ``````javascript
     //属性名：name
     //生成规则：rule
     //属性值：value
     'name|rule':value
     ``````

     

   - 生成规则由7中格式

     - 生成规则 的 含义 需要依赖 属性值的类型 才能确定。
     - *属性值* 中可以含有 `@占位符`
     - *属性值* 还指定了最终值的初始值和类型。

     ``````javascript
     'name|min-max':value
     'name|cout':value
     'name|min-max.admin-admax':value
     'name|min-max.dcount':value
     'name|count-dmin-dmax':value
     'name|count-dcount':value
     'name|+step':value
     ``````

     

     

   

   

### 属性值是字符串 String 

``````javascript
//通过重复string 生成一个字符串，重复次数大于等于min，小于等于max。
'name|min-max':value
//重复次数等于count 
'name|count':value
``````







### 属性值是数字 Number

```javascript
//属性值自动加1，初始值为number
'name|+1':number
//大于等于min,小于等于max的整数，属性值number知识用来确定类型
'name|min-max':number
//一个浮点数，整数部分大于等于min，小于等于max,小数部分波流dmin到dmax位
'name|min-max.dmin-dmax':number
```



### 属性值是布尔型Boolean

```javascript
//随机一个布尔值
'name|1':boolean
//随机一个布尔值，值为value的概率为min/(min+max),值为!value的概率是max/(min+max)
'name|min-max':value
```



### 属性值是对象 Object

```javascript
//从属性值object中随机选取count个属性
'name|count':object

//从属性值object中随机选取min到max个属性
'name|min-max':object
```



### 属性值是数组 Array

```javascript
//从属性值array中随机一个元素，作为最终值
'name|1':array

//array中顺序选取一个元素，作为最终值
'name|+1':array

//重复array生成一个新数组，重复次数大于等于min,小于等于max
'name|min-max':array

//重复array生成一个新数组，重复次数为count
'name|count':array

```



### 属性值是函数 Function

```javascript
//执行函数function，取其返回值作为最终的属性值，函数的上下文为属性’name'所在的对象
'name':function
```

### 属性值是RegExp

```javascript
//根据正则表达式反向生成可以匹配它的字符串，用于生成自定义格式的字符串
'name':regexp
```



## 数据占位符定义 DPD Data Placeholder Definition

1. 占位符只是在属性值字符串中占个位置，并不出现在最终的属性值中

2. 格式

   - @来标识其后的字符串是占位符
   - 占位符引用的是Mock.Random中的方法
   - 通过Mock.Random.extend()来扩展自定义占位符
   - 占位符可以引用 数据模板DTD中的属性
   - 占位符会优先引用 树模板DTD中的属性
   - 占位符 支持 相对路径和绝对路径

   ``````javascript
   @占位符
   @占位符(参数[,参数])
   ``````




### Mock.Random

Mock.Random 是一个工具类，用于生成各种随机数据。

**Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 `@占位符(参数 [, 参数])`**

```javascript
var Random=Mock.Random;
Random.email();
//=> 'n.clark@miller.io'
Mock.mock('@email')
//=>'y.lee@lewis.org'
Mock.mock({email:'@email'})
//=>{email:'v.lewis@hall.gov'}
```

#### 

# JSON

## 语法规则

```javascript
花括号保存对象
数据在键值对中
数据由逗号分隔
方括号保存数组
```



## 键值对

```
键值对由冒号分割

```

## JSON值

```javascript
数字 ,整数或浮点数
字符串 ，双引号中
逻辑值 ，true或false
对象 ，花括号中
数组 ，方括号中
null 
```

## 基础结构

```javascript
对象，{}
数组，[]
```

# 模拟数据

```javascript
{
    'categorys|3-5': [{
      categoryName: '@cfirst',
      'categoryID|+1': 100,
      logo: '@images(64x64,#eee,Logo)',
      'categoryItems|1-4': [{
        cname:'@cname',
        'cid|+1':100,
        'item|3-7':[{
          name:'@cname',
          'id|+1':1000,
          link:'@url'
        }]
      }]
      ,'seller|8-15':[{
        name:'@cname@cname',
        url:'@url'
      }]
    }]
}
```

# ajax跨域

```javascript
//请求方式
req.query.user;
req.body.user;
//实现原理，对数据进行了包装处理
jsondata({此处是数据})
```

demo.html

```html
<script src='CDN中的jquery路径'></script>
<script>
    $(function(){
        var xhrurl='http://api地址';
        $.ajax({
            type:'get',
            async:false,
            url:xhrurl,
            cache:false,
            dataType:'jsonp',
            success:function(json){
                console.log(json);
            },
            error:function(e){
                alert('error');
            }
        })
    })
<script>
```

index.js

```javascript
router.get('/shopapi', function (req, res, next) {
  //req.query获取参数
  var callback=req.query.callback;
  console.log(callback);
  var Mock = require('mockjs')
  var data = Mock.mock({
    'categorys|3-5': [{
      categoryName: '@cfirst',
      'categoryID|+1': 100,
      logo: '@image(64x64,#eee,Logo)',
      'categoryItems|1-4': [{
        cname:'@cname',
        'cid|+1':100,
        'item|3-7':[{
          name:'@cname',
          'id|+1':1000,
          link:'@url(http)'
        }]
      }]
      ,'seller|8-15':[{
        name:'@cname@cname',
        url:'@url(http)'
      }]
    }]
  })
  var ret = JSON.stringify(data, null, 4);
  ret=callback+'('+ret+')';
  console.log(ret)
  res.send(ret);
});
```

# 数据绑定

1. 折叠所有区域代码的快捷：

                   先按下  ctrl 和 K，再按下 ctrl 和 0 ; ( 注意这个是零，不是欧 )

2. 展开所有折叠区域代码的快捷：

                   先按下  ctrl 和 K，再按下 ctrl 和 J ;

```javascript
//index.html
 <script>
        $(function () {
            var xhrurl = 'http://localhost:3000/shopapi';
            $.ajax({
                type: 'get',
                async: 'false',
                url: xhrurl,
                cache: false,
                dataType: 'jsonp',
                success: function (json) {
                    console.log(json);
                    var html = "";
                    $('#js_climit_li').html("");
                    $(json.categorys).each(function (i, categorys) {
                        html +=
                            ' <li class="appliance js_toggle relative"><div class="category-info list-nz"> <h3 class="category-name b-category-name"><i></i><a id="s-category-' +
                            categorys.categoryID +
                            '" href="#"target="_blank" class="ml-22"title="' + categorys
                            .categoryName + '">' + categorys.categoryName + '</a></h3>',
                            html += '<p class="c-category-list limit-24">';
                        $(categorys.categoryItems).each(function (i, categoryItems) {
                            html += '<a href="#" target="_blank" title="' +
                                categoryItems.cname + '" id="s-goods-category-' +
                                categoryItems.cid + '">' + categoryItems.cname +
                                '</a>'
                        });

                    });
                    console.log(html);
                    $('#js_climit_li').html(html);
                },
                error: function (e) {
                    alert('error');
                }
            })
        })
    </script>
```

