# 权限验证
本项目是根据`用户角色`来进行权限管理的。

验证范围：
- 页面级
- 按钮级

验证方式：
- 路由拦截
- 指令
- JS方法

## 权限逻辑
登录成功后，获取用户信息会返回该用户的`用户角色`。页面级权限是通过路由钩子拦截，进行权限验证，决定是否通过。按钮级权限是通过渲染节点时，进行权限验证，决定是否渲染。

::: tip
- 页面级代码：`@/utils/permission.js`，自定义修改时，记得 `next()` 释放钩子。
- 按钮级代码： `@/directive/permission/permission.js`
:::

## 使用方法
#### 页面权限
页面级权限在路由配置的时候配置即可。具体查看[侧边栏配置项](/guide/basics/sidebar.html#配置项)

#### 指令
```html
<div v-permission="['admin']"></div>

<div v-permission="['admin, visitor']"></div>
```
#### JS方法
```html
<div v-if="$checkPermission['admin']"></div>
```
或
```js
getArticle() {
    let haspermission = this.$checkPermission(['admin'])
    if (haspermission) {
        // ....
    } else {
        // ...
    }
}
```

::: tip 注意
一些动态渲染dom的组件无法使用指令来完成，请使用JS方法。如：Element 的 `el-tab` 组件。
:::

## 后话
本项目路由配置是预设写死在前端的，所以页面权限并不能动态配置。动态配置也就是将路由配置交给后端存储管理。

很多公司业务场景是动态配置的，其实两者验证原理是相同的，只是如何获取这份路由表的方式不同。

实现动态配置需要以下额外逻辑：
- 登录成功后，根据`用户角色`去向后端请求可访问的路由表。
- 前端根据路由表映射到页面组件。
- 然后 `addRoutes` 动态挂载到 `vue-router` 上。

本项目暂不实现，可以自行修改。以及本项目只涉及前端权限验证的场景。
