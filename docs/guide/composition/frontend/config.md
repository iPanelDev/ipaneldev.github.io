# 配置文件

```js title='dist/config.js'
// @ts-check
// @ts-ignore
// iPanel配置项
window.iPanelWebConsoleConfig ||= {
    /**
     * 路由历史类型
     * - 如果不能设置单页面应用模式，则需将此项改为`hash`
     * @type {"web"|"hash"|"memory"}
     */
    routerHistoryType: "web",
};
```

## `routerHistoryType`

路由器使用的历史记录模式

### URL对照

| `routerHistoryType`值 | URL示例                          | 备注                     |
| :-------------------: | -------------------------------- | ------------------------ |
|         `web`         | <http://127.0.0.1:30000/login>   | 推荐⭐                    |
|        `hash`         | <http://127.0.0.1:30000/#/login> | 对浏览器的历史记录不友好 |
|       `memory`        | <http://127.0.0.1:30000/>        | 是的，什么都没有         |

>[RouterOptions-history](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html#Properties-history)
