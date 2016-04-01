'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _constraint = require('./constraint');

var _constraint2 = _interopRequireDefault(_constraint);

var _constraintContainer = require('./constraintContainer');

var _constraintContainer2 = _interopRequireDefault(_constraintContainer);

var _box = require('./box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }, _this.handleResize = function () {
      _this.setState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);

      var _refs = this.refs;
      var red = _refs.red;
      var blue = _refs.blue;
      var yellow = _refs.yellow;

      console.log(red);
      this.container = new _constraintContainer2.default([new _constraint2.default(red, 'x', [50], function (c) {
        return c;
      }), new _constraint2.default(red, 'width', [[this, 'width']], function (width) {
        return width - 100;
      }), new _constraint2.default(red, 'y', [50], function (c) {
        return c;
      }), new _constraint2.default(red, 'height', [[this, 'height']], function (height) {
        return height - 100;
      })]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.container) this.container.update();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_box2.default, { ref: 'red', style: { backgroundColor: 'red' } }),
        _react2.default.createElement(_box2.default, { ref: 'blue' }),
        _react2.default.createElement(_box2.default, { ref: 'yellow' })
      );
    }
  }, {
    key: 'width',
    get: function get() {
      return this.state.width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.state.height;
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));