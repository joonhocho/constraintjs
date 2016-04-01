import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Constraint, {LimitConstraint} from './constraint';
import ConstraintContainer from './constraintContainer';
import Box from './box';

class App extends Component {
  state = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    const {message, pic, balloon1, balloon2, timestamp, date} = this.refs;

    pic.width = 32;
    pic.height = 32;

    timestamp.width = 60;
    timestamp.height = 20;

    date.width = 140;
    date.height = 24;

    balloon1.width = 300;
    balloon1.height = 80;

    balloon2.width = 200;
    balloon2.height = 120;

    this.container = new ConstraintContainer([
      new Constraint(
        message, 'x',
        [[timestamp, 'x']],
        x => x
      ),
      new Constraint(
        message, 'y',
        [[date, 'y']],
        x => x
      ),
      new Constraint(
        message, 'width',
        [[timestamp, 'x'], [pic, 'right']],
        (timestampX, picRight) => picRight - timestampX
      ),
      new Constraint(
        message, 'height',
        [[date, 'y'], [pic, 'bottom']],
        (dateY, picBottom) => picBottom - dateY
      ),
      new Constraint(
        pic, 'x',
        [[pic, 'width'], [this, 'width'], 12],
        (picWidth, winWidth, margin) => winWidth - margin - picWidth
      ),
      new Constraint(
        pic, 'y',
        [[pic, 'height'], [this, 'height'], 20],
        (picHeight, winHeight, margin) => winHeight - margin - picHeight
      ),
      new Constraint(
        balloon1, 'x',
        [[timestamp, 'right'], 8],
        (timestampRight, margin) => timestampRight + margin
      ),
      new Constraint(
        balloon1, 'width',
        [[balloon1, 'x'], [pic, 'x'], 8],
        (ballon1X, picX, margin) => picX - margin - ballon1X
      ),
      new Constraint(
        balloon1, 'y',
        [[pic, 'bottom'], [balloon1, 'height']],
        (picBottom, balloon1Height) => picBottom - balloon1Height
      ),
      new Constraint(
        timestamp, 'x',
        [0, 12],
        (winX, margin) => winX + margin
      ),
      new Constraint(
        timestamp, 'y',
        [[pic, 'bottom'], [timestamp, 'height']],
        (picBottom, height) => picBottom - height
      ),
      new Constraint(
        date, 'x',
        [[this, 'width'], [date, 'width']],
        (winWidth, dateWidth) => (winWidth - dateWidth) / 2
      ),
      new Constraint(
        date, 'y',
        [[balloon1, 'y'], [date, 'height'], 8],
        (balloon1Y, dateHeight, margin) => balloon1Y - margin - dateHeight
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
        <Box ref="message" style={{backgroundColor: '#ccc'}} />
        <Box ref="pic" style={{backgroundColor: '#eee'}} />
        <Box ref="balloon1" style={{backgroundColor: '#eee'}} />
        <Box ref="timestamp" style={{backgroundColor: '#eee'}} />
        <Box ref="balloon2" style={{backgroundColor: '#eee'}} />
        <Box ref="date" style={{backgroundColor: '#eee'}} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
