# 快速上手

::: tip
- 本文环境Windows+node，其他环境请前往[官网](https://v2.vuepress.vuejs.org/zh/) 。
:::

## 依赖环境

- [Node.js v12+](https://nodejs.org/)

## 手动安装

这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

- **步骤1**: 创建并进入一个新目录

- **步骤2**: 初始化项目

<CodeGroup>
  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>


- **步骤3**: 将 VuePress 安装为本地依赖

<CodeGroup>
  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

- **步骤4**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

- **步骤5**: 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

- **步骤6**: 创建你的第一篇文档 docs/README.md

```bash
# Hello VuePress
```

- **步骤7**: 在本地启动服务器来开发你的文档网站

<CodeGroup>
  <CodeGroupItem title="NPM">

```bash
npm run dev
```

  </CodeGroupItem>
</CodeGroup>

  VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新，修改config配置文件后需重新启动服务！！！

现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress [配置](./configuration.md) 相关的内容。