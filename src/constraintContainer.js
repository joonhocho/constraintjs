export default class ConstraintContainer {
  constructor(constraints) {
    this.constraints = constraints || [];
    this.sortByPriority();
  }

  addConstraint(...constraints) {
    this.constraints.push(
        ...constraints.filter(
            c => !this.hasConstraint(c)
        )
    );
    this.sortByPriority();
  }

  hasConstraint(constraint) {
    return this.constraints.indexOf(constraint) >= 0;
  }

  removeConstraint(...constraints) {
    let count = 0;
    constraints.forEach(c => {
      const index = this.constraints.indexOf(c);
      if (index >= 0) {
        this.constraints.splice(index, 1);
        count++;
      }
    });
    return count;
  }

  sortByPriority() {
    this.constraints.sort((a, b) => b.getPriority() - a.getPriority());
  }

  getNextIndex(obj, prop) {
    if (!obj) return 0;
    const nextIndex = this.constraints.findIndex(
      x => x.indexOfPropertyArgument(obj, prop) >= 0
    );
    return nextIndex >= 0 ? nextIndex : 0;
  }

  update(obj, prop) {
    for (let i = this.getNextIndex(obj, prop); i < this.constraints.length;) {
      const c = this.constraints[i];
      if (c.updateTargetValue()) {
        const nextIndex = this.getNextIndex(c.target, c.targetProp);
        i = nextIndex === i ? (i ? 0 : 1) : nextIndex;
      } else {
        i++;
      }
    }
  }
}
