# 将网页开放到外网

当[urlPrefixes](setting#urlprefixes)的IP为`127.0.0.1`/`localhost`时，此网页服务器不会对外网开放。也就是说，你只能通过此设备上的浏览器访问该网页

## 具体方法

1. 在[urlPrefixes](setting#urlprefixes)添加`http://+:{端口}`或`http://*:{端口}`
2. 保存并关闭设置文件
3. **以管理员权限运行iPanel** （操作系统安全限制）

:::tip 例子

如果你想要在公网的`1145`端口上开放此服务器

1. 在设置的`webServer.urlPrefixes`中添加`http://+:1145`或`http://*:1145`
2. 以管理员权限运行iPanel

:::
