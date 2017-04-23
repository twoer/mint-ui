# Mint UI 适配 REM、DPR

### 适配方案
* 前端页面适配基于淘宝移动端自适应方案 [lib-flexible](https://github.com/amfe/lib-flexible)
* Mint UI 的 px2rem(包含字体 dpr 适配）基于 [postcss-px2rem-dpr](https://www.npmjs.com/package/postcss-px2rem-dpr)

### 修改内容
* mint-ui 内容没有做任何更改
* 仅修改了 build 中的 cooking.demo.js、cooking.common.js cooking.component.js 三个 build 配置文件
* 大家可以根据自身需求调整 这三个文件中的 `px2remConfig` 配置项

### 遇到的坑
虽然最终修改的内容很少且不影响 mint-ui 后期更新，但是在整个过程中遇到了不少问题，  
比如最开始考虑过手动修改 vue 组件里面的 px 和 font，这种方案工作量大且不利于后续更新， 

#### 后来开始研究 mint-ui 项目，发现如下问题：  
* 这个不是一个标准的 webpack 项目，  这是基于 饿了么自己开发的 cooking 脚手架，该脚手架封装了 webpack；
* 这个项目的 css 使用的是 saladcss，也许你第一次听说，其实这个 saladcss 也是 饿了么自己开发的，但基于的是 postcss；

* webpack、postcss 本来都不太熟，何况还都做了二次封装，尝试各种修改，阅读其逻辑，最终实现了最少改动的适配，真心不容易！

### 最后
* 其实该适配方案也不完全完美，比如 picker 组件里面的 js 代码用了好多固定死的 px 值！！！





****


# Mint UI

[![Build Status](https://travis-ci.org/ElemeFE/mint-ui.svg?branch=master)](https://travis-ci.org/ElemeFE/mint-ui)
[![npm](https://img.shields.io/npm/v/mint-ui.svg?maxAge=3600)](https://www.npmjs.com/package/mint-ui)
[![NPM downloads](http://img.shields.io/npm/dm/mint-ui.svg)](https://npmjs.org/package/mint-ui)
![JS gzip size](http://img.badgesize.io/elemefe/mint-ui/master/lib/index.js.svg?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/elemefe/mint-ui/master/lib/style.css.svg?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/mint-ui](https://badges.gitter.im/ElemeFE/mint-ui.svg)](https://gitter.im/ElemeFE/mint-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Mobile UI elements for **Vue 2.0**

- [Homepage](http://mint-ui.github.io)
- [Documentation](http://mint-ui.github.io/docs)

## Installation
```shell
npm i mint-ui -S

# for Vue 1.x
npm i mint-ui@1 -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


Equals to

```javascript
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'mint-ui/lib/radio';
import 'mint-ui/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```

## CDN
RawGit

- https://cdn.rawgit.com/ElemeFE/mint-ui/master/lib/index.js
- https://cdn.rawgit.com/ElemeFE/mint-ui/master/lib/style.css

NPMCDN

- https://unpkg.com/mint-ui/lib/index.js
- https://unpkg.com/mint-ui/lib/style.css

## Development

```shell
npm run dev
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/mint-ui/blob/master/.github/CONTRIBUTING_en-us.md) before making a pull request.

## License
MIT
