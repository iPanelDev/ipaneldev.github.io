# 心跳

```mermaid
sequenceDiagram
    loop 5s
    Host->>实例:发送事件数据包
    实例->>Host:转发事件数据包
    Host->>网页控制台:转发事件数据包
    end
```
