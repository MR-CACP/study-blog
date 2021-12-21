# 配置

## 配置文件

如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 `.vuepress` 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

VuePress 站点必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象。如果你使用 TypeScript ，你可以将其替换为 `.vuepress/config.ts` ，以便让 VuePress 配置得到更好的类型提示。