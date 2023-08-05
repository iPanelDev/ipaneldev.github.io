# 验证请求

这意味着需要完成鉴权，如果5秒内未完成鉴权就会被强制断开连接，断开连接前会收到[disconnection](../event/disconnection)事件的消息

## 权限

- Host->控制台
- Host->实例

## 示例

```json
{
  "sender": {
    "name": "iPanel Host",
    "type": "host",
    "metadata": {
      "version": "2.1.7.26"
    }
  },
  "type": "action",
  "sub_type": "verify_request",
  "time": 1691161353,
  "data": {
    "timeout": 5000,
    "random_key": "3a6111c400"
  }
}
```

## type

`action`

## sub_type

`verify_request`

## data

| 名称       | 描述             | 值类型 |
| ---------- | ---------------- | ------ |
| timeout    | 超时             | number |
| random_key | 随机字符串（盐） | string |

### random_key

10位16进制字符串，同时也是这个连接的唯一标识符的前十位
