componentWillMount() {
  this.renderCircle();
}

renderCircle() {
  var node = this.refs.circle;
  var circle = d3.selectAll('circle').style('fill', 'steelblue').attr('r', 3);
  d3.select(node).call(circle);
}
