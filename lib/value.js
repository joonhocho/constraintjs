'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseValue = exports.BaseValue = function () {
  function BaseValue() {
    _classCallCheck(this, BaseValue);
  }

  _createClass(BaseValue, [{
    key: 'getValue',
    value: function getValue() {
      throw new Error('Must be implemented!');
    }
  }]);

  return BaseValue;
}();

var ConstantValue = exports.ConstantValue = function (_BaseValue) {
  _inherits(ConstantValue, _BaseValue);

  _createClass(ConstantValue, null, [{
    key: 'create',
    value: function create(value) {
      if (typeof value === 'number') {
        return new ConstantValue(value);
      }
      return null;
    }
  }]);

  function ConstantValue(value) {
    _classCallCheck(this, ConstantValue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConstantValue).call(this));

    _this.value = value;
    return _this;
  }

  _createClass(ConstantValue, [{
    key: 'getValue',
    value: function getValue() {
      return this.value || 0;
    }
  }]);

  return ConstantValue;
}(BaseValue);

var PropertyValue = exports.PropertyValue = function (_BaseValue2) {
  _inherits(PropertyValue, _BaseValue2);

  _createClass(PropertyValue, null, [{
    key: 'create',
    value: function create(obj, prop) {
      if (Array.isArray(obj)) {
        prop = obj[1];
        obj = obj[0];
      }
      if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof prop === 'string') {
        return new PropertyValue(obj, prop);
      }
      return null;
    }
  }]);

  function PropertyValue(obj, prop) {
    _classCallCheck(this, PropertyValue);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(PropertyValue).call(this));

    _this2.obj = obj;
    _this2.prop = prop;
    return _this2;
  }

  _createClass(PropertyValue, [{
    key: 'is',
    value: function is(obj, prop) {
      return this.obj === obj && this.prop === prop;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.obj[this.prop] || 0;
    }
  }]);

  return PropertyValue;
}(BaseValue);

var FunctionValue = exports.FunctionValue = function (_BaseValue3) {
  _inherits(FunctionValue, _BaseValue3);

  _createClass(FunctionValue, null, [{
    key: 'create',
    value: function create(fn) {
      if (typeof fn === 'function') {
        return new FunctionValue(fn);
      }
      return null;
    }
  }]);

  function FunctionValue(fn) {
    _classCallCheck(this, FunctionValue);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionValue).call(this));

    _this3.fn = fn;
    return _this3;
  }

  _createClass(FunctionValue, [{
    key: 'getValue',
    value: function getValue() {
      return this.fn() || 0;
    }
  }]);

  return FunctionValue;
}(BaseValue);

var value = exports.value = function value() {
  if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof BaseValue) {
    return arguments.length <= 0 ? undefined : arguments[0];
  }
  return ConstantValue.create.apply(ConstantValue, arguments) || PropertyValue.create.apply(PropertyValue, arguments) || FunctionValue.create.apply(FunctionValue, arguments);
};

exports.default = value;