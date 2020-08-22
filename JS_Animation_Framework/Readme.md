#  js动画介绍

1. 匀速运动
2. 缓动运动（常见）
3. 透明度运动
4. 多物体动画
5. 多值动画

# 简单运动

```css

*{
    padding: 0;
    margin: 0;
}
button{
    width: 80px;
    height: 40px;
}
#box{
    width: 200px;
    height: 200px;
    background-color: pink;
    position: absolute;
    top: 50px;
}
```



```javascript

	<body>
		<button id="btn">动画</button>
		<div id="box"></div>
		<script type="text/javascript">
			
			// 简单的动画存在的问题: 1.处理边界  2.定时器的管理
			
			// 1.获取事件源
			var btn = document.getElementById('btn');
			var box = document.getElementById('box');
			var timer = null;
			// 2.给按钮绑定事件
			btn.onclick = function (){
				// 先关闭定时器 再开启定时器 防止定时器累加 导致物体加快
				clearInterval(timer);
				// 3.让物体运动起来(定时器)
				timer = setInterval(function (){
					if(box.offsetLeft === 500){
						clearInterval(timer);
					}else{
						box.style.left = box.offsetLeft + 10 + 'px';
					}
					
				},30);
				
			}
		</script>
	</body>
```

# 侧边栏效果

```css
*{
    padding: 0;
    margin: 0;
}
#box{
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;
    left: -200px;
}
#box span{
    position: absolute;
    width: 40px;
    height: 60px;
    color: #fff;
    background-color: #000000;
    right: -40px;
    top: 50%;
    margin-top: -30px;//
    line-height: 60px;
    text-align: center;
}
```



```javascript
		<div id="box">
			<span>拉开</span>
		</div>
		<script type="text/javascript">
			// -200    0
			window.onload = function (){
				var box = document.getElementById('box');
				box.onmouseover = function (){
					this.style.left = 0 + 'px';
				}
				box.onmouseout = function (){
					this.style.left = -200 + 'px';
				}
			}
		</script>
```

# 侧边栏动画效果



```css
			*{
				padding: 0;
				margin: 0;
			}
			#box{
				width: 200px;
				height: 200px;
				background-color: red;
				position: relative;
				left: -200px;
			}
			#box span{
				position: absolute;
				width: 40px;
				height: 60px;
				color: #fff;
				background-color: #000000;
				right: -40px;
				top: 50%;
				margin-top: -30px;
				line-height: 60px;
				text-align: center;
			}
```



```javascript
	<div id="box">
			<span>拉开</span>
		</div>
		<script type="text/javascript">
			window.onload = function (){
				var box = document.getElementById('box');
				var timer = null;
				box.onmouseover = function (){
					// 先关闭定时器
					clearInterval(timer);
					timer = setInterval(function (){
						if(box.offsetLeft === 0){
							clearInterval(timer);
							return;
						}
						box.style.left = box.offsetLeft + 5 + 'px';
					},30)
					
				}
				box.onmouseout = function (){
					// 先关闭定时器
					clearInterval(timer);
					timer = setInterval(function (){
						if(box.offsetLeft === -200){
							clearInterval(timer);
							return;
						}
						box.style.left = box.offsetLeft - 5 + 'px';
					},30)
					
				}
			}
		
		</script>
```

# 侧边栏动画封装



```css
* {
        padding: 0;
        margin: 0;
    }

    #box {
        width: 200px;
        height: 200px;
        background-color: red;
        position: relative;
        left: -200px;
    }

    #box span {
        position: absolute;
        width: 40px;
        height: 60px;
        color: #fff;
        background-color: #000000;
        right: -40px;
        top: 50%;
        margin-top: -30px;
        line-height: 60px;
        text-align: center;
    }
```



```javascript
<div id="box">
        <span>拉开</span>
 </div>
    <script type="text/javascript">
    window.onload = function() {
        var box = document.getElementById('box');
        var timer = null,
            speed = 0;
        box.onmouseover = function() {
            startAnimation(this, 0);

        }
        box.onmouseout = function() {
            startAnimation(this, -200);

        }
        
        function startAnimation(obj, end) {
            // 先关闭定时器
            clearInterval(timer);
            speed = end > obj.offsetLeft ? 5 : -5;
            timer = setInterval(function() {
                if (obj.offsetLeft === end) {
                    clearInterval(timer);
                    return;
                }
                obj.style.left = obj.offsetLeft + speed + 'px';
            }, 30);
        }
    }
    </script>
```

# 基本的缓动运动



```css
		  * {
				padding: 0;
				margin: 0;
			}

			#box {
				width: 200px;
				height: 200px;
				background-color: red;
				position: relative;
				left: -200px;
			}

			#box span {
				position: absolute;
				width: 40px;
				height: 60px;
				color: #fff;
				background-color: #000000;
				right: -40px;
				top: 50%;
				margin-top: -30px;
				line-height: 60px;
				text-align: center;
			}
```



