import React from 'react';

export default class Chart extends React.Component{
  var a = [1,2,3,4];
  var b = [5,6,7,8];

  toggleData() {
    var data = this.state.data ? a : b;
    this.setState({ data: data});
  }

  render() {
    return <div>
    <h1>This is my test chart!</h1>
    <LineGraph {...this.state} {...styles} />
    <div className="controls">
      <button className="btn toggle" onClick={() => this.toggleData()}>
        Toggle Year
      </button>
    </div>
  </div>
  }
}
