# 快速上手

## 1. 安装运行环境

运行iPanel需要NET 6.0环境（`Microsoft.NETCore.App 6.x`），你可以在[此处](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0)下载

:::note
当然你也可以选择自行编译修改目标框架，实现在其他版本的环境下运行
:::

:::tip
你可以在控制台输入`dotnet --list-runtimes`查看已安装的运行时

如果安装成功，他应该如下显示

```txt
PS C:\> dotnet --list-runtimes 
Microsoft.NETCore.App 6.0.25 [C:\****\dotnet\shared\Microsoft.NETCore.App]   
```

:::

## 2. 下载iPanel

| 正式版                                                                                                                                               | 预览版                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![GitHub release](https://img.shields.io/github/v/release/iPanelDev/iPanel?style=flat-square)](https://github.com/iPanelDev/iPanel/releases/latest) | [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iPanelDev/iPanel/iPanel-build.yml?style=flat-square&logo=github)](https://github.com/iPanelDev/iPanel/actions/workflows/iPanel-build.yml) |

## 3. 运行iPanel

### Windows

解压后双击`iPanel.exe`即可

### Linux / MacOS

```sh
cd ./path/to/ipanel
# 当前目录下应该有`iPanel`和`iPanel.pdb`两个文件

chmod +x ./iPanel
# 允许执行此文件

./iPanel
# 运行
```

首次运行时会释放[静态网页](composition/frontend)和[设置](composition/backend/setting)文件，你需要修改后重新启动

## 4. 配置实例插件

你可以在[此处](composition/instance/)查看目前已经支持的实例类型

安装后按照提示修改即可

## 5. 打开浏览器体验iPanel

如果你未修改默认的网址，使用浏览器打开[`http://127.0.0.1:30000`](http://127.0.0.1:30000)即可体验iPanel啦
