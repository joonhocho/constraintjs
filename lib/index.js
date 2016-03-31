'use strict';

require('babel-polyfill');

var _constraint = require('./constraint');

var _constraint2 = _interopRequireDefault(_constraint);

var _constraintContainer = require('./constraintContainer');

var _constraintContainer2 = _interopRequireDefault(_constraintContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var box = { x: 0, y: 0, width: 420, height: 600 };
var o1 = { x: 0, y: 0, width: 0, height: 0 };
var o2 = { x: 0, y: 0, width: 0, height: 0 };
var o3 = { x: 0, y: 0, width: 0, height: 0 };
var o4 = { x: 0, y: 0, width: 0, height: 0 };

var cs = new _constraintContainer2.default([new _constraint2.default(o1, 'x', [[box, 'x']], function (x) {
  return x;
}), new _constraint2.default(o2, 'x', [[o1, 'x']], function (x) {
  return x + 10;
}), new _constraint2.default(o3, 'x', [[o2, 'x']], function (x) {
  return 3 * x;
}), new _constraint2.default(o4, 'x', [[o3, 'x'], [o3, 'width'], 50], function (x, width, c) {
  return x + width + c;
}), new _constraint.LimitConstraint(o4, 'height', [50, 100], function (min, max) {
  return { min: min, max: max };
})]);

cs.update();

console.log(o1, o2, o3, o4);

box.x = 120;
box.width = 400;

cs.update();

console.log(o1, o2, o3, o4);