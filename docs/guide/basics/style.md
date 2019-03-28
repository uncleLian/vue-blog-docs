# 样式

本项目使用的css预处理器是 [stylus](https://github.com/stylus/stylus)，有其他预处理器的需求可以自行安装相应loader。

## 重置样式
浏览器的对于 html 的默认样式都有各自的实现，所以我们一般开发前都需要 `reset` 样式，以保证在不同的浏览器上有一致的体验，本项目使用的是 [normalize.css](https://github.com/necolas/normalize.css)。

#### 安装
```bash
npm install normalize.css
```
#### 引入
```js
// main.js
import 'normalize.css'
```

::: warning 注意
请确保作为第一个样式文件引入，不然有可能会覆盖自己定义的样式。
:::

## 全局样式
顾名思义，这是覆盖整个项目的样式，比如覆盖 Element 样式，或者自己定义一个 class 或 id，全局使用。

本项目全局样式定义在 `@/assets/css/global.styl`

::: tip
全局样式没有什么约定，可自行修改，也可按 model 维度划分，最后在 `main.js` 引入即可。
:::

## 全局变量
使用css预处理器，我们就可以定义样式变量了，例如这样：
```html
<style lang="stylus">
$appColor = #42b983
.my-class {
    color: $appColor
}
<style>
```
但是当某个变量在很多.vue文件中都要用到，我们不可能在每个.vue文件都去定义这个变量。这会非常麻烦，并且根本无法管理和维护。要解决这个问题，我们只需修改对应css预处理器的 loader 规则就好了。

#### stylus 示例
vue-cli3.x -> vue.config.js
```js
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                // 定义样式变量的文件
                import: [resolve('./src/assets/css/index.styl')]
            }
        }
    }
}
```

vue-cli2.x -> /build/utils/js
```js
function generateLoaders () {
    // ...
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus', {
            // 定义样式变量的文件
            import: path.resolve(__dirname, '../src/assets/css/index.styl')
        }),
        styl: generateLoaders('stylus')
    }
}
```

这样我们就可以在任意.vue文件中直接使用该index.styl文件定义好的变量。

::: warning 注意
在 `<style>` 标签里使用样式变量，必须在标签上写上 `lang="stylus"`，否则不会使用对应的loader进行解析。
:::

::: tip 小技巧
样式变量可以利用 webpack 的 :export 来导出，这样我们就可以在.vue 或者 .js文件中使用。
:::

## 样式污染
在样式开发中，我们经常会碰到以下2个问题：

- 全局污染
CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会覆盖前面的。
- 选择器复杂
为了避免上面的问题，我们普遍采用的解决方案是采用BEM风格写法，不过这只能解决我们这个大问题的很小一部分。随着应用的增长，类名变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。

但我们非常幸运，社区已经开发出了一些解决方案，他们可以帮我们处理这些问题。说不定你已经听说过了 [Styled Components](https://github.com/styled-components/styled-components)、[JSS](https://github.com/cssinjs/jss)等 —— 这些只是众多流行的工具中的其中几个。而 vue 内置了两个很好的解决方案：[Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html) 和 [CSS Modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html) 。

### Scoped CSS
[Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html) 只要在 `<style>` 标签上加上 `scoped` 就会在当前组件生效，非常简单！
```css
/* 编译前 */
.example {
  color: red;
}

/* 编译后 */
.example[data-v-b73aec10] {
  color: red;
}
```
使用 `scoped` 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 Scoped CSS 和子组件的 Scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

::: tip
还有一些情况是我们需要对子组件的深层结构设置样式，我们可以使用[深度作用选择器](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8) —— 这种做法并不受推荐且应该避免，因为子组件的样式会被父组件覆盖，即使是孙节点，这也就失去了组件的封装效果，但这对于覆盖第三方插件样式非常有用。不过你还要留意一下 [Scoped CSS 痛点](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E5%8A%A8%E6%80%81%E7%94%9F%E6%88%90%E7%9A%84%E5%86%85%E5%AE%B9)
:::

### CSS Modules
[CSS Modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html) 可以作为 Scoped CSS 的一个替代方案。vue-cli 已默认开启，使用方法请参照 [vue-loader](https://vue-loader.vuejs.org/zh/guide/css-modules.html) 文档，这里不做重复说明。

示例可以参照 `@/layout/Sidebar/index`

看过文档后，可以看出 CSS Modules 并没有 Scoped CSS 痛点，其次样式绑定变成了显式，我们拥有了彻底的控制权。

### 总结
其实两种方案都非常简单、易用，在某种程度上解决的是同样的问题。 那么该选择哪种呢？

scoped 样式的使用不需要额外的知识，给人舒适的感觉。它所存在的局限，也正是它的使用简单的原因。它可以用于支持小型到中型的应用。

在更大的应用或更复杂的场景中，这个时候，对于 CSS 的运用，我们就会希望它更加显式，拥有更多的控制权。虽然在模板中大量使用 $style 看起来并不那么优雅，但却更加安全和灵活，为此我们只需付出微小的代价。还有一个好处就是我们可以用 JS 获取到我们定义的一些变量（如色彩值），这样我们就无需手动保持其在多个文件中同步。

::: tip
CSS Modules 样式变量显式 props ，对于封装插件非常有用，如插件里有多个组件公用这个样式变量。
:::
