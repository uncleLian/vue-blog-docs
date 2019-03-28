# 构建和发布

## 构建
当项目开发完毕，执行以下命令打包项目：
```bash
# 打包测试环境
npm run build:sit

# 打包正式环境
npm run build
```

打包成功之后，会在根目录生成 `dist` 文件夹，里面就是打包好的文件。

如果需要自定义目录，参照 [outputDir](https://cli.vuejs.org/zh/config/#outputdir)。

## 分析构建文件大小
如果你的 `dist` 包很大，你可以查看 `dist` 包里面的文件或者打印 `report.html` 来找到问题所在。

### 分析 dist 包
- 如果 `dist` 包里面包含着大量 .map 后缀的文件，这个是源代码映射文件，可以修改 `vue.config.js` 来优化，查看 [css-sourcemap](https://cli.vuejs.org/zh/config/#css-sourcemap) 和 [productionSourceMap](https://cli.vuejs.org/zh/config/#productionsourcemap)。本项目已设置为 false。

- 如果是静态资源过大，图片则用 PS 等工具进行压缩即可。

### 分析 report.html
执行以下命令，构建出 `report.html`

```bash
npm run build:report
```

然后 `dist` 包里就多了一个 `report.html` 文件，双击打开即可查看。

![](http://poci6sbqi.bkt.clouddn.com/report.jpg)

优化原理可以参考 [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)。本项目已做了一些通用优化，具体查看 `vue.config.js`。

## 发布
项目的开发、优化、打包已经搞定好了之后，最后一步就是发布了。对于发布来讲，只需要将最终生成的静态文件，也就是 `dist` 文件夹的静态文件发布到你的 cdn 或静态服务器即可。

本项目 [Vue-Router](https://router.vuejs.org/zh/) 路由模式使用 `hashHistory`，链接上会有 # 符号，去除请参照 [HTML5 Hhistory模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)。

::: tip
项目部署默认是域名的根路径上，如果不是，修改请查看 [publicPath](https://cli.vuejs.org/zh/config/#publicpath)。
:::

### 场景延伸
当项目发布后，却遇到修改接口地址，但是构建的 `dist` 包是写死的了。我们就需要重新修改、测试、打包。这样想想都挺麻烦的，所以最好解决方案就是有个 `config` 文件方便我们管理这些。解决方法：

- 在 `/public` 目录下新建 `static` 文件夹，然后在里面新建 `config.js` 文件，内容为：
```js
window.g = {
    baseURL: 'http://www.example.com'
}
```

- 在 `/public/index.html` 里面引入 `config.js`
```html
<script src="<%= BASE_URL %>static/config.js"></script>
```

- 最后在 `@/utils/request.js` 使用：
```js
export const instance = axios.create({
    baseURL: window.g.baseURL
})
```
如果 `config.js` 需要根据环境，你可以判断当前环境，然后使用哪个变量即可。
```js
// config.js
window.g = {
    baseURL-dev: 'http://www.example.com/dev',
    baseURL-sit: 'http://www.example.com/sit',
    baseURL-prod: 'http://www.example.com/prod'
}

// @/utils/request.js
export const instance = axios.create({
    baseURL: window.g[`baseURL-${process.env.VUE_APP_ENV_CONFIG}`]
})
```

或者你只想暴露生产的链接。
```js
// config.js
window.g = {
    baseURL: 'http://www.example.com/prod'
}

// @/utils/request.js
let baseURL = process.env.VUE_APP_BASE_API
if (process.env.NODE_ENV === 'production') {
    baseURL = window.g.baseURL
}
export const instance = axios.create({
    baseURL: baseURL
})
```
