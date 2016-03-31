'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constraintValue = require('./constraintValue');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constraint = function () {
  function Constraint(target, targetProp, args, argsToTarget) {
    var priority = arguments.length <= 4 || arguments[4] === undefined ? 1 : arguments[4];

    _classCallCheck(this, Constraint);

    this.target = target;
    this.targetProp = targetProp;
    this.args = args;
    this.argsToTarget = argsToTarget;
    this.priority = priority;
  }

  _createClass(Constraint, [{
    key: 'getArguments',
    value: function getArguments() {
      return this.args.map(function (arg) {
        return arg.getValue();
      });
    }
  }, {
    key: 'hasArgument',
    value: function hasArgument(obj, prop) {
      return this.args.findIndex(function (arg) {
        return arg instanceof _constraintValue.ObjectConstraint && arg.is(obj, prop);
      }) >= 0;
    }
  }, {
    key: 'calcTargetValue',
    value: function calcTargetValue() {
      return this.argsToTarget.apply(this, _toConsumableArray(this.getArguments())) || 0;
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
    key: 'updateTargetValue',
    value: function updateTargetValue() {
      var newValue = this.calcTargetValue();
      return this.setTargetValue(newValue);
    }
  }, {
    key: 'isInEquilibrium',
    value: function isInEquilibrium() {
      return this.getTargetValue() === this.calcTargetValue();
    }
  }, {
    key: 'getPriority',
    value: function getPriority() {
      return this.priority;
    }
  }]);

  return Constraint;
}();

exports.default = Constraint;