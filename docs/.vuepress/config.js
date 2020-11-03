module.exports = {
  title: '',
  description: 'Just playing around',
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
        title: '前端', // 必要的
        path: '/home', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/home/one', '/home/tow'],
      },
      {
        title: '读书', // 必要的
        path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/'],
      },
    ],
  },
};
