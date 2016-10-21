import './main.css';
import React    from 'react';
import ReactDOM from 'react-dom';
import Chart    from './components/chart.jsx';
import Hello from './testcomponents/hello.jsx';
import Rectangle from './testcomponents/rectangle.jsx';
import TestChart from './testcomponents/chart.jsx';
import RectangleContainer from './testcomponents/rectangle-container.jsx';

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
ReactDOM.render(<Chart/>, mountingPoint);

const helloMountingPoint = document.createElement('div');
helloMountingPoint.className = 'hello-app';
document.body.appendChild(helloMountingPoint);
ReactDOM.render(<Hello/>, helloMountingPoint);

const testMountingPoint = document.createElement('div');
testMountingPoint.className = 'test-app';
document.body.appendChild(testMountingPoint);
ReactDOM.render(<RectangleContainer/>, testMountingPoint);

const testChartMountingPoint = document.createElement('div');
testChartMountingPoint.className = 'test-chart';
document.body.appendChild(testChartMountingPoint);
ReactDOM.render(<TestChart/>, testChartMountingPoint);
