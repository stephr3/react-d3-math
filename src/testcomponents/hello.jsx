import React from 'react';
import LineChart from './line-chart';
const date1 = new Date(2014, 0, 15);
const date2 = new Date(2014, 4, 20);
const date3 = new Date(2014, 8, 3);

const date4 = new Date(2015, 1, 14);
const date5 = new Date(2015, 5, 2);
const date6 = new Date(2015, 9, 3);

const datasetA = [[date1, 3], [date2, 11], [date3, 7]];
const datasetB = [[date4, 8], [date5, 4], [date6, 6]];
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
      <LineChart {...this.state} {...styles} />
      <div className="controls">
        <button className="btn toggle" onClick={() => this.toggleData()}>
          Toggle Data
        </button>
      </div>
      </div>)
  }
}
