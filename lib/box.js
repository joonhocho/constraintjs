'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'getStyleValue',
    value: function getStyleValue(name) {
      return this.refs && this.refs.box && parseFloat(this.refs.box.style[name]) || 0;
    }
  }, {
    key: 'setStyleValue',
    value: function setStyleValue(name, x) {
      if (this.refs && this.refs.box) this.refs.box.style[name] = x + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: 'box', style: this.props.style });
    }
  }, {
    key: 'x',
    get: function get() {
      return this.getStyleValue('left');
    },
    set: function set(x) {
      this.setStyleValue('left', x);
    }
  }, {
    key: 'y',
    get: function get() {
      return this.getStyleValue('top');
    },
    set: function set(y) {
      this.setStyleValue('top', y);
    }
  }, {
    key: 'width',
    get: function get() {
      return this.getStyleValue('width');
    },
    set: function set(width) {
      this.setStyleValue('width', width);
    }
  }, {
    key: 'height',
    get: function get() {
      return this.getStyleValue('height');
    },
    set: function set(height) {
      this.setStyleValue('height', height);
    }
  }, {
    key: 'left',
    get: function get() {
      return this.x;
    }
  }, {
    key: 'top',
    get: function get() {
      return this.y;
    }
  }, {
    key: 'right',
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: 'bottom',
    get: function get() {
      return this.y + this.height;
    }
  }]);

  return Box;
}(_react.Component);

exports.default = Box;