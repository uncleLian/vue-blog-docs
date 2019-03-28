# 更换主题

## 项目主题色
项目的大部分组件都是 Element 组件，所以 Element 的主题色就是项目主题色了。

但我们自定义的元素怎么使用主色调呢？很简单，我们使用全局样式变量就好。请参考[样式-全局变量](/guide/basics/style.html#全局变量)。

更换项目主题色，执行以下步骤即可：
- 更换 Element 主题色
- 修改全局样式变量

#### 更换 Element 主题色

推荐使用[在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)。支持在线预览和直接下载。

将下载好的主题改名为 `theme-chalk`，然后替换掉 `@/assets/css/theme-chalk` 即可。

因为在 `/main.js` 已默认引入主题文件。
```js
import '@/assets/css/theme-chalk/index.css' // 自定义主题颜色
```

更高级的自定义，请前往 [Element 文档](http://element-cn.eleme.io/2.6/#/zh-CN/component/custom-theme)

#### 修改全局样式变量
打开 `@/assets/css/index.styl` 文件，修改 `$appColor`、`$appColorRGB` 变量。

## 动态主题色
本项目实现了[在线主题生成工具](https://elementui.github.io/theme-chalk-preview/#/zh-CN)的动态切换主题色的功能。

代码：`@/components/ThemePicker`。实现原理：


获取项目的主题色 `theme`。
```js
// /store/index.js
// 利用 vuex 管理当前主色调
import variables from '@/assets/css/index.styl'
const state = {
    theme: variables.appColor
}

// @/components/ThemePicker
data() {
    return {
        theme: this.$store.state.theme
    }
}
```

然后 watch `theme`，在回调中执行初始化方法。
```js
watch: {
    theme(newVal, oldVal) {
        this.init_theme(newVal, oldVal)
    }
}
```

#### 初始化方法执行步骤：
- 通过颜色转换，得出新旧主题色的集合。
- 获取所有 `style` 标签，然后过滤。
- 通过正则，将新的主题色集合替换掉旧的主题色集合。
- 获取 `app.css` 文件的内容，同样执行替换，然后创建新的style标签，push到页面上覆盖原来的样式。

获取 `app.css` 是因为项目打包后，大部分的css都压缩进 `app.css`。

::: tip
懒加载的资源未加载时，无法进行动态切换。因为懒加载资源的自身css样式都是加载后才添加的，可以到 `<head>` 里查看新增的 `<style>`。

解决方案：使用初始化就加载的 class 类名。如 Element 样式都是一开始就全部加载。或者使用 vuex 管理的 `theme`，如： 401、404页面的背景色。
:::
