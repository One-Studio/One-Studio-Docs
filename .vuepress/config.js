module.exports = {

    title: 'One Studio', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    theme: 'antdocs', //主题
    description: 'One Studio Dev Docs', // meta 中的描述文字，用于SEO
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.png',
            },
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],


    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true,
    // 主题配置
    themeConfig: {
        backToTop: true,
        smoothScroll: true,
        logo: '/logo.png', //网页顶端导航栏左上角的图标
        lastUpdated: '上次更新',


        //顶部导航栏
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '论坛',
                link: 'https://hlae.site',
            },
            {
                text: 'Github',
                link: 'https://github.com/One-Studio',
            },
        ],

        //侧边栏配置
        sidebar: [
            {
                title: '小组介绍',
                collapsable: false,
                children: [
                    ['/guide/about.md', '简介'],
                ]
            },
            {
                title: '路线图',
                collapsable: false,
                children: [
                    ['/roadmap/schedule.md', '总体进度'],
                    ['/roadmap/roadmap.md', '路线图'],
                    ['/roadmap/ideaPool.md', 'idea汇总']
                ]
            },
            {
                title: '通用框架',
                collapsable: false,
                children: [
                    ['/framework/doc.md', '通用开发文档'],
                    ['/framework/components.md', '通用项目组件']
                ],
            },
            {
                title: '项目',
                collapsable: false,
                children: [
                    //项目md文档不要用readme.md，否则报错
                    {
                        title: 'CSGO HUD Generator',
                        children: [
                            //['/projects/CSGO-Hud-Generator/readme.md', '项目说明'],
                            ['/projects/CSGO-Hud-Generator/roadmap.md', '路线图'],
                            ['/projects/CSGO-Hud-Generator/components.md', '组件']
                        ],
                    },
                    {
                        title: 'HLAE Studio',
                        children: [
                            //['/projects/HLAE-Studio/readme.md', '项目说明'],
                            ['/projects/HLAE-Studio/roadmap.md', '路线图']
                        ],
                    }
                ]
            },
        ],
    },

}
