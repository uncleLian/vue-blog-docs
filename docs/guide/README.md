# 介绍

[![image](https://img.shields.io/badge/vue-2.6.8-brightgreen.svg)](https://github.com/vuejs/vue)
[![image](https://img.shields.io/badge/vue--router-3.0.2-brightgreen.svg)](https://github.com/vuejs/vue-router)
[![image](https://img.shields.io/badge/vuex-3.1.0-brightgreen.svg)](https://github.com/vuejs/vuex)
[![image](https://img.shields.io/badge/vue--cli-3.x-brightgreen.svg)](https://cli.vuejs.org/zh/)
[![image](https://img.shields.io/badge/element--ui-2.7.0-9cf.svg)](https://github.com/ElemeFE/element)
[![GitHub release](https://img.shields.io/github/release/uncleLian/vue-blog.svg)](https://github.com/uncleLian/vue-blog/releases)

[vue-blog](https://github.com/uncleLian/vue-blog) 是基于 [vue.js](https://github.com/vuejs/vue)，配合使用 [element-ui](https://github.com/ElemeFE/element) 组件库的一个前端管理后台集成解决方案。它使用了目前主流的技术栈，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。

::: tip 建议
本项目的定位是后台集成方案，不适合当基础模板来进行二次开发。你可以把它当做工具集，在基础模板上进行开发时，想要什么功能或者组件就去复制过来。

- 集成方案：[vue-blog](https://github.com/uncleLian/vue-blog)
- 基础模板：[vue-blog-template](https://github.com/uncleLian/vueBlog-template)
:::

## 功能
功能持续迭代中，欢迎 [pr](https://github.com/uncleLian/vue-blog/pulls) 和 [issue](https://github.com/uncleLian/vue-blog/issues)

``` 
* 核心功能
    - 登录/注销
    - 权限验证
        - 页面级权限
        - 按钮级权限
    - 多环境
        - dev
        - prod
        - stage
    - 动态侧边栏
    - 动态面包屑
    - 错误处理
        - 401
        - 404
        - 错误日志
    - 其他处理
        - axios封装
        - cache封装
        - 页面平滑过渡
        - css预处理器全局变量
        - 包体积优化
    - svg icon / iconfont

* 其他扩展
    - mock
    - 引导页
    - 图钉
    - 返回顶部
    - 动态数值
    - 进度条
    - 剪切板
    - 富文本编辑器
    - Markdown编辑器
    - 动态换肤
    - 全屏化
    - 国际化多语言
    - 文件处理
        - 导入Excel
        - 导出Excel
        - 导出Zip
    - 拖拽功能
        - 拖拽弹框
        - 拖拽表格
        - 拖拽列表

```

## 前序准备
你的本地环境需要安装 [Node](https://nodejs.org/en/) 和 [Git](https://git-scm.com/)，本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org)、[vue-router](https://router.vuejs.org/zh-cn/)、[vuex](https://vuex.vuejs.org/zh-cn/)、[axios](https://github.com/axios/axios) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)，所有的请求数据都使用 [mock.js](http://mockjs.com/) 模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

::: tip 版本要求
[Node](https://nodejs.org/en/)推荐 8.11.0+或稳定版，你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

:::
如果你是Vue初学者，这里有一些资源可以帮助到你

- [新手向 Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551?refer=evanyou)
- [ES6入门 阮一峰](http://es6.ruanyifeng.com/)
- [Vue入门项目系列](https://github.com/uncleLian/vue2-echo)

## 安装
```bash
# 克隆项目
git clone https://github.com/uncleLian/vue-blog.git

# 安装依赖
npm install

# 本地开发、启动服务
npm run dev
```
启动完成后会自动打开浏览器访问 [http://localhost:8002](http://localhost:8002)，看到登录页面或主页面就代表操作成功了。

![](http://poci6sbqi.bkt.clouddn.com/vue-blog.jpg)

## 目录结构
本项目已搭建了一个完整的开发目录结构，提供各类功能，可自行调整。

```bash
├── public                     
│   ├── static                 // 不打包资源
│   ├── index.html             // html模板
├── src                        
│   ├── api                    // 所有请求api
│   ├── assets                 // 样式、图标、图片等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filters                // 全局filter
│   ├── language               // 多语言
│   ├── layout                 // 页面结构
│   ├── mock                   // 模拟数据
│   ├── pages                  // 所有页面
│   ├── router                 // 路由
│   ├── store                  // store管理
│   ├── utils                  // 全局公用方法(请求、缓存、权限、错误处理等)
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口文件、初始化资源、组件等
├── .env.development           // 开发环境配置
├── .env.production            // 生成环境配置
├── .env.stage                   // 测试环境配置
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel-loader 配置(vue-jsx)
├── package.json               // 依赖、eslint等
└── vue.config.js              // vue-cli 配置
```

## 贡献

本文档 [vue-blog-docs]() 基于 [vuepress](https://github.com/vuejs/vuepress) 开发，有任何错误和建议可以到该项目反馈。

[vue-blog](https://github.com/uncleLian/vue-blog) 持续迭代中，逐步沉淀和总结出中后台产品的最佳实践，欢迎[参与](https://github.com/uncleLian/vue-blog/pulls)和[反馈](https://github.com/uncleLian/vue-blog/issues)。

## 捐赠

如果觉得这个项目帮助到了你，你可以请作者喝杯饮料表示支持 :green_heart:

![image](http://poci6sbqi.bkt.clouddn.com/donate.jpg)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions
