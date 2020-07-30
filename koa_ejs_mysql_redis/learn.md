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