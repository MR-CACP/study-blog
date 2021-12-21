# 插件使用
## register-components

<NpmBadge package="@vuepress/plugin-register-components" />

根据组件文件或目录自动注册 Vue 组件。

- **步骤1**: 安装

```bash
npm i -D @vuepress/plugin-register-components@next
```

- **步骤2**: 在.vuepress文件夹下新建components文件夹，里面存放组件

- **步骤2**: 参数配置 该目录下匹配 componentsPatterns 的文件会被自动注册为 Vue 组件  
具体配置请前往[官网](https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#%E9%85%8D%E7%BD%AE%E9%A1%B9)查看

```js
const { path } = require('@vuepress/utils')

module.exports = {
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
}
```