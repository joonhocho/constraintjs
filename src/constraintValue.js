export class ConstantConstraint {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value || 0;
  }
}

export class ObjectConstraint {
  constructor(obj, prop) {
    this.obj = obj;
    this.prop = prop;
  }

  is(obj, prop) {
    return this.obj === obj && this.prop === prop;
  }

  getValue() {
    return this.obj[this.prop] || 0;
  }
}

export class FunctionConstraint {
  constructor(fn) {
    this.fn = fn;
  }

  getValue() {
    return this.fn() || 0;
  }
}
