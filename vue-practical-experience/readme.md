# vuecli-3

## mock

开发依赖：

# 路由

## router-link（双标签） router-view（单标签）

## 路由配置

命名路由

嵌套路由

## JS操作路由



## 重定向和别名

# 路由进阶

## 路由组件传参

props:true

## HTML5 History模式

router路由列表的JS文件中：mode:'history'.需要添加默认的页面（*）

## 导航守卫

全局守卫**beforeEach**(to,from,next)



后置路由afterEach(to,from),beforeResolue(to)

路由独享守卫beforeEnter(to,from,next)



组件独享守卫beforRouterEnter(to,from,next)  无法获取组件实例this,获取方法next(（vm)=>{})

组件独享守卫beforRouterLeave(to,from,next) 

组件独享守卫beforRouterUpdate(to,from,next) 组件复用时，可以获取组件实例this,

```javascript
//顺序调用 
1.导航被触发
2.在失活的组件中调用离开守卫beforRouterLeave
3.全局前置守卫beforeEach()
4.在重用的组件中调用beforeRouterUpdate()
5.调用路由独享守卫 beforeEnter()
6.解析一步路由组件
7.被激活的组件中调用beforeRouterEnter()
8.调用全局解析守卫 beforeResolve()
9.导航确认
10.调用全局的后置守卫afterEach()
11.触发DOM渲染
12.用创建好的实例中调用beforeRouterEnter守卫传递next的回调函数
```



## 路由元信息

meta字段

```javascript

```



## 过渡效果

transition-group组件和transition组件

```javascript
.router-enter
.router-enter-active
.router-enter-top
.router-leave
.router-leave-active
.router-leave-top
```

# 状态管理

## Bus

bus.js文件

```
const bus=new Vue();
export default bus;
```

main.js

```javascript
Vue.prototype.$bus=Bus;
//兄弟组件中分别写
this.$bus.$on('监听事件')
this.$bus.$emit('提交事件','传递的数据')
```



## vuex-state&getter



```javascript
compunted:{
    ...mapState({
        userName:state=>state.userName
    })
}
```



```javascript
//命名空间 namespace:true
import {createNamespaceHelpers} from 'vuex'
const {mapState}=createNamesSpaceHelpers('命名空间的名称')
//使用
...mapState({
    userName:state=>state.userName
})
```



```javascript
compunted:{
   inputValueLastLetter(){
       return this.inputValue.substr(-1,1);
   }
}
```

getters.js

```javascript
const getters={
    appNameWithVersion:(state,)=>{
        return state.appName+'v2.0'
    }
}
//使用
compunted:{
   inputValueLastLetter(){
       return this.inputValue.substr(-1,1);
   }
}
```



## vuex-mutation&action/module



```javascript
this.$store.commit('mutation中的提交事件 SET-APP-NAME','传递数据');
或者
this.$store.commit({
   type: 'mutation中的提交事件 SET-APP-NAME',
    appName:'传递数据'
});
//mutation中的事件
const mutations={
    SET-APP-NAME(state,params){
        state.appName=params.appName
    },
    SET-APP-NAME(state){
        //需要引入import vue from 'vue'
        vue.set(state,'额外设置的值的名称','额外设置的值的value')；
    }
}

```

actions.js

```javascript
this.$store.dispatch('mutation中的提交事件 SET-APP-NAME','传递数据')//触发mutations事件
```

子module

user模块中

```javascript
const actions={
    updateUserName({commit,state,rootState，dispatch}){
        rootState.appName; //顶级state中的数据
    }
}
```



## vuex-进阶

###  插件

持久化存储 saveInlocal

```javascript
//以下为简单实现
export default store=>{
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe(mutation,state)=>{
        localStorage.state=JSON.stringify(state)
    }
}
```



### 严格模式

store的index.js文件中

```javascript
strict:true;// 开启严格模式，直接修改vuex会报错
strict:process.env.NODE_ENV='development';//开发模式下开启，生产模式下不开启
```



### vuex+双向绑定

```javascript
computed(){
    stateValue:{
        get(){
            return this.$store.state.stateValue;
        },
            // value是新值
        set(value,oldvalue){
            //提交mutation
            this.SET_STATE_VALUE(value)
        }
    }
},
method:{
     handleStateValueChange(val){
        this.SET_STATE_VALUE(val);
    }
}
```

