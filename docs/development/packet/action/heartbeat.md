# 心跳

确定实例存活状态，更新实例信息

## 权限

- Host->实例
- 实例->Host
  - 接收到'Host->实例'的心跳数据包后发送

## 示例

### 收

```json
{
  "sender": {
    "name": "iPanel Host",
    "type": "host",
    "metadata": {
      "version": "2.1.7.26"
    }
  },
  "type": "action",
  "sub_type": "heartbeat",
  "time": 1691169921
}
```

### 发

```json
{
  "type": "action",
  "sub_type": "heartbeat",
  "data": {
    "sys": {
      "os": "Microsoft Windows 11 专业版 SP0.0",
      "cpu_name": "12th Gen Intel(R) Core(TM) i7-12700",
      "total_ram": 33289648,
      "free_ram": 23774880,
      "cpu_usage": 51.4 // 应介于0~100
    },
    "server": {
      "filename": "bedrock_server_mod.exe",
      "status": true,
      "run_time": "0.2m",
      "usage": 11.4 // 应介于0~100
    }
  }
}
```

## type

`action`

## sub_type

`heartbeat`

## data

### Host->实例

null

### 实例->Host

| 名称      | 描述         | 值类型                         |
| --------- | ------------ | ------------------------------ |
| full_info | 实例完整信息 | [FullInfo](../struct/fullInfo) |
