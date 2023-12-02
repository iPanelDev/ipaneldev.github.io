# 获取实例

`/api/instances/{instanceId}`

## 请求方法

`GET`

## 参数

| 名称       | 描述   | 值类型 |
| ---------- | ------ | ------ |
| instanceId | 实例ID | string |

## 返回

[Instance](../../struct/instance)

### 200 OK

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "info": {
            "updateTime": "2023-11-27T22:58:06.622998+08:00",
            "system": {
                "os": "Microsoft Windows 10 家庭版 SP0.0",
                "cpuName": "Intel(R) Core(TM) i5-1035G4 CPU @ 1.10GHz",
                "totalRam": 7964852,
                "freeRam": 1353144,
                "ramUsage": 83.01105908810358,
                "cpuUsage": 33.089847564697266
            },
            "server": {
                "filename": null,
                "status": false,
                "runTime": null,
                "usage": 0,
                "capacity": 0,
                "onlinePlayers": 0,
                "version": null
            }
        },
        "customName": "Serein@v1.3.5",
        "instanceId": "5caa097ac09f4a20864003def26a1c2b",
        "metadata": {
            "version": "v1.3.5",
            "name": "Serein",
            "environment": "NET 4.0.30319.42000"
        },
        "address": "127.0.0.1:58831"
    },
    "time": "2023-11-27T22:58:09.5302176+08:00"
}
```

### 401 Unauthorized

未登录

### 403 Forbidden

权限不足

### 404 Not Found

找不到此实例
