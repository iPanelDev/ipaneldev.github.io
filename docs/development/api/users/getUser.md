# 获取指定用户

`/api/users/{userName}`

## 请求方法

`GET`

## 参数

| 名称     | 描述   | 值类型 |
| -------- | ------ | ------ |
| userName | 用户名 | string |

## 返回

### 200 OK

[User](../../struct/user)

- 其中`password`始终隐藏

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "lastLoginTime": null,
        "level": 2,
        "instances": [],
        "description": "",
        "ipAddresses": []
    },
    "time": "2023-11-26T18:42:28.6391094+08:00"
}
```

### 401 Unauthorized

未登录

### 403 Forbidden

权限等级不是[管理员](../../../guide/user/userObj)

### 404 NotFound

用户不存在
