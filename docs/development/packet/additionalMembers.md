# 附加成员

这些成员只会出现在[iPanel Host](../../guide/host/intro.md)发送的数据包中

| 名称   | 描述                | 值类型 | 可能的值 |
| ------ | ------------------- | ------ | -------- |
| sender | 数据包的发送者/来源 | Sender | 见下     |
| time   | 时间戳 (秒)         | number |          |

## Sender

| 名称      | 描述       | 值类型 | 可能的值                    |
| --------- | ---------- | ------ | --------------------------- |
| name      | 自定义名称 | string |                             |
| type      | 发送者类型 | string | `host` `instance` `console` |
| address*   | 自定义名称 | string |                             |
| metadata* | 元数据     | object |                             |

### name

- 如果这个发送者是iPanel Host，则这个值为`iPanel Host`
- 如果为实例或网页控制台，则这个值为这个客户端的自定义名称

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
