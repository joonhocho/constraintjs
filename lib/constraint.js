"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constraint = function () {
  function Constraint(source, sourceProp, target, targetProp, sourceToTarget) {
    var priority = arguments.length <= 5 || arguments[5] === undefined ? 1 : arguments[5];

    _classCallCheck(this, Constraint);

    this.source = source;
    this.sourceProp = sourceProp;
    this.target = target;
    this.targetProp = targetProp;
    this.sourceToTarget = sourceToTarget;
    this.priority = priority;
  }

  _createClass(Constraint, [{
    key: "getSourceValue",
    value: function getSourceValue() {
      return this.source[this.sourceProp] || 0;
    }
  }, {
    key: "getTargetValue",
    value: function getTargetValue() {
      return this.target[this.targetProp] || 0;
    }
  }, {
    key: "setTargetValue",
    value: function setTargetValue(x) {
      if (x === this.target[this.targetProp]) {
        return false;
      }
      this.target[this.targetProp] = x;
      return true;
    }
  }, {
    key: "getTargetValueFromSource",
    value: function getTargetValueFromSource() {
      return this.sourceToTarget(this.getSourceValue()) || 0;
    }
  }, {
    key: "isInEquilibrium",
    value: function isInEquilibrium() {
      return this.getTargetValue() === this.getTargetValueFromSource();
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.priority;
    }
  }]);

  return Constraint;
}();

exports.default = Constraint;