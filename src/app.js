import './app.css';

import React, {Component} from 'react';
import Constraint from './constraint';
import ConstraintContainer from './constraintContainer';

console.log(Constraint, ConstraintContainer);

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('app')
);
