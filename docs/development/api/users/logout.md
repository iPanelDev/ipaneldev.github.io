# 退出

`/api/users/@self/logout`

:::caution
此操作会删除会话Cookie缓存
:::

## 请求方法

`GET`

## 参数

无

## 返回

### 200 OK

null

```json
{
    "code": 200,
    "errorMsg": null,
    "data": null,
    "time": "2023-11-26T18:05:32.1336086+08:00"
}
```

### 401 Unauthorized

未登录
