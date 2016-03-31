import {ObjectConstraint} from './constraintValue';

export default class Constraint {
  constructor(
      target, targetProp,
      args,
      argsToTarget,
      priority = 1) {
    this.target = target;
    this.targetProp = targetProp;
    this.args = args;
    this.argsToTarget = argsToTarget;
    this.priority = priority;
  }

  getArguments() {
    return this.args.map(arg => arg.getValue());
  }

  hasArgument(obj, prop) {
    return this.args.findIndex(arg =>
      (arg instanceof ObjectConstraint) &&
      arg.is(obj, prop)
    ) >= 0;
  }

  calcTargetValue() {
    return this.argsToTarget(...this.getArguments()) || 0;
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

  updateTargetValue() {
    const newValue = this.calcTargetValue();
    return this.setTargetValue(newValue);
  }

  isInEquilibrium() {
    return this.getTargetValue() === this.calcTargetValue();
  }

  getPriority() {
    return this.priority;
  }
}
