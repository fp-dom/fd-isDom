"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var curry1 = require("fj-curry").curry1;
var typeOf = _interopRequire(require("fj-typeof"));




var isNumber = typeOf("number");
var isString = typeOf("string");
var isObject = typeOf("object");


var isDom = curry1(function (dom) {
  if (!dom || !isObject(dom)) {
    return false;
  }

  if (isObject(window.Node)) {
    return dom instanceof window.Node;
  }

  return isNumber(dom.nodeType) && isString(dom.nodeName);
});

module.exports = isDom;