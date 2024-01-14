# 快速上手开发实例插件

## 一、基本概念

### 1.iPanel的构成

iPanel主要由两部分组成：``iPanel``和``面板插件``(又叫``实例插件``)

其中`iPanel`就是运行WebSocket服务器和http网页的程序，默认在`TCP 30000`端口上开放一个仅限本地能访问的WebSocket服务器兼http协议网站

如果想让网站可以跨主机，需要修改与``iPanel.exe``同目录的``setting.json``，把``urlPrefixes``的``http://127.0.0.1:30000``改成``http://+:30000``

面板插件就是指运行在面板上面，负责和iPanel对接的程序。

``面板``在本手册中又叫``实例``，所以说``面板插件``在本手册中又叫``实例插件``

:::tip
这里的面板指的是Serein面板、MCDReforged、EQ-BDS面板等服务器控制程序

这些程序可以控制`服务器程序`的启停，获取`服务器程序`输出的内容，并且输入内容到`服务器程序`。同时这些程序还可以获取`服务器`的CPU/内存占用率等信息，或者更多功能。

`iPanel`仅通过`实例插件`对接基本的启停和输入输出控制。

注：服务器程序指的是``bedrock_server_mod.exe``(BDS)等程序
:::

用最简明的语言描述iPanel的部署方法：``首先启动iPanel.exe，配置好后安装实例插件，然后依次启动实例(比如Serein面板)并且配置好实例插件``

简单描述iPanel的工作流程：

```
  用户访问使用浏览器访问http://127.0.0.1:30000，然后输入账号密码。
  登录后，网页会与iPanel实现的网页后端API交互，完成身份鉴权后不断获取各类信息，同时把用户在网站上的操作发送到iPanel。
  iPanel的后端API接收到请求后把相关请求发送给实例插件，实例插件解析处理后执行用户在网页上下达的请求，并且不断发送实例的各项信息给iPanel。
  iPanel起到了数据集散中心的角色。
```

### 2.iPanel的使用

iPanel首次启动后会生成一个``setting.json``，用户可根据自身需要修改配置

比较常见的配置是：

- instancePassword

  给实例插件的鉴权密码

- urlPrefixes

  改成``http://+:30000``可让iPanel面向公网开放

再次启动后，如果不存在``dist``文件夹，iPanel会自动释放出程序内置的配套网页，然后开启http&WebSocket服务器，用户在浏览器访问``http://127.0.0.1:30000``就能进入管理页面了

然后用户需要在iPanel的命令行界面创建一个账号

输入``user create``，然后程序会一步步引导你创建一个账号，程序内部的说明足够详细了

在浏览器的页面中输入账号密码后即可享受使用iPanel管理服务器的便利了

## 二、实例插件的开发

### 1.使用您的编程语言实现一个WebSocket客户端

如标题所说，使用您的编程语言实现一个WebSocket客户端，需要具有以下基本能力：

`【1】`能够连接WebSocket服务器

一般的，使用您编程语言的HttpClient库，在握手完成后发送GET /请求，该请求中需要包含http升级到WebSocket的协议头

`【2】`断线自动重连

`【3】`能接收WebSocket包体

一般的，在OnWSMessageBody事件把数据压入缓冲区，在OnWSMessageComplete事件把缓冲区内数据取出，这些数据就是完整的WebSocket包体。也有可能您的库已经封装好了一切，直接有一个事件接收数据包。

具体的做法取决于您使用的库和编程语言

`【4】`能发送WebSocket包体

### 2.数据包的结构

WebSocket服务器发送的数据都是UTF8编码的json文本，json的大体结构如下：

```
{
	"type": "xxx",
	"sub_type": "xxx",
	"data": {..................}
}
```

``type``描述json的主要类型，有``request``、``event``两种可能的值

``sub_type``描述json的副类型，可能出现的值取决于主类型

``data``则是具体的数据，数据格式取决于type和sub_type

所以说，我们接收到数据包的第一件事是编码转换并且创建json对象，读取`type`的值，然后再进入进一步判断

### 3.连接WebSocket服务器并且完成鉴权

