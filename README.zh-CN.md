# babel-plugin-transform-react-jsx-data-source-code-location

[![npm](https://img.shields.io/npm/v/babel-plugin-transform-react-jsx-data-source-code-location)](https://www.npmjs.com/package/babel-plugin-transform-react-jsx-data-source-code-location)

> 为所有 JSX 元素增加 `data-source-code-location`。

[English](./README.md) | 简体中文

## 示例

**输入**

```
<sometag />
```

**输入**

```
<sometag data-__source-code-location={`${__jsxFileName}:${lineNumber}:${columnNumber}`} />
```

## 安装

使用 npm：

```sh
npm install --save-dev babel-plugin-transform-react-jsx-data-source-code-location
```

或者使用 yarn：

```sh
yarn add babel-plugin-transform-react-jsx-data-source-code-location --dev
```

## 使用

### 通过配置文件（推荐）

```json title="babel.config.json"
{
  "plugins": ["babel-plugin-transform-react-jsx-data-source-code-location"]
}
```

### 通过 CLI

```sh
babel --plugins babel-plugin-transform-react-jsx-data-source-code-location script.js
```

### 通过 Node API

```js
require("@babel/core").transformSync("code", {
  plugins: ["babel-plugin-transform-react-jsx-data-source-code-location"],
});
```
