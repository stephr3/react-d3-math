import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords),
      cy: props.yScale(coords),
      r: 2,
      key: index
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.numbers.map(renderCircles(props)) }</g>
}
