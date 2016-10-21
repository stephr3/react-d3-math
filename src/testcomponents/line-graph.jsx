import React from 'react';
import d3 from 'd3';

export default class Rectangle extends React.Component{
  componentWillMount() {
    this.renderCircle();
  }

  renderCircle() {
    var node = this.refs.circle;
    var circle = d3.selectAll('circle').style('fill', 'steelblue').attr('r', 3);
    d3.select(node).call(circle);
  }
  render() {
    return (<g ref="circle" className="circle"></g>)
  }
}
