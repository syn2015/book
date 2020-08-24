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
# 多值运动


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
# 多值运动-2


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
				opacity: 0.3;
				filter: alpha(opacity: 30);
			}
```



```javascript
		<div></div>
		<div></div>
		<div></div>
		<script src="js/myAnimation.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			window.onload = function() {
				var allBoxs = document.getElementsByTagName('div');
				allBoxs[0].onmouseover = function() {
					startAnimation(this, 'opacity', 100);
				}
				allBoxs[0].onmouseout = function() {
					startAnimation(this, 'opacity', 30);
				}
       		 }

		</script>
```
startAnimation方法
```javascript
var speed = 0;
/**
 * 动画的函数
 * @param {Object} obj 当前的对象
 * @param {Object} attr 当前元素对象的属性
 * @param {Object} endTarget 末尾位置
 */
function startAnimation(obj, attr, endTarget,fn) {
	// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		// 0 获取样式属性
		// 透明度变化处理
		if (attr === 'opacity') {
            // 引用JS的浮点数精度问题，需要四舍五入得到整数
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		} else {

			cur = parseInt(getStyle(obj, attr));
		}

		// 1.求速度
		speed = (endTarget - cur) / 20;
		speed = endTarget > cur ? Math.ceil(speed) : Math.floor(speed);

		// 2.临界处理
		if (endTarget === cur) {
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
			return;
		}
		// 3.运动起来
		if (attr === 'opacity') {
			obj.style[attr] = `alpha(opacity: ${cur + speed})`;
			obj.style[attr] = (cur + speed) / 100;

		} else {
			obj.style[attr] = cur + speed + 'px';
		}

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
```

# 链式动画


```css
			#box{
				width: 200px;
				height: 200px;
				background-color: palevioletred;
				opacity: 0.3;
			}
```



```javascript
		<div id="box"></div>
		<script src="js/myAnimation.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			window.onload = function (){
				var box = document.getElementById('box');
				box.onmouseover = function (){
					startAnimation(box,'width',500,function (){
						startAnimation(box,'height',400,function (){
							startAnimation(box,'opacity',100);
						})
					})
				}
			}
		</script>
```
# JSON


```css

```



```javascript
			var json = {
				"name": "mjj",
				"age": 29,
				"width": 500,
				"opacity": 100
			}
			for(var attr in json){
				console.log(attr,json[attr]);
			}
// 打印类型
//name mjj
// age 29
//width 500
//opacity 100
```
# 同时运动


```css
			#box{
				width: 200px;
				height: 200px;
				background-color: #DA70D6;
			}
```



```javascript
		<div id="box"></div>
		<script src="js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			window.onload = function (){
				var box = document.getElementById('box');
				box.onmouseover = function (){
					startAnimation(box,{"width": 500,"opacity": 30});
				}
				box.onmouseout = function (){
					startAnimation(box,{"width": 200,"opacity": 100});
				}
			}
		</script>
```
```javascript
var speed = 0;
/**
 * 动画的函数
 * @param {Object} obj 当前的对象
 * @param {Object} attr 当前元素对象的属性
 * @param {Object} endTarget 末尾位置
 */
function startAnimation(obj, json, fn) {
	// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		var flag = true; //标杆 如果true，证明所有的属性都到达终点值
		for (var attr in json) {
			// 0 获取样式属性
			// 透明度变化处理
			switch (attr) {
				case 'opacity':
					cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
					break;
				case 'scrollTop':
					cur = obj[attr]
					break;
				default:
					cur = parseInt(getStyle(obj, attr));
					break;
			}
			// 1.求速度
			speed = (json[attr] - cur) / 10;
			speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
			// 2.临界处理
			if (json[attr] !== cur) {
				flag = false;
			}
			// 3.运动起来
			switch (attr) {
				case 'opacity':
					obj.style[attr] = `alpha(opacity: ${cur + speed})`;
					obj.style[attr] = (cur + speed) / 100;
					break;
				case 'scrollTop':
					obj.scrollTop = cur + speed;
				default:
					obj.style[attr] = cur + speed + 'px';
					break;
			}
		}

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
			return;
		}

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
```



改进：变化属性需要同时满足

```javascript
var speed = 0;
/**
 * 动画的函数
 * @param {Object} obj 当前的对象
 * @param {Object} attr 当前元素对象的属性
 * @param {Object} endTarget 末尾位置
 */
