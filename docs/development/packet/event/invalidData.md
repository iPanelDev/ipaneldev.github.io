# 数据无效

当Host接收到无效数据时发送

## 权限

- Host->控制台
- Host->实例

## type

`event`

## sub_type

`invalid_data`

## data

| 名称   | 描述 | 值类型 |
| ------ | ---- | ------ |
| reason | 原因 | string |

- `“data”字段类型错误` 部分数据包有类型校验，若失败则返回此消息
