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
      var message = _refs.message;
      var pic = _refs.pic;
      var balloon1 = _refs.balloon1;
      var balloon2 = _refs.balloon2;
      var timestamp = _refs.timestamp;
      var date = _refs.date;


      pic.width = 32;
      pic.height = 32;

      timestamp.width = 60;
      timestamp.height = 20;

      date.width = 140;
      date.height = 24;

      balloon1.width = 300;
      balloon1.height = 80;

      balloon2.width = 200;
      balloon2.height = 120;

      this.container = new _constraintContainer2.default([new _constraint2.default(message, 'x', [[timestamp, 'x']], function (x) {
        return x;
      }), new _constraint2.default(message, 'y', [[date, 'y']], function (x) {
        return x;
      }), new _constraint2.default(message, 'width', [[timestamp, 'x'], [pic, 'right']], function (timestampX, picRight) {
        return picRight - timestampX;
      }), new _constraint2.default(message, 'height', [[date, 'y'], [pic, 'bottom']], function (dateY, picBottom) {
        return picBottom - dateY;
      }), new _constraint2.default(pic, 'x', [[pic, 'width'], [this, 'width'], 12], function (picWidth, winWidth, margin) {
        return winWidth - margin - picWidth;
      }), new _constraint2.default(pic, 'y', [[pic, 'height'], [this, 'height'], 20], function (picHeight, winHeight, margin) {
        return winHeight - margin - picHeight;
      }), new _constraint2.default(balloon1, 'x', [[timestamp, 'right'], 8], function (timestampRight, margin) {
        return timestampRight + margin;
      }), new _constraint2.default(balloon1, 'width', [[balloon1, 'x'], [pic, 'x'], 8], function (ballon1X, picX, margin) {
        return picX - margin - ballon1X;
      }), new _constraint2.default(balloon1, 'y', [[pic, 'bottom'], [balloon1, 'height']], function (picBottom, balloon1Height) {
        return picBottom - balloon1Height;
      }), new _constraint2.default(timestamp, 'x', [0, 12], function (winX, margin) {
        return winX + margin;
      }), new _constraint2.default(timestamp, 'y', [[pic, 'bottom'], [timestamp, 'height']], function (picBottom, height) {
        return picBottom - height;
      }), new _constraint2.default(date, 'x', [[this, 'width'], [date, 'width']], function (winWidth, dateWidth) {
        return (winWidth - dateWidth) / 2;
      }), new _constraint2.default(date, 'y', [[balloon1, 'y'], [date, 'height'], 8], function (balloon1Y, dateHeight, margin) {
        return balloon1Y - margin - dateHeight;
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
        _react2.default.createElement(_box2.default, { ref: 'message', style: { backgroundColor: '#ccc' } }),
        _react2.default.createElement(_box2.default, { ref: 'pic', style: { backgroundColor: '#eee' } }),
        _react2.default.createElement(_box2.default, { ref: 'balloon1', style: { backgroundColor: '#eee' } }),
        _react2.default.createElement(_box2.default, { ref: 'timestamp', style: { backgroundColor: '#eee' } }),
        _react2.default.createElement(_box2.default, { ref: 'balloon2', style: { backgroundColor: '#eee' } }),
        _react2.default.createElement(_box2.default, { ref: 'date', style: { backgroundColor: '#eee' } })
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