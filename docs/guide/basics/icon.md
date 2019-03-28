# 图标
`vue-blog-template` 使用的是 [svg](http://www.ruanyifeng.com/blog/2018/08/svg.html) 图标。

`vue-blog` 使用了 [svg](http://www.ruanyifeng.com/blog/2018/08/svg.html) 图标和 [iconfont](https://www.iconfont.cn/) 字体图标。引入两种主要作为演示。

## 使用svg图标
```html
<!-- icon-class 为 svg 图标文件的名字 -->
<svg-icon icon-class="dashboard" />
```

### 自定义icon
图标文件夹：`@/assets/css/icons/svg`

- 如果有 UI 设计师导出 svg 图标给你，你可以直接放在文件夹里就可以使用了，很方便对吧！
- 如果没有 UI，你也可以到 [iconfont.cn](https://www.iconfont.cn/) 或者其他 svg 图标网站，搜索你想要的图标，然后下载 svg 图标，放在文件夹里即可。

::: tip
- 本项目 svg 图标大小采用 128 x 128
- svg-icon 默认读取它父级的 color
- [iconfont.cn](https://www.iconfont.cn/) 搜索到的图标，大小可能不统一，可以用 PS、Sketch等工具规定一下图标大小
:::

### 实现步骤
本项目已默认实现，无需自行配置，按照上面方式使用即可。

#### 安装 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)
```bash
npm install svg-sprite-loader -D
```

#### 配置 svg-sprite-loader
```js
// vue.config.js

// 因为 vue-cli 对 svg 有默认规则，会和 svg-sprite-loader 发生冲突。可以这样解决：
chainWebpack: config => {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/icons')) // 去除该目录
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/icons')) // 只针对该目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        .end()
}
```

#### 封装 svg-icon 组件
```html
<template>
    <svg :class="[className, 'svg-icon']" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`
        }
    }
}
</script>

<style lang="stylus" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
```

#### 导入 svg 图标
```js
// @/assets/icons/index.js

import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 注册全局组件
Vue.component('svg-icon', SvgIcon)

// 导入所有 svg 图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

#### 最后在main.js引入即可
```js
import '@/assets/icons'
```

#### 移除svg图标
- 删除 `/main.js` 里的 `import @/assets/css/icons` 语句
- 删除 `@/assets/css/icons` 文件夹
- 删除 `@/components/SvgIcon` 文件夹
- 删除 `/vue-config.js` 的 `svg-sprite-loader` 配置。
- 删除 `@/layout/Sidebar/sideValue` 里面判断 `icon` 类型的语句
- 执行 `npm uninstall svg-sprite-loader` 命令

::: tip
上面使用的图标原理跟 iconfont 的 `symbol` 是一样的，为什么要增加额外的步骤呢，如安装和配置loader。

因为 iconfont 做不到按需加载、可自定性差、还包含许多对渲染结果没有影响的无用信息。其次每次增删图标都得整个重新下载、替换，如果使用别的地方的svg图标也需要上传这个步骤。而使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 能解决上述问题。

如无这些细节要求，推荐使用 iconfont，因为简单方便并且集中管理。
:::

## 使用字体图标

字体图标推荐使用 [iconfont](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.dfd524534&helptype=about)。[使用方法](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)。

#### 最佳方案
- 使用 `Font Class` 方式
- 编辑项目，将 FontClass 前缀改为 `el-icon` 开头，如：`el-icon-my`。`Font Family` 改为 `element-icons`
- 编辑图标的 `Unicode`，改为`e9xx`，只要不是 `e6`开头即可。
- 开发时，使用 `iconfont` 链接进行调试最为方便
- 开发完成下载到本地，然后在 `main.js` 引入或使用 `cdn` 链接

编辑 FontClass 前缀和 Font Family 是为了我们自定义的图标可以使用 element 图标的样式，这样我们在使用 element 的组件时只需填写 `class` 即可。如：

```html
<el-button icon="el-icon-my-dashboard" />

<el-rate :icon-classes="['el-icon-my-hot', 'el-icon-my-hot', 'el-icon-my-hot']" />
```

编辑图标的 Unicode 是因为 [element 图标](https://github.com/ElemeFE/element/blob/f6df39e8c1ff390da0f0df8ea30b07baf5d457f0/packages/theme-chalk/src/icon.scss) 的 Unicode 是以 `e6` 开头的。自定义的图标可能会覆盖 element 图标。

## 总结
到底使用哪种方式的图标，还是那句话，适合才是最好的。

#### unicode格式
- 支持ie6+，兼容性最好
- 支持按字体的方式去动态调整图标大小，颜色等等
- 不支持多色，因为是字体
- 图标语意不明确

#### font-class格式
- 支持ie8+，兼容性良好
- 支持按字体的方式去动态调整图标大小，颜色等等
- 不支持多色，因为是字体
- 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。

#### symbol格式，即svg图标
- ie9+，现代浏览器
- 通过一些技巧，支持像字体那样，通过font-size,color来调整样式
- 支持多色，因为是svg了
- 矢量，缩放不失真
- 可利用CSS实现动画
- 减少HTTP请求
- 可以很精细的控制SVG图标的每一部分

::: tip 应用场景
- 无兼容要求，推荐使用 svg 图标。
- 需要替换 element-ui 组件默认图标的话，推荐使用 FontClass 格式字体图标，如替换 `el-rate` 组件等。
- 需要全面且统一的图标，推荐使用 [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)。注意使用方式，刚入坑用起来大多图标出不来并且麻烦，主要出现 font-face 和类名上。可以使用 [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)
- 混合应用，有的 native 端 只支持引入字体文件 `.ttf`，所以只支持 unicode 格式的图标。如 weex。
:::