function startAnimation(obj, json, fn) {
	// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		var flag = true; //标杆 如果true，证明所有的属性都到达终点值
		for (var attr in json) {
			// 0 获取样式属性
			// 透明度变化处理
			switch (attr) {
				case 'opacity':
					cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
					break;
				case 'scrollTop':
					cur = obj[attr]
					break;
				default:
					cur = parseInt(getStyle(obj, attr));
					break;
			}
			// 1.求速度
			speed = (json[attr] - cur) / 10;
			speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
			// 2.临界处理
			if (json[attr] !== cur) {
				flag = false;
			}
			// 3.运动起来
			switch (attr) {
				case 'opacity':
					obj.style[attr] = `alpha(opacity: ${cur + speed})`;
					obj.style[attr] = (cur + speed) / 100;
					break;
				case 'scrollTop':
					obj.scrollTop = cur + speed;
				default:
					obj.style[attr] = cur + speed + 'px';
					break;
			}
		}

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
			return;
		}

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
```

# 联动效果

```css
			*{
				padding: 0;
				margin: 0;
			}
			#ad{
				position: fixed;
				right: 0;
				bottom: 0;
			}
			#close{
				position: absolute;
				right: 0;
				top: 0;
				width: 25px;
				height: 25px;
				z-index: 5;
			}
```



```javascript
		<div id="ad">
			<img src="images/ad.png" alt="" width="300">
			<span id="close">
				
			</span>
		</div>
		<script src="js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			// 1.联动效果
			// 2.侧边栏横幅
			// 3.滚动监听
			// 4.轮播图
			// (1)获取标签
			var ad = document.getElementById('ad');
			var close = document.getElementById('close');
			close.onclick = function (){
				startAnimation(ad,{"height": 260},function(){
					startAnimation(ad,{"width": 0},function(){
						ad.style.display = 'none';
					})
				})
			}
			
		</script>
```



# 侧边栏横幅效果


```css
    * {
        padding: 0;
        margin: 0;
    }

    #aside {
        position: absolute;
        top: 200px;
        left: 0;
        width: 300px;
    }

    #aside img {
        width: 100%;
    }
```



```javascript
<body style="height: 5000px;">
    <div id="aside">
        <img src="images/aside.png" alt="">
    </div>
    <script src="js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
    window.onload = function() {
        // 1.获取标签
        var aside = document.getElementById('aside');
        // 2.获取广告的偏移量
        var aside_top = aside.offsetTop;
        window.onscroll = function() {
            // 3.获取页面滚动的高度
            var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            startAnimation(aside, { "top": docScrollTop + aside_top });
        }
    }
    </script>
