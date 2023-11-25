# 数据无效

当Host接收到无效数据时发送

- 网页控制台
  - [ ] 收
- 实例
  - [x] 收
  - [ ] 发

## type

`event`

## subType

`invalid_data`

## data

| 名称   | 描述 | 值类型 |
| ------ | ---- | ------ |
| reason | 原因 | string |

- `“data”字段类型错误` 部分数据包有类型校验，若失败则返回此消息
