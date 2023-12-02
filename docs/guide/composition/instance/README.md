# 实例插件

:::note 名词解释<sup>[后同]</sup>

- **实例** - 运行并管理服务器的程序
  - 面板 - [Serein](https://serein.cc)、[EQ-BDS](https://www.minebbs.com/threads/eq-bds-3-9.12782/)等**带用户操作界面**的服务器控制程序
  - 服务器管理程序 - [MCDReforged](https://github.com/Fallen-Breath/MCDReforged)等**只有命令行**的程序
- **实例插件** - 运行在实例上的插件，用于提供相关服务
- **服务器程序** - `bedrock_server.exe`等运行MineCraft服务器的程序
:::

:::tip
你会发现这些实例都有一些共同特点

- 控制服务器程序
- 获取系统信息
:::

作为服务器面板/服务器管理程序的插件，向命令行控制台同步当前实例的信息，命令行控制台通过实例插件对接基本的服务器控制

## 一览

| 适用软件                                                    | 最低适用版本 | 插件版本 |                                    语言                                    |
| ----------------------------------------------------------- | :----------: | :------: | :------------------------------------------------------------------------: |
| [Serein](https://serein.cc)                                 |    v1.3.5    | 2.3.0.0  | ![js](https://img.shields.io/badge/JavaScript-2022-F7DF1E?logo=JavaScript) |
| [MCDReforged](https://github.com/Fallen-Breath/MCDReforged) |     2.x      | 2.3.0.0  |       ![py](https://img.shields.io/badge/Python-3-blue?logo=Python)        |
| [EQ-BDS](https://www.minebbs.com/threads/eq-bds-3-9.12782/) |     3.9      |   2.1    |                                   易语言                                   |

适用于更多面板/服务器管理程序的插件正在开发中...

## 缺少你想要的实例插件？

如果你不具备独立开发的经验，你可以在[这里](https://github.com/orgs/iPanelDev/discussions/new?category=%E6%96%B0%E5%8A%9F%E8%83%BD-%E6%96%B0%E6%83%B3%E6%B3%95)提交一份请求。如果开发者**有兴趣且有能力和条件**适配，那么适用于此实例的插件马上就会被开发出来咯

<details>

<summary>
对于实例程序的要求
</summary>

- [x] 能监听服务器事件
  - 输入
  - 输出
  - 启动
  - 关闭
- [x] 控制服务器运行，输入命令等
- [x] 获取服务器状态和部分系统信息
- [x] WebSocket
- [可选] 能够有丰富的第三方库和扩展空间

</details>

### 提交PR

如果你有能力自行制作相关实例插件并想要展示在上面，请务必[与我们联系](https://github.com/orgs/iPanelDev/discussions/categories/%E6%96%B0%E5%8A%9F%E8%83%BD-%E6%96%B0%E6%83%B3%E6%B3%95):D

:::tip
不论是修复一点点小Bug或是完成一整个大功能，我们欢迎每个人都参与到iPanel的大家庭中来QwQ
:::
