import './main.css';
import React    from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.jsx';

const mountingPoint = document.createElement('div');
mountingPoint.className = 'hello-app';
document.body.appendChild(mountingPoint);
ReactDOM.render(<Chart/>, mountingPoint);
