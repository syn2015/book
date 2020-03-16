# 基础





package.js

``````json
//tabBar
"tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [{
        "pagePath": "pages/component/index",
        "iconPath": "static/image/icon_component.png",
        "selectedIconPath": "static/image/icon_component_HL.png",
        "text": "组件"
    }, {
        "pagePath": "pages/API/index",
        "iconPath": "static/image/icon_API.png",
        "selectedIconPath": "static/image/icon_API_HL.png",
        "text": "接口"
    }]
}
``````







# 初始化配置

pages.json

``````json
{
    "pages": [
        {
            "path": "pages/index/index", 
            "style": { ... }
        }, {
            "path": "pages/login/login", 
            "style": { ... }
        }
    ]
}
``````

minifest.json:平台配置文件



index.vue

``````vue
<template>
	<view>
    <text :msg='msg' @testShowName="testEvent"></text>
    </view>
</template>

<script>
    import test from '../../components/test.vue'
	export default{
        data(){
            return {
                msg:'msg'
            };
        },
        components:{
            test
        },
        methods:{
            testEvent(rel){
                console.log(rel)
            }
        }
    }
</script>

<style>

</style>
``````



test.vue

``````vue
<template>
	<view>
    <text >test组件{{msg}}</text>
        <button type="primary" @click="test">event </button>
    </view>
</template>

<script>
    import test from '../../components/test.vue'
	export default{
        data(){
            return {
              
            };
        },
        props:['msg'],
        methods:{
            test(){
                this.$emit('testShowName',{name:'msg'})
            }
        }
    }
</script>

<style>

</style>
``````

uni.$on()和uni.$once()

``````vue
js
``````



# 视图模板使用

1. 原生小程序的{{}}中不能使用indexof，slice()，三元运算符等方法

2. 绑定属性class

   ``````vue
   <view :class="'box'+1"></view>//输出box1
   <view class="box{{1}}"></view>//原生写法，uniapp会报错但是小程序里不会报错
   ``````

   ``````vue
   <view :style="{width:'100px'，height:'100px',background:'red'}"></view>
   <view :style="[{width:'100px'，height:'100px',background:'green'}]"></view>
   <view :style="{'类名1'，'类名2'，...}"></view>ddddd
   ``````

   ``````vue
   <view>
   	<view v-for=”(item,index) in names“ 
             :class="{box333:index===currentIndex}"
             @click="setIndexNum"
             :key="index">
       
       
       </view>
   
   </view>
   Methods:{
   	setIndexNum(index){
   	this.currentIndex=index;
   }
   }
   ``````

   

3. 

   ``````vue
   <template>
   	<view>
       	<view>{{msg}}</view>
       	<view>{{msg+'mmssgg'}}</view>
           <view>{{"msea".indexOf('sea')!==-1?'存在':'不存在'}}</view>
           <view>{{'woaini'.slice(0,1)}}</view>
           <view>{{false||""||"有"}}</view>
           <img :src="url">
           <view v-for=”(item,index) in names“ 
             :class="{box333:index===currentIndex}"
             @click="setIndexNum"
             :key="index">
       
       
       </view>
   
          
       </view>
   
   </template>
   <script>
   	export default(){
           data(){
               return{
                    msg:'msg',
                    url:'https://image'
               }
           },
           methods:{
              	setIndexNum(index){
                   	this.currentIndex=index;
               }
           }
       }
   
   </script>
   
   <style>
       .box333{
           bacground:yellow;
       }
   
   </style>
   ``````

   

4. 



# 生命周期

应用的生命周期

| 函数名             | 说明                                            |
| ------------------ | ----------------------------------------------- |
| onLaunch           | uni-app初始化完成时触发，全局只触发一次         |
| onShow             | uni-app启动，或从后台进入前台显示               |
| onHide             | uni-app从前台进入后台                           |
| onUnitNViewMessage | 对nvue页面发送的数据进行监听。参考nvue向vue通讯 |

页面生命周期

- **onPullDownRefresh pages.json中的**

  **globalStyle字段开启 "enablePullDownRefresh"：true**

  单独设置：

  **style字段中的配置"enablePullDownRefresh"：true**

  

  

| 函数名                   | 说明                                  | 平台差异                              | 最低版本 |
| ------------------------ | ------------------------------------- | ------------------------------------- | -------- |
| onLoad                   | **页面初始化执行一次**                |                                       |          |
| onShow                   | 页面进入执行，执行多次                |                                       |          |
| onReady                  | **页面加载完毕执行一次**              |                                       |          |
| onHide                   | 页面离开执行多次                      |                                       |          |
| onUnload                 | 页面写在                              |                                       |          |
| onResize                 | 窗口尺寸变化                          | 5+app，微信小程序                     |          |
| onPullDownRefresh        | 用户下拉                              |                                       |          |
| onReachBottom            | 滚动底部的事件，不是scroll-view滚到底 |                                       |          |
| onTabItemTap             | 点击tab时触发，参数为object           | 微信，百度，h5，5+app(自定义组件模式) |          |
| onShareAppMessage        | 用户点击右上角分享                    | 微信，百度，头条，支付宝              |          |
| onPageScroll             | 页面滚动，参数为Object                |                                       |          |
| onNavigationBarButtonTap | 原生标题栏按钮点击事件，参数object    | 5+app,H5                              |          |
| .....                    | .....                                 | .....                                 | .....    |

组件生命周期

| 函数名           | 说明                                                         | 平台差异         | 最低版本 |
| ---------------- | ------------------------------------------------------------ | ---------------- | -------- |
| beforeCreate     | 实例初始化之后调用                                           |                  |          |
| created          | 实例创建完后立即调用                                         |                  |          |
| beforeMount      | 挂载开始之前调用                                             |                  |          |
| **mounted**      | **挂载到实例上后调用，此处并不能确认子组件被全部挂载。子组件完全挂载需要使用$nextTick函数** |                  |          |
| **beforeUpdate** | **数据更新时调用，发生在虚拟DOM打补丁之前**                  | **仅H5平台支持** |          |
| **updated**      | **由于数据更改导致的虚拟DOM重新渲染和打补丁，这之后调用该函数** | **仅H5平台支持** |          |
| beforeDestroy    | 实例销毁前，此时实例依然可用                                 |                  |          |
| destroyed        | 实例销毁后调用，解除绑定，移除监听器，子实例销毁             |                  |          |



# 路由跳转

- uni.readirecTo()重定向，不受栈最大层数的影响；
- uni.switchTab()跳转tab页面
- uni.navigateTo() 跳转页面，存入栈中（最大10层）

```javascript
method:{
    
    toPath(){
        uni.nativateTo({
            url:'../../page/page'
        })
        uni.switchTab({
            url:'../page/page'
        })
    }
}
```



# 常用组件

```vue
 
```



# ScrollView使用

```vue

```



# 双联动实现

# uni ui 使用

# Vuex使用

# 项目