</body>
```
# 滚动监听


```css
    * {
        padding: 0;
        margin: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    .container {
        width: 1190px;
        height: 100%;
        margin: 0 auto;
    }

    .container div {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        font-size: 30px;
    }

    .aside {
        position: fixed;
        width: 40px;
        right: 20px;
        top: 300px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }

    .aside li {
        height: 50px;
        border-bottom: 1px solid #ddd;
    }

    .aside li a {
        color: peru;
    }

    .aside li.current {
        background-color: coral;
    }

    .aside li.current a {
        color: #fff;
    }
    </style>
```



```javascript
    <div class="container" id="box">
        <div class="current">爱逛好货</div>
        <div>好店主播</div>
        <div>品质特色</div>
        <div>猜你喜欢</div>
    </div>
    <ul class="aside" id="aside">
        <li class="current">
            <a href="javascript:void(0)">爱逛好货</a>
        </li>
        <li>
            <a href="javascript:void(0)">好店主播</a>
        </li>
        <li>
            <a href="javascript:void(0)">品质特色</a>
        </li>
        <li>
            <a href="javascript:void(0)">猜你喜欢</a>
        </li>
    </ul>
    <script src="js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
    window.onload = function() {
        // 1.获取标签
        var box = document.getElementById('box');
        var allBoxs = box.children;
        var aside = document.getElementById('aside');
        var lis = aside.children;
        var isClick = false; //默认没有被点击
        // 2.上色
        var colors = ['red', 'pink', 'purple', 'blue'];
        for (var i = 0; i < allBoxs.length; i++) {
            allBoxs[i].style.backgroundColor = colors[i];
        }

        // 3.监听侧边栏按钮的点击
        for (var j = 0; j < lis.length; j++) {
            lis[j].index = j;
            lis[j].onclick = function() {
                isClick = true;
                for (var k = 0; k < lis.length; k++) {
                    lis[k].className = '';
                }
                // 设置当前的类
                this.className = 'current';
                var _this = this;
                // 页面动画起来
                startAnimation(document.documentElement, {
                    "scrollTop": this.index * (document.body.clientHeight)
                }, function() {
                    isClick = false;
                    // 这是跳转的页面
	                if (_this.index == lis.length - 1) {
	                    alert(111);
	                    window.open('https://www.baidu.com');
	                }
                })

                
                // document.documentElement.scrollTop = this.index * document.body.clientHeight;

            }
        }
        // 4.监听页面滚动
        window.onscroll = function() {
            if (!isClick) {
                // 4.1 获取页面滚动的高度
                var docScrollTop = document.documentElement.scrollTop+20 || document.body.scrollTop+20;
                console.log(docScrollTop);
                for (var i = 0; i < lis.length; i++) {
                    if (docScrollTop > allBoxs[i].offsetTop) {
                        for (var j = 0; j < allBoxs.length; j++) {
                            lis[j].className = '';
                        }
                        lis[i].className = 'current';
                    }
                }
            }
        }
    }
    </script>
```

改进获取scrollTop的方式

```javascript
var speed = 0;
/**
 * 动画的函数
 * @param {Object} obj 当前的对象
 * @param {Object} attr 当前元素对象的属性
 * @param {Object} endTarget 末尾位置
 */
function startAnimation(obj, json, fn) {
	// 针对于多物体运动,定时器的返回值要绑定当前的对象中.
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var cur = 0;
		var flag = true; //标杆 如果true，证明所有的属性都到达终点值
		for (var attr in json) {
			// 0 获取样式属性
			// 透明度变化处理
			switch (attr) {
				case 'opacity':
					cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
					break;
				case 'scrollTop':
					cur = obj[attr]
					break;
				default:
					cur = parseInt(getStyle(obj, attr));
					break;
			}
			// 1.求速度
			speed = (json[attr] - cur) / 10;
			speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
			// 2.临界处理
			if (json[attr] !== cur) {
				flag = false;
			}
			// 3.运动起来
			switch (attr) {
				case 'opacity':
					obj.style[attr] = `alpha(opacity: ${cur + speed})`;
					obj.style[attr] = (cur + speed) / 100;
					break;
				case 'scrollTop':
					obj.scrollTop = cur + speed;
				default:
					obj.style[attr] = cur + speed + 'px';
					break;
			}
		}

		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
			return;
		}

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
```
# 轮播图

```css
*{
	padding: 0;
	margin: 0;
}
.slider{
	width: 400px;
	height: 500px;
	margin: 100px auto;
	position: relative;
	overflow: hidden;
}
.slider .slider_scroll{
	position: relative;
	width: 400px;
	height: 500px;
}
.slider_main{
	position: relative;
	width: 400px;
	height: 500px;
}
.slider_main .item{
	width: 400px;
	height: 500px;
	position: absolute;
}
.slider_main .item img{
	width: 400px;
	height: 500px;
}
.slider_index{
	width: 400px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #fff;
	font-weight: 700;
	z-index: 20;
	position: absolute;
	bottom: 0;
	background-color: rgb(0,0,0,.5);
	cursor: pointer;
}
.slider_index .slider_index_icon{
	display: inline-block;
	line-height: 40px;
	margin: 0 10px;
}
.slider_index .slider_index_icon.current{
	color: red;
}
.slider_scroll span{
	position: absolute;
	width: 30px;
	height: 68px;
	background: url(../../images/icon-slides.png) no-repeat;
	top: 50%;
	margin-top: -34px;
	cursor: pointer;
}
.slider_scroll span.next{
	right: 0;
	background-position: -46px 0;
}
.slider_scroll span.prev{
	left: 0;
	background-position: 0 0;
}
```

```javascript
		<div id="slider" class="slider">
			<div class="slider_scroll" id="slider_scroll">
				<div class="slider_main" id="slider_main">
					
					<div class="item">
						<a href="#">
							<img src="images/img1.png" alt="">
						</a>
					</div>
					<div class="item">
						<a href="#">
							<img src="images/img2.png" alt="">
						</a>
					</div>
					<div class="item">
						<a href="#">
							<img src="images/img3.png" alt="">
						</a>
					</div>
					<div class="item">
						<a href="#">
							<img src="images/img4.png" alt="">
						</a>
					</div>
				</div>
				
				<span class="next" id="next"></span>
				<span class="prev" id="prev"></span>
			</div>
			<div class="slider_index" id="slider_index">
				<!-- 通过js来动态的生成 -->
			</div>
			<script src="../js/myAnimation2.js" type="text/javascript" charset="utf-8"></script>
			<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
```



```javascript
window.onload = function() {
	// 1.获取标签
	var slider = document.getElementById('slider');
	var slider_main = document.getElementById('slider_main');
	var allBoxs = slider_main.children;
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var slider_index = document.getElementById('slider_index');
	var iNow = 0; //当前可视元素的索引
	var timer = null;
	// 2.动态创建索引器
	for (var i = 0; i < allBoxs.length; i++) {
		var span = document.createElement('span');
		if (i === 0) {
			span.className = 'slider_index_icon current';
		} else {
			span.className = 'slider_index_icon'
		}
		span.innerText = i + 1;
		slider_index.appendChild(span);
	}
	// 3.让滚动的元素归位
	var scroll_w = parseInt(getStyle(slider, 'width'));
	for (var j = 1; j < allBoxs.length; j++) {
		allBoxs[j].style.left = scroll_w + 'px';
	}
	// 4.监听下一张按钮的事件
	next.onclick = function() {
		/**
		 * 1.让当前可视元素动画左移
		 * 2.让下一张图片 快速的显示到右边
		 * 3.让这个元素动画进入
		 */
        startAnimation(allBoxs[iNow],{
			"left":-scroll_w
		})
		iNow++;
		if(iNow >= allBoxs.length){
			iNow = 0;
		}
		allBoxs[iNow].style.left =  scroll_w + 'px';
		startAnimation(allBoxs[iNow],{
			"left":0
		})
		// 改变索引器
		changeIndex();
		
	}
	
	// 5.监听上一个按钮的事件
	prev.onclick = function (){
		/**
		 * 1.当前元素快速的右移
		 * 2.让上一个元素快速的到左边
		 * 3.让这个元素动画进入
		 */
		startAnimation(allBoxs[iNow],{
			"left":scroll_w
		})
		iNow--;
		if(iNow < 0){
			iNow = allBoxs.length - 1;
		}
		allBoxs[iNow].style.left = - scroll_w + 'px';
		startAnimation(allBoxs[iNow],{
			"left":0
		})
		// 改变索引器
		changeIndex();
		
	}
	
	// 6.开启定时器 自动播放
	timer = setInterval(autoPlay,2000);
	
	 
	
	
	var slider_index_icons = slider_index.children;
	// 6.遍历索引器，添加监听的事件
	for(var i = 0; i < slider_index_icons.length; i++){
		slider_index_icons[i].onmousedown = function (){
			// 6.1 获取当前点击索引
			var index = parseInt(this.innerText) - 1;
			
			// 点击的索引与当前的iNow进行对比
			if(index > iNow){
				// 下一个操作
				startAnimation(allBoxs[iNow],{
					'left':-scroll_w
				})
				allBoxs[index].style.left = scroll_w + 'px';			
			}else if(index < iNow){
				startAnimation(allBoxs[iNow],{
					'left':scroll_w
				})
				allBoxs[index].style.left = -scroll_w + 'px';		
			}
			// 更新索引
			iNow = index;
			startAnimation(allBoxs[iNow],{
				"left": 0
			})
			// 改变索引器
			changeIndex();
		}
	}
	// 控制当前的索引
	function changeIndex() {
		for (var i = 0; i < slider_index_icons.length; i++) {
			slider_index_icons[i].className = 'slider_index_icon';
		}
		slider_index_icons[iNow].className = 'slider_index_icon current';
	}


}
```

