# 目标无效

当Host接收到无效订阅目标时发送

## 权限

- Host->控制台

## type

`event`

## sub_type

`invalid_target`

## data

| 名称   | 描述 | 值类型 |
| ------ | ---- | ------ |
| reason | 原因 | string |

- `订阅目标无效` 未订阅目标而先尝试获取实例信息
