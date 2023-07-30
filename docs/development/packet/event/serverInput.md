# 服务器输入

当服务器有新的输入时触发

## 权限

- 实例->Host
- Host->控制台

## type

`event`

## sub_type

`server_input`

## data

string[]

输入行的字符串列表

:::caution
为避免不必要的性能占用，请合并最近一段时间的输入一起发送
:::