```javascript
		<div id="box">
			<span>拉开</span>
		</div>

		<script type="text/javascript">
			// 0  ~ 200
			// 缓动动画公式:  加速度 = (结束值 - 起始值) / 缓动系数  加速度由慢到慢
			window.onload = function() {
				var box = document.getElementById('box');
				var timer = null,
					end = 0,
					end2 = -200;
				box.onmouseover = function() {
					clearInterval(timer);
					timer = setInterval(function() {
						
						speed = (end - box.offsetLeft) / 20; //0.45  == 1 数学Math.ceil()
						console.log(box.offsetLeft,speed)
						// 处理边界问题
						if (box.offsetLeft === end) {
							clearInterval(timer);
							return;
						}
						box.style.left = box.offsetLeft + speed + 'px';
					}, 30);
				}
				box.onmouseout = function() {
					clearInterval(timer);
					timer = setInterval(function() {
						speed = Math.floor((end2 - box.offsetLeft) / 20); //0.45  == 1 数学Math.ceil()
						// 处理边界问题
						if (box.offsetLeft === end2) {
							clearInterval(timer);
							return;
						}
						console.log(box.offsetLeft, speed);
						box.style.left = box.offsetLeft + speed + 'px';
					}, 30);
				}
			}
		</script>
```

# 缓动运动封装


```css
    * {
        padding: 0;
        margin: 0;
    }

    #box {
        width: 200px;
        height: 200px;
        background-color: red;
        position: relative;
        left: -200px;
    }

    #box span {
        position: absolute;
        width: 40px;
        height: 60px;
        color: #fff;
        background-color: #000000;
        right: -40px;
        top: 50%;
        margin-top: -30px;
        line-height: 60px;
        text-align: center;
    }
```



```javascript
    <div id="box">
        <span>拉开</span>
    </div>
    <script type="text/javascript">
    // 0  ~ 200
    // 缓动动画公式:  加速度 = (结束值 - 起始值) / 缓动系数  加速度由慢到慢
    window.onload = function() {
        var box = document.getElementById('box');
        var timer = null;
        box.onmouseover = function() {
            slowAnimation(this, 0);
        }
        box.onmouseout = function() {
            slowAnimation(this, -200);
        }

        function slowAnimation(obj, end) {
            clearInterval(timer);
            timer = setInterval(function() {
                speed = (end - box.offsetLeft) / 20;
                // 如果速度大于0,证明物体往右走,速度小于0,证明物体往左走
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                // 处理边界问题
                if (obj.offsetLeft === end) {
                    clearInterval(timer);
                    return;
                }
                obj.style.left = obj.offsetLeft + speed + 'px';
            }, 30);
        }
    }
    </script>
```
# 适明度动画


```css
#box {
        width: 200px;
        height: 200px;
        background-color: red;
        opacity: 0.3;
    	// 兼容IE8以下
        filter: alpha(opacity: 30);
    }
```



```javascript
    <div id="box"></div>
    <script type="text/javascript">git
    window.onload = function() {
        // 1.获取需要的元素
        var box = document.getElementById('box');
        // 2.监听事件
        box.onmouseover = function() {
            opacityAnimation(this, 100);
        }
        box.onmouseout = function() {
            opacityAnimation(this, 30);
        }
        var timer = null,
            alpha = 30,
            speed = 0;

        function opacityAnimation(obj, endAlpha) {
            clearInterval(timer);
            timer = setInterval(function() {
                // 求透明度变化的速度
                speed = endAlpha > alpha ? 5 : -5;

                // 边界的处理
                if (alpha === endAlpha) {
                    clearInterval(timer);
                    return;
                }
                // 改变当前的alpha的值
                alpha += speed;
                // 修改值
                obj.style.opacity = alpha / 100;
                obj.style.filter = `alpha(opacity: ${alpha})`;

            }, 30);
        }
    }
    </script>
```
# 多物体运动


```css
			*{
				padding: 0;
				margin: 0;
			}
			div{
				width: 300px;
				height: 150px;
				background-color: royalblue;
				margin: 20px 0;
				border: 4px solid #000;
			}
```



```javascript
		<div></div>
		<div></div>
		<div></div>
		<script type="text/javascript">
			window.onload = function() {
				var allBoxs = document.getElementsByTagName('div');
				for(var i = 0; i < allBoxs.length; i++){
					allBoxs[i].onmouseover = function(){
						startAnimation(this,600);
					}
					allBoxs[i].onmouseout = function(){
						startAnimation(this,300);
					}
				}
				var speed = 0;
				function startAnimation(obj,endTarget){
					// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
					clearInterval(obj.timer);
					obj.timer = setInterval(function (){
						// 1.求速度
						speed = (endTarget - obj.offsetWidth) / 20;
						speed = endTarget > obj.offsetWidth ? Math.ceil(speed) : Math.floor(speed);
						
						// 2.临界处理
						if(endTarget === obj.offsetWidth){
							clearInterval(obj.timer);
							return;
						}
						// 3.运动起来
						obj.style.width = obj.offsetWidth + speed + 'px';
					},30);
				}
			}
		</script>
```
# 获取属性样式


