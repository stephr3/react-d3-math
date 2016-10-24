import React from 'react';
import LineChart from './line-chart';

const datasetA = [1,2,3,4];
const datasetB = [5,3,2,7];
const styles = {
  width: 500,
  height: 300,
  padding: 30
};

export default class Hello extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: datasetA };
  }

  toggleData() {
    var data = this.state.data === datasetA ? datasetB : datasetA;
    this.setState({ data: data });
    console.log('Toggle: ' + this.state.data);
  }

  render() {
    return (<div>
      <h1>{this.state.data}</h1>
      <LineChart {...this.state} {...styles}/>
      <div className="controls">
        <button className="btn toggle" onClick={() => this.toggleData()}>
          Toggle Data
        </button>
      </div>
      </div>)
  }
}
