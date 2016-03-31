import Constraint from './constraint';
import ConstraintContainer from './constraintContainer';

const o1 = {x: 1};
const o2 = {x: 1};
const o3 = {x: 1};
const o4 = {x: 1100};

const cs = new ConstraintContainer([
  new Constraint(
    o1, 'x',
    o2, 'x',
    x => 2 * x
  ),
  new Constraint(
    o1, 'x',
    o3, 'x',
    x => 8 * x
  ),
]);

cs.update();
console.log(
    o1, o2, o3
);
