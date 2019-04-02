const nav = require('./nav')
const sidebar = require('./sidebar')
const title = require('../../package.json').name

module.exports = {
    title: title,
    description: '前端管理后台解决方案',
    base: `/${require('../../package.json').name}/`,
    dest: 'dist',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ]
    ],
    sidebarDepth: 3,
    themeConfig: {
        docsRepo: 'https://github.com/uncleLian/vueBlog-docs',
        docsDir: 'docs',
        editLinks: true,
        nav,
        sidebar
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public'
            }
        }
    }
}
