# 疑难杂症

## vue3 router-view keep-alive include 不生效问题

vue3 的 router-view keep-alive写法:

```vue
 <router-view v-slot="{ Component, route }">
    <keep-alive :include="includeList">
      <component
          :is="Component"
          :key="route.name"
          v-if="includeList.includes(route.name)"
      />
    </keep-alive>
    <component
        :is="Component"
        :key="route.name"
        v-if="(!includeList.includes(route.name) && !route.meta.keepAlive)"
    />
</router-view>
```
1. 首先确保`include`传的值为官方文档中的三种形式：[keep-alive](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive)  
2. 确保`<component>`对应的组件里面定义了`name(<script setup>`语法糖无法定义`name`，需改成非语法糖形式，自己取舍吧)

## vue3 transiton警告

由于vue3 template不用根标签报错,添加根标签即可

