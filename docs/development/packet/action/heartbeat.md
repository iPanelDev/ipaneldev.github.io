# 心跳

确定实例存活状态，更新实例信息

## 权限

- Host->实例
- 实例->Host
  - 接收到'Host->实例'的心跳数据包后发送

## type

`action`

## sub_type

`heartbeat`

## data

### Host->实例

null

### 实例->Host

| 名称      | 描述         | 值类型                         |
| --------- | ------------ | ------------------------------ |
| full_info | 实例完整信息 | [FullInfo](../struct/fullInfo) |
