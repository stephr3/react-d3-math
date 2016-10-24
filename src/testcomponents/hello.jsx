import React from 'react';
import LineChart from './line-chart';

const datasetA = {year: 2014, numbers:[1,2,3,4] };
const datasetB = {year: 2015, numbers: [5,3,2,7]};
const datasetTotal = datasetA.numbers.concat(datasetB.numbers);
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
      <h1>{this.state.data.year}</h1>
      <LineChart {...this.state} {...styles} datasetTotal={datasetTotal} year={this.state.data.year}/>
      <div className="controls">
        <button className="btn toggle" onClick={() => this.toggleData()}>
          Toggle Data
        </button>
      </div>
      </div>)
  }
}
