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

1. 镜像制作

   ```javascript
   //创建新镜像
   dicker commit 容器ID 镜像名称：版本号
   //压缩文件
   dicker save -o 压缩文件名称 镜像名称：版本号
   //另一个镜像
   dicker load -i 压缩文件名称
   ```

   

2. dockerfile

   - dockerfile是一个文本文件
   - 包含了一条条的指令
   - 每一条指令构建一层，基于基础镜像，最后构建出一个新的镜像
   - 对于开发：为开发团队提供了一个完全一致的开发环境
   - 对于测试：可以直接拿开发时所构建的镜像或者通过Dockerfile文件创建一个新的镜像开始工作了
   - 对于运维：在部署时，可以实现应用的无缝移植

   ``````javascript
   //dockerfile关键字
   ``````

   

3. 自定义centos7镜像

   - 定义父镜像： FROM centos:7

   - 定义作者信息：MAINTAINER 作者信息

   - 执行安装vim命令：RUN yum install -y  vim

   - 定义默认的工作目录：WORKDIR  /usr

   - 定义容器启动执行的命令：CMD  /bin/bash

     ```javascript
     FROM centos:7
     MAINTAINER it <it@gmail.com>
     RUN yum install -y vim
     WORKDIR /usr
     cmd /bin/bash
     
     ```

     - docker build -f  目录 -t   路径
     - 

4. 部署 springboot项目

   ``````javascript
   定义父镜像：FROM  java:8
   定义作者信息：MAINTAINER it <it@gmail.com>
   将jar包添加到容器并改名：Add springboot.jar app.jar
   定义容器启动执行的命令：CMD java -jar app.jar
   通过dockersfile构建镜像：docker build -f dockerfile的文件路径 -t 镜像名称：版本
   ``````

   - 映射端口：**docker run -id -p 9000:8080 app**

# docker 服务编排

1. 使用场景：

   - 从dockerfile build image或者dockerhub拉取image
   - 创建多个container
   - 管理container（启动停止删除）

2. 服务编排：按照一定的业务规则批量管理容器

3. Docker Compose工具

   - 编排多容器分布式部署的工具
   - 提供命令集管理容器化应用的完整开发周期，
   - 包括服务构建，启动和停止
   - 步骤
     - 利用dockerfile定义运行环境镜像
     - 使用docker-compose.yml定义组成应用的各服务
     - 运行docker-compose up 启动应用

4. 使用docker compose

   ``````javascript
   curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   
   //将可执行权限应用于二进制文件：
   sudo chmod +x /usr/local/bin/docker-compose
   
   //创建软链
   sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
   //测试
   docker-compose --version
   //删除二进制文件
   rm /usr/local/bin/docker-compose
   ``````

   

   - 创建docker-compose目录
     - mkdir ~/docker-compose
     - cd ~/docker-compose
     - 编写 docker-compose.yml文件

   ``````javascript
   # yaml 配置实例
   version: '3'
   services:
     nginx:
      image: nginx
      ports:
   	- 80: 80
      links:
   	 -app
      volumes:
   	- ./nginx/conf.d:/etc/nginx/conf.d
     app:
   	image: app
       expose:
   	  - "8080"
   
   ``````

   - 创建./nginx/conf.d/it.conf文件,mkdir -p ./nginx/conf.d

     ``````javascript
     
     
     server{
         listen 80;
         access_log off;
         
         location / {
             proxy_pass http://app:8080;
         }
     }
     
     ``````

   - ~/docker-compose目录下，docker-compose up 启动容器（docker-compose up -d 是后台启动）

     

   

# docker 私有仓库

1. 搭建私有仓库

   ``````javascript
   //拉取私有仓库镜像
   docker pull registry
   //启动私有仓库容器
   docker run -id --name=registry -p 5000:5000 registry
   //http://私有仓库ip:5000/v2/_catalog,有{"repositories"：[]}表示私有仓库搭建成功
   //修改daemon.json文件
   vim /etc/docker/daemon.json
   //添加一个key保存退出。让docker信任私有仓库地址
   //将私有仓库地址修改为自己私有仓库真实的IP {"insecure-registries":["私有仓库IP:5000"]}
   //重启docker服务
   systemctl restart docker
   
   docker start registry
   
   ``````

   

2. 上传镜像

   ```javascript
   //标记镜像为私有仓库的镜像
   docker tag centos:7 私有仓库的IP：5000/centos:7
   //上传标记的镜像
   docker push 私有仓库的IP：5000/centos:7
   ```

   

3. 拉取镜像

   ```javascript
   //标记镜像为私有仓库的镜像
   docker tag centos:7 私有仓库ip:5000/centos:7
   //上传标记的镜像
   docker push 私有仓库IP:5000/centos:7
   ```

   

# docker 相关概念

1. 容器就是将软件打包成标准化单元，以用于开发、交付和部署。

   - 容器镜像是轻量的、可执行的独立软件包，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。
   - 容器化软件在任何环境中都能够始终如一地运行。
   - 容器赋予了软件独立性，使其免受外在环境差异的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。

2. 对比虚拟机

   - 相同：具有相似的资源隔离和分配优势
   - 不同：容器虚拟化的是操作系统，虚拟机虚拟的是硬件
     - 容器只能运行同一种类型操作系统

   ![](对比虚拟机.png)

   