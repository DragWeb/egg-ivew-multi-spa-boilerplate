# egg-vue-webpack-boilerplate

基于 Egg + Vue + Webpack4 单页面服务端渲染同构工程骨架项目.

## 版本

- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,  Node 6.x.x 版本请见 [Egg 1.0 + Node6分支](https://github.com/hubcarl/egg-vue-webpack-boilerplate/tree/node6)
- Webpack 版本: ^4.x.x, 对应 `easywebpack-vue` 版本为 ^4.x.x
- Vue 版本: ^2.5.0

## 文档

- http://hubcarl.github.io/easywebpack/vue/rule
- https://zhuanlan.zhihu.com/easywebpack


## 1.特性

- 支持 server 和 client 端代码修改, webpack 时时编译和热更新, `npm start` 一键启动应用

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 支持开发环境, 测试环境，正式环境 webpack 编译
 

## 2.依赖

- [easywebpack](https://github.com/hubcarl/easywebpack) ^4.x.x
- [easywebpack-vue](https://github.com/hubcarl/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/hubcarl/egg-view-vue-ssr) ^3.0.2
- [egg-webpack](https://github.com/hubcarl/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/hubcarl/egg-webpack-vue) ^2.0.0


## 3. 使用

#### 3.1 安装cli(非必需)

```bash
npm install easywebpack-cli -g
```

^3.5.0 开始， `easywebpack-cli` 已内置 `devDependencies` 中, 无需安装。如果你需要在命令行使用 `easy` 命令, 可以单独全局安装。

#### 3.2 安装依赖

```bash
npm install
```


#### 3.3 启动应用

##### 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

![npm start启动](https://github.com/hubcarl/egg-vue-webpack-boilerplate/blob/feature/green/spa/docs/images/webpack-build.png)


##### 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```

## 4. 目录结构

```bash
.
├── README.md
├── app
│   ├── controller
│   │   ├── app.js          // spa
│   │   ├── home.js
│   │   └── spa.js          // spa
│   ├── middleware
│   │   └── access.js
│   ├── mocks
│   │   └── article
│   │       └── list.js
│   ├── router.js
│   ├── view
│   └── web
│       ├── asset
│       │   ├── css
│       │   │   ├── app.css
│       │   │   ├── global.css
│       │   │   └── normalize.css
│       │   └── images
│       │       ├── favicon.ico
│       │       ├── headbg.jpg
│       │       ├── loading.gif
│       │       ├── logo-min.png
│       │       └── logo.png
│       ├── component                           // spa框架组件
│       │   └── layout
│       │       ├── appss
│       │       │   ├── content
│       │       │   │   ├── content.css
│       │       │   │   └── content.vue
│       │       │   ├── footer
│       │       │   │   ├── footer.css
│       │       │   │   └── footer.vue
│       │       │   ├── header
│       │       │   │   ├── header.css
│       │       │   │   └── header.vue
│       │       │   ├── index.js
│       │       │   ├── main.vue
│       │       │   └── nav
│       │       │       ├── nav.scss
│       │       │       └── nav.vue
│       │       ├── content
│       │       │   ├── content.css
│       │       │   └── content.vue
│       │       ├── error-page
│       │       │   ├── 403.less
│       │       │   ├── 403.vue
│       │       │   ├── 404.less
│       │       │   ├── 404.vue
│       │       │   ├── 500.less
│       │       │   └── 500.vue
│       │       ├── footer
│       │       │   ├── footer.css
│       │       │   └── footer.vue
│       │       ├── header
│       │       │   ├── header.css
│       │       │   └── header.vue
│       │       ├── index.js
│       │       ├── main.vue
│       │       └── nav
│       │           ├── nav.scss
│       │           └── nav.vue
│       ├── framework
│       │   ├── utils
│       │   │   └── utils.js
│       │   └── vue
│       │       ├── app.js
│       │       ├── component
│       │       │   └── index.js
│       │       ├── directive
│       │       │   └── index.js
│       │       └── filter
│       │           └── index.js
│       ├── page
│       │   ├── app                     // spa目录
│       │   │   ├── app.js
│       │   │   ├── app.vue
│       │   │   ├── router
│       │   │   │   ├── index.js
│       │   │   │   └── router.js
│       │   │   └── views
│       │   │       ├── detail.vue
│       │   │       ├── error-page
│       │   │       │   ├── 403.less
│       │   │       │   ├── 403.vue
│       │   │       │   ├── 404.less
│       │   │       │   ├── 404.vue
│       │   │       │   ├── 500.less
│       │   │       │   └── 500.vue
│       │   │       └── list.vue
│       │   ├── home
│       │   │   └── home.vue
│       │   └── spa                     // spa目录
│       │       ├── app.js
│       │       ├── app.vue
│       │       ├── router
│       │       │   ├── index.js
│       │       │   └── router.js
│       │       └── views
│       │           ├── detail.vue
│       │           ├── error-page
│       │           │   ├── 403.less
│       │           │   ├── 403.vue
│       │           │   ├── 404.less
│       │           │   ├── 404.vue
│       │           │   ├── 500.less
│       │           │   └── 500.vue
│       │           └── list.vue
│       ├── store
│       │   ├── index.js
│       │   └── modules
│       │       ├── app.js
│       │       └── user.js
│       └── view
│           └── layout.html
├── config
│   ├── config.default.js
│   ├── config.local.js
│   ├── config.prod.js
│   ├── config.test.js
│   ├── manifest.json
│   ├── plugin.js
│   └── plugin.local.js
├── docs
├── index.js
├── logs
│   ├── common-error.log
│   ├── egg-web.log
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── run
│   ├── agent_config.json
│   ├── agent_config_meta.json
│   ├── application_config.json
│   ├── application_config_meta.json
│   └── router.json
└── webpack.config.js                   // 注意webpack entry配置

```

