module.exports = {
  base: '/cj-ui/',
  title: 'cj-620 UI',
  description: '菜鸡的UI库',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  themeConfig: {
    logo: "/cj.jpg",
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/cj620/' },
      { text: '欢迎star', link: 'https://github.com/cj620/cj-ui'  },
    ],
    sidebar: [
      { title:'介绍',
        collapsable: false,
        children:[
          '/introduce/',
        ],
      },
      {
        title: '入门',
        collapsable: false,
        children: [ 
        '/install/',
        '/get-started/', ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
            './components/button',
            './components/input',
            './components/layout',
            './components/grid',
            './components/collapse',
            './components/tabs',
            './components/popover',
            './components/toast'
          ]
      }
    ]
  }
}