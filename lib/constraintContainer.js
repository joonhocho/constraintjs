"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConstraintContainer = function () {
  function ConstraintContainer(constraints) {
    _classCallCheck(this, ConstraintContainer);

    this.constraints = constraints || [];
    this.sortByPriority();
  }

  _createClass(ConstraintContainer, [{
    key: "addConstraint",
    value: function addConstraint() {
      var _constraints,
          _this = this;

      for (var _len = arguments.length, constraints = Array(_len), _key = 0; _key < _len; _key++) {
        constraints[_key] = arguments[_key];
      }

      (_constraints = this.constraints).push.apply(_constraints, _toConsumableArray(constraints.filter(function (c) {
        return !_this.hasConstraint(c);
      })));
      this.sortByPriority();
    }
  }, {
    key: "hasConstraint",
    value: function hasConstraint(constraint) {
      return this.constraints.indexOf(constraint) >= 0;
    }
  }, {
    key: "removeConstraint",
    value: function removeConstraint() {
      var _this2 = this;

      var count = 0;

      for (var _len2 = arguments.length, constraints = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }

      constraints.forEach(function (c) {
        var index = _this2.constraints.indexOf(c);
        if (index >= 0) {
          _this2.constraints.splice(index, 1);
          count++;
        }
      });
      return count;
    }
  }, {
    key: "sortByPriority",
    value: function sortByPriority() {
      this.constraints.sort(function (a, b) {
        return b.getPriority() - a.getPriority();
      });
    }
  }, {
    key: "getNextIndex",
    value: function getNextIndex(obj, prop) {
      if (!obj) return 0;
      var nextIndex = this.constraints.findIndex(function (x) {
        return x.indexOfPropertyArgument(obj, prop) >= 0;
      });
      return nextIndex >= 0 ? nextIndex : 0;
    }
  }, {
    key: "update",
    value: function update(obj, prop) {
      for (var i = this.getNextIndex(obj, prop); i < this.constraints.length;) {
        var c = this.constraints[i];
        if (c.updateTargetValue()) {
          var nextIndex = this.getNextIndex(c.target, c.targetProp);
          i = nextIndex === i ? i ? 0 : 1 : nextIndex;
        } else {
          i++;
        }
      }
    }
  }]);

  return ConstraintContainer;
}();

exports.default = ConstraintContainer;