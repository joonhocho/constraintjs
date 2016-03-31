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

  update() {
    for (let i = 0; i < this.constraints.length; i++) {
      const c = this.constraints[i];
      const tvs = c.getTargetValueFromSource();
      if (c.setTargetValue(tvs)) i = 0;
    }
  }
}
