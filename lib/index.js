'use strict';

var _constraint = require('./constraint');

var _constraint2 = _interopRequireDefault(_constraint);

var _constraintContainer = require('./constraintContainer');

var _constraintContainer2 = _interopRequireDefault(_constraintContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var o1 = { x: 1 };
var o2 = { x: 1 };
var o3 = { x: 1 };
var o4 = { x: 1100 };

var cs = new _constraintContainer2.default([new _constraint2.default(o1, 'x', o2, 'x', function (x) {
  return 2 * x;
}), new _constraint2.default(o1, 'x', o3, 'x', function (x) {
  return 8 * x;
})]);

cs.update();
console.log(o1, o2, o3);