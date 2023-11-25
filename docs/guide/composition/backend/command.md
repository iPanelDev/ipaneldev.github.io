# 命令

你可以提供输入`help`或`?`来获取以下内容

```txt
help
8:36:05 Info  iPanel 2.3.0.0
8:36:05 Info  ▪ user  管理用户
8:36:05 Info    ▪ user create/remove/edit  操作用户（此功能需要可交互的终端）
8:36:05 Info    ▪ user list  列出所有用户
8:36:05 Info    ▪ user create <userName:string> <password:string> <level:enum/uint> [description:string?]  创建用户
8:36:05 Info    ▪ user edit <userName:string> <password:string> <level:enum/uint> [description:string?]  编辑指定用户
8:36:05 Info    ▪ user remove <userName:string>  删除指定用户
8:36:05 Info  ▪ list  列出所有实例
8:36:05 Info  ▪ cls  清屏
8:36:05 Info  ▪ version  显示详细的版本和版权信息
8:36:05 Info  ▪ exit  关闭并退出
```

:::note
>此功能需要可交互的终端

简单来说，此处指**输出流未被重定向**，且终端支持输出控制字符

使用cmd或[Windows 终端](https://learn.microsoft.com/zh-cn/windows/terminal/install)就是这一种类型
:::
