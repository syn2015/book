# GitFlow工作流



# Vue-Cli 3

1. dependencies 是运行依赖

2. devDependencies 是开发依赖

3. mockJs安装到开发依赖中，devDependencies

4. **.prettierrc文件**

   - 格式化代码时候不要分号，使用单引号代替双引号

     ``````javascript
     {
         "semi":false,
         "singleQuote":true
     }
     ``````

5. vue-function -api

6. Vue 3.0 RFC

7. 新特性

   - 安装

   - main.js

     - Vue.use(ELementUI)在前
     - Vue.use(plugin)在后

     ``````javascript
     //安装 npm i vue-function-api 
     import './mock/index'
     
     import Vue from 'vue'
     import App from './App.vue'
     import ElementUI from 'element-ui'
     import {plugin} from 'vue-function-api'
     import 'element-ui/lib/theme-chalk/index.css'
     Vue.config.productionTip=false;
     Vue.use(ELementUI);
     Vue.use(plugin)
     new Vue({
         render:h=>h(app)
     }).$mount('#app')
     ``````

     

   - app-back-up.vue

     - setup()的优先级高，在传统vue2生命周期之前
     - 但是setup()中的生命周期并不会优先于vue2的生命周期
     - setup()函数中没有this关键字
     - setup(props,context)：context.root是Vue实例。
     - **SSR服务器端渲染，发送请求写在mounted中，不在created中**

     ``````vue
     <template>
     	<div id="app">
             <h1>
                 learn vue 3.0
         	</h1>
             <p>
                 {{msg}}
         </p>
             <p>
                 {{msgWrapper}}
         </p>
             <input type="text" v-model="msg"/>
             <button @click='changeMsg'>
                 修改msg的值
         </button>
         </div>
     </template>  
     
     <script>
         import {value,computed,OnMounted} from 'vue-function-api'
     	export default{
             //setup()的优先级高，在传统vue2生命周期之前
             //但是setup()中的生命周期并不会优先于vue2的生命周期
             setup(){
                 //定义响应数据
                 const msg=value('hello vue3')
                 //定义计算属性
                 const msgWrapper=computed(()=>'0000'+msg.value+'11111')
                 //定义事件
                 const changeMsg=()=>{
                     msg.value='托尼'
                 }
                 //
                 OnMounted(()=>{
                     console.log('onMounted')
                 })
                 
                 
                 //return的成员才可以被UI访问到
                 return{
                     msg,
                     msgWrapper,
                     changeMsg
                 }
                 
             }
             ,
             mounted(){
                 console.log('执行了mounted函数')
             }
         }
     
     </script>
     <style>
     
     
     </style>
     ``````

     

   - app.vue

     - elementUI ,栅格间距：:gutter='10'

     ``````javascript
     <template>
     	<div id="app">
             <h1 class='title'> list {{brandlist.length}}</h1>
     		<el-row :gutter="10">
                 <el-col :span=7>
                     <el-input placeholder='请输入'size='mini'>
     					<template slot='prepend'>名称：</template>
     				</el-input>
                 </el-col>
     			<el-col :span='4'>
                     <el-button type='primary' size='mini'> 添加</el-button>
                 </el-col>
             </el-row>
     		//表格
     		 <el-table :data="brandlist" style="width:100%;margin-top=10px" border size='mini' >
           		
                     <el-table-column prop="id" label="id"></el-table-column>
                     <el-table-column prop="name" label="name"></el-table-column>
                     <el-table-column prop="ctime" label="ctime"></el-table-column>
     				<el-table-column label="操作">
                         <template v-slot='scope'> 
                         <el-button type='danger' size='mini'>删除{{scope.row.id}}</el-button>
                         </template>
                         </el-table-column>
     		</el-table>
     
         </div>
     </template>  
     
     <script>
         import {value,computed,OnMounted} from 'vue-function-api'
     	import {list} from './api/brand_list.js'
     	export default{
            setup(props,context){
                //响应数据
                const brandlist=value([])
                const getBrandList=async()=>{
                    const {data:res}=await list()
                    console.log(res);
                    if(res.status!=0){
                        return context.root.$message.error('获取失败')
                    }else{
                        return context.root.$message.success('获取成功')
                        brandlist.value=res.message
                    }
                }
                onMounted(){
                    getBrandList();
                }
                return {
                    brandlist
                }
            }
         }
     
     </script>
     <style>
     	.title{
             font-size:18px;
             text-align:center;
         }
     
     </style>
     ``````

     

   - mock/brand_list.js

     ``````javascript
     import Mock  from 'mockjs'
     Mock.mock('/api/getprodlist','get',{
         status:0,
         'message|4':[
             {
                 id:'@increment(1)'，
                 name:'@cword(3,8)'
                 ctime:new Date()
             }
         ]
         
     })
     ``````

     

   - mock/index.js

     ``````javascript
     import './brand_list.js'
     ``````

     

   - api/brand_list.js

     ``````javascript
     import {createAPI} from '../utils/request'
     export const list=data=>createAPI{
         'api/getprodlist',
             'get',
             data
     }
     ``````

     

   - util/request.js

     ```javascript
     import axios from 'axios'
     const instance=axios.create({
         //baseUrl:'',
         timeout:1000
     })
     export const createAPI=(url,method,data)=>{
         let config={}
         if(method.toUpperCase==='GET'){
             config.params=data
         }else{
             config.data=data
         }
         return instance({
             url,
             method,
             ...config
         })
     }
     ```

     

   - 

