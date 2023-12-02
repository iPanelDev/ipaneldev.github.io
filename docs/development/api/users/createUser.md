# 创建用户

`/api/users/{userName}`

## 请求方法

`POST`

## 参数

### Params

| 名称     | 描述   | 值类型 |
| -------- | ------ | ------ |
| userName | 用户名 | string |

### Body

[User](../../struct/user)

- `password`为**必填项**，格式要求见[用户对象](../../../guide/user/userObj#密码)

## 返回

### 200 OK

null

```json
{
    "code": 200,
    "errorMsg": null,
    "data": null,
    "time": "2023-11-26T18:42:28.6391094+08:00"
}
```

### 400 Bad Request

- 用户名不合法
- 密码不合法
- 空Body

### 401 Unauthorized

未登录

### 403 Forbidden

权限等级不是[管理员](../../../guide/user/userObj)

### 404 NotFound

用户不存在

### 409 Conflict

该用户已存在
