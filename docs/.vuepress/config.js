module.exports = {
  // title: '记录生活的美好',
  title: 'Deson Notes',
  description: '这里有很多很多宝藏',
  // base: '/my-notes/',
  dest: 'dist',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        title: '技术', // 必要的
        path: '/technology', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/technology/fed/', '/technology/end/'],
      },
      {
        title: '读书', // 必要的
        path: '/readbook', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/readbook/bookList/', '/readbook/bookNotes/'],
      },
      {
        title: '职场', // 必要的
        path: '/workplace', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/workplace/biography/', '/workplace/rambling/'],
      },
      {
        title: '沟通', // 必要的
        path: '/quotations', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/quotations/famousQuotes/'],
      },
    ],
  },
  plugins: [
    '@vuepress/back-to-top', // 回到顶部
    '@vuepress/nprogress', // 页面加载进度
    '@vuepress/medium-zoom', // 图片预览
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容',
          buttonText: '刷新',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/128.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/128.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
      },
    ],
  ],
};
