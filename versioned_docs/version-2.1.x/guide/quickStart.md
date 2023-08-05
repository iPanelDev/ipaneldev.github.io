# 快速上手

## 简明扼要版

1. 首先启动[iPanel Host](#1-下载ipanel-host)
2. 安装实例插件
3. 然后依次启动实例并且配置好实例插件

## 详细版

### 1. 下载iPanel Host

| 正式版                                                                                                                                           | 预览版                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![GitHub release](https://img.shields.io/github/v/release/iPanelDev/iPanel-Host?style=flat-square)](https://github.com/iPanelDev/iPanel-Host/releases/latest) | [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iPanelDev/iPanel-Host/build.yml?style=flat-square&logo=github)](https://github.com/iPanelDev/iPanel-Host/actions/workflows/build.yml) |

- Win7及以下建议选择Net Framework 4.7.2
- Win10及以上若追求处理速度可尝试Net6
- 非Win操作系统请选择Net6

### 2. 添加网页文件

推荐从[Releases](https://github.com/iPanelDev/WebConsole/releases/latest)下载最新的网页文件，解压后放在iPanel Host同目录下的dist文件夹

文件树应该如下

```txt
├─ iPanel.exe
├─ iPanel.pdb
└─dist
   ├─ index.html
   └─assets
        ...
```

:::tip
网页控制台本质上是个静态网页，你也可以通过使用第三方服务搭建，[这里有详细教程](webConsole/deploy)
:::

:::tip
[开放到外网](host/toPublic.md)
:::

### 3. 运行iPanel Host

解压后双击iPanel Host.exe即可

对于Linux用户，你需要打开shell输入以下内容

```powershell
dotnet run "./iPanel Host.dll"
```

首次运行时会释放[设置](host/setting)文件，你需要修改后重新启动

### 4. 配置实例插件

目前已经支持的实例列表你可以在[此处](instance/intro)查看

基本逻辑都相同：安装后按照提示修改

### 5. 连接

默认情况下，使用浏览器打开`http://127.0.0.1:30000`即可体验
