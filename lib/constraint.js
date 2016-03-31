'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LimitConstraint = exports.BaseConstraint = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _value = require('./value');

var _value2 = _interopRequireDefault(_value);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseConstraint = exports.BaseConstraint = function () {
  function BaseConstraint(target, targetProp, args) {
    var priority = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];

    _classCallCheck(this, BaseConstraint);

    this.target = target;
    this.targetProp = targetProp;
    this.priority = priority;
    this.setArguments(args);
  }

  _createClass(BaseConstraint, [{
    key: 'setArguments',
    value: function setArguments(args) {
      this.args = args.map(_value2.default);
    }
  }, {
    key: 'getArgumentValues',
    value: function getArgumentValues() {
      return this.args.map(function (arg) {
        return arg.getValue();
      });
    }
  }, {
    key: 'indexOfPropertyArgument',
    value: function indexOfPropertyArgument(obj, prop) {
      return this.args.findIndex(function (arg) {
        return arg instanceof _value.PropertyValue && arg.is(obj, prop);
      }) >= 0;
    }
  }, {
    key: 'getTargetValue',
    value: function getTargetValue() {
      return this.target[this.targetProp] || 0;
    }
  }, {
    key: 'setTargetValue',
    value: function setTargetValue(x) {
      if (x === this.target[this.targetProp]) {
        return false;
      }
      this.target[this.targetProp] = x;
      return true;
    }
  }, {
    key: 'getSuggestedTargetValue',
    value: function getSuggestedTargetValue() {
      throw new Error('Must be implemented!');
    }
  }, {
    key: 'updateTargetValue',
    value: function updateTargetValue() {
      var newValue = this.getSuggestedTargetValue();
      return this.setTargetValue(newValue);
    }
  }, {
    key: 'needsUpdate',
    value: function needsUpdate() {
      return this.getTargetValue() === this.getSuggestedTargetValue();
    }
  }, {
    key: 'getPriority',
    value: function getPriority() {
      return this.priority;
    }
  }]);

  return BaseConstraint;
}();

var Constraint = function (_BaseConstraint) {
  _inherits(Constraint, _BaseConstraint);

  function Constraint(target, targetProp, args, getValueFn) {
    var priority = arguments.length <= 4 || arguments[4] === undefined ? 1 : arguments[4];

    _classCallCheck(this, Constraint);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Constraint).call(this, target, targetProp, args, priority));

    _this.getValueFn = getValueFn;
    return _this;
  }

  _createClass(Constraint, [{
    key: 'getSuggestedTargetValue',
    value: function getSuggestedTargetValue() {
      return this.getValueFn.apply(this, _toConsumableArray(this.getArgumentValues()).concat([this.getTargetValue()])) || 0;
    }
  }]);

  return Constraint;
}(BaseConstraint);

exports.default = Constraint;

var LimitConstraint = exports.LimitConstraint = function (_BaseConstraint2) {
  _inherits(LimitConstraint, _BaseConstraint2);

  function LimitConstraint(target, targetProp, args, getLimitFn) {
    var priority = arguments.length <= 4 || arguments[4] === undefined ? 1 : arguments[4];

    _classCallCheck(this, LimitConstraint);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(LimitConstraint).call(this, target, targetProp, args, priority));

    _this2.getLimitFn = getLimitFn;
    return _this2;
  }

  _createClass(LimitConstraint, [{
    key: 'getLimit',
    value: function getLimit(targetValue) {
      return this.getLimitFn.apply(this, _toConsumableArray(this.getArgumentValues()).concat([targetValue]));
    }
  }, {
    key: 'getSuggestedTargetValue',
    value: function getSuggestedTargetValue() {
      var targetValue = this.getTargetValue();

      var _getLimit = this.getLimit(targetValue);

      var min = _getLimit.min;
      var max = _getLimit.max;

      return (0, _util.minMax)(targetValue, min, max);
    }
  }]);

  return LimitConstraint;
}(BaseConstraint);