连接WebSocket服务器只需要正常连接并且在``/ws/instance``完成协议升级即可

然后我们需要鉴权，如果10秒内未完成鉴权就会被强制断开连接，断开连接前会收到[verify_result](#verify_result)消息

所以说我们要立刻发送如下格式json完成鉴权：

```
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

- data.instanceId

  填写实例的ID，由实例插件负责生成一个由32个小写字母和数字混合而成的随机文本，并且在第一次生成后需要长期保存下来

- data.customName

  填写实例的用户名称，这个名称会显示在网页端的实例列表上，比如说填写：``EQ-BDS面板_生存1服``。

- data.time

  ISO 8601日期格式的字符串，协调世界时，生成方法参考下面的js代码

  ```js
  const time = new Date().toISOString();
  ```

- data.metadata

  实例本身的版本信息等，会显示在仪表盘的实例栏目下，参考样例填写即可

- data.md5

  用于鉴权的token，格式是``md5(data.time + '.' + iPanel密码)``

  > 注：iPanel的密码就是iPanel目录下setting.json里面的instancePassword项，本例是``seNMchega``

  取md5后的结果以全部小写字母的16进制文本形式输出，得到的就是data.md5的值

  在本例中，对``2024-01-14T04:00:40.053Z.seNMchega``取md5的结果就是本例的data.md5值

### 3.request类型下sub_type的可能值

- #### heartbeat

心跳包，没有附带数据

```
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

接收到后需要回包反应情况，回包格式如下：

```
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

或

```
{
    "type": "return",
    "subType": "heartbeat",
    "data": {
        "system": {
            "os": "Microsoft Windows 11 专业版 SP0.0",
            "cpuName": "12th Gen Intel(R) Core(TM) i7-12700",
            "totalRam": 33289648,
            "freeRam": 22701812,
            "cpuUsage": 0.7887241840362549
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
    }
}
```

注：``data.system.cpuUsage``和``data.server.usage``为百分比，允许浮点数，``0.51``指的是``0.51%``

- #### server_start

网页端请求开服

```
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

- #### server_stop

网页端请求安全停服

```
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

- #### server_kill

网页端请求强制停服

```
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

- #### server_input

来自网页端的输入

```
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

### 4.event类型下sub_type的可能值

- #### verify_result

返回验证结果，验证成功的示例如下：

```
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

```
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

- #### disconnection

服务器主动断开连接，提供断开连接的原因：

```
{
	"sender": {
		"name": "iPanel",
		"type": "host",
		"metadata": {
			"version": "2.1.7.26"
		}
	},
	"type": "event",
	"sub_type": "disconnection",
	"time": 1691161413,
	"data": {
		"reason": "验证超时"
	}
}
```

### 5.需要对接的事件

- #### 服务器被开启

当服务器被开启时，须发送下面的包：

```
{
    "type": "broadcast",
    "subType": "server_start"
}
```

- #### 服务器关闭

当服务器关闭时(不论是手动关闭还是自行崩溃)，须发送下面的包：

```
{
    "type": "broadcast",
    "subType": "server_stop",
    "data": 0
}
```

- data

  进程退出代码

- #### 输入指令到服务器

输入了指令到服务器，须发送下面的包：

```
{
    "type": "broadcast",
    "subType": "server_input",
    "data": [
        "list"
    ]
}
```

- data

  输入的指令内容，是一个数组，一行一个成员，按顺序放入


- #### 服务器输出内容

服务器输出了内容，须发送下面的包：

```
{
    "type": "broadcast",
    "subType": "server_output",
    "data": [
        "\u001b[38;2;173;216;230m22:17:24\u001b[0m \u001b[38;2;032;178;170mINFO\u001b[0m \u001b[37m[Server]\u001b[0m \u001b[37mThere are 0/100 players online:\u001b[0m",
        "\u001b[38;2;173;216;230m22:17:24\u001b[0m \u001b[38;2;032;178;170mINFO\u001b[0m \u001b[37m[Server]\u001b[0m \u001b[37m\u001b[0m"
    ]
}
```

- data

  输出的内容，是一个数组，一行一个成员，按顺序放入。建议缓存一段时间再发，减小性能开销