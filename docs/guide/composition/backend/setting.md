# 设置

保存在`./setting.json`

```json
{
  "debug": false,
  "instancePassword": "123456",
  "webServer": {
    "urlPrefixes": [
      "http://127.0.0.1:30000"
    ],
    "directory": "dist",
    "disableFilesHotUpdate": true,
    "page404": "index.html",
    "allowCrossOrigin": false,
    "maxRequestsPerSecond": 50,
    "whiteList": [],
    "certificate": {
      "enable": false,
      "autoRegisterCertificate": false,
      "autoLoadCertificate": false,
      "path": null,
      "password": null
    }
  }
}
```

## instancePassword

实例连接密码

- 类型：`string`

## webServer

### urlPrefixes

监听的URL前缀

- 类型：`string[]`
- 默认值：`["http://127.0.0.1:30000"]`

:::tip
[将网页开放到外网](toPublic)
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

### allowCrossOrigin

是否允许[跨源请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

:::caution
不建议修改，除非你知道你在做什么
:::

- 类型：`boolean`
- 默认值：`false`

### maxRequestsPerSecond

每秒允许的最大请求数（包括静态网页、WebSocket和Api接口）

超出限制后，请求IP将被封禁半小时，期间一切请求均返回403 Forbidden

:::caution
不建议修改，除非你知道你在做什么
:::

- 类型：`number`
- 默认值：`50`

### whiteList

白名单，[见上](#maxrequestspersecond)

此列表中的IP将永远不会被封禁

- 类型：`string[]`
- 默认值：`[]`

### certificate

:::caution
不建议修改，除非你知道你在做什么
:::

:::note
iPanel支持使用SSL开启Http服务器

但是用于系统限制，目前此功能**仅适用于Windows**；若在其他平台下使用此选项可能导致意想不到的后果
:::

#### enable

是否启用SSL证书

- 类型：`boolean`
- 默认值：`false`

#### autoRegisterCertificate

是否自动绑定证书

- 类型：`boolean`
- 默认值：`false`

#### autoLoadCertificate

是否自动加载证书

- 类型：`boolean`
- 默认值：`false`

#### path

证书的路径

- 类型：`string | null`
- 默认值：`null`

#### password

证书的密码

- 类型：`string | null`
- 默认值：`null`

## debug

[调试功能](debug)开关

- 类型：`boolean`
- 默认值：`false`

:::caution
不建议修改，除非你知道你在做什么
:::
