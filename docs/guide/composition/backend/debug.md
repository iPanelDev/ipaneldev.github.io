# 调试模式

:::info
此选项通常用于开发者远程远程定位iPanel问题，一般情况下无需开启
:::

开启[此选项](setting#debug)后，iPanel将会

- 在控制台输出调试等级的信息
  - Http请求的处理过程
  - 实例WebSocket服务器收发的数据
- 开启Debug的ws服务器（`/ws/debug`），并将控制台的所有输出转发给已经通过验证的客户端

## ws服务器

启动后，控制台会输出以下内容

```txt
13:31:45 Info  调试服务器已开启。连接密码：[dac52f30689e4456b0d47fc04bce2702]
```

- 连接WebSocket服务器后，你需要发送连接密码（此处即为`dac52f30689e4456b0d47fc04bce2702`）来鉴权
- 此密码只会在启动完成后输出一次，且每次均为随机生成
- 发送时无需构造数据包或以JSON格式发送，直接作为纯文本发送即可

鉴权成功后控制台将会有如下提示

```txt
13:35:24 Info  [127.0.0.1:50770] 连接到调试服务器
13:35:31 Info  [127.0.0.1:50770] 通过调试服务器验证
13:35:31 Warn  [127.0.0.1:50770] 如果这不是信任的连接，请立即停止iPanel并在设置中禁用调试
```

## 示例

```txt
客户端 13:35:31
dac52f30689e4456b0d47fc04bce2702

服务器 13:35:35
{"lines":["iPanel 2.3.0.0","▪ user 管理用户"," ▪ user create/remove/edit 操作用户（此功能需要可交互的终端）"," ▪ user list 列出所有用户"," ▪ user create [description:string?] 创建用户"," ▪ user edit [description:string?] 编辑指定用户"," ▪ user remove 删除指定用户","▪ list 列出所有实例","▪ cls 清屏","▪ version 显示详细的版本和版权信息","▪ exit 关闭并退出"],"level":2}

服务器 13:35:45
{"lines":["Total size = 0/10240kb, not purging."],"level":2}
```

## 返回消息结构

### lines

- 类型：`string[]`

### level

- 类型：`enum` / `uint`
  - `None`=0
  - `Trace`
  - `Debug`
  - `Info`
  - `Warning`
  - `Error`
  - `Fata`
