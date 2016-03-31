"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var min = exports.min = function min(value, limit) {
  if (limit != null) return Math.max(value, limit);
  return value;
};

var max = exports.max = function max(value, limit) {
  if (limit != null) return Math.min(value, limit);
  return value;
};

var minMax = exports.minMax = function minMax(value, minLimit, maxLimit) {
  return max(min(value, minLimit), maxLimit);
};