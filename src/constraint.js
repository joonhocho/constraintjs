import value, {BaseValue, PropertyValue} from './value';
import {minMax} from './util';

export class BaseConstraint {
  constructor(target, targetProp, args, priority = 1) {
    this.target = target;
    this.targetProp = targetProp;
    this.priority = priority;
    this.setArguments(args);
  }

  setArguments(args) {
    this.args = args.map(value);
  }

  getArgumentValues() {
    return this.args.map(arg => arg.getValue());
  }

  indexOfPropertyArgument(obj, prop) {
    return this.args.findIndex(arg =>
      (arg instanceof PropertyValue) &&
      arg.is(obj, prop)
    ) >= 0;
  }

  getTargetValue() {
    return this.target[this.targetProp] || 0;
  }

  setTargetValue(x) {
    if (x === this.target[this.targetProp]) {
      return false;
    }
    this.target[this.targetProp] = x;
    return true;
  }

  getSuggestedTargetValue() {
    throw new Error('Must be implemented!');
  }

  updateTargetValue() {
    const newValue = this.getSuggestedTargetValue();
    return this.setTargetValue(newValue);
  }

  needsUpdate() {
    return this.getTargetValue() === this.getSuggestedTargetValue();
  }

  getPriority() {
    return this.priority;
  }
}

export default class Constraint extends BaseConstraint {
  constructor(target, targetProp, args, getValueFn, priority = 1) {
    super(target, targetProp, args, priority);
    this.getValueFn = getValueFn;
  }

  getSuggestedTargetValue() {
    return this.getValueFn(
        ...this.getArgumentValues(),
        this.getTargetValue()
    ) || 0;
  }
}

export class LimitConstraint extends BaseConstraint {
  constructor(target, targetProp, args, getLimitFn, priority = 1) {
    super(target, targetProp, args, priority);
    this.getLimitFn = getLimitFn;
  }

  getLimit(targetValue) {
    return this.getLimitFn(
        ...this.getArgumentValues(),
        targetValue
    );
  }

  getSuggestedTargetValue() {
    const targetValue = this.getTargetValue();
    const {min, max} = this.getLimit(targetValue);
    return minMax(targetValue, min, max);
  }
}
