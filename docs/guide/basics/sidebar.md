# 侧边栏

侧边栏是中后台产品重要的组成部分，并且需要和路由进行对应。

本项目的侧边栏是根据路由的配置来渲染的，所以你只需要在`@/router/index.js`里面对路由进行配置，侧边栏就自动生成了。大大减轻了手动编辑侧边栏的工作量。当然这样在配置路由的时候需要遵循一些规则。

::: tip 
侧边栏路由都渲染在index（首页）路由之下
:::

## 配置项
该路由配置项是本项目扩展的，其它配置请参照 [vue-router](https://router.vuejs.org/zh/) 官方文档。
```js
// String类型默认为空，其他类型默认值为下方，以下选项都可省略不写
meta: {
    icon: 'iconName',                        // 侧边栏的图标(支持svg、el-icon、iconfont)
    title: 'title'                           // 侧边栏和面包屑的名字（若为空，则显示该路由的name）
    role: 'admin' || ['admin', 'visitor'],   // 访问该路由的用户权限（支持多个权限）
    keep: false,                             // 是否需要缓存（路由name和组件内的name属性相同才会生效，并且缓存的是同一级视口）
    login: false,                            // 是否需要登录
    open: false,                             // 是否展开子菜单（拥有子路由的前提下）
    hidden: false,                           // 是否隐藏（true时不会出现在侧边栏）
    redirectIndex: 0                         // 重定向索引（拥有子路由的前提下）
}
```

## 普通配置
[对应效果](http://poci6sbqi.bkt.clouddn.com/vue-blog.png)
```js
{
    name: 'home',
    path: 'home',
    component: home = () => import('@/pages/home'),
    meta: {
        icon: 'dashboard',
        title: '主页'
    }
}
```

## 嵌套配置
[对应效果]()

```js
const view = () => import('@/layout/view') // 视图组件
{
    name: 'components',
    path: 'components',
    component: view,
    meta: {
        icon: 'el-icon-menu',
        title: '组件',
        redirectIndex: 1 // 当路径为/components，会重定向到/components/sticky，索引0开始
    },
    children: [
        {

            name: 'loading',
            path: 'loading',
            component: () => import('@/pages/loading'),
            meta: {
                icon: 'spinner'
            }
        },
        {
            name: 'sticky',
            path: 'sticky',
            component: () => import('@/pages/sticky'),
            meta: {
                icon: 'thumbtack'
            }
        }
    ]
}
```
::: tip setRedirect 函数
该函数会对含有children配置的路由自动设置重定向的功能，我们只需配置重定向的索引 redirectIndex 即可，大大减轻手动配置重定向路径的工作
:::

## 外链配置
[对应效果]()

path 开头为 `http || mailto: || tel:` 则判断为外链，具体规则 `@/layout/Sidebar/sideLink.vue`
```js
{
    name: 'documents',
    path: 'https://unclelian.github.io/vue-blog-docs',
    meta: {
        icon: 'documentation'
    }
}
```

## 样式配置
如果你想修改侧边栏的宽度、背景色、文本色等，你可以到 `@/assets/css/Sidebar/index` 修改样式变量。
```html
<style module>
:export {
    menuBg: #304156;
    menuText: #f5f5f5;
    menuWidth: 180px;
}
</style>
```