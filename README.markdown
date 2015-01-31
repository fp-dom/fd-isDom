# fd-isDom

[![Build Status](https://travis-ci.org/fp-dom/fd-isDom.svg)](https://travis-ci.org/fp-dom/fd-isDom) [![npm version](https://badge.fury.io/js/fd-isdom.svg)](http://badge.fury.io/js/fd-isdom)
> This is a template repo for fp-dom.

## Installation

`npm install fd-isdom --save`

## Usage

```js
var isDom = require('fd-isdom');
var ifElse = require('fd-ifelse');

ifElse(
  isDom(div),
  () => console.log('yes'),
  () => console.log('no')
);
```
