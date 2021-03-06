import { path } from '@vuepress/utils'

module.exports = {
  lang: 'zh-CN',
  title: '熊猫先生的学习之旅',
  description: '熊猫先生的学习之旅',

  themeConfig: {
    logo: '/logo.png',
    navbar: [
      { text: "主页", link: "/" },
      { text: "前端基础", link: '/base/' },
      { 
        text: "vue",
        children: [
          '/vue/question.md'
        ]
      },
      { 
        text: "vuepress",
        children: [
          '/vuepress/start.md',
          '/vuepress/config.md',
          '/vuepress/plugin.md'
        ]
      },
      { 
        text: "NodeJs",
        children: [
          {
            text: 'MongoDB',
            children: [
              '/nodejs/mongodb/introduction.md',
              '/nodejs/mongodb/shell.md',
              '/nodejs/mongodb/security.md',
              '/nodejs/mongodb/curd.md',
              '/nodejs/mongodb/indexes.md',
              '/nodejs/mongodb/aggregation',
              '/nodejs/mongodb/backups'
            ],
          }
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
      ],
      '/vue/': [
        {
          text: 'vue',
          children: [
            '/vue/question.md'
          ]
        }
      ],
      '/nodejs/': [
        {
          text: 'MongoDB',
          children: [
            '/nodejs/mongodb/introduction.md',
            '/nodejs/mongodb/shell.md',
            '/nodejs/mongodb/security.md',
            '/nodejs/mongodb/curd.md',
            '/nodejs/mongodb/indexes.md',
            '/nodejs/mongodb/aggregation',
            '/nodejs/mongodb/backups'
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