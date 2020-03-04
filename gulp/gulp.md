

# Gulp

1. 基于Node平台开发的前端构建工具
   - 将机械化操作编写成任务，执行命令自动执行任务
2. 作用
   - 项目上线时，HTML，CSS，JS文件压缩合并
   - 语法转换（es6,less...)
   - 公共文件抽离
   - 修改文件浏览器自动刷新

# 使用Gulp

1. 安装到本地   npm i gulp 下载库文件
2. 在根目录建立**gulpfile.js文件**
3. **重构项目的文件夹结构，src目录放置源代码文件，dist目录放置构建后文件**
4. 在**gulpfile.js**文件中编写任务
5. 在**命令行中执行gulp任务**

# Gulp方法

## gulp.src(文件路径)

获取任务要处理的文件

## gulp.dest(文件路径)

1. 输出文件
2. **.pipe(将要处理的代码)**

## gulp.task(任务的名称,callback)

1. 建立gulp任务

## gulp.watch()

监控文件的变化

## gulp-cli命令行工具

1. 安装  npm i gulp-cli -G

2. 执行  gulp 任务名称

   ``````javascript
   const gulp=require('gulp')
   //使用gulp.task()建立任务
   gulp.task('first',()=>{
       //获取要处理的文件
       gulp.src('./index.css')
       //处理后的文件输出到dist目录
       .pipe(gulp.dest('./dist/css'));
   })
   ``````

   

## Gulp插件

**gulp-htmlmin html**文件压缩

``````javascript
npm i --save gulp-htmlmin
const htmlmin=require('gulp-htmlmin')
gulp.task('htmlmin',()=>{
    gulp.src('./src/*.html')
    .pipe('htmlmin({collapseWhitespace:true})')
    .pipe(gulp.dest('dist'));
})
``````



**gulp-csso** 压缩css

``````javascript
npm i gulp-csso
const csso=require('gulp-csso')
``````



**gulp-babel** js语法转换

``````javascript
npm i gulp-babel @babel/core @babel/preset-env  --save-dev  //babel 7
npm i gulp-babel@7 babel-core babel-preset-env  --save-dev   //babel 6
const babel=require('gulp-babel');
npm i gulp-uglify 
const uglify=require('gulp-uglify');
gulp.task('jsmin',()=>{
    gulp.src('./src/js/*.js')
    .pipe(babel({
        //由它判断代码的运行环境，转换为环境所支持的代码
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    
})
``````



**gulp-less**  less语法转换

``````javascript
npm i gulp-less
npm i gulp-csso
const csso=require('gulp-csso')
const less=require('gulp-less')
gulp.task('cssmin',()=>{
   // gulp.src('./src/css/*.less')
    //选择css和less文件
    gulp.src(['./src/css/*.less','./src/css/*.css'])
    //先转换再压缩
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    
})
``````



**gulp-uglify**  压缩混淆JS

```javascript
npm i gulp-uglify 
const uglify=require('gulp-uglify');
```



**gulp-file-include**  公共文件包含

```javascript
npm i gulp-file-include

const fileinclude=require('gulp-file-include')
const htmlmin=require('gulp-htmlmin')
gulp.task('htmlmin',()=>{
    gulp.src('./src/*.html')
    .pipe(fileinclude())
    .pipe('htmlmin({collapseWhitespace:true})')
    .pipe(gulp.dest('dist'));
})

//页面中使用特殊语法引入公共部分
@@include('./common/header.html')//
```

**browsersync** 浏览器实时同步

```

```

复制文件夹

```javascript
gulp.task('copy',()=>{
	gulp.src('./src/images/*')
		.pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
    	.pipe(gulp.dest('dist/lib'))
})
```

build构建任务

``````javascript
gulp.task('default',['htmlmin','cssmin','jsmin','copy']);
``````

- default名称的任务，默认执行

# package.json文件

1. package.json文件，项目描述文件。

   **npm init -y ** 生成

2. **项目依赖**，记录在**dependencies**中。服务器环境下，**npm i  --production**

3. **开发依赖**，使用**--save-dev**参数，并记录在**devDependencies**字段中

4. **package-lock.json**文件,记录模块的依赖关系，**锁定包的版本同时加速包的下载速度**

5. scripts字段，为长命令起别名

# Node模块加载机制

1. require方法根据路径查找模块
   1. 完整路径下，直接引用
   2. 后缀省略，**先找同名JS文件再找同名JS文件夹**
   3. **在同名文件夹下找index.js**
   4. 没有index.js，**在当前文件夹中的package.js文件中查找main字段中的入口文件**
   5. 入口文件不存在或没有指定，报错
2. 没有路径且没有后缀的模块
   1. node假设它是系统模块

