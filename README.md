# babel-plugin-transform-react-jsx-data-source-code-location

[![npm](https://img.shields.io/npm/v/babel-plugin-transform-react-jsx-data-source-code-location)](https://www.npmjs.com/package/babel-plugin-transform-react-jsx-data-source-code-location)

> Add `data-source-code-location` to all JSX Elements.

English | [简体中文](./README.zh-CN.md)

## Example

**In**

```
<sometag />
```

**Out**

```
<sometag data-__source-code-location={`${__jsxFileName}:${lineNumber}:${columnNumber}`} />
```

## Install

Using npm:

```sh
npm install --save-dev babel-plugin-transform-react-jsx-data-source-code-location
```

or using yarn:

```sh
yarn add babel-plugin-transform-react-jsx-data-source-code-location --dev
```

## Usage

### With a configuration file (Recommended)

```json title="babel.config.json"
{
  "plugins": ["babel-plugin-transform-react-jsx-data-source-code-location"]
}
```

### Via CLI

```sh
babel --plugins babel-plugin-transform-react-jsx-data-source-code-location script.js
```

### Via Node API

```js
require("@babel/core").transformSync("code", {
  plugins: ["babel-plugin-transform-react-jsx-data-source-code-location"],
});
```
