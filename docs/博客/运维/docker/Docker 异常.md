---
title: Docker 异常
author: HiCheer
createTime: 2024/08/09 21:35:44
permalink: /article/ligod3r5/
tags:
   - 运维
   - 异常
   - Docker
---

### 登录异常

#### 1. 注册表默认不支持HTTP
::: steps
1. 错误信息：
    ```bash
    docker login http://192.168.2.80:4000  
    Username: admin
    Password:
    Error response from daemon: Get "https://192.168.2.80:4000/v2/": http: server gave HTTP response to HTTPS client
    ```

2. 原因：
    ```text
    因为 Docker 默认使用 HTTPS 协议连接到注册表，而你的注册表似乎只支持 HTTP。
    因此，当 Docker 尝试通过 HTTPS 访问 http://192.168.2.80:4000 时，
    服务器返回了一个错误，因为它不支持 HTTPS
    ```

3. 解决方案：
    ```text
    在 etc/docker/daemon.json 中添加 `"insecure-registries": ["仓库地址"]`
    ```
   
4. 例如：
    ```json
    {
       "insecure-registries": ["192.168.2.80:4000"]
    }
    ```
:::



---
### 其他异常
