

# 开荒脚本

```
yum -y install wget

wget --no-check-certificate -O ssss-U.sh https://raw.githubusercontent.com/uselibrary/Update_VPS/master/ssss-U.sh && chmod +x ssss-U.sh && bash ssss-U.sh
```

btcode

```
//cenos 7
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

测速

```
wget -N --no-check-certificate https://raw.githubusercontent.com/V2RaySSR/vps/master/vpstest.sh && bash vpstest.sh

https://teddysun.com/444.html
使用方法：
命令1：

wget -qO- bench.sh | bash
或者

curl -Lso- bench.sh | bash
命令2：

wget -qO- 86.re/bench.sh | bash
或者

curl -so- 86.re/bench.sh | bash


2021测速

1、一键测速脚本命令改进版：

bash <(curl -Lso- https://git.io/Jlkmw)
2、如果缺少tar解压缩，请安装tar

3、使用改版的情况下运行

speedtest-cli/speedtest -p no -s 3633 --accept-license

```

UnixBench

```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/unixbench.sh
chmod +x unixbench.sh
./unixbench.sh
```

针对Docker客户端版本大于 1.10.0 的用户

您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://rgj7g0g9.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

```
ipconfig /flushdns
ipconfig /displaydns
```

v7.4.5 正式版脚本
```
https://file.nmb.show/down.php/28ea66f9e6500c0989e656e056c4ebd7.sh
```
