# 附加成员

这些成员只会出现在[iPanel Host](../../guide/host/intro)发送的数据包中

通常情况下，你不会使用到这里的成员。这些主要用于跟踪数据来源和时间的

## 示例

```json
{
  // ...
  "sender": {
   "name": "iPanel Host",
   "type": "host",
   "metadata": {
     "version": "2.1.7.26"
   }
  },
  "time": 1690712999
}
```

| 名称   | 描述                | 值类型 | 可能的值 |
| ------ | ------------------- | ------ | -------- |
| sender | 数据包的发送者/来源 | Sender | 见下     |
| time   | 时间戳 (秒)         | number |          |

## Sender

| 名称      | 描述       | 值类型 | 可能的值                    |
| --------- | ---------- | ------ | --------------------------- |
| name      | 自定义名称 | string |                             |
| type      | 发送者类型 | string | `host` `instance` `console` |
| address*  | 地址       | string |                             |
| metadata* | 元数据     | object |                             |

一个包含了发送者信息的对象

### type

- `host` iPanel Host
- `instance` 实例
- `console` 网页控制台

### name

- 如果这个发送者是iPanel Host，则这个值总是`iPanel Host`
- 如果为实例，则这个值为其自定义名称
- 如果为控制台，则这个值为空

### address

- 仅当`type`不为host时才会存在
- 格式为`ip:端口`
  - ip和端口为连接iPanel Host时获取的连接信息
  - 不能保证在客户端使用动态IP的情况下此值不变化

### metadata

- 仅当`type`为host时才会存在

```json
// 一个来自iPanel Host的示例
{
  "name": "iPanel Host",
  "type": "host",
  "metadata": {
      "version": "2.1.7.26"
  }
}
```
