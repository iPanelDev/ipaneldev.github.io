# 配置文件

```json title='config.json'
{
    "websocket": {
        "addr": "ws://127.0.0.1:30000",
        "password": ""
    },
    "customName": "",
    "reconnect": {
        "enable": true,
        "interval": 75000,
        "maxTimes": 10
    }
}
```

## webSocket

WebSocket服务器

### addr

ws地址

- 类型：`string`
- 默认值：`"ws://127.0.0.1:30000"`

### password

ws连接密码

- 类型：`string`

## customName

自定义名称，将显示在iPanel Host和网页控制台中

- 类型：`string`

## reconnect

重连功能

### enable

是否启用

- 类型：`boolean`
- 默认值：`true`

### interval

重连间隔（ms)

- 类型：`number`
- 默认值：`75000`

### maxTimes

最大尝试次数，超出后将不再尝试重连

- 类型：`number`
- 默认值：`10`
