import { path } from '@vuepress/utils'

module.exports = {
  lang: 'zh-CN',
  title: '熊猫先生的学习之旅',
  description: '熊猫先生的学习之旅',

  themeConfig: {
    logo: '/logo.png',
    navbar: [
      { text: "主页", link: "/" },
      { 
        text: "vuepress",
        children: [
          '/vuepress/start.md',
          '/vuepress/config.md',
          '/vuepress/plugin.md'
        ]
      }
    ],
    sidebar: {
      '/vuepress/': [
        {
          text: 'VuePress',
          children: [
            '/vuepress/start.md',
            '/vuepress/config.md',
            '/vuepress/plugin.md'
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/zh/': {
            placeholder:'搜索'
          }
        }
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        components: {
          NpmBadge: path.resolve(__dirname, './components/NpmBadge.vue'),
        }
      }
    ]
  ]
}