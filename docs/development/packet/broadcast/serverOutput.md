# 服务器输出

当服务器有新的输出时触发

## 权限

- 实例->Host
- Host->控制台

## type

`broadcast`

## sub_type

`server_ourput`

## data

string[]

输出行的字符串列表

:::caution
为避免不必要的性能占用，请合并最近一段时间的输出一起发送
:::
