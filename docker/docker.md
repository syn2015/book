# docker命令

# docker容器数据卷

# docker应用部署

## mysql

- -p 3307：3306 ：将容器的3306端口映射到宿主机的3307端口
- -v $PWD/conf:/etc/mysql/conf.d :将主机当前目录下的conf/my.cnf 挂载到容器的/etc/mysql/my.cnf 配置目录
- -v $PWD/logs:/logs  :将主机当前目录下的logs目录挂载到容器的/logs，日志目录
- -v $PWD/data:/var/lib/mysql：将主机当前目录下的data目录挂载到容器的/var/lib/mysql，数据目录
- -e MYSQL_ROOT_PASSWORD=123456：初始化root用户的密码

``````javascript
//搜索镜像
docker search mysql

//拉取镜像
docker pull mysql:5.6
//在/root目录下创建mysql目录用于存储mysql数据信息
mkdir ~/mysql
cd ~/mysql
//
docker run -id \
-p 3307:3306   \
--name=c_mysql  \
-v $PWD/conf:/etc/mysql/conf.d \
-v $PWD/logs:/logs \
-v $PWD/data:/var/lib/mysql  \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:5.6
//进入容器 操作MySQL
docker exec -it c_mysql /bin/bash
``````



## tomcat

- -p 8080:8080  ：将容器的8080端口映射到主机的8080端口
- -v $PWD:/usr/local/tomcat/webapps：将主机中当前目录挂载到容器的webapps目录

```javascript
//搜索
docker search tomcat
//拉取
docker pull tomcat
//创建容器，设置端口映射，目录映射
mkdir ~/tomcat
cd ~/tomcat
//
docker run -it --name=c_tomcat  \
-p 8080:8080  \
-v $PWD:/usr/local/tomcat/webapps  \
tomcat

```



## nginx

## redis

# dockerfile

# docker 服务编排

# docker 私有仓库

# docker 相关概念