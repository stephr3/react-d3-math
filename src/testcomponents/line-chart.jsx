import React from 'react';
import d3 from 'd3';
import XYAxis from './x-y-axis';

const mindate = new Date(2012, 0, 1);
const maxdate = new Date(2012, 0, 31);

const xScale = (props) => {
  return d3.time.scale()
    .domain([mindate, maxdate])
    .range([props.padding, props.width - props.padding * 2]);
};

const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, d3.max(props.datasetTotal)])
    .range([props.height - props.padding, props.padding]);
};

export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (<svg width={props.width} height={props.height}>
    <XYAxis {...props} {...scales} />
    </svg>)
}
