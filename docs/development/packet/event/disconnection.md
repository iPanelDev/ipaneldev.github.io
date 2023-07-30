# 断开连接

Host主动断开前发送，用于说明断开原因

## 权限

- Host->控制台
- Host->实例

## type

`event`

## sub_type

`disconnection`

## data

| 名称   | 描述       | 值类型 |
| ------ | ---------- | ------ |
| reason | 断开的原因 | string |

- `发送的数据包存在问题：...` 数据包不合法
- `验证失败，请稍后重试` 验证未通过
- `你还未通过验证` 还未通过验证时先发送了其他数据包
- `验证超时` ~~太慢了我等到花都谢了~~
- `被用户手动断开`<sup>[仅实例]</sup> 通过iPanel Host命令断开

```json
{
    "type": "event",
    "sub_type": "disconnection",
    "data": {
        "reason": "验证失败，请稍后重试"
    },
    "sender": {
        "name": "iPanel Host",
        "type": "host",
        "metadata": {
            "version": "2.1.7.26"
        }
    },
    "time": 1690715648
}
```
