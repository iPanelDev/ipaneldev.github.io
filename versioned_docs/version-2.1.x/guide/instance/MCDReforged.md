# MCDReforged

```powershell title="MCDReforged"
> !!MCDR plg ra
[MCDR] [19:00:37] [TaskExecutor/INFO]: 刷新所有插件中
[MCDR] [19:00:38] [TaskExecutor/INFO]: 插件 ipanel_mcdreforged@2.1.7.29 已重载
[MCDR] [19:00:38] [TaskExecutor/WARNING] [ipanel_mcdreforged]: "config.customName"为空，将使用默认名称"MCDReforged#2.1.7.29"
[MCDR] [19:00:38] [TaskExecutor/INFO] [ipanel_mcdreforged]: iPanel-MCDReforged@2.1.7.29加载成功.
[MCDR] [19:00:38] [TaskExecutor/INFO]: 共重载: 1 个插件; 已加载插件数: 3
[MCDR] [19:00:38] [WSConnection/INFO] [ipanel_mcdreforged]: 已连接到"ws://127.0.0.1:30000"
[MCDR] [19:00:38] [WSConnection/INFO] [ipanel_mcdreforged]: [Host] 验证通过
```

## 要求

- [MCDReforged](https://github.com/Fallen-Breath/MCDReforged) 2.x
  - Python 3.8+
- pypi包依赖（会在运行时自动安装）
  - [psutil](https://pypi.org/project/psutil)
  - [websocket-client](https://pypi.org/project/websocket-client)

## 安装方法

1. 下载后复制到plugins文件夹
2. 使用`!!MCDR plg ra`重新加载插件
3. 首次运行将创建[配置文件](config)，修改后重新加载即可
