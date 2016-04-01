import React, {Component} from 'react';

export default class Box extends Component {
  getStyleValue(name) {
    return this.refs && this.refs.box && parseFloat(this.refs.box.style[name]) || 0;
  }

  get x() { return this.getStyleValue('left'); }
  get y() { return this.getStyleValue('top'); }
  get width() { return this.getStyleValue('width'); }
  get height() { return this.getStyleValue('height'); }

  setStyleValue(name, x) {
    if (this.refs && this.refs.box) this.refs.box.style[name] = `${x}px`;
  }

  set x(x) { this.setStyleValue('left', x); }
  set y(y) { this.setStyleValue('top', y); }
  set width(width) { this.setStyleValue('width', width); }
  set height(height) { this.setStyleValue('height', height); }

  render() {
    return (
      <div ref="box" style={this.props.style}></div>
    );
  }
}
