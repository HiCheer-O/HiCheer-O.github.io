---
title: 单体服务到微服务
author: HiCheer
createTime: 2024/05/30 01:27:03
permalink: /article/bwowysm9/
tags:
  - 后端
  - JAVA
  - Spring
  - SpringCloud
---
### 前言
OK 朋友们在开始之前问一下问题，当然也给了一定答案！！
- 单体项目为什么要转成微服务？

  大多人应该都是抱着学习的态度来学习的，我们工作生涯中可能听说过微服务是为了提高项目的稳定性，防止一个模块有问题影响到其他的模块，便于大型项目的更新维护。
- 转成微服务给我带来了那些问题？

  一般从单体项目升级到微服务，其实会有一系列的问题会出现。例如：各个服务间如何通信，多个服务 token 如何共享，一个代码块中调用了多个服务间的接口，如何保证事务等等。这些问题在单体架构中是不存在或者解决是很简单的，毕竟都在一起。如果你在单体项目中没有思考过这些问题的话，在微服务中不得不考虑这些问题。
- 如何解决这些问题？

  目前这些微服务问题市面上已经有人给了我们解决方案，无非就是项目中引入相关依赖，写一些代码配置类，可能有些解决方案用到外置的程序，配合我们的代码实现来解决这些问题的。
- 确定有必要转微服务？

  微服务架构有很多注意的点其实有很多的。那些小团队业务量小的真心没必要升级微服务，因为微服务是了提高项目的稳定性，和大型团队的项目维护管理，为以后用户量增大做分布式做准备的。单体项目的不需要考虑太多问题，而且相同请求下，单体是比微服务效率要高的，因为少了很多中间的组件，不会有服务间的网络通信延迟。

### 微服务中一个请求过来
```flow
st=>start: 开始
e=>end: 结束
getway=>subroutine: 网关
isLogin=>condition: 是否登录
auth=>subroutine: 登录鉴权

st->getway(left)
```

1. 

| 微服务类型   | 相关组件                                                     | 作用                                                   |
| :----------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| 服务注册发现 | Eureka, Consul, ZooKeeper, etcd                              | 用于服务注册和发现，提供了高可用的服务注册中心         |
| 负载均衡     | Ribbon, Spring Cloud LoadBalancer                            | 用于将请求分发到不同的服务实例，提高系统的性能和可用性 |
| 服务调用     | Feign, WebClient, RestTemplate                               | 用于在服务之间进行通信，实现服务之间的调用和交互       |
| 断路器       | Hystrix, Resilience4j、Sentinel                              | 用于在服务之间进行通信时，处理潜在的故障和延迟         |
| 配置管理     | Spring Cloud Config, Consul, etcd, ZooKeeper                 | 用于集中管理微服务的配置信息，并实现配置的动态更新     |
| 服务监控     | Spring Boot Actuator, Spring Cloud Sleuth, Micrometer        | 用于监控微服务的运行状态、性能指标和调用链分析         |
| 日志管理     | ELK Stack, Fluentd, Logstash, Log4j2                         | 用于收集、存储和分析微服务产生的日志信息               |
| 安全认证     | Spring Security, OAuth2, JWT                                 | 用于保护微服务的安全性，实现身份验证和授权             |
| 服务网格     | Zuul、Istio, Spring Cloud Gateway, Spring Cloud Circuit Breaker | 提供了微服务之间的可靠通信、安全性和流量控制等功能     |
| 任务调度     | Spring Cloud Data Flow, Spring Batch                         | 用于调度和管理微服务的作业和任务执行                   |
| 事务         | Seatal                                                       |                                                        |
| 消息队列     | Kafka、RabbitMQ                                              |                                                        |
|              |                                                              |                                                        |

### 未完成
