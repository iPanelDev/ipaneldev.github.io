# 服务器事件

- [服务器开启](../packet/event/serverStart)
- [服务器关闭](../packet/event/serverStop)
- [服务器输出](../packet/event/serverOutput)
- [服务器输入](../packet/event/serverInput)

```mermaid
sequenceDiagram
    实例->>Host:发送事件数据包
    Host->>网页控制台:转发事件数据包
```

:::note

- **转发事件数据包**
  - 这一步还包含一步数据验证，不合法的数据将不会被转发
  - 只会转发给订阅目标为该实例的控制台

:::