# 登录

`/api/users/@self/login`

## 请求方法

`POST`

## 参数

| 名称     | 描述   | 值类型 |
| -------- | ------ | ------ |
| md5      | 见下   | string |
| time     | 见下   | string |
| userName | 用户名 | string |

### md5计算方法

```js
const time = new Date().toISOString();
// 获取ISO格式时间字符串 eg: `2023-11-25T10:50:17.933Z`

const userName = '...';
const password = '...';

const md5 = getMD5(`${time}.${userName}.${password}`);
```

### 示例

```json
{
    "userName": "admin",
    "time": "2023-11-26T05:40:07.741Z",
    "md5": "ed5ad449f3c8021a7c896f6c6700f12e"
}
```

## 返回

### 200 OK

[Status](../../struct/status)

:::note

- 当`logined`为true时，`user`不为null
- 登录成功或已经登录都会返回`200`

:::

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "logined": true,
        "sessionDuration": "01:00:00",
        "user": {
            "lastLoginTime": "2023-11-26T13:40:07.7769477+08:00",
            "level": 3,
            "instances": [],
            "description": null,
            "ipAddresses": [
                "127.0.0.1"
            ]
        }
    },
    "time": "2023-11-26T13:40:07.7803863+08:00"
}
```

### 403 Forbidden

- 用户名或密码错误
- 用户无效（权限等级为[游客](../../../guide/user/userObj)）

```json
{
    "code": 403,
    "data": "用户名或密码错误",
    "time": "2023-11-26T13:41:59.8162793+08:00"
}
```
