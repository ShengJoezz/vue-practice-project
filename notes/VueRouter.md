
# Vue-Router 知识梳理

## 1. 路由的作用

- **路由**的本质是页面组件和 `URL` 的对应关系。
- 它通过 `URL` 来匹配相应的页面组件，从而实现页面的动态切换。

## 2. 路由器的基本结构

### 2.1 整体逻辑
- 路由器的核心功能是通过 `Vue-Router` 创建路由，并使应用具备页面跳转和组件加载的能力。

### 2.2 关键文件：`src/router/router.ts`

#### 2.2.1 必要的导入
- 创建路由器需要导入 `vue-router` 库，并且可能需要导入一些相关的组件。
  
  ```javascript
  import { createRouter, createWebHistory } from 'vue-router'
  import Home from '@/views/Home.vue'  // 示例组件

#### 2.2.2 使用 `createRouter` 创建路由器

- 利用 `createRouter` 函数创建一个新的路由器实例。该函数接受一个配置对象作为参数。
  
  ```javascript
  const router = createRouter({
    history: createWebHistory(),  // 路由模式
    routes: [  // routes 是一个数组
      { path: '/home', component: Home },  // 每个路由规则是一个对象
      { path: '/about', component: About },
      { path: '/contact', component: Contact }
    ]
  })


  - **`history`**: 指定路由的工作模式，常见的有 `createWebHistory()` 和 `createWebHashHistory()`。


    - `createWebHistory()`:


      - URL 更加美观，没有 `#` 符号，符合传统的 URL 结构。例如：`http://example.com/about`。   
      - **需要服务器的额外配置**：因为用户直接访问 `http://example.com/about` 时，服务器必须正确处理该请求并返回应用的主页面，而不是返回 404 错误。这意味着，当用户刷新页面时，服务器要能处理这个路径，并返回应用的入口文件（通常是 `index.html`）。
    
    - `createWebHashHistory()`:


      - 基于 URL 的哈希（`#`）部分。哈希符号后面的内容不会被发送到服务器，只会在浏览器内部解析。因此，改变哈希值不会导致页面刷新。
    
        例如：`http://example.com/#/about`，浏览器只会向服务器请求 `http://example.com`，而 `#/about` 只在前端解析。
      - 不需要服务器的额外配置，因为哈希值不会被服务器解析。

  - **`routes`**: 路由配置数组，包含多个路由规则对象。每个路由规则对象通常包含：
    - `path`: 路径，作为该路由的 URL 片段。
    - `component`: 对应的组件，渲染在与路径匹配的页面上。
    - 可选的其他属性，如 `name`, `props`, `children` 等。

  注意：`routes` 数组中的每一项都是一个对象，而不是嵌套数组。

#### 2.2.3 路由器的导出

- 路由器创建完毕后，通过 `export default` 语句将其暴露出来，以便在其他文件中使用。

  ```javascript
  export default router

## 3. 主入口文件 `src/main.ts` 中引入路由器

- 在 `main.ts` 中，通常会创建并挂载 Vue 应用。为了启用路由功能，需将路由器与应用关联起来。

### 3.1 常规的应用创建
- 原本的应用创建和挂载部分代码可能是这样的：

  ```javascript
  import { createApp } from 'vue'
  import App from './App.vue'
  
  createApp(App).mount('#app')

### 3.2 添加路由器到应用中

- 要把路由器添加到应用中，应该使用 `app.use()` 方法来注册路由器。
  
  ```javascript
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router'
  
  const app = createApp(App)  // 创建应用实例
  app.use(router)             // 使用路由器
  app.mount('#app')           // 挂载应用

## 4. 在 `src/App.vue` 中设置路由出口

### 4.1 路由出口的作用
- `App.vue` 是应用的布局组件，通常需要为路由提供一个出口，也就是页面的主要内容区域，来放置根据 `URL` 变化而动态切换的组件。

### 4.2 必要的导入
- 使用 `RouterLink` 和 `RouterView` 来分别处理路由跳转和路由展示。

  ```vue
  <script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  </script>

### 4.3 路由链接的使用
- `RouterLink` 用于创建导航链接，点击后可以跳转到指定的路由。他实际上也是给某个客观因素一个新的属性。

  ```vue
  <template>
    <nav>
      <RouterLink to="/home">首页</RouterLink>
    </nav>
  </template>
  ```
  
  这里我们对`to`的用法进行两种方法：
  
  * <RouterLink to='/home'>即利用`to='url'`的方式
  * `<RouterLink :to={path : '/home'}>`，即利用`{}`的方式，除此以外还可以利用`<RouterLink :to={name : 'HOME'}>`等方式，也就是利用表达式会很自由。

### 4.4 路由视图的使用
- `RouterView` 是一个占位符组件，渲染匹配当前路径的组件。

  ```vue
  <template>
    <RouterView />
  </template>
  ```

## 5.子路由(嵌套路由)的使用

### 5.1背景介绍



## . 小结

- **Vue-Router** 是 Vue.js 应用的核心部分，用于管理页面导航和组件加载。其主要功能和操作流程如下：
  1. **创建路由器**: 通过 `createRouter` 创建路由器，并定义路径和组件的映射关系。
  2. **注册路由器**: 在 `main.ts` 中，将路由器与 Vue 应用实例关联。
  3. **设置路由出口**: 在 `App.vue` 中使用 `RouterView` 作为路由出口，显示匹配的路由组件。
  4. **路由导航**: 使用 `RouterLink` 实现页面跳转，改变 `URL` 并切换相应的组件。

- 通过这些步骤，Vue 应用能够根据 `URL` 的变化动态加载和展示不同的组件，实现单页面应用（SPA）的核心功能。

