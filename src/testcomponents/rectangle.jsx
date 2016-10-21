import React from 'react';
import d3 from 'd3';

export default class Rectangle extends React.Component{
  componentDidMount() {
    this.colorRect();
  }

  colorRect() {
    var node = this.refs.rect;
    var rect = d3.select('rect').style('fill', 'steelblue');
    d3.select(node).call(rect);
  }
  render() {
    return (<div><svg refs="rect" className="rect"><rect height="15" width="15"/></svg></div>)
  }
}
