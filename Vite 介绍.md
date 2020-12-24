# Vite 介绍

基于浏览器ES module的开发方式，省略打包步骤的开发服务器。

特点：

- 1.快速的冷启动
- 2.即时的模块热更新
- 3.按需编译
- 4.开发环境使用浏览器ES module模式，加快启动、编译过程
- 5.使用koa作为http服务，拦截请求实时编译。对node_modules引用，一律代理为@/modules/**
- 6.使用rollup打包build

使用方式：

```js
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

参考文档：
- [原理介绍](https://www.zhihu.com/question/394062839/answer/1496127786) - small



# script type module

特点：

- 1.浏览器支持import，export语法
- 2.动态加载

使用：

```html

	<script type="module" src="/src/main.js"></script>

```
```js

	import { three } from "./m_3.js";
	
	setTimeout(async () => {
		let { two } = await import('./m_2.js');
  		console.log(two)
	}, 3000);

```

参考文献：
- [JavaScript modules](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)