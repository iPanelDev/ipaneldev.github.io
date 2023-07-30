# 数据包

WebSocket连接中，使用标准的JSON文本数据包进行通信

## 编码和格式

任何数据包都应为UTF-8的合法JSON文本

## 示例

```json
{
  "type": "event",
  "sub_type": "list",
  "data": {
    "type": "instance",
    "list": [
      {
        "custom_name": "Serein@v1.3.5",
        "short_info": {
          "server_status": true,
          "server_filename": "bedrock_server_mod.exe",
          "server_time": "44.4m",
          "os": "Microsoft Windows 10 家庭版 SP0.0"
        },
        "address": "127.0.0.1:50908",
        "guid": "ab5a646a8b764d3e8adfb4ad0fc7364d"
      }
    ]
  },
  "sender": {
   "name": "iPanel Host",
   "type": "host",
   "metadata": {
     "version": "2.1.7.26"
   }
  },
  "time": 1690712999
}
```

import DocCardList from '@theme/DocCardList';

<DocCardList />
