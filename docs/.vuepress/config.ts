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
        text: "vue学习",
        children: [
          {
            text: 'VuePress',
            children: [
              '/vue/vuepress.md',
              '/vue/config.md',
              '/vue/plugin.md'
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/vue/': [
        {
          text: 'VuePress',
          children: [
            '/vue/vuepress.md',
            '/vue/config.md',
            '/vue/plugin.md'
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