# 终端terminal

1. 关机
   - 正常关机   shutdown -h now 
   - 关闭内存  halt
   - init  0    (有局限性)

# 文件和文件夹

- bin，全称binary，存储二进制文件，可运行
- dev，存放外接设备
- etc，存放配置文件，
- home，存放除root用户以外的账户信息
- proc，存放系统运行的进程
- root，root用户的信息
- sbin，全程super binary,存放有super权限的二进制文件
- tmp，存放临时文件
- usr，存放用户安装的软件
- var，存放系统/软件的日志文件
- mtn，外接设备的挂载目录

# 基础指令

1. 命令通用格式：  指令 【选项】 【对象】

   - 一个指令包含多个选项和多个对象

2. ls

   ![ls](ls_command.jpg)

3. cd  切换命令

   - cd ~  切换到当前用户的home目录
   - cd - 切换到之前的目录

4. pwd :打印当前路径

5. mkdir

   - 创建目录

6. touch

   - 创建文件

7. rm

   - 

8. vim

   - 

9. cp

   1. 

10. 输出重定向

# 进阶指令

1. df 查看磁盘空间
   - df
   - df-h  可读性高
2. free 查看内存使用情况
   - free
   - free -m,free -g, 可读性高
3. head，默认显示前十行内容
   - head -n  文件路径 显示文件的前n行内容
4. tail，默认显示后十行内容
   - tail  -n  文件路径 显示文件的后n行内容
   - tail -F    查看文件的动态变化
   - ls -l  > 文件路径，通过管道来实现。
5. less，较少内容输出，辅助键查看内容
   - less  文件路径
6. wc 统计文件内容信息
   - wc -lwc 文件路径
   - l,行数；w,单词数;c,字节大小
7. date , 操作时间和日期，shell指令
   - date,当前时间
   - utc,当地时间;cst,
   - date +%F  年月日
   - date  '+%Y-%M-%D'
   - date  '+%F  %T'
   - date '+%Y-%m-%d %H:%M:%S'
   - date -d '-1 day' '+%Y-%m-%d %H:%M:%S'
   - 可选，day,month,year等
8. cal  操作日历
   - cal  日历
   - cal -1
   - cal -3 
   - cal -y 年份
   - cal -s
   - cal -m
9. clear/ctrl+l  清屏，包括命令
10. 管道
    - 管道符 |  ，用于过滤，扩展处理
    - ls  /|grep y   
    - cat 文件路径| less
    - ls / | wc -l

# 高级指令

1. hostname  操作主机名

   - hostname
   - hostname -f  FQDN全限定域名

2. id   查看用户的基本信息

   - id
   - id 指定用户名
   - /etc/passwd
   - /etc/group

3. whoami

   - 当前登陆的用户名

4. ps -ef   查看进程信息

   - -e 等价于-A ,列出全部进程
   - -f,显示全部的列
     - UID，用户ID
     - PID，进程ID
     - PPID，父级进程
     - STIME，启动时间
     - TTY，发起该进程的终端设备
     - TIME，进程执行时间
     - CMD，进程的路径或名称
   - ps -ef |grep 进程名称

5. top  查看服务器的进程占用资源

   - 按下M可以按照内存排序
   - 按下P按照cpu使用率排序
   - 按下1按照cpu个数展开

   - 按下q退出
   - PID，进程ID
   - USER，进程对应的用户
   - PR，进程优先级
   - VIRT, 虚拟内存
   - RES，常驻内存
   - SHR，共享内存
   - COMMAND，进程的名称

6. du -sh 查看目录的真实大小

   - du -s  路径 显示汇总的大小
   - du -h  路径 可读性高
   - du -sh /etc

7. find 查找文件

   - -name    选项的值  路径范围
   - -type   选项的值  路径范围
     - -表示文件需要使用f来替换
     - d表示文件夹
   - find / -name httpd.conf 
   - find /etc -name *.conf
   - find /etc -name *.conf |wc -l
   - find /etc  -type f 
   - find /etc -type d
   - find /etc -name ".*" -ls
   - find /etc  -type f -iname ".*" -ls

8. service 服务操作

   - sevice 服务名  start/stop/restart
   - ps -ef |grep httpd

9. kill 

   - ps -ef|grep 进程名称

     kill 进程ID

   - killall 进程名称

10. ipconfig

    -  获取网卡信息

11. reboot 重新启动计算机

    - reboot -w  模拟重启但不重启（写入开关机的日志信息）

12. shutdown  关机

    - shutdown -h now
    - shudown -h 定时时间  '关机提示'
    - ctrl+c 在centos7之前 可以退出关机
    - shutdown -c 在cenos7之后可以使用退出关机

