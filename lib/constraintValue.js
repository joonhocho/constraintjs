"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConstantConstraint = exports.ConstantConstraint = function () {
  function ConstantConstraint(value) {
    _classCallCheck(this, ConstantConstraint);

    this.value = value;
  }

  _createClass(ConstantConstraint, [{
    key: "getValue",
    value: function getValue() {
      return this.value || 0;
    }
  }]);

  return ConstantConstraint;
}();

var ObjectConstraint = exports.ObjectConstraint = function () {
  function ObjectConstraint(obj, prop) {
    _classCallCheck(this, ObjectConstraint);

    this.obj = obj;
    this.prop = prop;
  }

  _createClass(ObjectConstraint, [{
    key: "is",
    value: function is(obj, prop) {
      return this.obj === obj && this.prop === prop;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.obj[this.prop] || 0;
    }
  }]);

  return ObjectConstraint;
}();

var FunctionConstraint = exports.FunctionConstraint = function () {
  function FunctionConstraint(fn) {
    _classCallCheck(this, FunctionConstraint);

    this.fn = fn;
  }

  _createClass(FunctionConstraint, [{
    key: "getValue",
    value: function getValue() {
      return this.fn() || 0;
    }
  }]);

  return FunctionConstraint;
}();