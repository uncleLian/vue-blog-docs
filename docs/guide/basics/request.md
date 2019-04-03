# 与服务端交互

## 前端请求流程
本项目前端与服务端交互流程是这样的
::: tip 请求流程
1. 组件进行交互
2. 调用统一管理的 api 函数
3. 使用封装的 [request.js](https://github.com/uncleLian/vue-blog/blob/master/src/utils/request.js) 发送请求
4. 获取服务端返回的数据
5. 更新 data
:::

## api管理
从流程2可以看出，为了方便维护，请求函数统一放在 `@/api` 文件夹中，并且一般按照model纬度进行拆分文件，如：
```
- /api
    - login.js
    - list.js
    ...
```

## axios封装
`@/utils/request.js` 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理所有请求。

::: tip 全部功能

1. 统一axios所有请求参数写法（GET、POST、DELETE、PUT等）
2. 可配置是否自动将json参数、Content-type转化为表单形式
3. 统一baseURL
4. 统一超时时间
5. 统一错误处理

:::

[request.js](https://github.com/uncleLian/vue-blog/blob/master/src/utils/request.js) 对外暴露 `request` 方法和 `instance` 对象，并且执行结果都是返回Promise。

### request 方法（推荐）
实现上方功能：1、2

#### 参数
```js
/*
* url       请求URL 
* type      http方法
* data      参数
* isForm    是否表单请求
*/
request(url = '', type = 'GET', data = {}, isForm = false)
```

#### 示例：

@/api/login.js
```js
import { request } from '@/utils/request'
export function getLogin(form) {
    let res = request('/api/login', 'POST', form, true)
    return res
}
```
login.vue
```js
import { getLogin } from '@/api/login'
{
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            getLogin(this.form).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
```

### instance 对象
实现上方功能：3、4、5

`instance` 对象相当于axios对象，用法和axios是一样的，只是在这基础上使用了axios的拦截器功能。
::: tip 拦截流程
1. 发起请求
2. 请求拦截器捕获，do something，释放请求
3. 服务端收到请求、响应并返回数据
4. 响应拦截器捕获，do something，释放响应
:::

从上面流程可以看出，使用拦截器与服务端交互时，可以让我们每次发送请求和响应请求的时候，拦截下来，然后做一些统一处理，例如：
- 发送请求时显示loading提示（移动端常用）。
- 发送请求时在header中携带用户唯一的`token`值以供后端验证用户。
- 响应请求时判断后端返回的code参数做错误处理等。


::: tip
request方法其实也是使用instance对象发起的请求，两者结合实现了上述全部功能。
:::

#### 如果request方法的参数不能满足，你可以引入instance对象去发起请求，写法参照 [axios](https://github.com/axios/axios)，或者自己封装一个方法

#### 示例
```js
// @/api/login.js
import { instance } from '@/utils/request'
export function getLogin(form) {
    let res = instance.post('/login', form)
    return res
}
```

## 跨域问题

跨域是个常见的问题，虽然网上的解决方法一大堆，但这对于初学者来说一定非常迷惑，什么场景下应该使用哪种跨域方法和最好的跨域方法是哪种。这里只简单介绍一下我推荐的跨域解决方案。

1、 [cors](http://www.ruanyifeng.com/blog/2016/04/cors.html) 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说和平时发请求写法上没有任何区别，实现都是后端完成的。该跨域分简单请求和非简单请求，浏览器实现的方法是不一样的，非简单请求的每一次请求浏览器必须先以 OPTIONS 请求方式发送一个预请求，从而获知服务器端对跨源请求所支持 HTTP 方法。在确认服务器允许该跨源请求的情况下，以实际的 HTTP 请求方法发送真正的请求。推荐的原因是只要后端第一次配好了，之后不管有多少接口和项目都可以复用，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。

2、[proxy](https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy)。如果项目部署不存在跨域问题，后端就不用写cors了。但是目前都是前后端分离，前端在开发的时候还是存在跨域问题。解决办法其实很简单，在 dev 开发模式下可以使用 webpack 的 [proxy](https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy)  。其实 [vue-cli](https://cli.vuejs.org/zh/) 已经配置好了[devServer](https://webpack.docschina.org/configuration/dev-server/#devserver)，我们进行修改即可。但这种方法在生产环境是不适用的。在生产环境中需要使用 nginx 反向代理。不管是 proxy 和 nginx 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。

#### proxy配置
```js
// vue-cli.3x -> vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxx.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

// vue-cli.2x -> /config/index.js
module.exports = {
    dev: {
        proxyTable: {
            '/api': {
                target: 'http://xxx.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
```

#### 文章资源
- [跨域方法总结](https://juejin.im/post/5815f4abbf22ec006893b431)
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## Mock Data
本项目所有数据都是使用 [Mock.js](https://github.com/nuysoft/Mock) 本地模拟的。

当你想要移除本地模拟数据，与后端进行联调时，只需要以下2步即可：
- `@/src/main.js` 中删除 `import '@/mock'` 语句
- 删除 `@/src/mock` 文件夹

::: warning 注意
使用 Mock 模拟数据，它会拦截你所配置的url请求并代理到本地生成模拟数据，所以 Network 中并没有发出任何的请求，也就没有显示。
:::