const title = require('../../package.json').name
module.exports = {
    title: title,
    description: 'vue admin',
    sidebarDepth: 3,
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: '生态系统',
                items: [
                    {
                        text: '项目',
                        items: [
                            { text: 'vue-blog', link: 'https://github.com/uncleLian/vue-blog' },
                            { text: 'vue-blog-template', link: 'https://github.com/uncleLian/vueBlog-template' }
                        ]
                    },
                    {
                        text: '插件',
                        items: [
                            { text: 'vue-position-sticky', link: 'https://github.com/uncleLian/vue-position-sticky' },
                            { text: 'vue-backtop', link: 'https://github.com/uncleLian/vue-backTop' },
                            { text: 'vue-num-to', link: 'https://github.com/uncleLian/vue-num-to' },
                            { text: 'vue-clipboard', link: 'https://github.com/uncleLian/vue-clipboard-pack' }
                        ]
                    }
                ]
            },
            {
                text: '更新记录',
                link: 'https://github.com/uncleLian/vue-blog/releases'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/uncleLian/vue-blog'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guide/'
                    ]
                },
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        '/guide/basics/sidebar',
                        '/guide/basics/request',
                        '/guide/basics/style',
                        '/guide/basics/icon',
                        '/guide/basics/env',
                        '/guide/basics/build'
                    ]
                },
                {
                    title: '进阶',
                    collapsable: false,
                    children: [
                        '/guide/advanced/error',
                        '/guide/advanced/permission',
                        '/guide/advanced/theme',
                        '/guide/advanced/i18n'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        '/guide/other/faq'
                    ]
                }
            ]
        }
    }
}