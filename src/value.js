export class BaseValue {
  getValue() {
    throw new Error('Must be implemented!');
  }
}

export class ConstantValue extends BaseValue {
  static create(value) {
    if (typeof value === 'number') {
      return new ConstantValue(value);
    }
    return null;
  }

  constructor(value) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value || 0;
  }
}

export class PropertyValue extends BaseValue {
  static create(obj, prop) {
    if (Array.isArray(obj)) {
      prop = obj[1];
      obj = obj[0];
    }
    if (obj && typeof obj === 'object' &&
        typeof prop === 'string') {
      return new PropertyValue(obj, prop);
    }
    return null;
  }

  constructor(obj, prop) {
    super();
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

export class FunctionValue extends BaseValue {
  static create(fn) {
    if (typeof fn === 'function') {
      return new FunctionValue(fn);
    }
    return null;
  }

  constructor(fn) {
    super();
    this.fn = fn;
  }

  getValue() {
    return this.fn() || 0;
  }
}

export const value = (...args) => {
  if (args[0] instanceof BaseValue) {
    return args[0];
  }
  return ConstantValue.create(...args) ||
    PropertyValue.create(...args) ||
    FunctionValue.create(...args);
};

export default value;
