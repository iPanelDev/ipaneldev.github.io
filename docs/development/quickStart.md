# 快速上手开发实例插件

## 1. 使用您的编程语言实现一个WebSocket客户端

如标题所说，使用您的编程语言实现一个WebSocket客户端，需要具有以下基本能力：

* 能够连接WebSocket服务器

  一般的，使用您编程语言的HttpClient库，在握手完成后发送``GET /ws/instance``请求，该请求中需要包含http升级到WebSocket的协议头

* 断线自动重连

* 能接收WebSocket包体

  一般的，在OnWSMessageBody事件把数据压入缓冲区，在OnWSMessageComplete事件把缓冲区内数据取出，这些数据就是完整的WebSocket包体。也有可能您的库已经封装好了一切，直接有一个事件接收数据包。

  具体的做法取决于您使用的库和编程语言

* 能发送WebSocket包体

## 2. 了解数据包的结构

WebSocket服务器发送的数据都是UTF8编码的json文本，[数据包](./webSocket/packet)的大体结构如下：

```json
{
    "type": "xxx",
    "subType": "xxx",
    "data": { /* ... */ }
}
```

``type``描述json的主要类型，对于实例插件开发来说，有``request``、``event``两种可能的值

``subType``描述json的副类型，可能出现的值取决于主类型

``data``则是具体的数据，数据格式取决于type和subType

## 3. 连接WebSocket服务器并且完成鉴权

连接WebSocket服务器只需要正常连接并且在``/ws/instance``完成协议升级即可

然后我们需要鉴权，如果10秒内未完成鉴权就会被强制断开连接，断开连接前会收到[`verify_result`](./webSocket/event/verifyResult)消息

所以说我们要立刻发送如下格式json完成鉴权：

```json
{
    "type": "request",
    "subType": "verify",
    "data": {
        "md5": "71ad88cf557301309977e3b0bf836184",
        "instanceId": "c92ae4dbfe6b4d4fac96a10da5701cf1",
        "customName": "Serein测试面板",
        "time": "2024-01-14T04:00:40.053Z",
        "metadata": {
            "version": "v1.3.5",
            "name": "Serein",
            "environment": "NET 6.0.26"
        }
    }
}
```

* data.instanceId  
  填写实例的ID，由实例插件负责生成一个由32个小写字母和数字混合而成的随机文本，并且在第一次生成后需要长期保存下来
* data.customName  
  填写实例的用户名称，这个名称会显示在网页端的实例列表上，比如说填写：``EQ-BDS面板_生存1服``。
* data.time  
  ISO 8601日期格式的字符串，协调世界时，生成方法参考下面的js代码

  ```js
  const time = new Date().toISOString();
  ```

* data.metadata
  实例本身的版本信息等，会显示在仪表盘的实例栏目下，参考样例填写即可
* data.md5
  用于鉴权的token，格式是`md5(data.time + '.' + iPanel密码)`

:::info

iPanel的密码就是iPanel目录下setting.json里面的`instancePassword`项，本例是`seNMchega`

:::

取md5后的结果以全部小写字母的16进制文本形式输出，得到的就是data.md5的值

在本例中，对``2024-01-14T04:00:40.053Z.seNMchega``取md5的结果就是本例的data.md5值

## 3. 实现request类型下所有subType的处理

### `heartbeat`

[心跳包](webSocket/request/heartbeat)，没有附带数据

```json
{
    "type": "request",
    "subType": "heartbeat",
    "data": null,
    "sender": {
        "name": "iPanel",
        "type": "host",
        "address": null,
        "metadata": {
            "version": "2.3.1.0",
            "name": "iPanel",
            "environment": "6.0.26"
        },
        "instanceId": null
    }
}
```

接收到后需要回包[反应情况](webSocket/return/heartbeat)，回包格式如下：

```json
{
    "type": "return",
    "subType": "heartbeat",
    "data": {
        "system": {
            "os": "Microsoft Windows 11 专业版 SP0.0",
            "cpuName": "12th Gen Intel(R) Core(TM) i7-12700",
            "totalRam": 33289648,
            "freeRam": 22644712,
            "cpuUsage": 0.5193373560905457
        },
        "server": {
            "filename": "bedrock_server_mod.exe",
            "status": true,
            "runTime": "0.1m",
            "usage": 0.0390625,
            "capacity": 0,
            "onlinePlayers": 0,
            "version": null
        }
    }
}
```

