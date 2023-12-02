# 发送人

| 属性名称   | 描述       | 值类型               |
| ---------- | ---------- | -------------------- |
| name       | 自定义名称 | string               |
| type       | 发送者类型 | string               |
| address    | 地址       | string               |
| metadata   | 元数据     | [Metadata](Metadata) |
| instanceId | 实例ID     | string               |

一个包含了发送者信息的对象

## type

- `host` iPanel
- `user` 用户
- `instance` 实例

## name

- 如果这个发送者是iPanel，则这个值总是`iPanel`
- 如果为实例，则这个值为其自定义名称
- 如果为y用户，则这个值为用户名

## address

- 仅当`type`为`instance`时才不为null
- 格式为`ip:端口`
  - ip和端口为连接iPanel时获取的连接信息
  - 不能保证在客户端使用动态IP的情况下此值不变化
