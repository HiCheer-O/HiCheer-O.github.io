---
title: Docker 基础
author: HiCheer
createTime: 2024/07/22 18:13:35
permalink: /article/2o3afe58/
tags:
  - 后端
  - Docker
---

### 安装 Docker（CentOS）
::: steps
1. 更新现有的软件包
    ```bash
    sudo yum update -y
    ```
2. 安装必要地依赖包
    ```bash
    sudo yum install -y yum-utils
    ```
3. 添加 Docker 的官方仓
    ```bash
    sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    ```
4. 安装 Docker Engine
    ```bash
    sudo yum install -y docker-ce docker-ce-cli containerd.io
    ```
5. 启动 Docker 并设置为开机启动
    ```bash
    sudo systemctl start docker
    sudo systemctl enable docker
    ```
6. 验证 Docker 是否安装成功
    ```bash
    sudo docker --version
    ```
    你应该看到类似这样的输出

    ```bash
    Docker version 20.10.17, build 100c701
    ```
7. 测试 Docker 是否正确安装
    ```bash
    sudo docker run hello-world
    ```
:::

### 启动 Docker（CentOS）
1. 启动
    ```bash
    sudo systemctl start docker
    ```
2. 开机启动
    ```bash
    sudo systemctl enable docker
    ```
3. 重启
    ```bash
    sudo systemctl restart docker
    ```
4. 停止
    ```bash
    sudo systemctl stop docker
    ```
   
### 配置镜像源
- 修改配置文件
    ```bash
    sudo vim /etc/docker/daemon.json
    ```
- 相关镜像源
  | 镜像加速器           | 镜像加速器地址                                 |  当前状态     |
  |  ----------------- | -------------------------------------------- | ------------ |
  | Docker 中国官方镜像  | https://registry.docker-cn.com               |   ✅✅✅✅  |
  | DaoCloud 镜像站     | http://f1361db2.m.daocloud.io                |   ✅✅✅✅  |
  | zure 中国镜像       | https://dockerhub.azk8s.cn                   |   ✅✅✅✅   |
  | 科大镜像站           | https://docker.mirrors.ustc.edu.cn           |   ✅✅✅✅  |
  | 阿里云              | https://ud6340vz.mirror.aliyuncs.com         |   ✅✅✅✅  |
  | 七牛云              | https://reg-mirror.qiniu.com                 |   ✅✅✅✅  |
  | 网易云              | https://hub-mirror.c.163.com                 |   ✅✅✅✅  |
  | 腾讯云              | https://mirror.ccs.tencentyun.com            |   ✅✅✅✅  |
