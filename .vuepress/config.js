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
        link: 'https://github.com/advancedfx/advancedfx',
      },
    ],

    sidebar: {
      '/pages/':[
        {
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
              ['home.md', '简介'],
          ]
      },
      ]
    }
  },
}
