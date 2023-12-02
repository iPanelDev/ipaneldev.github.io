# 向实例的服务器输入

`/api/instances/{instanceId}/input`

## 请求方法

`POST`

## 参数

### Params

| 名称       | 描述   | 值类型 |
| ---------- | ------ | ------ |
| instanceId | 实例ID | string |

### Body

string[]

```http
POST /api/instance/5caa097ac09f4a20864003def26a1c2b/input HTTP/1.1
Accept: application/json, text/plain, */*
Content-Length: 9
Content-Type: application/json
Cookie: __session=kauNUCcUwkC1Bubox26NVg
Host: 127.0.0.1:30000
Origin: http://127.0.0.1:30000
Referer: http://127.0.0.1:30000/instance/5caa097ac09f4a20864003def26a1c2b/console

["hello"]
```

## 返回

null

### 202 Accept

:::note
仅代表请求已发送至实例，是否真正执行成功需监听其广播事件
:::

```json
{
    "code": 202,
    "errorMsg": null,
    "data": null,
    "time": "2023-11-27T23:02:16.213139+08:00"
}
```

### 401 Unauthorized

未登录

### 403 Forbidden

权限不足

### 404 Not Found

找不到此实例
