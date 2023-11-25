# 发送人

| 名称      | 描述       | 值类型               | 可能的值      |
| --------- | ---------- | -------------------- | ------------- |
| name      | 自定义名称 | string               |               |
| type      | 发送者类型 | string               | `host` `user` |
| address*  | 地址       | string               |               |
| metadata* | 元数据     | [Metadata](Metadata) |               |

一个包含了发送者信息的对象

## type

- `host` iPanel
- `user` 用户

## name

- 如果这个发送者是iPanel，则这个值总是`iPanel`
- 如果为实例，则这个值为其自定义名称
- 如果为控制台，则这个值为空

## address

- 仅当`type`不为host时才会存在
- 格式为`ip:端口`
  - ip和端口为连接iPanel时获取的连接信息
  - 不能保证在客户端使用动态IP的情况下此值不变化

## metadata
