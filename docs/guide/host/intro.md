# Host

[![Static Badge](https://img.shields.io/badge/iPanel_Host-+?style=for-the-badge&logo=github&label=GitHub&labelColor=495867&color=495867)](https://github.com/iPanelDev/iPanel-Host)

前端网页控制台和服务器实例的数据交换的中心枢纽

![host](/img/host.png)

:::note
帮助菜单可能因版本不同而有所差异
:::

iPanel Host主要由两部分构成，一个是Http服务器，另一个是WebSocket服务器。其中后者是其核心功能

- 实例插件或用户的浏览器连接WebSocket服务器，通过鉴权后，iPanel Host会根据访问者发送的身份信息采用不同的方法解析json文本，并且完成消息转发
- Http服务器的业务逻辑非常简单，它是一个静态网站开设器，把[网页控制台](../webConsole/intro)的文件放在同目录下的`dist`文件夹即可开设一个静态网站

:::tip
网页控制台本质上是个静态网页，你也可以通过使用GitHub Pages或其他服务搭建，此处不再赘述
:::

:::caution
搭建网站需要向有关部门备案
:::
