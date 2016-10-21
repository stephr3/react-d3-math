import React from 'react';
import d3 from 'd3';

export default class Rectangle extends React.Component{

  componentDidMount() {
    this.colorRect();
  }

  componentDidUpdate() {
    this.colorRect();
  }

  colorRect() {
    console.log(this.props.color);
    var node = this.refs.rect;
    var rect = d3.select('rect').style('fill', this.props.color);
    d3.select(node).call(rect);
  }
  render() {
    return (<div><svg refs="rect" className="rect"><rect height="100%" width="100%"/></svg></div>)
  }
}