:::note

``data.system.cpuUsage``和``data.server.usage``为百分比，允许浮点数，``0.51``指的是``0.51%``

:::

### `server_start`

[网页端请求开服](webSocket/request/serverStart)

```json
{
    "type": "request",
    "subType": "server_start",
    "data": null,
    "sender": {
        "name": "admin",
        "type": "user",
        "address": null,
        "metadata": null,
        "instanceId": null
    }
}
```

不需要回包，执行开服操作即可

### server_stop

[网页端请求安全停服](webSocket/request/serverStop)

```json
{
    "type": "request",
    "subType": "server_stop",
    "data": null,
    "sender": {
        "name": "admin",
        "type": "user",
        "address": null,
        "metadata": null,
        "instanceId": null
    }
}
```

不需要回包，执行安全停服的操作即可(输入``stop``之类的)

### `server_kill`

[网页端请求强制停服](webSocket/request/serverKill)

```json
{
    "type": "request",
    "subType": "server_kill",
    "data": null,
    "sender": {
        "name": "admin",
        "type": "user",
        "address": null,
        "metadata": null,
        "instanceId": null
    }
}
```

不需要回包，对服务器执行结束进程的操作即可

### `server_input`

[来自网页端的输入](webSocket/request/serverInput)

```json
{
    "type": "request",
    "subType": "server_input",
    "data": [
        "list"
    ],
    "sender": {
        "name": "admin",
        "type": "user",
        "address": null,
        "metadata": null,
        "instanceId": null
    }
}
```

不需要回包，把data数组内的指令加上换行符依次输入到服务器即可

## 4.实现event类型下所有subType的处理

### `verify_result`

返回验证结果，验证成功的示例如下：

```json
{
    "type": "event",
    "subType": "verify_result",
    "data": {
        "success": true,
        "code": null,
        "reason": null
    },
    "sender": {
        "name": "iPanel",
        "type": "host",
        "address": null,
        "metadata": {
            "version": "2.3.1.0",
            "name": "iPanel",
            "environment": "6.0.26"
        },
        "instanceId": null
    }
}
```

验证失败的示例如下：

```json
{
    "type": "event",
    "subType": "verify_result",
    "data": {
        "success": false,
        "code": null,
        "reason": "验证超时"
    },
    "sender": {
        "name": "iPanel",
        "type": "host",
        "address": null,
        "metadata": {
            "version": "2.3.1.0",
            "name": "iPanel",
            "environment": "6.0.26"
        },
        "instanceId": null
    }
}
```

## 5.需要对接的事件

### 服务器被开启

当服务器被开启时，须发送下面的包：

```json
{
    "type": "broadcast",
    "subType": "server_start"
}
```

### 服务器关闭

当服务器关闭时（不论是手动关闭还是自行崩溃），须发送下面的包：

```json
{
    "type": "broadcast",
    "subType": "server_stop",
    "data": 0
}
```

:::note
`data`为进程退出代码
:::

### 输入指令到服务器

输入了指令到服务器，须发送下面的包：

```json
{
    "type": "broadcast",
    "subType": "server_input",
    "data": [
        "list"
    ]
}
```

:::note

`data`为输入的指令内容、数组，一行一个，按顺序放入
:::

* ### 服务器输出内容

服务器输出了内容，须发送下面的包：

```json
{
    "type": "broadcast",
    "subType": "server_output",
    "data": [
        "\u001b[38;2;173;216;230m22:17:24\u001b[0m \u001b[38;2;032;178;170mINFO\u001b[0m \u001b[37m[Server]\u001b[0m \u001b[37mThere are 0/100 players online:\u001b[0m",
        "\u001b[38;2;173;216;230m22:17:24\u001b[0m \u001b[38;2;032;178;170mINFO\u001b[0m \u001b[37m[Server]\u001b[0m \u001b[37m\u001b[0m"
    ]
}
```

:::note

`data`是输出的内容，是一个数组，一行一个成员，按顺序放入。推荐缓存一段时间再发，减小性能开销

:::
