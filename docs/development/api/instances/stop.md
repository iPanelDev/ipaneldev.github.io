# 关闭实例的服务器

`/api/instances/{instanceId}/stop`

## 请求方法

`GET`

## 参数

| 名称       | 描述   | 值类型 |
| ---------- | ------ | ------ |
| instanceId | 实例ID | string |

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
