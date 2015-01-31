"use strict";

module.exports = isDom;
function isDom(dom) {
  return function () {
    if (!dom || typeof dom !== "object") {
      return false;
    }

    if ("object" === typeof window.Node) {
      return dom instanceof window.Node;
    }

    return "number" === typeof dom.nodeType && "string" === typeof dom.nodeName;
  };
}