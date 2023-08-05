# 列表

用于回复[列出控制台](../action/listConsole)或[列出实例](../action/listInstance)的数据包

## 权限

- Host->控制台

## type

`event`

## sub_type

`list`

## data

| 名称 | 描述 | 值类型                 |
| ---- | ---- | ---------------------- |
| type | 类型 | string                 |
| list | 列表 | [Instance](../struct/client#instance)[] / [Console](../struct/client#console)[] |
