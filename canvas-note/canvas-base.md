# canvas标签

默认宽高300*150。

canvas的宽高应该写在标签属性中为数值形式，样式中的宽高是按照canvas默认宽高进行等比例缩放的。

# 绘制环境

getContext('2d')：目前仅支持2D场景

# 绘制方块

fillRect(L,T,W,H):默认颜色是黑色

strokeRect(L,T,W,H)：带边框的方块-默认为1像素黑色边框（截图在PS上显示为2像素的原因是，因为设备显示上不能显示0.5像素，所以只能显示为2像素）

# 设置绘图

fillStyle:填充颜色，绘制canvas是有顺序的

lineWidth:线宽度，是一个数值

strokeStyle:边线颜色

# 边界绘制

lineJoin：边界连接点样式。miter默认、round圆角、bevel斜角

lineCap：端点样式。butt默认、round圆角、square(高度多出的部分是宽一半的值)

# 绘制路径

beginPath（）：开始绘制路径

moveTo（X，Y）：移动到绘制的新目标点

lineTo(X，Y)：新的目标点

stroke()：画线，默认黑色

fill()：填充，默认黑色

rect(L,T,W,H)：矩形区域

clearRect(L,T,W,H):删除一个画布的矩形区域

save()：保持路径

restore()：恢复路径。和save()前后搭配可以划分一个独立的区域。

closePath（）：结束绘制路径

# 绘制圆

<img src="arc().png" style="zoom:150%;" />

**arc(X，Y，半径，起始弧度，结束弧度，旋转方向)：**

- 弧度和角度的关系：**弧度=角度*Math.PI/180**

- 旋转方向：顺时针为false、逆时针true

- 钟表

  ``````javascript
  
  ``````

  

# 绘制其他曲线

arcTo(x1,y1,x2,y2 r)：第一组坐标、第二组坐标、半径

quadraticCurveTo(dx,dy,x1,y1)：贝塞尔曲线，第一组控制点、第三组结束坐标

bezierCurveTo(dx1,dy1,dx2,dy2,x1,y1)：贝塞尔曲线，第一组控制点、第二组控制点、第三组结束坐标

# 变换

translate(X,Y)：偏移，从起始点为基准点，移动当前坐标位置

rotate(角度*Math.PI/180)：旋转，参数为弧度

scale(X轴缩放比例,Y轴缩放比例)：缩放

旋转的方块

`````javascript

`````

# 插入图片

等图片加载完成，再执行canvas操作：图片预加载，再onload中调用方法

drawImage(oImg,x,y,w,h)：oImg是当前图片x,y坐标，w,h：宽高

# 设置背景

createPattern(oImg,平铺方式)：参数有repeat、repeat-x、repeat-y、no-repeat





 



