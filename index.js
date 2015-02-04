"use strict";

var curry1 = require("fj-curry").curry1;



var isDom = curry1(function (dom) {
  if (!dom || typeof dom !== "object") {
    return false;
  }

  if ("object" === typeof window.Node) {
    return dom instanceof window.Node;
  }

  return "number" === typeof dom.nodeType && "string" === typeof dom.nodeName;
});

module.exports = isDom;