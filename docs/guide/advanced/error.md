# 错误处理
一般来说，项目的错误分为以下部分：
- 页面错误
- 请求错误
- 代码错误

## 页面错误
页面级的错误统一使用 `vue-router` 处理。

所有匹配不到的路由都会进入 404 页面，路由设置如下：
```js
{ path: '*', redirect: '/page404' }
```
::: warning 注意
`path: '*'` 要放在路由的最后，否则优先匹配于其他路径。
:::

没有权限的用户会被重定向到 401 页面。权限逻辑代码：`@/utils/permission.js`。

## 请求错误
请求错误使用 `axios` 拦截器统一处理，当请求报错时可以使用 `element-ui` 的 `Message` 组件提示用户。具体可查看 [axios封装](/guide/basics/request.html#axios封装)。

#### 示例：
```js
import { Message } from 'element-ui'
// response
instance.interceptors.response.use(response => {
    const res = response.data
    // 请求200，但业务有自定义报错，如：
    if (res && res.errorMessage) {
        if (res.code === 401) {
            window.alert('登录已过期，请重新登录')
        }
        if (res.code === 404) {
            Message.error('资源已失效')
        }
        return Promise.reject(res)
    }
    return Promise.resolve(res)
}, error => {
    // 请求直接报错
    Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error)
})
```

## 代码错误
代码层面的错误分为 `代码风格` 和 `代码错误`。

#### 代码风格
统一使用 [eslint](https://github.com/eslint/eslint) 检测，使用的是 [standard](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md) 标准。规则配置在 `/package.json`的 `eslintConfig.rules`。

::: tip
`eslint` 也可以检测语法等错误。

关闭 `eslint`，直接移除 `eslintConfig`即可（不推荐）。
:::

#### 代码错误
潜藏在业务逻辑的代码错误，`eslint` 是检测不到的，但是我们可以使用 vue 提供的全局错误处理钩子 [errorHandler](https://cn.vuejs.org/v2/api/#errorHandler) 进行捕捉。

默认只在 `production` 环境开启，开发环境直接看浏览器控制台即可。
```js
// @/utils/errorLog.js
if (process.env.NODE_ENV === 'production') {
    Vue.config.errorHandler = function (error, vm, info) {
        store.commit('SET_LOGS', {
            error,
            vm,
            info,
            url: window.location.href,
            time: new Date()
        })
    }
}
```
错误日志组件代码在：`@/components/ErrorLog`
