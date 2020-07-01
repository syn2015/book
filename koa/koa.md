# vue基础

## 模板语法

```javascript
//v-html指令
v-html="rawHtml"
//v-bind特性
<div v-bind:id="dynamicld"></div>
//表达式
{{number+1}}
{{ok?'Yes':'No'}}
{{message.split('').reverse().join('')}}
//v-if指令
<p v-if="seen">see</p>
//自定义指令
Vue.directive('n',{
    //只调用一次 第一次绑定到元素时调用
    bind:function(el,binding){
        el.textContent=Math.pow(binding.value,2)
    },
    //
    update:function(el,binding){
        el.texttContent=Math.pow(binding.value,2)
    }
})



//修饰符prevent
<form v-on:submit.prevent="onSubmit">...</form>


//缩写
<a v-bind:href="url">...</a>
<a :href='url'></a>

<a v-on:click="doSomething">...</a>
<a @click="doSomething">...</a>


```

- data为什么必须是函数
- 自定义指令场景：对数据进行复杂处理

## 计算属性

```javascript

<div>
    {{money}},{{a}},{{b}}
</div>

data(){
    return{
        money:100,
        a:1
    }
},
computed:{
    b:function(){
        return this.money-this.a
    }
}

```



## 类与样式,条件&列表渲染

```javascript
<div :class="[a,b]">
</div>
<div :class="{'test-1':a3}"
</div>
<div :class="obj">
    
</div>

<ul>
    <li v-for="(item,idx) in  list" :key="item">
        {{item}},{{idx}}
    </li>
</ul>


<ul>
   <template v:for="item in list">
       <li :key="item+1"/>hello</li>
       <li :key="item">{{item}}</li>
   </template>
</ul>
data(){
    return{
        a:'test-1',
        b:'test-2',
        a3:true,
        obj:{
            'test-1':false
        },
        list:[
            'a','b','c','d'
        ]
    }
}

```





## 事件处理

events.vue

```javascript
<div>
    <button type="button" name="button" v-on:click="counter +=1 ">test</button>
</div>
inport ev from './components/ev.vue'
export default{
    data(){
        return{
            counter:0
        }
    }
    methods:{
        msg:function(){
            window.console.log(Math.random())
        },
        
    },
    
}

```

- 获取触发的DOM元素

  参数$event

## 深入了解组件

com.vue

```javascript
//父组件
<com @path="msg"/>
    
msg:function(){
    this.data++
}

```



## 路由基础

router.js

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes=[
    
    {
        path:'/pagea',
        component:pageA
    },{
        path:'/pageb',
        component:pageB
    }
]
const router=new VueRouter({
    routes
})
export default router



```



main.js

```javascript
import Vue from 'vue'
import router from './router'

Vue.config.productionTip=false
new Vue({
    router
}).$mount('#app')
```

- **vue.config.js文件：runtimeCompiler:true**

## vuex基础



```javascript

```



# koa基础

## async和await



## koa2中间件



## 路由和cookie



# mongoose和redis



# Nuxt.js

