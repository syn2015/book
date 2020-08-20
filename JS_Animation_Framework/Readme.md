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

