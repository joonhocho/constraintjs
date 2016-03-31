import Constraint from './constraint';
import ConstraintContainer from './constraintContainer';
import {ObjectConstraint} from './constraintValue';

const box = {x: 0, y: 0, width: 420, height: 600};
const o1 = {x: 0, y: 0, width: 0, height: 0};
const o2 = {x: 0, y: 0, width: 0, height: 0};
const o3 = {x: 0, y: 0, width: 0, height: 0};
const o4 = {x: 0, y: 0, width: 0, height: 0};

const cs = new ConstraintContainer([
  new Constraint(
    o1, 'x',
    [new ObjectConstraint(box, 'x')],
    x => x
  ),
  new Constraint(
    o2, 'x',
    [new ObjectConstraint(o1, 'x')],
    x => x + 10
  ),
  new Constraint(
    o3, 'x',
    [new ObjectConstraint(o2, 'x')],
    x => 3 * x
  ),
  new Constraint(
    o4, 'x',
    [
      new ObjectConstraint(o3, 'x'),
      new ObjectConstraint(o3, 'width')
    ],
    (x, width) => (x + width) + 50
  ),
  new Constraint(
    o4, 'width',
    [
      new ObjectConstraint(box, 'x'),
      new ObjectConstraint(box, 'width')
    ],
    (x, width) => (x + width) - 50
  ),
]);


cs.update();

console.log(
    o1, o2, o3, o4
);


box.x = 120;
box.width = 400;

cs.update();

console.log(
    o1, o2, o3, o4
);
