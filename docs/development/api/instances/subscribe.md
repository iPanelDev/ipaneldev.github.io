# 订阅实例广播

`/api/instances/{instanceId}?connectionId={connectionId}`

- 在此之后广播WebSocket仅会发送此实例的广播
- 一个WebSocket连接只能订阅一个实例

## 请求方法

`GET`

## 参数

### Params

| 名称       | 描述   | 值类型 |
| ---------- | ------ | ------ |
| instanceId | 实例ID | string |

### Query

| 名称         | 描述                                                            | 值类型 |
| ------------ | --------------------------------------------------------------- | ------ |
| connectionId | [WebSocket的连接id](../../webSocket/return/connectionId) | string |

## 返回

null

### 200 OK

```json
{
    "code": 200,
    "errorMsg": null,
    "data": null,
    "time": "2023-11-27T23:02:16.213139+08:00"
}
```

### 400 Bad Request

- 缺少`connectionId`
- 未连接到广播WebSocket服务器

### 401 Unauthorized

未登录

### 403 Forbidden

权限不足

### 404 Not Found

找不到此实例
