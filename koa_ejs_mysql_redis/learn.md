# ejs
## 变量
## 判断和循环
## 引用组件

# mysql

```mysql
use koa2_weibo_koa2;

```

## 外键

## 更新限制&删除级联

## 连表查询



```mysql
select * from blogs inner join users on users.id=blogs.userid; -- 不一定有外键
select blogs.*,users.username,users.nickname from blogs inner join users.id=blogs.userid where users.username='lisi';
```

## sequelize

ORM工具。

- 数据表，用JS中的模型（class 或对象）代替
- 一条或多条记录，用JS中一个对象或数组代替
- sql 语句，用对象方法代替

### 建模&同步到数据库



```javascript
npm i mysql2 sequelize -d
```



### 增删改查&连表查询



```javascript

// 连表1

// 删除

```

### 连接池

![](./连结池.png)

```javascript
const Sequelize = require('sequelize')
const conf = {
    host：'localhost',
    dialect: 'mysql'
}
// 线上环境，使用连接池
conf.pool={
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000  // 如果一个连接池 10 s 之内没有被使用，则释放
}
const seq = new Sequelize("database", "user", "password", conf)

```

# Redis

redis,是内存数据库，mysql是硬盘数据库

```javascript
//node操作redis
// config/db.js
let REDIS_CONF={
    port:6379,
    host:'127.0.0.1'
}
module.exports = {
    REDIS_CONF
}

//src/cache/_redis.js
const redis=require('redis')
const {REDIS_CONF}=require('../conf/db')
//


```

# 线上线下环境配置



```

```



# 补充：

## vscode 拼写检查插件：

