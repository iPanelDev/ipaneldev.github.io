# 获取所有用户

`/api/users`

## 请求方法

`GET`

## 参数

无

## 返回

### 200 OK

Record&#60;string, [User](../../struct/user)&#62;

- 其中`password`始终隐藏

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "admin": {
            "lastLoginTime": "2023-11-26T18:34:08.5200898+08:00",
            "level": 3,
            "instances": [],
            "description": null,
            "ipAddresses": [
                "127.0.0.1"
            ]
        },
        "example": {
            "lastLoginTime": null,
            "level": 2,
            "instances": [],
            "description": "",
            "ipAddresses": []
        }
    },
    "time": "2023-11-26T18:34:11.915421+08:00"
}
```

### 401 Unauthorized

未登录

### 403 Forbidden

权限等级不是[管理员](../../../guide/user/userObj)
