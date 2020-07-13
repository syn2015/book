# 开发环境

# 基础类型

# Symbol类型

# 接口

# 函数

# 泛型

# ES6

# TS中的类

# 枚举

# 类型推断和兼容性

# 高级类型

# ES6和nodejs中的模块

```javascript
//es6的模块
export
import
// 每个文件只能由一个export default
// export default 可以写值
eport default
//import和export的复合写法
export {} from '路径'
//node.js的模块
exports
module.exports
```



# TS模块和命名空间

TS参考了ES6的模块

```javascript
//模块
export
import
export default
export=和import xx=require()

//命名空间
定义和使用
拆分为多个文件

//别名

//模块解析
相对和非相对模块导入
模块解析策略
模块解析配置项
```





# 声明合并



```javascript
//合并接口
//合并命名空间
//不同类型合并
 //命名空间和函数
 //命名空间和枚举
```



| 声明类型           | 创建了命名空间 | 创建了类型 | 创建了值 |
| ------------------ | -------------- | ---------- | -------- |
| Namespace          | √              |            | √        |
| Class              |                | √          | √        |
| Enum               |                | √          | √        |
| Interface          |                | √          |          |
| Type Alias类型别名 |                | √          |          |
| Function           |                |            | √        |
| Variable           |                |            | √        |

# 装饰器



```
装饰器定义
装饰器工厂
装饰器组合
装饰器求值
类装饰器
方法装饰器
访问器装饰器
属性装饰器
参数装饰器
```



# Mixins混入

```javascript
//对象的混入
//类的混入
```



# 重要更新

# 声明文件

# tsconfig.json文件



```json
{
  "compilerOptions": {
     "target":"es5",//编译后的版本目标
     "module":"commonjs",//指定使用的模块标准
     "lib":[
         "es6",
         "dom"
     ],//lib，指定包含在编译中的库文件
    
     "allowJs": true,                       /* 是否允许编译JS文件 */
     "checkJs": true,                       /* 是否检查和报告JS文件中的错误 */
     "jsx": "preserve",                     /* 指定jsx代码用于的开发环境 */
     "declaration": true,                   /*是否在编译时候生成响应的".d.ts“声明文件。不能和allowJS同时设为true */
     "declarationMap": true,                /*是否为声明文件.d.ts生成map文件 */
     "sourceMap": true,                     /* 是否编译时生成.map文件 */
     "outFile": "./",                       /*指定输出的文件合并为一个文件，输出的路径和文件名 。只有module为amd和system时才支持*/
     "outDir": "./",                        /* 输出的文件夹*/
     "rootDir": "./",                       /* 指定编译文件的根目录，*/
     "composite": true,                     /*是否编译构建引用项目*/
     "tsBuildInfoFile": "./",               /*  */
     "removeComments": true,                /* 是否在编译时删除注释 */
     "noEmit": true,                        /*不生成编译文件，一般很少用 */
     "importHelpers": true,                 /*是否引用tslib里的辅助工具函数 */
     "downlevelIteration": true,            /*当target为es5 es3时，为for-of，spread ,destructuring中的迭代器提供完全支持 */
     "isolatedModules": true,               /*是否将每个文件作为单独的模块。它不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    "strict": true,                           /* 是否开启所有类型检查 */
     "noImplicitAny": true,                 /* 当为true,则没有设置明确类型的会报错。 */
     "strictNullChecks": true,              /*当为true,则null和undefined不能赋值给非这两种类型的值，别的类型的值也不能赋给他们。除了any类型和undefined可以赋值给void类型*/
     "strictFunctionTypes": true,           /* 是否使用函数双向协变 */
     "strictBindCallApply": true,           /* 当为true时，会对bind,call和apply绑定的方法的参数的检查是严格检查 */
     "strictPropertyInitialization": true,  /*当为true， 会检查非undefined属性是否已经在构造函数里初始化，需要同时开启strictNullChecks. */
     "noImplicitThis": true,                /*当this表达式的值为any类型的时候，生成一个错误 */
     "alwaysStrict": true,                  /*是否始终以严格模式检查每个模块，并在编译之后的JS文件中加入”use strict“字符串 */
    /* Additional Checks */
     "noUnusedLocals": true,                /* 是否检查定义了但是没有使用的变量*/
     "noUnusedParameters": true,            /* 是否检查函数中定义了参数但是没有使用 */
     "noImplicitReturns": true,             /* 检查函数是否有返回值，当为true,没有函数返回值则提示*/
     "noFallthroughCasesInSwitch": true,    /* 检查switch中是否有case没有使用break跳出*/

    /* Module Resolution Options */
     "moduleResolution": "node",            /* 模块解析策略: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
     "baseUrl": "./",                       /* 设置解析非相对模块名称的基本目录，相对模块不受baseUrl的影响 */
     "paths": {},                           /* 用于设置模块名到基于baseUrl的路径映射 */
     "rootDirs": [
         
     ],                        /* 路径列表，在构建时候根据路径把内容都放到一个文件夹中 */
     "typeRoots": [],                       /* 指定声明文件或文件夹的路径，指定了此项，则只有在这里列出的声明文件才会被加载*/
     "types": [],                           /* 指定需要包含的模块，列出的模块的声明文件才会被加载进来*/
     "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true ,                  /* 为导入内容创建命名空间，实现commonJS和ES模块之间的互操作性*/
     "preserveSymlinks": true,              /* 是否把符号链接解析为其真实的路径*/
     "allowUmdGlobalAccess": true,          /* */

    /* Source Map Options */
     "sourceRoot": "",                      /* 指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写入.map文件里*/
     "mapRoot": "",                         /* 指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
     "inlineSourceMap": true,               /* 是否将map文件的内容和js文件编译在同一个js文件中。当true， map内容会以//# sourceMappingURL=然后接base64字符串的形式插入在JS文件底部 */
     "inlineSources": true,                 /* 是否指定进一步将.ts文件的内容也包含到输出文件夹中*/

    /* Experimental Options */
     "experimentalDecorators": true,        /* 是否启用实验性的装饰器特性 */
     "emitDecoratorMetadata": true,         /* 是否为装饰器提供元数据支持。元数据可以通过Reflect提供的静态方法获取，需要引入ES2015.Reflect库*/
  }

  "include": [],
  "files":[],//数组列表，包含指定文件的相对或绝对路径，编译器编译时只编译包含在files中的文件。不指定，取决于是否配置有include选项。没有include选项，默认编译根目录下及其所有子目录中的文件。路径必须是指定文件，不能是文件夹且不能使用* ？ **/等通配符
  "include":[],//指定编译的路径列表。可以是文件夹和文件，使用相对或绝对路径。可以使用通配符。
  "exclude":[],//排除的文件，规则同include
  "extends":"",//指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件配置会覆盖当前文件的配置。TS从3.2版本开始，支持继承一个来自node.js包的tsconfig.json配置文件
  "compileOnSave":true,//是否在编辑了项目中文件保存的时候，根据tsconfig.json的配置重新生成文件。需要编译器支持
  "references":[]//一个对象数组，指定要引用的项目
}

```

