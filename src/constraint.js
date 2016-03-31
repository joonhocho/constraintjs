export default class Constraint {
  constructor(
      source, sourceProp,
      target, targetProp,
      sourceToTarget,
      priority = 1) {
    this.source = source;
    this.sourceProp = sourceProp;
    this.target = target;
    this.targetProp = targetProp;
    this.sourceToTarget = sourceToTarget;
    this.priority = priority;
  }

  getSourceValue() {
    return this.source[this.sourceProp] || 0;
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

  getTargetValueFromSource() {
    return this.sourceToTarget(this.getSourceValue()) || 0;
  }

  isInEquilibrium() {
    return this.getTargetValue() === this.getTargetValueFromSource();
  }

  getPriority() {
    return this.priority;
  }
}
