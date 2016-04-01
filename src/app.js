import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Constraint from './constraint';
import ConstraintContainer from './constraintContainer';
import Box from './box';

class App extends Component {
  state = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    const {red, blue, yellow} = this.refs;
    console.log(red);
    this.container = new ConstraintContainer([
      new Constraint(
        red, 'x',
        [50],
        (c) => c
      ),
      new Constraint(
        red, 'width',
        [[this, 'width']],
        (width) => width - 100
      ),
      new Constraint(
        red, 'y',
        [50],
        (c) => c
      ),
      new Constraint(
        red, 'height',
        [[this, 'height']],
        (height) => height - 100
      ),
    ]);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }

  get width() {
    return this.state.width;
  }

  get height() {
    return this.state.height;
  }

  render() {
    if (this.container) this.container.update();
    return (
      <div>
        <Box ref="red" style={{backgroundColor: 'red'}} />
        <Box ref="blue" />
        <Box ref="yellow" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
