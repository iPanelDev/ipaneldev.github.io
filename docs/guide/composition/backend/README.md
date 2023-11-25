# 后端-命令行控制台

[![Static Badge](https://img.shields.io/badge/iPanel-+?style=for-the-badge&logo=github&label=GitHub&labelColor=495867&color=495867)](https://github.com/iPanelDev/iPanel-Host)

使用C#开发，前端网页控制台和服务器实例的数据交换的中心枢纽，用于建立各个实例和用户的连接，同时也包含Http服务器和一些业务的处理

![console](/img/backend/console.png)

## Http服务器

- `/api` 网页控制台的接口（已尽力使用[RESTFUL](https://restfulapi.cn/)风格）
- `/ws`
  - `/ws/instance` 实例插件的ws服务器
  - `/ws/broadcast` 网页控制台的广播ws服务器
  - `/ws/debug` 调试输出
- `...` 静态网页

:::caution
搭建网站可能需要向有关部门备案
:::
