(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("本项目前端与服务端交互流程是这样的")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("请求流程")]),t._v(" "),a("ol",[a("li",[t._v("组件进行交互")]),t._v(" "),a("li",[t._v("调用统一管理的 api 函数")]),t._v(" "),a("li",[t._v("使用封装的 "),a("a",{attrs:{href:"https://github.com/uncleLian/vue-blog/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),a("OutboundLink")],1),t._v(" 发送请求")]),t._v(" "),a("li",[t._v("获取服务端返回的数据")]),t._v(" "),a("li",[t._v("更新 data")])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[a("code",[t._v("@/utils/request.js")]),t._v(" 是基于 "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v(" 的封装，便于统一处理所有请求。")]),t._v(" "),t._m(6),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/uncleLian/vue-blog/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),a("OutboundLink")],1),t._v(" 对外暴露 "),a("code",[t._v("request")]),t._v(" 方法和 "),a("code",[t._v("instance")]),t._v(" 对象，并且执行结果都是返回Promise。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("实现上方功能：1、2")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("@/api/login.js")]),t._v(" "),t._m(11),a("p",[t._v("login.vue")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("实现上方功能：3、4、5")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("从上面流程可以看出，使用拦截器与服务端交互时，可以让我们每次发送请求和响应请求的时候，拦截下来，然后做一些统一处理，例如：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("h4",{attrs:{id:"如果request方法的参数不能满足，你可以引入instance对象去发起请求，写法参照-axios，或者自己封装一个方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果request方法的参数不能满足，你可以引入instance对象去发起请求，写法参照-axios，或者自己封装一个方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 如果request方法的参数不能满足，你可以引入instance对象去发起请求，写法参照 "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v("，或者自己封装一个方法")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("跨域是个常见的问题，虽然网上的解决方法一大堆，但这对于初学者来说一定非常迷惑，什么场景下应该使用哪种跨域方法和最好的跨域方法是哪种。这里只简单介绍一下我推荐的跨域解决方案。")]),t._v(" "),a("p",[t._v("1、 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cors"),a("OutboundLink")],1),t._v(" 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说和平时发请求写法上没有任何区别，实现都是后端完成的。该跨域分简单请求和非简单请求，浏览器实现的方法是不一样的，非简单请求的每一次请求浏览器必须先以 OPTIONS 请求方式发送一个预请求，从而获知服务器端对跨源请求所支持 HTTP 方法。在确认服务器允许该跨源请求的情况下，以实际的 HTTP 请求方法发送真正的请求。推荐的原因是只要后端第一次配好了，之后不管有多少接口和项目都可以复用，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。")]),t._v(" "),a("p",[t._v("2、"),a("a",{attrs:{href:"https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy"),a("OutboundLink")],1),t._v("。如果项目部署不存在跨域问题，后端就不用写cors了。但是目前都是前后端分离，前端在开发的时候还是存在跨域问题。解决办法其实很简单，在 dev 开发模式下可以使用 webpack 的 "),a("a",{attrs:{href:"https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy"),a("OutboundLink")],1),t._v("  。其实 "),a("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),a("OutboundLink")],1),t._v(" 已经配置好了"),a("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("devServer"),a("OutboundLink")],1),t._v("，我们进行修改即可。但这种方法在生产环境是不适用的。在生产环境中需要使用 nginx 反向代理。不管是 proxy 和 nginx 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5815f4abbf22ec006893b431",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域方法总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器同源政策及其规避方法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域资源共享 CORS 详解"),a("OutboundLink")],1)])]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("本项目所有数据都是使用 "),a("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mock.js"),a("OutboundLink")],1),t._v(" 本地模拟的。")]),t._v(" "),a("p",[t._v("当你想要移除本地模拟数据，与后端进行联调时，只需要以下2步即可：")]),t._v(" "),t._m(25),t._v(" "),t._m(26)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"与服务端交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与服务端交互","aria-hidden":"true"}},[this._v("#")]),this._v(" 与服务端交互")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前端请求流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端请求流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端请求流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api管理","aria-hidden":"true"}},[this._v("#")]),this._v(" api管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从流程2可以看出，为了方便维护，请求函数统一放在 "),s("code",[this._v("@/api")]),this._v(" 文件夹中，并且一般按照model纬度进行拆分文件，如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("- /api\n    - login.js\n    - list.js\n    ...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"axios封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios封装","aria-hidden":"true"}},[this._v("#")]),this._v(" axios封装")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("全部功能")]),t._v(" "),a("ol",[a("li",[t._v("统一axios所有请求参数写法（GET、POST、DELETE、PUT等）")]),t._v(" "),a("li",[t._v("可配置是否自动将json参数、Content-type转化为表单形式")]),t._v(" "),a("li",[t._v("统一baseURL")]),t._v(" "),a("li",[t._v("统一超时时间")]),t._v(" "),a("li",[t._v("统一错误处理")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"request-方法（推荐）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-方法（推荐）","aria-hidden":"true"}},[this._v("#")]),this._v(" request 方法（推荐）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* url       请求URL \n* type      http方法\n* data      参数\n* isForm    是否表单请求\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isForm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"示例："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例：","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/request'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getLogin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/api/login'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"instance-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" instance 对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("instance")]),this._v(" 对象相当于axios对象，用法和axios是一样的，只是在这基础上使用了axios的拦截器功能。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("拦截流程")]),t._v(" "),a("ol",[a("li",[t._v("发起请求")]),t._v(" "),a("li",[t._v("请求拦截器捕获，\bdo something，释放请求")]),t._v(" "),a("li",[t._v("服务端收到请求、响应并返回数据")]),t._v(" "),a("li",[t._v("响应拦截器捕获，do something，释放响应")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("发送请求时显示loading提示（移动端常用）。")]),this._v(" "),s("li",[this._v("发送请求时在header中携带用户唯一的"),s("code",[this._v("token")]),this._v("值以供后端验证用户。")]),this._v(" "),s("li",[this._v("响应请求时判断后端返回的code参数做错误处理等。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("request方法其实也是使用instance对象发起的请求，两者结合实现了上述全部功能。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @/api/login.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/request'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 跨域问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"proxy配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy配置","aria-hidden":"true"}},[this._v("#")]),this._v(" proxy配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-cli.3x -> vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    devServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                pathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-cli.2x -> /config/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxyTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                pathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"文章资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 文章资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mock-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Mock Data")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("@/src/main.js")]),t._v(" 中删除 "),a("code",[t._v("import '@/mock'")]),t._v(" 语句")]),t._v(" "),a("li",[t._v("删除 "),a("code",[t._v("@/src/mock")]),t._v(" 文件夹")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("使用 Mock 模拟数据，它会拦截你所配置的url请求并代理到本地生成模拟数据，所以 Network 中并没有发出任何的请求，也就没有显示。")])])}],!1,null,null,null);s.default=e.exports}}]);