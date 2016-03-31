import 'babel-polyfill';

import Constraint from './constraint';
import {LimitConstraint} from './constraint';
import ConstraintContainer from './constraintContainer';

const box = {x: 0, y: 0, width: 420, height: 600};
const o1 = {x: 0, y: 0, width: 0, height: 0};
const o2 = {x: 0, y: 0, width: 0, height: 0};
const o3 = {x: 0, y: 0, width: 0, height: 0};
const o4 = {x: 0, y: 0, width: 0, height: 0};

const cs = new ConstraintContainer([
  new Constraint(
    o1, 'x',
    [[box, 'x']],
    x => x
  ),
  new Constraint(
    o2, 'x',
    [[o1, 'x']],
    x => x + 10
  ),
  new Constraint(
    o3, 'x',
    [[o2, 'x']],
    x => 3 * x
  ),
  new Constraint(
    o4, 'x',
    [[o3, 'x'], [o3, 'width'], 50],
    (x, width, c) => (x + width) + c
  ),
  new LimitConstraint(
    o4, 'height',
    [50, 100],
    (min, max) => ({min, max})
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
