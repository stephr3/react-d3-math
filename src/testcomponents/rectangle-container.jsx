import React from 'react';
import Rectangle from './rectangle'

export default class RectangleContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor() {
    var color = this.state.color === "red" ? "steelblue" : "red";
    this.setState({ color: color});
    console.log(this.state.color)
  }
  render() {
    return (<div>
      <Rectangle color={this.state.color}/>
      <div className="controls">
        <button className="btn randomize" onClick={() => this.changeColor()}>
          Change Color
        </button>
      </div>
    </div>)
  }
}
