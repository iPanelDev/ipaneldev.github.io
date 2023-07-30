# 快速上手

## 下载

| 正式版                                                                                                                                           | 预览版                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![GitHub release](https://img.shields.io/github/v/release/Zaitonn/iPanel?style=flat-square)](https://github.com/Zaitonn/iPanel/releases/latest) | [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Zaitonn/iPanel/build.yml?style=flat-square&logo=github)](https://github.com/Zaitonn/iPanel/actions/workflows/build.yml) |

- Win7及以下建议选择Net Framework 4.7.2
- Win10及以上若追求处理速度可尝试Net6
- 非Win操作系统请选择Net6

*Net6需要安装[运行环境](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0)*

## 添加网页文件

:::tip
如果你[禁用了网页服务器](settings#urlprefixes)可跳过此项
:::

从[Releases](https://github.com/Zaitonn/iPanel/releases/latest)下载最新的网页文件，解压后放在iPanel Host同目录下的dist文件夹

文件树应该如下

```txt
├─ iPanel.exe
├─ iPanel.pdb
└─dist
   ├─ index.html
   └─assets
        ...
```

## 运行

解压后双击即可

首次运行时会释放[设置](settings)文件，你需要修改后重新启动
