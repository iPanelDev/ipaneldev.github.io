# 订阅

```mermaid
sequenceDiagram
    网页控制台->>Host:发送订阅数据包，指定订阅的目标
    Host->>网页控制台:转发该目标的实例信息数据包
```
