# 服务器输入

当服务器有新的输入时触发

- 网页控制台
  - [x] 收
- 实例
  - [ ] 收
  - [x] 发

## type

`broadcast`

## subType

`server_input`

## data

string[]

输入行的字符串列表

:::caution
为避免不必要的性能占用，建议合并最近一段时间的输入一起发送
:::
