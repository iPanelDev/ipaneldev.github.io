# 设置

```json
{
  "webSocket": {
    "addr": "ws://0.0.0.0:30000",
    "password": ""
  },
  "webServer": {
    "urlPrefixes": [
      "http://127.0.0.1:30001"
    ],
    "directory": "dist",
    "disableFilesHotUpdate": true,
    "page404": "index.html"
  },
  "output": {
    "displayCallerMemberName": false
  },
  "debug": false
}
```

>设置内容可能因版本不同会有所差异，请以文件内实际内容为准

## webSocket

WebSocket服务器

### addr

ws地址

- 类型：`string`
- 默认值：`"ws://0.0.0.0:30000"`

:::caution
不建议更改上面的ip地址，除非你知道你在做什么
:::

### password

ws连接密码

- 类型：`string`

:::tip
建议长度超过六个字符，且大小写数字结合
:::

## webServer

网页服务器

### urlPrefixes

监听的URL前缀

- 类型：`string[]`
- 默认值：`["http://127.0.0.1:30001"]`

:::note
将此项设为空数组将不会启动网页服务器
:::

:::tip
[对外开放网页](toPublic)
:::

### directory

网页文件夹

- 类型：`string`
- 默认值：`"dist"`

### disableFilesHotUpdate

禁用文件热更新

若为`false`，在收到请求时将动态读取请求的文件，可能造成一定性能损失

- 类型：`boolean`
- 默认值：`true`

### page404

404页面文件位置

- 类型：`string`
- 默认值：`"index.html"`

## output

输出相关

### displayCallerMemberName

输出时显示调用此方法的成员名称

- 类型：`boolean`
- 默认值：`false`

## debug

调试开关

- 类型：`boolean`
- 默认值：`false`