8. 

   

   

# Mockjs

1. **Mock.mock(rurl?,rtype?,template|function(options))**

   - rurl是API接口，可选参数
   - rtype是请求类型，可选参数
   - **template|function(options)，通过函数或者模板来返回数据，必填参数**

2. 数据占位符定义

   - @increment(1) ，是步长为1的自增的整数

   - @cword(2,8) ,随机汉字2到8个

   - @natural(2,10) ,随机2到8的一个自然数（大于等于0的）

   - @dataImage(78x78)，随机一段Base64的图片编码  尺寸是78x78

   - @cword(min,max)只有在mock函数中才会生效

     

   ``````javascript
   return Mock.mock({
   	status:200,
   	message:'@cword(2,5)'
   })
   ``````

   - 另一种形式

     ``````javascript
     'data|5-10':[
     	{
             'id|+1':0, //模拟一个自增长的ID值
         }
     ]
     ``````

   - 正则表达式

     exec()函数，从字符串中提取需要的数据

     res[1]-0，提取索引为1的数据并转换为数字类型

     ``````javascript
     //在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
     //完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本
     
     //res[1]-0，提取索引为1的数据并转换为数字类型
      const res=/\/api\/getgoods\/(\d+)/.exec(option.url);
     ``````

     

3. 创建自定以mock函数

   - 示例

     因为文档中的示例this的原因，不要使用箭头函数

     **调用方式：@fruit()**

     ``````javascript
     import Mock,{Random} from 'mockjs'
     
     //创建自定以Mock函数
     Random.extend({
     	自定义函数名: function 函数
     })
     //调用方式：@fruit()
     ``````

     

   - 

4. 

   

mock/index.js

```javascript
//导入模块
//import Mock from 'mockjs'
import Mock,{Random} from 'mockjs'
//创建自定以函数
Random.extend({
    'fruit':function(){
        const array=['apple','banana','cherry']
        return this.pick(array);
    }
})

Mock.mock('/api/goodslist','get',{
          status:200,
          message:'success',
          'data|5-10':[
              {
          	id:'@increment(1)',
            name:'@cword(2,8O)',
            price:'@natural(2,10)',
            count:'@natural(100,999)',
           img:'@dataImage(78x78)'
              }
          ]
          })
Mock.mock('/api/addgoodslist','post',function(option){
    //这里接收的请求参数
    console.log(option);
   /* return {
        status:200,
        message:'@cword(2,5)'
    }*/
    return Mock.mock({
        status:200,
        message:'@cword(2,5)'
    })
    
})
/*Mock.mock(/\/api\/getgoods/,'get',{
    data:{
        id:9,
        name:'apple',
        price:2,
        count:199,
        img:'@dataImage(78x78)'
    },
    status:200,
    message:'getgoods success'
})*/
Mock.mock(/\/api\/getgoods/,'get',function(option){
    console.log(option);
    const res=/\/api\/getgoods\/(\d+)/.exec(option.url);
    return Mock.mock({
        data:{
            id:res[1]-0,
            //name;'apple',
            name:'@fruit()'
            price:2,
            count:99,
            img'@dataImage(78x78)'
        },
        status:200,
        message:'get goods success'
    })
})
```

main.js

```javascript
import './mock/'  //入口文件导入mockjs
import axios from 'axios'
Vue.prototype.$http=axios
```

app.vue

```html
<h1>
    learn mockjs
</h1>
<button @click="getGoodsList">
    get goodslist
</button>
<button @click='addGoods'>
    add goodslist
</button>
<button @click='getGoodsById'>
    get goodslist by id
</button>
<script>
	methods:{
        async getGoodsList(){
          const {data:res}=  await this.$http.get('/api/goodslist')
          console.log(res);
        }
        async addGoods(){
         const {data:res}= await  this.$http.post('/api/addgoods',{name:'apple',price:8,count:5,img:'上传的图片'})
         console.log(res);
        }
        async getGoodsById(id){
            const {data:res}  = await this.$http.get(`/api/getgoods/${id}`)
            console.lo(res);
        }
    }
</script>
```

