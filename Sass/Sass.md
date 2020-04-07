# 安装

yarn add  sass global

npm install sass -G

监听文件

**sass --watch input.scss output.css**

监听文件夹

**sass --watch sass: dist**

# syntax语法

1. 使用 `.scss` 文件扩展名。除了极少部分的例外， 它是 CSS 的超集，也就是说 **所有有效的 CSS 也同样都是有效的 SCSS** 。
2. 缩进语法是 Sass 的原始语法，因此它使用文件 扩展名 `.sass` 。缩进语法支持与 SCSS 相同的所有特性，但是它使用 缩进而不是花括号和分号来描述文档的格式。
3. 当 Sass 在样式表中遇到无效语法时，解析将失败， 并向用户展示错误信息，其中包含了无效语法的位置 以及错误的原因。
4. Sass 样式表是经由 Unicode 编码序列解析而来的。 解析是直接进行的，没有转换为标记流（token stream）的过程。
   - 注意，这与 CSS 不同，CSS 规定了如何从大多数错误中恢复， 而不是立即失败。这是 SCSS *严格来说* 不是CSS超集的少数情况之一。
5. -和_可以在定义时候和使用时候是等价的
6. **sass转换scssssass-convert style.sass style.scss**
7. 通过 `#{}` 插值语法在选择器和属性名中使用 SassScript 变量：

# 交互环境



```javascript

```



# 规则和指令@impor



```javascript

```



# 规则和指令@media





# 规则和指令@exten



# 规则和指令@at-ro



# 控制指令和表达式



# 混合指令和函数指令



# 

