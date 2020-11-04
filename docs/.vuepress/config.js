module.exports = {
  // title: '记录生活的美好',
  title: '',
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
        children: ['/workplace/biography/'],
      },
      {
        title: '语录', // 必要的
        path: '/quotations', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/quotations/famousQuotes/'],
      },
    ],
  },
};