13. uname 获取操作系统信息

    - uname -a  获取全部系统信息

14. netstat-tnlp 网络连接状态

    - -t 只列出tcp协议的连接
    - -n 列出IP地址和端口
    - -l  仅显示state中值为LISTEN的链接
    - -p 显示进程PID和进程名称

15. man 手册（manual)

    - man 命令名  
    - 退出按下Q
    - man cp

16. uptime 输入持续在线时间

    - load average 表示负载

# 练习

```javascript
//重启系统
reboot
//快速删除光标前后的内容
ctrl+u ctrl+k
//删除/tmp下的所有A开头的文件
rm -f /tmp/A*
///etc/passwd备份到/tmp目录下
cp /etc/passwd/ /tmp/
//查看最后创建的3个用户
tail -3 /etc/passwd
//统计当前系统中的账户
wc -l /etc/passwd
//创建/tmp/test.conf文件
mkdir tmp
cd tmp/
touch test.conf
//查看/etc/passwd的头3行和尾3行
head -3 /etc/passwd
tail -3 /etc/passwd
//一次性创建目录/text/1/2/3/4
mkdir -p /text/1/2/3/4
//回到家目录
cd ~ 或cd
//查看/etc目录下的磁盘空间
du -sh /etc
//删除/tmp下的所有文件
rm -rf /tem/*
//启动apache服务，并验证是否成功
service httpd start
ps -ef|grep httpd
//杀死apache进程
killall httpd


```

# VIM

1. 模式切换

   ![模式切换](模式切换.png)

   ``````javascript
   //保存
   :w
   //另存为
   :w  路径
   //退出
   :q 
   //保存退出
   ;wq
   //强制退出
   :q!
   //调用外部命令
    :! ls或其他命令
   ``````

   

2. 命令模式（默认）不能编辑文件

   ```javascript
   //vim +数字 文件    打开文件并定位指定行
   //vim +/关键字 文件  打开文件并高亮关键字
   
   //行首 shift+6 （^)
   //行尾 shift+4 ($)
   //首行 gg
   //尾行 G
   //翻屏上 ctrl+b (before向前)
   //翻屏下 ctrl+f （after 向后）
   //复制行包含当前行  数字连接上yy
   //粘贴行  p   (paste 粘贴)
   //可视化复制 ctrl+v 按下箭头可以选中，按下yy复制，按下p 粘贴
   //删除或剪切   dd
   //指定删除  数字dd
   //删除并且下一行不上移 D
   //撤销   输入:u或者u  (undo 撤销)
   //取消撤销    ctrl+r
   //快速移动  数字G
   //快速移动n行  数字 使用方向键
   //快速左右移动 数字 使用左右方向键
   //末行模式快速移动  按下冒号进入  数字 按下回车
   
   ```

   

3. 编辑模式，可以编辑

   ```javascript
   //进入方式
   //i，insert，光标所在字符前开始插入
   //a,after,光标所在字符后开始插入
   //S,删除光标所在的行并插入
   //退出方式 esc按键
   
   ```

   

4. 末行模式，搜索，替换，保存，退出，撤销，高亮等

   ```javascript
   //搜搜
   /关键词
   //切换搜索结果
   N/n
   //取消高亮
   :nohl  (no highlight)或  :noh
   //替换光标处第一次搜索的结果
   :s/搜索关键词/替换内容  (string replace)
   //全行替换
   :s/搜索关键词/替换内容/g
   //替换全局每行第一个符合的结果
   :%s/搜索关键词/替换内容/
   //全局替换
   :%s/搜索关键词/替换内容/g
   //显示行号
   :set nu
   //取消行号
   :set nonu
   //打开多个文件并切换.%a(active)表示当前打开的文件，# 表示上一个打开的文件
   :files  然后 :open 文件名称 或  :bn (切换下一个back next) :bp(切换上一个 back prev)
   ```

   

5. 代码着色

   ``````javascript
   //关闭
   ：syntax off
   ``````

   

6. 计算器

   ``````javascript
   //进入编辑模式，并按下ctrl+r.输入=号，输入计算内容并回车
   ``````

   

7. 其他

   ``````javascript
   //vim配置文件
   //个人配置文件可以创建
   ~/.vimrc
   //全局配置文件
   /etc/vimrc
   //设置行号和着色
   set nu
   syntax on
   //异常退出
   删除交换文件
   //别名机制，~/.bashrc
   alias cl='clear'
   //然后重新登陆后生效 source restart 或source .bashrc
   
   //保存退出，：x在没有修改的时候，文件修改时间不变
   :x
   ``````

   

vps

```javascript
yum install -y wget && wget https://www.gzj2001.com/shell/Gbench.sh && bash Gbench.sh

```

