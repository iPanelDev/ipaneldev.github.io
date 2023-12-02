# 获取当前的用户

`/api/users/@self`

## 请求方法

`GET`

## 参数

无

## 返回

### 200 OK

[User](../../struct/user)

- 其中`password`始终隐藏

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "lastLoginTime": "2023-11-26T12:41:16.6111781+08:00",
        "level": 3,
        "instances": [],
        "description": null,
        "ipAddresses": [
            "127.0.0.1"
        ]
    },
    "time": "2023-11-26T13:28:56.095053+08:00"
}
```

### 401 Unauthorized

未登录
