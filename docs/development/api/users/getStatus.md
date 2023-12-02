# 获取当前状态

`/api/users/@self/status`

## 请求方法

`GET`

## 参数

无

## 返回

### 200 OK

[Status](../../struct/status)

- 当`logined`为true时，`user`不为null
- 其中`user.password`始终为null

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "logined": false,
        "sessionDuration": "00:00:00",
        "user": null
    },
    "time": "2023-11-26T13:37:36.278435+08:00"
}
```
