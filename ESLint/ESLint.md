

# ESLint配置



```javascript
yarn init -y && yarn add eslint

//eslint配置文件
npx eslint --init 
//配置scripts字段,运行eslint "eslint":"eslint ./src" 表示src文件下的所有有JS文件
  "scripts": {
    "eslint": "eslint ./src/*.js"
  },
//自动执行
yarn eslint

//
"rules":{
    "no-console":"off",
    "quotes":"off",
    "no-unused-vars":"off"
}

//Extra semicolon 额外的分号

//对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；
//对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }. { "env": { "es6": true } } 自动启用es6语法，但 { "parserOptions": { "ecmaVersion": 6 } } 不自动启用es6全局变量。
```

# 五种.eslintrc配置文件

```javascript
//JS版本eslintrc
npx eslint --init 选中jS版本
//yaml版本
npx eslint --init 选中yaml版本
//JSON版本
npx eslint --init 选中json版本
//package.json文件
eslintConfig 字段


//注释语法
/** eslint no-console :"off",no-unused-vars:"off" */

//为单独一行或几行代码设置eslint规则

```



# env

全局变量

```json
  "env": {
        "browser": true,
        "es6": true
    },
```

# Specifying



```javascript
   //"ServerData":true,可以赋值
   
   "globals": {
        "ServerData":"readonly",
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    //为单个文件配置,注释语法
    /*global ServerData*/
```

# Rules

```

```

# Extends

```javascript
rules 属性可以做下面的任何事情以扩展（或覆盖）规则：

启用额外的规则
改变继承的规则级别而不改变它的选项：
基础配置："eqeqeq": ["error", "allow-null"]
派生的配置："eqeqeq": "warn"
最后生成的配置："eqeqeq": ["warn", "allow-null"]

覆盖基础配置中的规则的选项
基础配置："quotes": ["error", "single", "avoid-escape"]
派生的配置："quotes": ["error", "single"]
最后生成的配置："quotes": ["error", "single"]
```



# 配置Plugin

```javascript
	//react   
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    //vue
     //package.json文件配置
     "scripts":{
         "eslint":"eslint --ext .js,.vue src"
     }
   	  //.eslintrc文件
    "extends": [
        "eslint:recommended",
        'plugin:vue/recommended'
    ],
    "plugins": [
        "vue"
    ],
     
```



# glob模式定制

要为特定类型的文件指定处理器，请使用 `overrides` 键和 `processor` 键的组合

```javascript
//对 *.md 文件使用处理器 a-plugin/markdown。
{
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        }
    ]
}

```

处理器可以生成命名的代码块，如 0.js 和 1.js。ESLint 将这样的命名代码块作为原始文件的子文件处理。你可以在配置的 overrides 部分为已命名的代码块指定附加配置。

```javascript

//对以 .js 结尾的 markdown 文件中的已命名代码块禁用 strict 规则。
{
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        },
        {
            "files": ["**/*.md/*.js"],
            "rules": {
                "strict": "off"
            }
        }
    ]
}
```



# 提交代码自动校验

```javascript
//pre-commit 插件
//yarn add -D pre-commit 
//在package.json配置pre-commit字段
  "pre-commit": [
    "script命令1",
    "script命令2",
    "script命令3"
  ]

//husky插件
//yarn add husky -D
//package.json配置husky字段

"husky": {
    "hooks": {
      "pre-commit": "npm  run test",
      "pre-push": "npm run test",
      "...": "..."
    }
  }

```