```css
			#box{
				width: 200px;
				height: 200px;
				background-color: red;
				border: 1px solid #000;
			}
```



```javascript
		<div id="box"></div>
		<script type="text/javascript">
			window.onload = function() {
				var box = document.getElementById('box');
				move(box);

				function move(obj) {
					setInterval(function() {

						obj.style.width = parseInt(getStyle(obj, 'width')) - 1 + 'px';
					}, 30);
				}
            	// obj.style.width，获取的是行内样式的值
				/**
				 * 获取元素属性的函数
				 * @param {Object} obj 当前元素对象
				 * @param {Object} attr 当前元素对象的属性
				 */
				function getStyle(obj, attr) {
					if (obj.currentStyle) {
						// 兼容ie
						return obj.currentStyle[attr];
					} else {
						// 兼容主流浏览器
						return getComputedStyle(obj, null)[attr];
					}
				}
			}
		</script>
```
# 多物体运动完整版


```css
			*{
				padding: 0;
				margin: 0;
			}
			div{
				width: 300px;
				height: 150px;
				background-color: royalblue;
				margin: 20px 0;
				border: 4px solid #000;
			}
```



```javascript
		<div></div>
		<div></div>
		<div></div>
		<script type="text/javascript">
			window.onload = function() {
				var allBoxs = document.getElementsByTagName('div');
				for (var i = 0; i < allBoxs.length; i++) {
					allBoxs[i].onmouseover = function() {
						startAnimation(this, 600);
					}
					allBoxs[i].onmouseout = function() {
						startAnimation(this, 300);
					}
				}
				var speed = 0;

				function startAnimation(obj, endTarget) {
					// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
					clearInterval(obj.timer);
					obj.timer = setInterval(function() {
						// 0 获取样式属性
						var cur = parseInt(getStyle(obj,'width'));
						// 1.求速度
						speed = (endTarget - cur) / 20;
						speed = endTarget > cur ? Math.ceil(speed) : Math.floor(speed);

						// 2.临界处理
						if (endTarget === cur) {
							clearInterval(obj.timer);
							return;
						}
						// 3.运动起来
						obj.style.width = cur + speed + 'px';
					}, 30);
				}
				/**
				 * 获取元素属性的函数
				 * @param {Object} obj 当前元素对象
				 * @param {Object} attr 当前元素对象的属性
				 */
				function getStyle(obj, attr) {
					if (obj.currentStyle) {
						// 兼容ie
						return obj.currentStyle[attr];
					} else {
						// 兼容主流浏览器
						return getComputedStyle(obj, null)[attr];
					}
				}
			}
		</script>
```
多值运动


```css
			*{
				padding: 0;
				margin: 0;
			}
			div{
				width: 300px;
				height: 150px;
				background-color: royalblue;
				margin: 20px 0;
				border: 4px solid #000;
			}
```



```javascript
		<div></div>
		<div></div>
		<div></div>
		<script type="text/javascript">
			window.onload = function() {
				var allBoxs = document.getElementsByTagName('div');
				allBoxs[0].onmouseover = function() {
					startAnimation(this, 'width', 600);
				}
				allBoxs[0].onmouseout = function() {
					startAnimation(this, 'width', 300);
				}
				allBoxs[1].onmouseover = function() {
					startAnimation(this, 'height', 300);
				}
				allBoxs[1].onmouseout = function() {
					startAnimation(this, 'height', 150);
				}
				var speed = 0;

				function startAnimation(obj, attr, endTarget) {
					// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
					clearInterval(obj.timer);
					obj.timer = setInterval(function() {
						// 0 获取样式属性
						var cur = parseInt(getStyle(obj, attr));
						// 1.求速度
						speed = (endTarget - cur) / 20;
						speed = endTarget > cur ? Math.ceil(speed) : Math.floor(speed);

						// 2.临界处理
						if (endTarget === cur) {
							clearInterval(obj.timer);
							return;
						}
						// 3.运动起来
						obj.style[attr] = cur + speed + 'px';
					}, 30);
				}
				/**
				 * 获取元素属性的函数
				 * @param {Object} obj 当前元素对象
				 * @param {Object} attr 当前元素对象的属性
				 */
				function getStyle(obj, attr) {
					if (obj.currentStyle) {
						// 兼容ie
						return obj.currentStyle[attr];
					} else {
						// 兼容主流浏览器
						return getComputedStyle(obj, null)[attr];
					}
				}
			}
		</script>
```
多值运动-2


```css

```



```javascript

```
链式动画


```css

```



```javascript

```
JSON


```css

```



```javascript

```
同时运动


```css

```



```javascript

```
联动效果


```css

```



```javascript

```
侧边栏横幅效果


```css

```



```javascript

```
滚动监听


```css

```



```javascript

```