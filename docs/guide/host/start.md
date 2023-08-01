# 快速上手

## 下载

| 正式版                                                                                                                                           | 预览版                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![GitHub release](https://img.shields.io/github/v/release/iPanelDev/iPanel-Host?style=flat-square)](https://github.com/iPanelDev/iPanel-Host/releases/latest) | [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iPanelDev/iPanel-Host/build.yml?style=flat-square&logo=github)](https://github.com/iPanelDev/iPanel-Host/actions/workflows/build.yml) |

- Win7及以下建议选择Net Framework 4.7.2
- Win10及以上若追求处理速度可尝试Net6
- 非Win操作系统请选择Net6

## 添加网页文件

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

## 运行

解压后双击即可

首次运行时会释放[设置](settings)文件，你需要修改后重新启动
