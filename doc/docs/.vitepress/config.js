module.exports = {
    // 网站标题
    title: '基于element-plus二次封装组件',
    // 部署的基础路径
    base: '/',
    // 配置网站的header 标签
    head: [

    ],
    // 主体配色
    themeConfig: {
        // 头部导航
        nav: [
            {
                // 导航名称
                text: '首页',
                link: '/'
            },
            {
                text: 'github',
                link: 'https://github.com/missxiaolin/vue3_ele',
                target: '_blank'
            }
        ],
        // 侧边导航
        sidebar: [
            {
                text: '介绍',
                link: '/intro/'
            }, {
                text: '快速上手',
                link: '/intro/'
            }, {
                text: '图标选择器',
                link: '/intro/'
            }, {
                text: '省市区选择',
                link: '/intro/'
            }, {
                text: '趋势标记',
                link: '/intro/'
            }, {
                text: '时间选择',
                link: '/intro/'
            }, {
                text: '通知菜单',
                link: '/intro/'
            }
        ]
    }
}