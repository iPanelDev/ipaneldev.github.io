# 服务器输出

当服务器有新的输出时触发

- 网页控制台
  - [x] 收
- 实例
  - [ ] 收
  - [x] 发

## type

`broadcast`

## subType

`server_ourput`

## data

string[]

输出行的字符串列表

:::caution
为避免不必要的性能占用，建议合并最近一段时间的输出一起发送
:::
