# 数据包

WebSocket 连接中，使用标准的 JSON 文本数据包进行通信

## 编码和格式

任何数据包都应为 UTF-8 的合法 JSON 文本

## 属性

所有数据包均应包含以下属性

| 属性名称 | 描述             | 值类型                     | 可能的值                               |
| -------- | ---------------- | -------------------------- | -------------------------------------- |
| type     | 数据包的主类型   | string                     | `request` `event` ...                  |
| subType  | 数据包的子类型   | string                     | [`verify_request`](request/verify) ... |
| data     | 数据部分         | 取决于`type`和`subType`    |                                        |
| sender   | 发送者（仅接收） | [Sender](../struct/sender) |                                        |

### type

决定了数据包的主要目的

- `request`
  - 请求数据
- `event`
  - 验证结果通知
  - 断开原因提示
- `return`
  - 返回请求的内容
- `broadcast`
  - 服务器状态广播

### subType

进一步补充数据包的类型内容

### data

数据内容

### sender

数据包的发送者/来源
