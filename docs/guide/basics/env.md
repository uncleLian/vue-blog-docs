# 多环境
本项目自定义了一个 `sit` 环境，并且创建了 `development` 和 `production` 环境文件，即可操作的环境有：
- development（开发）
- sit（测试）
- production（生产）

## 环境变量
项目的环境变量有 `VUE_APP_ENV_CONFIG` 和 `VUE_APP_BASE_API`，你可以这样直接使用：

#### 根据环境切换请求基础链接
```js
// @/utils/request.js
const baseURL = process.env.VUE_APP_BASE_API
```

#### 判断当前环境
```js
// 默认
if (process.env.NODE_ENV === 'production') {
    // ...
}
// 自定义
if (process.env.VUE_APP_ENV_CONFIG === 'prod'){
    // ...
}

```

::: tip
如果需要修改环境变量，找到根目录下对应的 `/.env.xxx` 文件修改即可。
:::

## 自定义环境
如果需要自定义环境，你可以按以下示例来实现，如创建 `sit` 环境：

- 根目录下创建名为 `.env.sit` 文件，并添加环境变量
```
NODE_ENV = production
VUE_APP_BASE_API = 'http://www.example.com/sit'
```

- 打开 `package.json` 文件，添加 script
```js
// --mode sit 对应刚刚创建的 .env.sit 文件
"build:sit": "vue-cli-service build --mode sit"
```

- 项目中使用
```js
// @/utils/request.js
export const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})
```

- 打包构建
```bash
npm run build:sit
```

打出来的 `dist` 包，请求基础路径就是 `sit` 环境的 `VUE_APP_BASE_API`，同理执行 `npm run build`，基础路径也就是 `production` 环境的 `VUE_APP_BASE_API`。

::: tip 
NODE_ENV = production 是为了打包 sit 环境时，采用 production 模式。
:::

更多配置请参照 [环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)

## 不使用多环境
如果你的项目并不需要多环境功能（无论本地、生产都是同一个请求基础链接）。你可以这样修改：
```js
// @/utils/request.js
export const instance = axios.create({
    baseURL: 'www.example.com'
})
```
本地开发如果存在跨域，请查看 [跨域问题](/guide/basics/request.html#跨域问题)