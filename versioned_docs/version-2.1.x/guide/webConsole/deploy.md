# 独立部署

由于网页控制台是单独的一个静态网页，所以你可以采用单独部署的方式来减少性能开销

:::caution
由于浏览器安全限制，使用https协议的网页**仅能连接wss协议（使用SSL加密）的WebSocket**

因此在此推荐使用[GitHub Pages](https://pages.github.com/)搭建，**设置域名后**可不使用https协议
:::

- 其他选择
  - [Vercel](https://vercel.com/)
  - [CloudFlare](https://dash.cloudflare.com/)

## 具体步骤

### GitHub Pages

1. [Fork仓库](https://github.com/iPanelDev/WebConsole)
2. 在仓库的`Settings`-`Pages`-`Build and deployment`-`Source`选择`GitHub Actions`
3. 在仓库的`Actions`允许工作流
4. 点击左侧菜单中`deploy`，再点击右侧的`Run workflow`运行即可部署

### 其他

1. [Fork仓库](https://github.com/iPanelDev/WebConsole)
2. 在部署页面导入GitHub仓库
3. 项目类型选择`vue`或`vue3`
4. 编译命令填`npm run build`
5. 输出文件夹填`dist`
