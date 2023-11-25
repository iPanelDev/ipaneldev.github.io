# 实例信息

| 名称   | 描述       | 值类型                    |
| ------ | ---------- | ------------------------- |
| system | 系统信息   | [SystemInfo](#systeminfo) |
| server | 服务器信息 | [ServerInfo](#serverinfo) |

## SystemInfo
  
| 名称     | 描述             | 值类型  |
| -------- | ---------------- | ------- |
| os       | 操作系统         | string? |
| cpuName  | CPU名称          | string? |
| totalRam | 总内存大小(B)    | number? |
| freeRam  | 剩余内存大小(B)  | number? |
| cpuUsage | CPU使用率(0~100) | number? |

## ServerInfo

| 名称          | 描述                 | 值类型  |
| ------------- | -------------------- | ------- |
| status        | 状态                 | boolean |
| filename      | 启动文件名称         | string? |
| runTime       | 运行时长             | string? |
| usage         | 进程CPU使用率(0~100) | number? |
| capacity      | 最大在线人数         | number? |
| onlinePlayers | 在线人数             | number? |
