"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var isDom = _interopRequire(require("./"));




test("fd-isDom", function (t) {
  t.plan(7);

  var div = document.createElement("div");

  t.equals(typeof isDom(), "function");
  t.notOk(isDom()());
  t.notOk(isDom(null)());
  t.notOk(isDom({})());
  t.notOk(isDom("")());
  t.ok(isDom(div)());
  t.ok(isDom(document)());
});