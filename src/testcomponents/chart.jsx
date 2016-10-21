import React from 'react';
import LineGraph from './line-graph';

const a = [1,2,3,4];
const b = [5,3,2,7];

const styles = {
  width: 500,
  height: 300,
  padding: 30
};
export default class TestChart extends React.Component{

  constructor(props) {
    super(props);
    this.state = { data: a };
  }

  toggleData() {
    var data = this.state.data === a ? b : a;
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
