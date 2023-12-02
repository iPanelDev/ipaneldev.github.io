# 获取所有在线实例

`/api/instances`

## 请求方法

`GET`

## 参数

无

## 返回

Array<[Instance](../../struct/instance)>

- 仅返回有查看的权限的实例

### 200 OK

```json
{
    "code": 200,
    "errorMsg": null,
    "data": [
        {
            "info": {
                "updateTime": "2023-11-27T18:46:58.9473211+08:00",
                "system": {
                    "os": "Microsoft Windows 10 家庭版 SP0.0",
                    "cpuName": "Intel(R) Core(TM) i5-1035G4 CPU @ 1.10GHz",
                    "totalRam": 7964852,
                    "freeRam": 942536,
                    "ramUsage": 88.16630867717316,
                    "cpuUsage": 23.94145393371582
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
        }
    ],
    "time": "2023-11-27T18:47:01.7029777+08:00"
}
```

### 401 Unauthorized

未登录

### 403 Forbidden

权限等级不是[管理员](../../../guide/user/userObj)
