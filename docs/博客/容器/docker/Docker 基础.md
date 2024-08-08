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
> 建议：安转 Docker 的主机不建议使用任何形式的防火墙，因为会出现一系列复杂的网络通信问题；
> 
> 建议：使用服务商的网关策略来管理服务器的安全
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
  | 1panel             | https://1panel.live/                         |   ✅✅✅✅  |

### 构建 Docker 镜像
1. Docker 模板
    ```dockerfile
    # 使用 CentOS 作为基础镜像
    FROM centos:7
    
    # 设置镜像的维护者信息（可选）
    LABEL maintainer="your-email@example.com"
    
    # 安装 Java
    RUN yum update -y && \
        yum install -y java-1.8.0-openjdk && \
        yum clean all
    
    # 设置工作目录
    WORKDIR /usr/src/app
    
    # 复制应用的 JAR 文件到工作目录
    COPY your-app.jar .
    
    # 设置环境变量（可选）
    ENV JAVA_OPTS=""
    
    # 公开应用运行的端口
    EXPOSE 8080
    
    # 启动命令
    CMD ["java", "-jar", "your-app.jar"]
    ```
   
2. 构建命令
    ```bash
    docker build --platform linux/amd64 -t 192.168.2.80:4000/feishu-md/feishu2md .
    ```
   
3. 常见构建参数

    | 选项                     | 说明                                                                                       |
    |--------------------------|--------------------------------------------------------------------------------------------|
    | `--add-host`             | 添加自定义主机到IP映射（格式：`"host:ip"`）。                                              |
    | `--allow`                | 允许额外的特权设置（例如：`"network.host"`, `"security.insecure"`）。                      |
    | `--attest`               | 设置证明参数（格式：`"type=sbom,generator=image"`）。                                      |
    | `--build-arg`            | 设置构建时的环境变量。                                                                     |
    | `--build-context`        | 添加额外的构建上下文（例如：`name=path`）。                                                |
    | `--builder`              | 覆盖配置的 builder 实例（默认："desktop-linux"）。                                         |
    | `--cache-from`           | 外部缓存源（例如：`"user/app:cache"`, `type=local,src=path/to/dir`）。                     |
    | `--cache-to`             | 缓存导出目的地（例如：`"user/app:cache"`, `type=local,dest=path/to/dir`）。                |
    | `--cgroup-parent`        | 容器的可选父 cgroup。                                                                      |
    | `-f, --file`             | 指定 Dockerfile 的名称（默认："PATH/Dockerfile"）。                                        |
    | `--iidfile`              | 将镜像 ID 写入指定文件。                                                                   |
    | `--label`                | 设置镜像的元数据。                                                                         |
    | `--load`                 | 简写形式，等同于 `"--output=type=docker"`。                                                |
    | `--metadata-file`        | 将构建结果的元数据写入文件。                                                               |
    | `--network`              | 设置构建期间的网络模式（默认："default"）。                                                |
    | `--no-cache`             | 构建时不使用缓存。                                                                         |
    | `--no-cache-filter`      | 不缓存指定的阶段。                                                                         |
    | `-o, --output`           | 输出目的地（格式：`"type=local,dest=path"`）。                                             |
    | `--platform`             | 设置构建目标平台。                                                                         |
    | `--progress`             | 设置进度输出类型（`"auto"`, `"plain"`, `"tty"`）。 默认："auto"。                         |
    | `--provenance`           | 简写形式，等同于 `"--attest=type=provenance"`。                                            |
    | `--pull`                 | 总是尝试拉取所有引用的镜像。                                                               |
    | `--push`                 | 简写形式，等同于 `"--output=type=registry"`。                                              |
    | `-q, --quiet`            | 抑制构建输出，并在成功时打印镜像 ID。                                                     |
    | `--sbom`                 | 简写形式，等同于 `"--attest=type=sbom"`。                                                 |
    | `--secret`               | 向构建暴露的秘密（格式：`"id=mysecret[,src=/local/secret]"`）。                            |
    | `--shm-size`             | 设置 `/dev/shm` 的大小。                                                                   |
    | `--ssh`                  | 暴露给构建的 SSH agent socket 或密钥（格式：`"default|<id>[=<socket>|<key>[,<key>]]"`）。 |
    | `-t, --tag`              | 设置镜像的名称和标签（格式：`"name:tag"`）。                                               |
    | `--target`               | 设置要构建的目标构建阶段。                                                                 |
    | `--ulimit`               | 设置 Ulimit 选项。                                                                         |

### 修改镜像名称/标签
> 注意：修改标签是镜像多了一个引用，也就是你使用`dcker tag ···`后，会有多出一个镜像记录，但是`镜像 ID 相同`；
> 
> 如果你想`删除不需要的引用`，就需要通过`镜像名称`删除了，因为镜像 ID 只有一个，因此不可以通过镜像 ID 删除
1. 修改镜像名称/标签
    ```bash
    docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
    ```
2. 通过镜像ID
    ```bash
    docker tag SOURCE_IMAGE_ID TARGET_IMAGE[:TAG]
    ```

### 删除镜像
1. 通过镜像名称
    ```bash
    docker rmi STARGET_IMAGE[:TAG]
    ```
2. 通过镜像ID
    ```bash
    docker rmi STARGET_IMAG_ID
    ```

### 登录/登出指定仓库地址
1. 登录
    ```bash
    docker login http://192.168.2.80:4000 
    ```
2. 登出
    ```bash
    docker logout http://192.168.2.80:4000 
    ```

### Docker 常见异常
1. 登录异常（注册表默认不支持HTTP）
    
    错误信息：
    ```bash
    docker login http://192.168.2.80:4000  
    Username: admin
    Password:
    Error response from daemon: Get "https://192.168.2.80:4000/v2/": http: server gave HTTP response to HTTPS client
    ```
    原因：
    ```text
    因为 Docker 默认使用 HTTPS 协议连接到注册表，而你的注册表似乎只支持 HTTP。
    因此，当 Docker 尝试通过 HTTPS 访问 http://192.168.2.80:4000 时，
    服务器返回了一个错误，因为它不支持 HTTPS
    ```
    解决方案：
    ```text
    在 etc/docker/daemon.json 中添加 `"insecure-registries": ["仓库地址"]`
    ```
    例如：
    ```json
    {
       "insecure-registries": ["192.168.2.80:4000"]
    }
    ```

