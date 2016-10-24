import React from 'react';
import d3 from 'd3';
import XYAxis from './x-y-axis';
import DataCircles from './data-circles';
import DataLine from './data-line';

const xMin = (data) => d3.min(data, (d) => d[0]);
const xMax = (data) => d3.max(data, (d) => d[0]);

const yMax = (data) => d3.max(data, (d) => d[1]);

const xScale = (props) => {
  return d3.time.scale()
    .domain([xMin(props.data), xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, 11])
    .range([props.height - props.padding, props.padding]);
};

export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (<svg width={props.width} height={props.height}>
    <DataCircles {...props} {...scales} />
    <DataLine {...props} {...scales} />
    <XYAxis {...props} {...scales} />
    </svg>)
}
