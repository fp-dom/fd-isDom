# fd-isDom

[![Build Status](https://travis-ci.org/fp-dom/fd-isDom.svg)](https://travis-ci.org/fp-dom/fd-isDom) [![npm version](https://badge.fury.io/js/fd-isdom.svg)](http://badge.fury.io/js/fd-isdom)
> Check if an object is a dom object

## Installation

`npm install fd-isdom --save`

## Usage

```js
var isDom = require('fd-isdom');
var ifElse = require('fj-ifelse');
var div = document.createElement('div');

ifElse(
  isDom(),
  () => console.log('yes'),
  () => console.log('no')
)(div);
```


## API

### isDom

Checks if a object is a dom object

`isDom()`

***Parameters***

| Name          | Type        | Description                |
| ------------- | ----------- | -------------------------- |
| obj           | *           | Object to be checked       |

***Returns***

| Type        | Description                                         |
| ----------- | --------------------------                          |
| function    | A function that checks if the passed value is a dom object |
