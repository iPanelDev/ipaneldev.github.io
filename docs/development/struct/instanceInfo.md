# 实例信息

| 属性名称   | 描述                | 值类型                    |
| ---------- | ------------------- | ------------------------- |
| system     | 系统信息            | [SystemInfo](#systeminfo) |
| server     | 服务器信息          | [ServerInfo](#serverinfo) |
| updateTime | 更新时间（ISO8601） | string?                   |

## SystemInfo
  
| 属性名称 | 描述                           | 值类型  |
| -------- | ------------------------------ | ------- |
| os       | 操作系统                       | string? |
| cpuName  | CPU名称                        | string? |
| totalRam | 总内存大小(KB)                 | number? |
| freeRam  | 剩余内存大小(KB)               | number? |
| ramUsage | 内存使用率(0~100) (仅后端发送) | number? |
| cpuUsage | CPU使用率(0~100)               | number? |

## ServerInfo

| 属性名称      | 描述                 | 值类型  |
| ------------- | -------------------- | ------- |
| status        | 状态                 | boolean |
| filename      | 启动文件名称         | string? |
| runTime       | 运行时长             | string? |
| usage         | 进程CPU使用率(0~100) | number? |
| capacity      | 最大在线人数         | number? |
| onlinePlayers | 在线人数             | number? |
