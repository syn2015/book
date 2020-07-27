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



# Nuxt.js（v1.42）

**基于Vue2**

**包含Vue Router**

**支持Vuex(included only when using the store option)**

**支持Vue Server Renderer(exclude when using mode:'spa')**

**支持vue-meta**(配置文件书写)

## Nuxt.js工作流

![](./nuxt-schema.svg)

- Incoming Request 浏览器发送一个请求
- 服务端检查是否有 nuxtServerInit 配置项，有的话就会执行这个函数，其中包含一个标注： Store action 用来操作 vuex
- 下一个环节就是中间件 middleware ，与路由相关，做任何你想要的功能
- 预验证 validate() 可以配合高级动态路由，做一些验证，比如是否允许跳转某个页面
- asyncData() & fetch() 获取数据，前一个是用来渲染vue component，即 vue组件的，后一个通常用来修改 vuex，即 Store数据
- 有了数据，模板后，最后一步就是 Render 渲染了，方式是 SSR



## Nuxt.js安装

```javascript
vue init nuxt-community/koa-template
//https://zh.nuxtjs.org/guide/installation
```

## Nuxt.js目录

### 资源目录

资源目录 `assets` 用于组织未编译的静态资源如 `LESS`、`SASS` 或 `JavaScript`。

[关于 assets 目录的更多信息](https://zh.nuxtjs.org/guide/assets)

### 组件目录

组件目录 `components` 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 `asyncData` 方法的特性。

### 布局目录

布局目录 `layouts` 用于组织应用的布局组件。

*若无额外配置，该目录不能被重命名。*

[关于布局的更多信息](https://zh.nuxtjs.org/guide/views#布局)

### 中间件目录

`middleware` 目录用于存放应用的中间件。

[关于中间件的更多信息](https://zh.nuxtjs.org/guide/routing#中间件)

### 页面目录

页面目录 `pages` 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 `.vue` 文件并自动生成对应的路由配置。

*若无额外配置，该目录不能被重命名。*

[关于页面的更多信息](https://zh.nuxtjs.org/guide/views)

### 插件目录

插件目录 `plugins` 用于组织那些需要在 `根vue.js应用` 实例化之前需要运行的 Javascript 插件。

[关于插件的更多信息](https://zh.nuxtjs.org/guide/plugins)

### 静态文件目录

静态文件目录 `static` 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 `/` 下。

**举个例子:** `/static/robots.txt` 映射至 `/robots.txt`

*若无额外配置，该目录不能被重命名。*

[关于静态文件的更多信息](https://zh.nuxtjs.org/guide/assets#静态文件)

### Store 目录

`store` 目录用于组织应用的 [Vuex 状态树](http://vuex.vuejs.org/) 文件。 Nuxt.js 框架集成了 [Vuex 状态树](http://vuex.vuejs.org/) 的相关功能配置，在 `store` 目录下创建一个 `index.js` 文件可激活这些配置。

*若无额外配置，该目录不能被重命名。*

[关于 store 的更多信息](https://zh.nuxtjs.org/guide/vuex-store)

### nuxt.config.js 文件

`nuxt.config.js` 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。

*若无额外配置，该文件不能被重命名。*

[关于 nuxt.config.js 的更多信息](https://zh.nuxtjs.org/guide/configuration)

### package.json 文件

`package.json` 文件用于描述应用的依赖关系和对外暴露的脚本接口。

*该文件不能被重命名。*

### 别名

| 别名         | 目录                                                       |
| ------------ | ---------------------------------------------------------- |
| `~` 或 `@`   | [srcDir](https://zh.nuxtjs.org/api/configuration-srcdir)   |
| `~~` 或 `@@` | [rootDir](https://zh.nuxtjs.org/api/configuration-rootdir) |

默认情况下，`srcDir` 和 `rootDir` 相同。

**提示:** 在您的 `vue` 模板中, 如果你需要引入 `assets` 或者 `static` 目录, 使用 `~/assets/your_image.png` 和 `~/static/your_image.png`方式。