**简单的界面设计，并不影响server端的复杂度**

# server端的开发特点

1. 服务稳定性
2. 考虑内存和cpu的优化
3. 日志记录
4. 安全
5. 集群和服务拆分

# 接口设计

| 描述               | 接口             | 方法 | url参数        | 备注                     |
| ------------------ | ---------------- | ---- | -------------- | ------------------------ |
| 获取列表博客       | /api/blog/list   | get  | author,keyword | 参数为空，则不查询       |
| 获取一篇博客的内容 | /api/blog/detail | get  | id             |                          |
| 新增一篇博客       | /api/blog/new    | post |                | post中由新增消息         |
| 更新一篇博客       | /api/blog/update | post | id             | postData中有更新内容     |
| 删除一篇博客       | /api/blog/del    | post | id             |                          |
| 登陆               | /api/user/login  | post |                | postData中有用户名和密码 |

