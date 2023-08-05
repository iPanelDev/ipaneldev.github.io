# 实例完整信息

| 名称   | 描述       | 值类型                    |
| ------ | ---------- | ------------------------- |
| sys    | 系统信息   | [SysInfo](#sysinfo)       |
| server | 服务器信息 | [ServerInfo](#serverinfo) |

## SysInfo
  
| 名称      | 描述             | 值类型 |
| --------- | ---------------- | ------ |
| os        | 操作系统         | string |
| cpu_name  | CPU名称          | string |
| total_ram | 总内存大小(B)    | number |
| free_ram  | 剩余内存大小(B)  | number |
| cpu_usage | CPU使用率(0~100) | number |

## ServerInfo

| 名称     | 描述                 | 值类型      |
| -------- | -------------------- | ----------- |
| status   | 状态                 | boolean     |
| filename | 启动文件名称         | string/null |
| run_time | 运行时长             | string/null |
| usage    | 进程CPU使用率(0~100) | number      |
